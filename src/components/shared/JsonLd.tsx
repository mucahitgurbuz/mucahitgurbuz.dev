import { SITE_CONFIG, SOCIAL_LINKS, EXPERIENCE } from "@/lib/constants";

// Person schema for the entire site
export function PersonJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.avatar,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    jobTitle: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
    },
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.googleScholar,
      "https://aidayazilim.com",
      "https://apps.apple.com/us/app/hittheroad-ai-trip-planner/id6759530743",
      "https://play.google.com/store/apps/details?id=com.mucahitgurbuz.hittheroad",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Babbel Labs",
        url: "https://www.babbel.com",
      },
      {
        "@type": "Organization",
        name: "Aida Yazılım",
        url: "https://aidayazilim.com",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Middle East Technical University",
      url: "https://www.metu.edu.tr",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Software Engineering",
      "Frontend Development",
      "AI Tools",
      "Web Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Website schema
export function WebsiteJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Profile page schema
export function ProfilePageJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      alternateName: "Mucahit Gurbuz",
      identifier: "mucahitgurbuz",
      image: SITE_CONFIG.avatar,
      description: SITE_CONFIG.description,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Breadcrumb schema for internal pages
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
