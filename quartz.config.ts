import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",

        cdnCaching: true,

        typography: {

        header: "Schibsted Grotesk",

        body: "Source Sans Pro",

        code: "IBM Plex Mono",

        },
      colors: {
        lightMode: {
          light: "#000000",       // Black background
          lightgray: "#1a1a1a",
          gray: "#444444",
          darkgray: "#cccccc",
          dark: "#ffffff",       // White text
          secondary: "#ff4d4d",  // Light Red
          tertiary: "#ff0000",   // Bright Red
          highlight: "rgba(255, 77, 77, 0.15)",
          textHighlight: "#ff000088",
        },
        darkMode: {
          light: "#000000",       // Black background
          lightgray: "#1a1a1a",
          gray: "#444444",
          darkgray: "#cccccc",
          dark: "#ffffff",       // White text
          secondary: "#ff4d4d",  // Light Red
          tertiary: "#ff0000",   // Bright Red
          highlight: "rgba(255, 77, 77, 0.15)",
          textHighlight: "#ff000088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
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
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
