import { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import SeoHead from "../../components/SeoHead";
import AnalyticsTracker from "../../components/analytics";
import Icons from "../../components/icons";
import portfolioData from "../../data/portfolios.json";

import { useRouter } from "next/router";

export default function PortfolioList() {
  const { locale = "en" } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const getLoc = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    return val[locale] || val.en || Object.values(val)[0] || "";
  };

  // Extract unique tech tags
  const techTags = useMemo(() => {
    const set = new Set();
    portfolioData.forEach((p) => {
      p.techUsed?.forEach((t) => set.add(t));
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filter portfolios based on search query and tech tag filter
  const filteredPortfolios = useMemo(() => {
    return portfolioData.filter((item) => {
      const matchesTech =
        selectedTech === "All" || item.techUsed?.includes(selectedTech);
      const q = searchQuery.toLowerCase().trim();

      const titleStr = getLoc(item.title);
      const excerptStr = getLoc(item.excerpt);
      const appTypeStr = getLoc(item.applicationType);

      const matchesSearch =
        !q ||
        titleStr.toLowerCase().includes(q) ||
        excerptStr.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        appTypeStr.toLowerCase().includes(q) ||
        item.techUsed?.some((t) => t.toLowerCase().includes(q));

      return matchesTech && matchesSearch;
    });
  }, [searchQuery, selectedTech, locale]);

  return (
    <>
      <SeoHead />
      <AnalyticsTracker />
      <Icons />

      <div className="min-h-screen bg-[#C6D4B6] flex items-center justify-center p-4 md:p-8 font-sans antialiased">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-[1px_-1px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="bg-[#2D3D22] text-white min-h-[800px] p-6 sm:p-10">
            {/* Header & Back Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FFFFFF29] mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FEFD7F] hover:underline transition-all group"
              >
                <svg
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back to Resume</span>
              </Link>

              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#FEFD7F] animate-pulse"></span>
                <span>Remal Mahmud &bull; Senior Backend & AWS Cloud Engineer</span>
              </div>
            </div>

            {/* Title Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide">
                PORTFOLIO & PROJECTS
              </h1>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-2xl">
                Explore custom WordPress plugins, serverless AWS cloud architectures, payment gateway integrations, and enterprise applications.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-[#25331b] border border-[#FFFFFF29] rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Input */}
              <div className="relative flex-1">
                <svg
                  className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects, technologies, clients..."
                  className="w-full bg-[#1e2a16] text-white placeholder-white/50 pl-10 pr-4 py-2 rounded-xl border border-[#FFFFFF29] focus:outline-none focus:border-[#FEFD7F] text-xs transition-colors"
                />
              </div>

              {/* Filter Tags */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {techTags.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`whitespace-nowrap px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedTech === tech
                        ? "bg-[#FEFD7F] text-[#2D3D22]"
                        : "bg-[#1e2a16] text-white/80 hover:text-white border border-[#FFFFFF29]"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
            {filteredPortfolios.length === 0 ? (
              <div className="text-center py-16 bg-[#25331b] border border-[#FFFFFF29] rounded-2xl">
                <p className="text-white/70 text-xs">
                  No portfolio projects match your filter query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTech("All");
                  }}
                  className="mt-4 px-4 py-2 bg-[#FEFD7F] text-[#2D3D22] text-xs font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPortfolios.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/portfolios/${item.slug}`}
                    className="group bg-[#25331b] hover:bg-[#1e2a16] border border-[#FFFFFF29] hover:border-[#FEFD7F]/50 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Category Badge & Year */}
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="text-[#FEFD7F] font-semibold text-[11px] uppercase tracking-wider">
                          {getLoc(item.applicationType)}
                        </span>
                        <span className="text-white/60 font-mono text-xs">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-base font-bold text-white group-hover:text-[#FEFD7F] transition-colors line-clamp-2 mb-2">
                        {getLoc(item.title)}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs text-white/80 leading-relaxed line-clamp-3 mb-4">
                        {getLoc(item.excerpt)}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.techUsed?.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] bg-[#1a2413] text-white/90 border border-[#FFFFFF1A] px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-3 border-t border-[#FFFFFF29] flex items-center justify-between text-xs text-white/70">
                      <span className="truncate max-w-[150px]">{item.company}</span>
                      <span className="inline-flex items-center gap-1 text-[#FEFD7F] font-semibold group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
