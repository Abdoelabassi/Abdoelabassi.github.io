import type { MarkdownInstance } from "astro";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export type FrontMatterImage = {
  src?: string;
  alt?: string;
};

export type FrontMatter = {
  layout?: string;
  title?: string;
  description?: string;
  date: string;
  draft: boolean;
  category?: string;
};

export interface AllGlobal extends Array<AllGlobal> {
  frontmatter: FrontMatter;
  file: string;
  url: string;
  rawContent: string;
  compiledContent: string;
  getHeadings: () => string[];
  Content?: (
    isAstroComponentFactory: boolean,
    moduleId: any,
    propagation: any
  ) => any;
  default?: () => any;
}

export type postFilterOptions = {
  filterDrafs: boolean;
  fitlerFuturePosts: boolean;
  sortByDate?: boolean;
  limit?: number;
};

export const formatBlogPosts = (
  // @ts-ignore
  posts: MarkdownInstance<Record<string, any>>[],
  options?: postFilterOptions
) => {
  const filteredPosts = posts.reduce(
    (acc: MarkdownInstance<Record<string, any>>[], post) => {
      const { date, draft } = post.frontmatter;

      if (options?.filterDrafs && draft) return acc;

      if (options?.fitlerFuturePosts && new Date(date) > new Date()) return acc;

      acc.push(post);

      return acc;
    },
    []
  );

  if (options?.sortByDate) {
    filteredPosts.sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });
  } else {
    filteredPosts.sort((a, b) => {
      return a.file.localeCompare(b.file);
    });
  }
  if (typeof options?.limit === "number") {
    return filteredPosts.slice(0, options.limit);
  }
  return filteredPosts;
};
