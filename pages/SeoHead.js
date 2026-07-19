import Head from "next/head";
import { useRouter } from "next/router";

const authorName = "Remal Mahmud";
const authorWebsite = "https://www.mahmudremal.com";
const authorGithub = "https://github.com/mahmudremal";
const authorLinkedIn = "https://linkedin.com/in/mahmud-remal/";
const baseUrl = "https://www.mahmudremal.com";
const phoneNumber = "+8801814118328";

// Multi-language SEO content
const seoContent = {
  en: {
    title: `${authorName} - Senior Backend Engineer | AWS Cloud Engineer & Full-Stack Developer`,
    description: `Professional resume for ${authorName}, Senior Backend Engineer with 10+ years of experience in AWS cloud architecture, full-stack development, UI/UX engineering, and team leadership. Expert in PHP, Node.js, Angular, TypeScript, and serverless technologies.`,
    keywords:
      "Remal Mahmud, Frontend Engineering, AWS Cloud Engineer, Full-Stack Developer, PHP Developer, Node.js, Angular, TypeScript, UI/UX Design, Cloud Architecture, VP Engineering, Iloilo Philippines",
    ogTitle: `${authorName} - Senior Backend Engineer | AWS Cloud Engineer`,
    ogDescription:
      "Senior Backend Engineer with 10+ years of experience in AWS cloud architecture, full-stack development, and team leadership. Expert in PHP, Node.js, Angular, and serverless technologies.",
    twitterTitle: `${authorName} - Senior Backend Engineer`,
    twitterDescription:
      "Senior Backend Engineer with 10+ years of experience in AWS cloud architecture, full-stack development, and team leadership.",
    locale: "en_US",
    lang: "en",
  },
  de: {
    title: `${authorName} - VP für Frontend-Engineering | AWS Cloud Engineer & Full-Stack-Entwickler`,
    description: `Professioneller Lebenslauf für ${authorName}, VP für Frontend-Engineering mit über 10 Jahren Erfahrung in AWS Cloud-Architektur, Full-Stack-Entwicklung, UI/UX-Engineering und Teamführung. Experte in PHP, Node.js, Angular, TypeScript und Serverless-Technologien.`,
    keywords:
      "Remal Mahmud, Frontend Engineering, AWS Cloud Engineer, Full-Stack-Entwickler, PHP-Entwickler, Node.js, Angular, TypeScript, UI/UX-Design, Cloud-Architektur, VP Engineering, Iloilo Philippinen",
    ogTitle: `${authorName} - VP für Frontend-Engineering | AWS Cloud Engineer`,
    ogDescription:
      "VP für Frontend-Engineering mit über 10 Jahren Erfahrung in AWS Cloud-Architektur, Full-Stack-Entwicklung und Teamführung. Experte in PHP, Node.js, Angular und Serverless-Technologien.",
    twitterTitle: `${authorName} - VP für Frontend-Engineering`,
    twitterDescription:
      "VP für Frontend-Engineering mit über 10 Jahren Erfahrung in AWS Cloud-Architektur, Full-Stack-Entwicklung und Teamführung.",
    locale: "de_DE",
    lang: "de",
  },
  fr: {
    title: `${authorName} - VP Ingénierie Frontend | Ingénieur Cloud AWS & Développeur Full-Stack`,
    description: `CV professionnel de ${authorName}, VP Ingénierie Frontend avec plus de 10 ans d'expérience en architecture cloud AWS, développement full-stack, ingénierie UI/UX et leadership d'équipe. Expert en PHP, Node.js, Angular, TypeScript et technologies serverless.`,
    keywords:
      "Remal Mahmud, Ingénierie Frontend, Ingénieur Cloud AWS, Développeur Full-Stack, Développeur PHP, Node.js, Angular, TypeScript, Design UI/UX, Architecture Cloud, VP Engineering, Iloilo Philippines",
    ogTitle: `${authorName} - VP Ingénierie Frontend | Ingénieur Cloud AWS`,
    ogDescription:
      "VP Ingénierie Frontend avec plus de 10 ans d'expérience en architecture cloud AWS, développement full-stack et leadership d'équipe. Expert en PHP, Node.js, Angular et technologies serverless.",
    twitterTitle: `${authorName} - VP Ingénierie Frontend`,
    twitterDescription:
      "VP Ingénierie Frontend avec plus de 10 ans d'expérience en architecture cloud AWS, développement full-stack et leadership d'équipe.",
    locale: "fr_FR",
    lang: "fr",
  },
  ar: {
    title: `${authorName} - نائب رئيس هندسة الواجهة الأمامية | مهندس سحابة AWS ومطور شامل`,
    description: `سيرة ذاتية احترافية لـ ${authorName}, نائب رئيس هندسة الواجهة الأمامية مع أكثر من 10 سنوات من الخبرة في هندسة السحابة AWS وتطوير الويب وتصميم واجهة المستخدم وتصميم تجربة المستخدم وقيادة الفرق. خبير في PHP و Node.js و Angular و TypeScript وتقنيات الخوادم`,
    keywords:
      "رمال محمود, هندسة الواجهة الأمامية, مهندس سحابة AWS, مطور شامل, مطور PHP, Node.js, Angular, TypeScript, تصميم واجهة المستخدم, تصميم تجربة المستخدم, هندسة السحابة, نائب رئيس الهندسة, إيلويلو الفلبين",
    ogTitle: `${authorName} - نائب رئيس هندسة الواجهة الأمامية | مهندس سحابة AWS`,
    ogDescription:
      "نائب رئيس هندسة الواجهة الأمامية مع أكثر من 10 سنوات من الخبرة في هندسة السحابة AWS وتطوير الويب وتصميم واجهة المستخدم وتصميم تجربة المستخدم وقيادة الفرق. خبير في PHP و Node.js و Angular و TypeScript وتقنيات الخوادم",
    twitterTitle: `${authorName} - نائب رئيس هندسة الواجهة الأمامية`,
    twitterDescription:
      "نائب رئيس هندسة الواجهة الأمامية مع أكثر من 10 سنوات من الخبرة في هندسة السحابة AWS وتطوير الويب وتصميم واجهة المستخدم وتصميم تجربة المستخدم وقيادة الفرق. خبير في PHP و Node.js و Angular و TypeScript وتقنيات الخوادم",
    locale: "ar_SA",
    lang: "ar",
  },
};

// Person Schema Data (language-independent structured data)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Remal Mahmud",
  jobTitle:
    "Senior Backend Engineer | AWS Cloud Engineer & Full-Stack Developer",
  description:
    "AWS Cloud Engineer and Full-Stack Developer with 10+ years of experience in UI/UX engineering, backend development, cloud architecture, and database design.",
  url: baseUrl,
  telephone: phoneNumber,
  sameAs: [authorLinkedIn, authorGithub, "https://wa.me/8801814118328"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Iloilo City",
    addressRegion: "Philippines",
    addressCountry: "PH",
  },
  knowsAbout: [
    "Frontend Development",
    "Backend Development",
    "Cloud Architecture",
    "AWS",
    "PHP",
    "Node.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Laravel",
    "MySQL",
    "MongoDB",
    "UI/UX Design",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Zend Certified PHP Engineer",
  },
};

const SeoHead = () => {
  const { locale = "en", locales } = useRouter();
  const content = seoContent[locale] || seoContent.en;

  const canonicalUrl = locale === "en" ? baseUrl : `${baseUrl}/${locale}`;

  const socialImage = baseUrl + "/images/og-banner-mahmudremal.png"; // "https://placehold.co/1200x630/C6D4B6/2D3D22?text=RAMON+ALIVIO%0AVP+of+Frontend+Engineering&font=raleway";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content={content.lang} />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
      <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
      <meta name="author" content={authorName} />
      <meta name="robots" content="index, follow" />

      <link
        rel="me"
        type="text/html"
        href={authorWebsite}
        title={`Developed by Remal Mahmud`}
      />
      <meta name="developer" content="Remal Mahmud" />
      <meta name="developer-github" content="https://github.com/mahmudremal" />

      <meta property="og:title" content={content.ogTitle} />
      <meta property="og:description" content={content.ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="profile" />
      <meta property="profile:first_name" content="Ramon" />
      <meta property="profile:last_name" content="Alivio" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${authorName} - Professional Resume`}
      />
      <meta
        property="og:site_name"
        content={`${authorName}'s Professional Resume`}
      />
      <meta property="og:locale" content={content.locale} />
      {locales &&
        locales
          .filter((l) => l !== locale)
          .map((l) => (
            <meta
              key={l}
              property="og:locale:alternate"
              content={seoContent[l]?.locale || "en_US"}
            />
          ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={content.twitterTitle} />
      <meta name="twitter:description" content={content.twitterDescription} />
      <meta name="twitter:image" content={socialImage} />
      <meta
        name="twitter:image:alt"
        content={`${authorName} - Professional Resume`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  );
};

export default SeoHead;
