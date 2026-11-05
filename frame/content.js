/* =====================================================================
   AMINA'S FRAME FELLOWSHIP EXHIBIT · CONTENT FILE
   Edit this file to change any text, image or link on the exhibit pages.
   No build step needed: edit it on GitHub and the site updates.

   Every item can have:
     title        text
     meta         short label (role, year, format)
     body         paragraph text
     image        path or URL to an image, e.g. "../img/erik.jpg"
                  leave "" to show a labeled placeholder box
     placeholder  what the placeholder box should say until you add the image
     links        list of { label, url }. Leave the list empty if there's no link yet.
                  Never put "#" or a made-up link here: an item with no links just shows no button.
     todo         note to yourself, shown in a dashed "TO ADD" box. Delete it when done.
                  Visitors never see these. Add ?edit to a page address to see them,
                  e.g. amina-io.com/frame/world/?edit  (and ?final to hide them again).
   ===================================================================== */

window.EXHIBIT = {
  name: "Amina Green",
  site: "https://amina-io.com",
  email: "hello@amina-io.com",

  welcome: {
    title: "AMINA'S FRAME FELLOWSHIP EXHIBIT",
    subtitle: "Frame Fellowship Showcase · Lighthaven",
    play: "PLAY THE PREDICTOR",
    playHint: "A two-minute game about Newcomb's problem",
    explore: "EXPLORE MY WORLD",
    exploreHint: "Videos, interviews, writing and more",
  },

  /* ---------- AMINA'S WORLD (/frame/world) ----------
     Source of truth: Amina's portfolio content pack (Nov 5, 2026).
     Only link to URLs listed there. Items with no URL show no button.
     status: published | in-editing | upcoming | internal | showcase | in-progress
     Anything not "published" is shown greyed out with its status tag. */
  contact: {
    label: "contact me!!",
    x: { handle: "@amina_io", url: "https://x.com/amina_io" },
  },

  about: {
    eyebrow: "Frame Fellowship · Fall 2026",
    name: "Amina Green",
    blurb:
      "Independent writer, researcher and media creator, and a former underground idol in Japan. My work explores technology, culture, information, human cognition, and the stories people inhabit. Background in computer science and human-computer interaction.",
    fellow: "I was a Frame Fellow with MATS Research in Berkeley.",
    open: "Open to: funding, whimsy, love, art.",
    image: "../img/amina.jpg",
    placeholder: "PORTRAIT OF AMINA",
  },

  groups: [
    {
      id: "featured",
      title: "Featured media",
      layout: "cards",
      items: [
        {
          title: "Lessons from the Information Age",
          what: "Video essay",
          desc: "How information technology reshaped society, what that can teach us about the transition into the Intelligence Age, and why simple Y2K comparisons miss the bigger structural shift.",
          status: "published",
          image: "../img/information-age.jpg",
          focus: "58% 30%", // which part of the image to keep when cropped
          placeholder: "INFORMATION AGE",
          links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=LZPrU5hMaiM" }],
        },
        {
          title: "AI Governance Can't Wait for a Treaty",
          what: "Interview · MATS Research · featuring Erik Leklem",
          desc: "Erik Leklem, whose background includes the Department of Defense, on international AI agreements, treaty implementation, verification, compute governance, and the organizational challenges of governing AI. Views are Erik's own.",
          status: "published",
          image: "../img/erik-leklem.jpg",
          placeholder: "ERIK LEKLEM INTERVIEW",
          links: [{ label: "Watch on X", url: "https://x.com/MATSprogram/status/2118072095796322536" }],
        },
        {
          title: "MATS Residency campaign, featuring Ryan Kidd",
          what: "Campaign · sizzle reel + extended interview · MATS",
          desc: "A promotional campaign for the MATS Residency with a short sizzle reel and a longer interview with Ryan Kidd.",
          impact: "Reported campaign results: about 30,000 views in the first 24 hours, and Residency applications doubled during the campaign.",
          status: "published",
          image: "../img/ryan-kidd.jpg",
          placeholder: "RYAN KIDD INTERVIEW",
          links: [
            { label: "Sizzle reel", url: "https://x.com/MATSprogram/status/2110458189434990596" },
            { label: "Full interview", url: "https://www.youtube.com/watch?v=SDdt7NpRqjA" },
          ],
        },
        {
          title: "The Stories We Tell",
          what: "Feature essay · Palladium Magazine",
          desc: "The stories people inhabit, and how institutions, markets and cultural narratives shape identity and belonging. From Yukio Mishima and Osamu Dazai through postwar Japan, idol culture, parasocial relationships, and roles you can buy.",
          status: "in-editing",
          image: "../img/stories-we-tell.jpg",
          placeholder: "PALLADIUM ESSAY",
          links: [],
        },
      ],
    },
    {
      id: "upcoming",
      title: "Upcoming interviews",
      layout: "cards",
      items: [
        { title: "AI Safety and China", what: "Interview with Ran Sun", desc: "Working topic: AI safety and China, including international AI governance.", status: "upcoming", links: [], image: "../img/ran-sun.jpg", placeholder: "INTERVIEW STILL" },
        { title: "Who Is Liable When AI Goes Wrong?", what: "Interview with Anita Srinivasan", desc: "Working topic: AI liability, catastrophic risk, autonomous agents, and the legal questions around them.", status: "upcoming", links: [], image: "../img/anita-srinivasan.jpg", placeholder: "INTERVIEW STILL" },
        { title: "Can We Verify AI Compute?", what: "Interview with Atharva Nihalani", desc: "Working topic: compute verification and the technical challenges of monitoring advanced AI development.", status: "upcoming", links: [], image: "../img/atharva-nihalani.jpg", placeholder: "INTERVIEW STILL" },
      ],
    },
    {
      id: "media",
      title: "More media",
      layout: "list",
      items: [
        {
          title: "Decision Theory for Dummies!",
          what: "Educational film · featuring Tim Parker",
          desc: "A short, VHS-inspired film introducing Newcomb's problem and decision theory, made to play alongside THE PREDICTOR at the showcase.",
          status: "showcase",
          links: [],
        },
      ],
    },
    {
      id: "writing",
      title: "Writing",
      layout: "list",
      items: [
        { title: "DOLL BABY", what: "Published writing · 2dcloud · edited by Kat Dee", status: "published", links: [], todo: "Add the link. Also check the publisher spelling (2dcloud vs 2cdcloud)." },
        { title: "External Content Best Practices", what: "Internal communications guide · MATS", status: "internal", links: [] },
      ],
    },
    {
      id: "posts",
      title: "Selected posts",
      layout: "posts",
      items: [
        { title: "Selected post 01", links: [{ label: "View on X", url: "https://x.com/Amina_io/status/2105455862164988300" }] },
        { title: "Selected post 02", links: [{ label: "View on X", url: "https://x.com/Amina_io/status/2099907280779219196" }] },
        { title: "Selected post 03", links: [{ label: "View on X", url: "https://x.com/Amina_io/status/2099657464593736007" }] },
        { title: "Frame Fellowship announcement", links: [{ label: "View on X", url: "https://x.com/Amina_io/status/2097477650038337592" }] },
        { title: "Frame post", links: [{ label: "View on X", url: "https://x.com/Amina_io/status/2115689194756636734" }] },
      ],
    },
  ],

  zine: {
    title: "AMINA · A DIGITAL ZINE",
    pages: [
      { heading: "Hello", body: "Writer, researcher, media creator. Former underground idol in Japan. Computer science and human-computer interaction by training.", image: "", placeholder: "PORTRAIT" },
      { heading: "Then", body: "", image: "", placeholder: "IDOL-ERA PHOTO", todo: "A few sentences about the idol years." },
      { heading: "Now", body: "Frame Fellow, making interviews and videos about AI with MATS, and writing about technology, culture and the stories we tell ourselves.", image: "", placeholder: "STUDIO / WORK PHOTO" },
      { heading: "Next", body: "", image: "", placeholder: "SOMETHING YOU'RE MAKING", todo: "What you want people to remember." },
    ],
  },
};
