import type { MarkdownInstance } from "astro";

export interface PostFrontmatter {
  title: string;
  tags: string[];
}

export interface Post extends MarkdownInstance<PostFrontmatter> {}
