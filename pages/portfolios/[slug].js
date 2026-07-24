import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SeoHead from "../../components/SeoHead";
import AnalyticsTracker from "../../components/analytics";
import Icons from "../../components/icons";
import portfolioData from "../../data/portfolios.json";

export default function SinglePortfolio({ project, prevProject, nextProject }) {
  const router = useRouter();
  const locale = router.locale || "en";

  const getLoc = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    return val[locale] || val.en || Object.values(val)[0] || "";
  };

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-[#C6D4B6] flex items-center justify-center text-[#2D3D22] font-semibold">
        Loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#C6D4B6] flex items-center justify-center p-4">
        <div className="bg-[#2D3D22] text-white p-8 rounded-3xl text-center max-w-md">
          <h1 className="text-xl font-bold mb-3">Portfolio Project Not Found</h1>
          <p className="text-xs text-white/80 mb-6">The requested portfolio project could not be found.</p>
          <Link
            href="/portfolios"
            className="px-4 py-2 bg-[#FEFD7F] text-[#2D3D22] font-bold text-xs rounded-xl inline-block"
          >
            Back to Portfolios
          </Link>
        </div>
      </div>
    );
  }

  const title = getLoc(project.title);
  const excerpt = getLoc(project.excerpt);
  const appType = getLoc(project.applicationType);
  const serviceType = getLoc(project.serviceType);
  const descriptionHtml = getLoc(project.description);

  return (
    <>
      <Head>
        <title>{title} | Remal Mahmud Portfolio</title>
        <meta name="description" content={excerpt} />
      </Head>
      <AnalyticsTracker />
      <Icons />

      <div className="min-h-screen bg-[#C6D4B6] flex items-center justify-center p-4 md:p-8 font-sans antialiased">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[1px_-1px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="bg-[#2D3D22] text-white p-6 sm:p-10 min-h-[700px]">
            {/* Header Navigation */}
            <div className="flex items-center justify-between pb-6 border-b border-[#FFFFFF29] mb-8">
              <Link
                href="/portfolios"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FEFD7F] hover:underline transition-all group"
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
                <span>Back to Portfolios</span>
              </Link>

              <Link
                href="/"
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                View Full Resume &rarr;
              </Link>
            </div>

            {/* Title & Metadata Header */}
            <div className="mb-8 border-b border-[#FFFFFF29] pb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[#FEFD7F] font-semibold text-xs px-3 py-0.5 bg-[#1e2a16] border border-[#FFFFFF29] rounded-full uppercase tracking-wider">
                  {appType}
                </span>
                <span className="text-white/80 text-xs px-3 py-0.5 bg-[#1e2a16] border border-[#FFFFFF29] rounded-full">
                  {serviceType}
                </span>
                <span className="text-white/60 font-mono text-xs ml-auto">
                  {project.year}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide mb-3">
                {title}
              </h1>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl">
                {excerpt}
              </p>
            </div>

            {/* Content & Specs Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {/* HTML Description Content */}
              <div className="lg:col-span-2 bg-[#25331b] border border-[#FFFFFF29] rounded-2xl p-6 sm:p-8">
                <div
                  className="prose prose-invert max-w-none 
                  prose-h3:text-lg prose-h3:font-bold prose-h3:text-white prose-h3:border-b prose-h3:border-[#FFFFFF29] prose-h3:pb-2 prose-h3:mt-0
                  prose-h4:text-sm prose-h4:font-bold prose-h4:text-[#FEFD7F] prose-h4:mt-5 prose-h4:mb-2
                  prose-p:text-xs prose-p:text-white/90 prose-p:leading-relaxed
                  prose-ul:text-xs prose-ul:text-white/90 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-5
                  prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </div>

              {/* Sidebar Metadata */}
              <div className="space-y-4">
                <div className="bg-[#25331b] border border-[#FFFFFF29] rounded-2xl p-5 space-y-4 text-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FEFD7F] border-b border-[#FFFFFF29] pb-2">
                    Project Details
                  </h3>

                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Client</div>
                    <div className="font-semibold text-white mt-0.5">{project.client}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Company</div>
                    <div className="font-semibold text-white mt-0.5">{project.company}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Country</div>
                    <div className="font-semibold text-white mt-0.5">{project.country}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Year</div>
                    <div className="font-semibold text-white mt-0.5">{project.year}</div>
                  </div>

                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Service Type</div>
                    <div className="font-semibold text-white mt-0.5">{serviceType}</div>
                  </div>

                  <div className="pt-2 border-t border-[#FFFFFF29]">
                    <div className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techUsed?.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] bg-[#1e2a16] text-[#FEFD7F] border border-[#FFFFFF29] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Nav Prev/Next */}
            <div className="border-t border-[#FFFFFF29] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevProject ? (
                <Link
                  href={`/portfolios/${prevProject.slug}`}
                  className="w-full sm:w-auto bg-[#25331b] hover:bg-[#1e2a16] border border-[#FFFFFF29] rounded-xl px-4 py-2.5 text-xs text-white/80 hover:text-white transition-all flex items-center gap-2"
                >
                  <span>&larr;</span>
                  <div className="text-left">
                    <div className="text-[9px] text-white/50 uppercase">Previous</div>
                    <div className="font-semibold text-white truncate max-w-[160px]">{getLoc(prevProject.title)}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/portfolios/${nextProject.slug}`}
                  className="w-full sm:w-auto bg-[#25331b] hover:bg-[#1e2a16] border border-[#FFFFFF29] rounded-xl px-4 py-2.5 text-xs text-white/80 hover:text-white transition-all flex items-center justify-end gap-2"
                >
                  <div className="text-right">
                    <div className="text-[9px] text-white/50 uppercase">Next</div>
                    <div className="font-semibold text-white truncate max-w-[160px]">{getLoc(nextProject.title)}</div>
                  </div>
                  <span>&rarr;</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale) => {
    portfolioData.forEach((p) => {
      paths.push({
        params: { slug: p.slug },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const index = portfolioData.findIndex((p) => p.slug === params.slug);
  const project = portfolioData[index] || null;
  const prevProject = index > 0 ? portfolioData[index - 1] : null;
  const nextProject = index < portfolioData.length - 1 ? portfolioData[index + 1] : null;

  return {
    props: {
      project,
      prevProject,
      nextProject,
    },
  };
}
