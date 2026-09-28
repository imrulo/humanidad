import type { Copy } from "./copy.es";

export const copyEn: Copy = {
  meta: {
    title: "humani.dad — What kind of political human you are",
    description:
      "Twelve axes, a hundred possible questions, one profile. Free forever. No accounts, no cookies, no server.",
  },
  nav: {
    home: "Home",
    axes: "The 12 axes",
    method: "Method",
    about: "About",
    donate: "Donate",
    compare: "Compare",
  },
  home: {
    heroTitle: "What kind of political human you are.",
    heroSubtitle:
      "Twelve axes. A hundred possible questions. A profile you can share, compare and argue about. Free forever.",
    cta: "Discover my profile",
    ctaSecondary: "See the 12 axes",
    sizesTitle: "Choose your size",
    sizeShort: "Short",
    sizeStandard: "Standard",
    sizeDeep: "Deep",
    sizeShortTime: "4 min",
    sizeStandardTime: "8 min",
    sizeDeepTime: "18 min",
    sizeShortDesc: "36 questions. To get started.",
    sizeStandardDesc: "60 questions. The sweet spot.",
    sizeDeepDesc: "120 questions. For lying awake at night.",
    mirrorTitle: "It is not a diagnosis. It is a mirror.",
    mirrorText:
      "humani.dad does not tell you who you are. It tells you where you stand on twelve axes that run through politics, economics, war, faith and technique. There is no correct side. There is no better answer. There is only a profile you can look at, share and argue about.",
    exampleTitle: "Example card",
    exampleText:
      "This is what a result looks like. Twelve bars, one profile, a compatible person and a territorial archetype. Everything is calculated in your browser and stored in the URL.",
    footerNote: "Free. Unmonitored. Serverless.",
  },
  axes: {
    title: "The 12 axes",
    subtitle:
      "Each axis runs from 0 to 100. Zero is pole A, one hundred is pole B. There is no correct side: there is a spectrum.",
    guide: "Guiding question",
  },
  quiz: {
    title: "The test",
    progress: "Progress",
    questionOf: "Question {current} of {total}",
    back: "Back",
    skip: "I don't know",
    skipWarning:
      "You have used too many skips. Honest answers give more accurate profiles.",
    seriousQuestion: "Are you answering seriously?",
    seriousYes: "Yes, seriously",
    seriousNo: "Just browsing",
    seriousNote:
      "No harm if you are just browsing. But the profile will be more useful if you answer honestly.",
    start: "Start",
    chooseMode: "Choose the size",
    modeShort: "Short — 36 questions, ~4 min",
    modeStandard: "Standard — 60 questions, ~8 min",
    modeDeep: "Deep — 120 questions, ~18 min",
    draftSaved: "Draft saved. You can pick up where you left off.",
    continue: "Continue",
    restart: "Start over",
    answers: {
      strongA: "Strongly disagree",
      a: "Disagree",
      neutral: "Neutral",
      b: "Agree",
      strongB: "Strongly agree",
    },
  },
  results: {
    title: "Your profile",
    compatibility: "compatibility",
    withIdeology: "with",
    weirdAxis: "What makes you weird",
    weirdText:
      "On the {axis} axis, you are {delta} points from the catalogue median. That makes you weirder than 90% of profiles.",
    typicalAxis: "Your most typical side",
    typicalText:
      "On the {axis} axis, you are only {delta} points from the median. Almost an average citizen of the catalogue.",
    archetype: "Territorial archetype",
    archetypeNote:
      "This is a cultural-political archetype, not a scientific survey average.",
    people: "Compatible people",
    ideologies: "Nearby ideologies",
    download: "Download PNG card",
    copyLink: "Copy link",
    copied: "Link copied",
    shareX: "Share on X",
    shareText: "I took the humani.dad test and this is what came out:",
    repeat: "Retake test",
    compare: "Compare with another URL",
    invalidTitle: "This link does not work",
    invalidText:
      "The URL payload is corrupted or from an older version. You can start a new test.",
    invalidCta: "Start test",
    family: "Approximate political family",
    embed: "Clean version for screenshots",
  },
  method: {
    title: "Method",
    subtitle: "How it is calculated, what it is not, and what data is stored.",
    howTitle: "How it is calculated",
    howText:
      "Each question has an axis, a weight (0.8, 1 or 1.2) and a direction (A or B). Your answer becomes a number from 0 to 100. If the question pushes toward pole A, it is inverted. Then it is weighted-summed per axis and normalised to 0-100. No randomness. No surprises.",
    matchTitle: "How the match is calculated",
    matchText:
      "We compare your 12-dimensional vector against a catalogue of ideologies, territorial archetypes and historical figures using Euclidean distance. Compatibility is 100 * (1 - distance / maximum distance). The maximum distance in 12 dimensions is 100*sqrt(12) ≈ 346.41.",
    limitsTitle: "Limits",
    limitsText:
      "This is not science. It is a mirror with mathematics. The catalogue vectors are reasonable approximations, not empirical measurements. The country match is a cultural-political archetype, not a survey average. And your profile depends on your honesty, not your knowledge.",
    dataTitle: "What data is stored",
    dataText:
      "None on a server. There is no server. Your draft is saved in localStorage and deleted when you finish. The result lives in the URL: whoever opens the link sees the same profile without taking the test. No tracking cookies, no analytics, no email, no geolocation.",
    whyTitle: "Why it is not science",
    whyText:
      "Because the questions are not statistically validated, because the catalogue vectors are reasonable judgements, and because politics is not a spectrometer. But that does not make it useless: it makes it honest. It is a mirror, not a diagnosis.",
  },
  about: {
    title: "About",
    subtitle: "What humani.dad is, why it exists and who made it.",
    whatTitle: "What it is",
    whatText:
      "humani.dad is a 12-axis human-political profile test. It is static, free to operate forever and has no server. All calculation happens in your browser.",
    whyTitle: "Why it exists",
    whyText:
      "Because existing political tests are either too simple (left-right) or too complex (twelve copied axes). humani.dad tries to be the sweet spot: twelve axes running through politics, economics, war, faith and technique, with concrete questions and a shareable result.",
    creditsTitle: "Credits",
    creditsText:
      "Typefaces: Fraunces and Atkinson Hyperlegible, self-hosted with @fontsource (OFL). Icons: lucide-react (MIT). Code: React, TypeScript, Vite, Tailwind CSS, Zustand, framer-motion, html-to-image. All content is original.",
    licenseTitle: "License",
    licenseText:
      "The code is under the MIT license. The content (questions, ideologies, archetypes, people) is under CC BY-SA 4.0. You can use it, modify it and share it, as long as you give credit and share under the same license.",
  },
  donate: {
    title: "Donate",
    subtitle: "The site is free and unmonitored. If you want to keep it alive, you can.",
    note: "No processors, no tracking, no public thanks. Just static addresses.",
    lightning: "Lightning (LNURL)",
    bitcoin: "Bitcoin (on-chain)",
    monero: "Monero",
    ethereum: "Ethereum",
    copy: "Copy",
    copied: "Copied",
  },
  compare: {
    title: "Compare",
    subtitle: "Paste two URLs or two payloads and see how they overlap.",
    labelA: "Profile A",
    labelB: "Profile B",
    placeholder: "Paste a humani.dad URL or a v1.xxxx payload",
    compare: "Compare",
    error: "Could not read that link. Paste a valid humani.dad URL.",
    compatibility: "compatibility between both",
  },
  notFound: {
    title: "404",
    text: "This page does not exist. Like many political ideas: good in theory, nonexistent in practice.",
    cta: "Back to home",
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
  lang: {
    es: "Español",
    en: "English",
  },
};
