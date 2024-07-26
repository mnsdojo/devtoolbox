"use client";
import React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(() => import("@/components/MonacoEditor"), {
  ssr: false,
});
import { marked } from "marked";
import DOMPurify from "dompurify";

function Page() {
  const [markdown, setMarkdown] = useState(
    "# Hello, Markdown!\n\nThis is a **bold** text and this is *italic*."
  );
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function convertToHtml() {
      const markedHtml = await marked(markdown);
      const convertedHtml = DOMPurify.sanitize(markedHtml);
      setHtml(convertedHtml);
    }
    convertToHtml();
  }, [markdown]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Markdown to HTML Converter</h1>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Markdown Input</h2>
          <div className="flex-grow">
            <MonacoEditor
              language="markdown"
              value={markdown}
              onChange={(value) => setMarkdown(value || "")}
              className="h-full"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">HTML Preview</h2>
          <div className="flex-grow border border-gray-300 p-4 overflow-auto bg-white">
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-2">Raw HTML</h2>
        <MonacoEditor
          language="html"
          value={html}
          onChange={() => {}}
          readOnly={true}
          className="h-48"
        />
      </footer>
    </div>
  );
}

export default Page;
