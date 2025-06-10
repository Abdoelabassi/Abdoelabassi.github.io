import siteData from "../data/siteData.json";

export default function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.thumbnail,
      author: {
        "@type": "Person",
        name: siteData.author.name,
        url: siteData.author.url,
      },
      datePublished: post.uploadDate,
      url: url,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    };
  }
}
