"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const Blog = () => {
  const { slug } = useParams(); // ✅ Get slug from URL

  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (!slug) {
      setError("Slug is missing!");
      return;
    }

    console.log(`🔗 Fetching blog from: http://localhost:5002/api/blogs/${slug}`);

    fetch(`http://localhost:5002/api/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then((data) => setBlog(data))
      .catch((err) => setError(err.message));
  }, [slug]);

  useEffect(() => {
    if (!blog) return;

    const processMarkdown = async () => {
      const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: blog.title || "Blog Post" })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
          theme: "github-dark",
          transformers: [
            transformerCopyButton({
              visibility: "always",
              feedbackDuration: 3000,
            }),
          ],
        });

      const html = await processor.process(blog.content);
      setHtmlContent(html.toString());
    };

    processMarkdown();
  }, [blog]);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!blog) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{blog.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {blog.author}</p>
        <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
};

export default Blog;