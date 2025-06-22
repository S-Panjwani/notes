---
layout: home
pageClass: home-page

hero:
  name: "Notes"
  tagline: "These are quality notes fact-checked and written by reliable sources.
"
  image: /icon.svg
  actions:
    - theme: brand
      text: Notes
      link: /about/introduction
    - theme: alt
      text: Contact
      link: /about/contact

features:
  - title: Fact-checked notes
    icon: <img src=/scared.webp></img>
    details: We aim for accuracy in <i>everything</i> we include.
  - title: Easy to Read
    icon: <img src=/angry.jpg></img>
    details: Notes are formatted clearly to help you learn.
  - title: Covers Everything
    icon: <img src=/thumbs.jpg></img>
    details: We try to include everything you need to pass.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-1));

  --vp-home-hero-image-background-image: linear-gradient(-45deg, var(--vp-c-purple-3), var(--vp-c-brand-3));
  --vp-home-hero-image-filter: blur(44px);
}

:root {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 55%);
}

.dark {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 85%);
}

.home-page {
  background:
    linear-gradient(215deg, var(--overlay-gradient), transparent 40%),
    radial-gradient(var(--overlay-gradient), transparent 40%) no-repeat -60vw -40vh / 105vw 200vh,
    radial-gradient(var(--overlay-gradient), transparent 65%) no-repeat 50% calc(100% + 20rem) / 60rem 30rem;

  .VPFeature a {
    font-weight: bold;
    color: var(--vp-c-brand-2);
  }

  .VPFooter {
    background-color: transparent !important;
    border: none;
  }

  .VPNavBar:not(.top) {
    background-color: transparent !important;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);

    div.divider {
      display: none;
    }
  }
}


@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
