/* Shared helpers for the exhibit pages: pixel icons and content rendering.
   Content comes from ../content.js (window.EXHIBIT). */
(function () {
  "use strict";

  // 16x16 pixel icons. One character per pixel; "." is transparent.
  var PAL = { k: "#21141f", f: "#d8cfba", h: "#fbf6e8", l: "#8a7f70", t: "#3f7572", c: "#8fd6d8", v: "#b4a9dc", d: "#6f639e", b: "#efd982", r: "#b5434f", i: "#f8f3e7" };
  var ICONS = {
    zine: [
      "................", ".kkkkkkkkkkkk...", ".krrrrrrrrrrk...", ".krhhhhhhhhrkk..", ".krhvvvvvvhrkfk.", ".krhvkkkkvhrkfk.",
      ".krhvvvvvvhrkfk.", ".krhhhhhhhhrkfk.", ".krhkkkkkkhrkfk.", ".krhhhhhhhhrkfk.", ".krhkkkkhhhrkfk.", ".krhhhhhhhhrkfk.",
      ".krrrrrrrrrrkfk.", ".kkkkkkkkkkkkfk.", "...kffffffffffk.", "...kkkkkkkkkkkk.",
    ],
    folder: [
      "................", "................", ".kkkkk..........", "kbbbbbk.........", "kbbbbbbkkkkkkkk.", "kbhhhhhhhhhhhhbk",
      "kbhbbbbbbbbbbbbk", "kbbbbbbbbbbbbbbk", "kbbbbbbbbbbbbbbk", "kbbbbbbbbbbbbbbk", "kbbbbbbbbbbbbbbk", "kbbbbbbbbbbbbbbk",
      "kbbbbbbbbbbbbbbk", "kllllllllllllllk", "kkkkkkkkkkkkkkkk", "................",
    ],
    video: [
      "................", "kkkkkkkkkkkkkkkk", "kffffffffffffffk", "kfkkkkkkkkkkkkfk", "kfkttttttttttkfk", "kfktttkttttttkfk",
      "kfktttkkktttt kfk".replace(" ", ""), "kfktttkkkkkttkfk", "kfktttkkktttt kfk".replace(" ", ""), "kfktttkttttttkfk", "kfkttttttttttkfk", "kfkkkkkkkkkkkkfk",
      "kffffffrfflfflfk", "kkkkkkkkkkkkkkkk", "....kk....kk....", "................",
    ],
    doc: [
      "..kkkkkkkkk.....", "..khhhhhhhkk....", "..khhhhhhhkhk...", "..khkkkkhhkkkk..", "..khhhhhhhhhhk..", "..khkkkkkkkkhk..",
      "..khhhhhhhhhhk..", "..khkkkkkkkkhk..", "..khhhhhhhhhhk..", "..khkkkkkkhhhk..", "..khhhhhhhhhhk..", "..khkkkkkkkkhk..",
      "..khhhhhhhhhhk..", "..khhhhhhhhhhk..", "..kkkkkkkkkkkk..", "................",
    ],
    disk: [
      "................", ".kkkkkkkkkkkkkk.", ".kdkhhhhhhhhkdk.", ".kdkhhhhkkhhkdk.", ".kdkhhhhkkhhkdk.", ".kdkhhhhhhhhkdk.",
      ".kddkkkkkkkkddk.", ".kddddddddddddk.", ".kdkkkkkkkkkkdk.", ".kdkiiiiiiiikdk.", ".kdkirrrrrrikdk.", ".kdkiiiiiiiikdk.",
      ".kdkirrrrriikdk.", ".kdkiiiiiiiikdk.", ".kkkkkkkkkkkkkk.", "................",
    ],
    mail: [
      "................", "................", "................", "kkkkkkkkkkkkkkkk", "kckhhhhhhhhhhkck", "khckhhhhhhhhkchk",
      "khhckhhhhhhkchhk", "khhhckhhhhkchhhk", "khhhhckkkkchhhhk", "khhhkhcbbchkhhhk", "khhkhhhbbhhhkhhk", "khkhhhhhhhhhhkhk",
      "kkhhhhhhhhhhhhkk", "kkkkkkkkkkkkkkkk", "................", "................",
    ],
    computer: [
      "...kkkkkkkkkk...", "...kffffffffk...", "...kfkkkkkkfk...", "...kfkttttkfk...", "...kfktbbtkfk...", "...kfkttttkfk...",
      "...kfktbttkfk...", "...kfkkkkkkfk...", "...kffffffffk...", "...kfcffkkkfk...", "...kffffllllk...", "...kffffffffk...",
      "...kkkkkkkkkk...", "....kffffffk....", "....kkkkkkkk....", "................",
    ],
    box: [
      "................", "....kkkkkkkkk...", "...kvvvvvvvvkk..", "..kvvvvvvvvkdk..", ".kkkkkkkkkkddk..", ".kdvvvvvvvkddk..",
      ".kdvvvvvvvkddk..", ".kdvvbbvvvkddk..", ".kdvvvbvvvkddk..", ".kdvvbvvvvkddk..", ".kdvvvvvvvkddk..", ".kdvvbvvvvkdk...",
      ".kdvvvvvvvkk....", ".kkkkkkkkkk.....", "................", "................",
    ],
  };

  function pixelIcon(name) {
    var rows = ICONS[name] || ICONS.doc;
    var rects = "";
    for (var y = 0; y < rows.length; y++) {
      var row = rows[y];
      for (var x = 0; x < 16; x++) {
        var ch = row.charAt(x);
        if (PAL[ch]) rects += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + PAL[ch] + '"/>';
      }
    }
    return '<svg class="px" viewBox="0 0 16 16" aria-hidden="true" shape-rendering="crispEdges">' + rects + "</svg>";
  }

  function el(tag, attrs) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "text") n.textContent = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "class") n.className = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) n.appendChild(x); });
      else n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return n;
  }

  function isExternal(url) { return /^https?:\/\//.test(url) && url.indexOf(location.host) === -1; }

  function linkButton(l) {
    if (!l || !l.url || l.url === "#") return null;
    var a = el("a", { class: "btn", href: l.url, text: l.label || l.url });
    if (isExternal(l.url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  function media(image, placeholder, alt) {
    if (image) return el("div", { class: "media" }, el("img", { src: image, alt: alt || "", loading: "lazy" }));
    return el("div", { class: "ph", role: "img", "aria-label": "Placeholder image" }, "[ PLACEHOLDER: " + (placeholder || "IMAGE") + " ]");
  }

  function item(it) {
    var hasMedia = !!(it.image || it.placeholder);
    var links = (it.links || []).map(linkButton).filter(Boolean);
    var title = it.title || "";
    return el("article", { class: "item" + (hasMedia ? "" : " no-media") },
      hasMedia ? media(it.image, it.placeholder, title) : null,
      el("div", null,
        it.meta ? el("p", { class: "meta", text: it.meta }) : null,
        title ? el("h3", { text: title }) : el("h3", { text: "[ Untitled ]" }),
        it.body ? el("p", { text: it.body }) : null,
        links.length ? el("div", { class: "links" }, links) : null,
        it.todo ? el("p", { class: "todo", text: it.todo }) : null
      )
    );
  }

  window.ExhibitUI = { pixelIcon: pixelIcon, el: el, item: item, media: media, linkButton: linkButton };

  // "TO ADD" notes are reminders for Amina. Hidden for visitors; add ?edit to a page link to show them
  // (remembered on that device until you open a page with ?final).
  var editing = false;
  try {
    var q = location.search;
    if (/[?&]edit\b/.test(q)) localStorage.setItem("exhibit-edit", "1");
    if (/[?&]final\b/.test(q)) localStorage.removeItem("exhibit-edit");
    editing = localStorage.getItem("exhibit-edit") === "1";
  } catch (e) {
    editing = /[?&]edit\b/.test(location.search);
  }
  document.addEventListener("DOMContentLoaded", function () {
    if (!editing) document.body.classList.add("hide-todos");
  });
})();
