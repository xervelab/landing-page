import { useEffect } from "react";

type PageSeoOptions = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  breadcrumbJsonLd?: Record<string, unknown>;
  structuredData?: Record<string, unknown>[];
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    if (attrs.name) {
      element.setAttribute("name", attrs.name);
    }
    if (attrs.property) {
      element.setAttribute("property", attrs.property);
    }
    document.head.appendChild(element);
  }

  if (attrs.content) {
    element.setAttribute("content", attrs.content);
  }
}

function upsertCanonical(url: string) {
  let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export function usePageSeo({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogUrl,
  twitterTitle,
  twitterDescription,
  breadcrumbJsonLd,
  structuredData,
}: PageSeoOptions) {
  useEffect(() => {
    const previous = {
      title: document.title,
      description: document.head.querySelector("meta[name='description']")?.getAttribute("content") ?? "",
      ogTitle: document.head.querySelector("meta[property='og:title']")?.getAttribute("content") ?? "",
      ogDescription: document.head.querySelector("meta[property='og:description']")?.getAttribute("content") ?? "",
      ogUrl: document.head.querySelector("meta[property='og:url']")?.getAttribute("content") ?? "",
      twitterTitle: document.head.querySelector("meta[name='twitter:title']")?.getAttribute("content") ?? "",
      twitterDescription: document.head.querySelector("meta[name='twitter:description']")?.getAttribute("content") ?? "",
      canonical: document.head.querySelector("link[rel='canonical']")?.getAttribute("href") ?? "",
      breadcrumbScript: document.getElementById("page-breadcrumb-schema")?.textContent ?? "",
      dynamicStructuredDataScripts: Array.from(
        document.querySelectorAll("script[data-page-structured='true']"),
      ).map((script) => script.textContent ?? ""),
    };

    document.title = title;

    upsertMeta("meta[name='description']", {
      name: "description",
      content: description,
    });

    upsertCanonical(canonicalUrl);

    upsertMeta("meta[property='og:title']", {
      property: "og:title",
      content: ogTitle ?? title,
    });

    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content: ogDescription ?? description,
    });

    upsertMeta("meta[property='og:url']", {
      property: "og:url",
      content: ogUrl ?? canonicalUrl,
    });

    upsertMeta("meta[name='twitter:title']", {
      name: "twitter:title",
      content: twitterTitle ?? title,
    });

    upsertMeta("meta[name='twitter:description']", {
      name: "twitter:description",
      content: twitterDescription ?? description,
    });

    if (breadcrumbJsonLd) {
      let script = document.getElementById("page-breadcrumb-schema") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "page-breadcrumb-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(breadcrumbJsonLd);
    }

    const structuredScriptNodes: HTMLScriptElement[] = [];

    if (structuredData?.length) {
      structuredData.forEach((schemaObject) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.pageStructured = "true";
        script.textContent = JSON.stringify(schemaObject);
        document.head.appendChild(script);
        structuredScriptNodes.push(script);
      });
    }

    return () => {
      document.title = previous.title;
      upsertMeta("meta[name='description']", {
        name: "description",
        content: previous.description,
      });
      upsertMeta("meta[property='og:title']", {
        property: "og:title",
        content: previous.ogTitle,
      });
      upsertMeta("meta[property='og:description']", {
        property: "og:description",
        content: previous.ogDescription,
      });
      upsertMeta("meta[property='og:url']", {
        property: "og:url",
        content: previous.ogUrl,
      });
      upsertMeta("meta[name='twitter:title']", {
        name: "twitter:title",
        content: previous.twitterTitle,
      });
      upsertMeta("meta[name='twitter:description']", {
        name: "twitter:description",
        content: previous.twitterDescription,
      });
      upsertCanonical(previous.canonical);

      const script = document.getElementById("page-breadcrumb-schema") as HTMLScriptElement | null;
      if (script) {
        if (previous.breadcrumbScript) {
          script.textContent = previous.breadcrumbScript;
        } else {
          script.remove();
        }
      }

      structuredScriptNodes.forEach((scriptNode) => {
        scriptNode.remove();
      });

      if (previous.dynamicStructuredDataScripts.length > 0) {
        previous.dynamicStructuredDataScripts.forEach((scriptContent) => {
          const script = document.createElement("script");
          script.type = "application/ld+json";
          script.dataset.pageStructured = "true";
          script.textContent = scriptContent;
          document.head.appendChild(script);
        });
      }
    };
  }, [
    title,
    description,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogUrl,
    twitterTitle,
    twitterDescription,
    breadcrumbJsonLd,
    structuredData,
  ]);
}
