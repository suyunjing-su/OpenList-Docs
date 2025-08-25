import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme(
  {
    docsDir: "docs",
    logo: "/logo.svg",
    repo: "OpenListTeam/docs",
    // hostname: "https://docs.oplist.org",

    author: {
      name: "The OpenList Projects Contributors",
      url: "https://github.com/OpenListTeam",
    },

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        navbar: navbar.en,
        sidebar: sidebar.en,
        copyright: false,
        footer: 'AGPL-3.0 Licensed | Copyright © 2022-present The OpenList Team',
        displayFooter: true,
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        copyright: false,
        footer: 'AGPL-3.0 Licensed | Copyright © 2022-present The OpenList Team',
        displayFooter: true,
      },
    },
    markdown: {
      spoiler: true,
      imgMark: true,
      imgLazyload: true,
      tabs: true,
      gfm: true,
      tasklist: true,
      include: true,
      mark: true,
      sub: true,
      sup: true,
      flowchart: true,
      mermaid: true,
      echarts: true,
      codeTabs: true,
    },
    plugins: {
      watermark:{
        enabled: false,
      },
      // 搜索从设置转移到主题
      // FIXME: update algolia configuration <https://docsearch.algolia.com/apply/>
      docsearch:{
        appId: "ECAR405NMH",
        apiKey: "ef408b6afab61e0362a93af95ad18150",
        indexName: "alist",
      },
      // 目录的自动生成
      catalog: {
        frontmatter: () => ({
          toc: false,
        }),
      },
      components: {
        components: ["ArtPlayer", "BiliBili", "Badge", "VPCard"],
      },
      icon: {
        assets: [
          "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
          "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
          "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
        ]
      },
      comment: {
        provider: "Giscus",
        repo: "OpenListTeam/docs",
        repoId: "R_kgDOO52WYA",
        category: "Giscus Comments",
        categoryId: "DIC_kwDOO52WYM4CrXlN",
      },
      // 临时弹窗
      notice: [
        {
          path: "/",
          title: 'Kind tips',
          content: 'This document is no longer maintained. Please refer to the latest documentation for configuration.',
          actions: [
            {
              text: "Latest Docs",
              link: "https://doc.oplist.org/",
              type: "primary",
            },
          ],
          showOnce: true,
        },
        {
          path: "/zh",
          title: '温馨提示',
          content: '本文档已经不再进行维护，请转移至最新文档作为配置参考。',
          actions: [
            {
              text: "最新文档",
              link: "https://doc.oplist.org/",
              type: "primary",
            },
          ],
          showOnce: true,
        },
      ],
    },
  },
  {
    custom: true,
  }
);
