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
          light:          "#ffffff",  // panel bg — white
          lightgray:      "#dde1f0",  // outer body bg — blue-gray
          gray:           "#8890b0",  // muted text
          darkgray:       "#2e3355",  // body text
          dark:           "#141728",  // headings
          secondary:      "#5058d4",  // links — indigo (your color, not d-floe's blue)
          tertiary:       "#8b8ff5",  // hover
          highlight:      "#eceeff",  // internal link bg
          textHighlight:  "#c7d2fe88",
        },
        darkMode: {
          light:          "#1a1d38",  // panel bg — deep indigo-navy
          lightgray:      "#0c0e1e",  // outer body bg — darker so panels lift
          gray:           "#5a6090",  // muted text
          darkgray:       "#c8cdf0",  // body text
          dark:           "#eceffe",  // headings
          secondary:      "#848af7",  // links — lighter indigo for dark bg
          tertiary:       "#b4b8fc",  // hover — even lighter
          highlight:      "#232660",  // internal link bg
          textHighlight:  "#848af788",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
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