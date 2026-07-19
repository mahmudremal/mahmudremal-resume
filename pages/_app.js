import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    document.documentElement.lang = router.locale || "en";
  }, [router.locale]);
  return <Component {...pageProps} />;
}
