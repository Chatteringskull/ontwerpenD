import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ontwerpen D",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "nl-NL",
    baseUrl: "chatteringskull.github.io/ontwerpenD",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Signika Negative",
        body: "Exo 2",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#ffffff",       // center — pure white
          lightgray: "#cdd2e8",   // sidebar — noticeably darker blue-gray
          gray: "#8890b0",
          darkgray: "#2e3355",
          dark: "#141728",
          secondary: "#5c60e8",
          tertiary: "#8b8ff5",
          highlight: "#ececfd",
          textHighlight: "#c7d2fe88",
        },
        darkMode: {
          light: "#1c1f3a",       // center card
          lightgray: "#0e1022",   // sidebar — clearly darker than center
          gray: "#5a6090",
          darkgray: "#c8cdf0",
          dark: "#eceffe",
          secondary: "#7c82f5",
          tertiary: "#a5abfc",
          highlight: "#252860",
          textHighlight: "#7c82f588",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config