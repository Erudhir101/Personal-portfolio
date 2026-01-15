// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
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
    const html = await compileMarkdown(context, doc);
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
