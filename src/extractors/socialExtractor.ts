export type Social = { url: string; type: string };

export function normalizeSocial(urls: { url: string; type?: string }[]): Social[] {
  if (!Array.isArray(urls)) return [];
  return urls
    .map((s) => {
      const url = String(s.url || "");
      const host = url.toLowerCase();
      let type = (s.type || "").toLowerCase();
      if (!type) {
        if (host.includes("facebook.com")) type = "facebook";
        else if (host.includes("instagram.com")) type = "instagram";
        else if (host.includes("x.com") || host.includes("twitter.com"))
          type = "x";
        else if (host.includes("linkedin.com")) type = "linkedin";
        else type = "web";
      }
      return { url, type };
    })
    .filter((s) => !!s.url);
}