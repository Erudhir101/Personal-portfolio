// src/lib/rehype-copy-button.js
import { visit } from "unist-util-visit";
function rehypeCopyButton() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "pre") {
        const codeNode = node.children.find((n) => n.tagName === "code" && n.type === "element");
        if (codeNode && parent && typeof index === "number") {
          const rawCode = getTextContent(codeNode);
          const button = {
            type: "element",
            tagName: "button",
            properties: {
              className: ["copy-btn"],
              "data-code": rawCode,
              "aria-label": "Copy to clipboard"
            },
            children: [
              {
                type: "element",
                tagName: "svg",
                properties: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  className: ["lucide", "lucide-clipboard"]
                  // Optional classes
                },
                children: [
                  {
                    type: "element",
                    tagName: "rect",
                    properties: { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" },
                    children: []
                  },
                  {
                    type: "element",
                    tagName: "path",
                    properties: {
                      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    },
                    children: []
                  }
                ]
              }
            ]
          };
          const wrapper = {
            type: "element",
            tagName: "div",
            properties: {
              className: ["code-container"],
              style: "position: relative;"
              // Essential for positioning the button
            },
            children: [button, node]
          };
          parent.children[index] = wrapper;
        }
      }
    });
  };
}
function getTextContent(node) {
  if (node.type === "text") return node.value;
  if (node.children) return node.children.map(getTextContent).join("");
  return "";
}

// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import { z } from "zod";
var posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().optional(),
    created_date: z.coerce.date(),
    author: z.string()
  }),
  transform: async (doc, context) => {
    const html = await compileMarkdown(context, doc, {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        rehypeCopyButton,
        [
          rehypePrettyCode,
          {
            theme: "dracula",
            keepBackground: true
          }
        ]
      ]
    });
    return {
      ...doc,
      id: doc._meta.path,
      html
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
