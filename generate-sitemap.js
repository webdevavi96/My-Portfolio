
import fs from "fs"
import { SitemapStream, streamToPromise } from "sitemap";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

async function generateSitemap() {
  const stream = new SitemapStream({
    hostname: "https://webdevavi96.netlify.app",
  });

  links.forEach((link) => stream.write(link));
  stream.end();

  const data = await streamToPromise(stream);

  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
