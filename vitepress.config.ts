import { defineConfig } from "vitepress"



export default defineConfig({
  title: "Caveman Notes",
  description: "caveman software notes",
  appearance: "force-dark",

  outDir: "./dist",
  cleanUrls: true,

  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/icon.svg" }],
  ],

  themeConfig: {
    logo: "/icon.svg",
    outline: "deep",

    footer: {
      message: "Released under the GPL 4.0 License by polandlover123 and s-panjwani",
      copyright: "Logo is created by moof",
    },

    nav: [
      {
        text: "Notes",
        link: "/about/introduction",
        activeMatch: "/notes/",
      },
      {
        text: "Beta 0.0.9",
        link: "https://github.com/cavemansoftware/notes",
      },
    ],

    sidebar: [
      {
        text: "About",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/about/introduction" },
          { text: "Contact", link: "/about/contact" },
        ],

      },
      {
        text: "Grade 10",
        collapsed: false,
        items: [
          {
            text: "Hum 10",
            collapsed: true,
            items: [
              { text: "Social Studies 10", link: "/notes/grade10/hum10/ss10" },
              { text: "Language Arts 10", link: "/notes/grade10/hum10/la10" },
            ],
          },
        ]

      },
      {
        text: "Grade 11",
        collapsed: false,
        items: [
          {
            text: "Hum 20",
            collapsed: true,
            items: [

            ]
          },
          {
            text: "Math 20",
            collapsed: true,
            items: [

            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/cavemansoftware/notes" },
      { icon: "instagram", link: "https://instagram.com/cavemansoftware" },
    ],

    lastUpdated: {
      text: "Last updated",
    },

    search: {
      provider: "local",
    },
  },
})
