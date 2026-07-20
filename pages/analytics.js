"use client";

import { useEffect } from "react";

const AXIOM_INGEST_TOKEN = "xaat-d26c9d06-6236-412c-b8a2-582e301d4f97";

export default function AnalyticsTracker() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const pageKey = `${window.location.pathname}${window.location.search}${window.location.hash}`;

        if (window.__analyticsPageKey === pageKey) return;
        window.__analyticsPageKey = pageKey;

        const trackVisitor = async () => {
            try {
                const res = await fetch("https://ipwho.is/");
                const ipData = await res.json();

                const [navigation] = performance.getEntriesByType("navigation");
                const loadTimeMs = navigation?.duration ?? null;

                const payload = {
                    timestamp: new Date().toISOString(),
                    url: window.location.href,
                    referrer: document.referrer || "direct",
                    city: ipData?.city ?? '',
                    region: ipData?.regionName ?? '',
                    country: ipData?.country_name ?? ipData?.country ?? '',
                    ip: ipData?.ip ?? ipData?.query ?? '',
                    lat: ipData?.lat ?? ipData?.latitude ?? '',
                    lon: ipData?.lon ?? ipData?.longitude ?? '',
                    load_time_ms: loadTimeMs,
                    timezone: ipData?.timezone ?? {}
                };


                await fetch("https://us-east-1.aws.edge.axiom.co/v1/ingest/visitor-logs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${AXIOM_INGEST_TOKEN}`,
                    },
                    body: JSON.stringify([payload]),
                });
            } catch { }
        };

        if (document.readyState === "complete") {
            trackVisitor();
        } else {
            window.addEventListener("load", trackVisitor, { once: true });
            return () => window.removeEventListener("load", trackVisitor);
        }
    }, []);

    return null;
}