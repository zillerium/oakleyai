import fs from "fs";
import path from "path";
import matter from "gray-matter";
import HomePageCom from "@/components/HomePage/HomePageCom";

export default function HomePage() {
  const opinionsDir = path.join(process.cwd(), "src/data/opinions");
  const indexFile = path.join(opinionsDir, "opinions.md");

  console.log("📂 opinionsDir =", opinionsDir);
  console.log("📄 indexFile =", indexFile);

  const indexData = fs.readFileSync(indexFile, "utf-8");
  console.log("📑 opinions.md content:\n", indexData);

  const files = indexData
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.endsWith(".md"));

  console.log("✅ parsed files =", files);

  const opinions = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(opinionsDir, file);
    console.log("🔍 reading file =", filePath);

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    console.log("📄 frontmatter for", slug, "=", data);

    return {
      slug,
      title: data.title || slug,
      author: data.author || "",
      published: data.published || "",
    };
  });

  console.log("🎯 final opinions array =", opinions);

  return <HomePageCom opinions={opinions} />;
}

