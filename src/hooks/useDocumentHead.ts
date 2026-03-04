import { useEffect } from "react";

interface HeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

/**
 * Lightweight hook to update <head> meta tags per-page.
 * No external dependency needed — works with React 19.
 */
export function useDocumentHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
}: HeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // Canonical
    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute("href", canonical);
    }

    // Open Graph
    const setOg = (prop: string, content: string) => {
      const el = document.querySelector(`meta[property="${prop}"]`);
      if (el) el.setAttribute("content", content);
    };

    setOg("og:title", ogTitle || title);
    setOg("og:description", ogDescription || description);
    if (ogUrl) setOg("og:url", ogUrl);

    // Twitter
    const setMeta = (name: string, content: string) => {
      const el = document.querySelector(`meta[name="${name}"]`);
      if (el) el.setAttribute("content", content);
    };

    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl]);
}
