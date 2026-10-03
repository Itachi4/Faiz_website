/* Scroll-scrubbed film: scroll position drives video time, one clip per chapter. */
(function () {
  var root = document.querySelector("[data-scrub]");
  if (!root) return;
  var stage = root.querySelector(".scrub-stage");
  var chapters = Array.prototype.slice.call(root.querySelectorAll(".scrub-chapter"));
  var bar = root.querySelector(".scrub-bar span");
  var mobile = window.matchMedia("(max-width: 760px)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var layers = chapters.map(function (ch, i) {
    var wrap = document.createElement("div");
    wrap.className = "scrub-layer";
    var img = document.createElement("img");
    img.alt = "";
    img.src = mobile ? ch.dataset.mposter : ch.dataset.poster;
    img.decoding = "async";
    wrap.appendChild(img);
    var v = null;
    if (!reduce) {
      v = document.createElement("video");
      v.muted = true; v.playsInline = true; v.setAttribute("playsinline", "");
      v.preload = i < 2 ? "auto" : "metadata";
      v.src = mobile ? ch.dataset.mclip : ch.dataset.clip;
      v.addEventListener("loadeddata", function () { wrap.classList.add("is-ready"); });
      wrap.appendChild(v);
    }
    stage.insertBefore(wrap, stage.firstChild);
    return { wrap: wrap, video: v, shown: 0 };
  });
  var active = -1, ticking = false;
  function progressOf(el) {
    var r = el.getBoundingClientRect();
    var span = Math.max(1, r.height - window.innerHeight);
    return Math.min(1, Math.max(0, -r.top / span));
  }
  function update() {
    ticking = false;
    var mid = window.innerHeight * 0.5, idx = 0;
    for (var i = 0; i < chapters.length; i++) {
      var r = chapters[i].getBoundingClientRect();
      if (r.top <= mid) idx = i;
    }
    if (idx !== active) {
      layers.forEach(function (l, j) { l.wrap.classList.toggle("is-active", j === idx); });
      chapters.forEach(function (c, j) { c.classList.toggle("is-active", j === idx); });
      root.setAttribute("data-side", chapters[idx].dataset.align === "right" ? "right" : "left");
      var next = layers[idx + 1];
      if (next && next.video && next.video.preload !== "auto") { next.video.preload = "auto"; next.video.load(); }
      active = idx;
    }
    var p = progressOf(chapters[idx]);
    var v = layers[idx].video;
    if (v && v.readyState >= 1 && isFinite(v.duration)) {
      var t = p * Math.max(0, v.duration - 0.05);
      if (Math.abs(v.currentTime - t) > 0.01) v.currentTime = t;
    }
    if (bar) {
      var total = root.getBoundingClientRect();
      var tp = Math.min(1, Math.max(0, -total.top / Math.max(1, total.height - window.innerHeight)));
      bar.style.transform = "scaleX(" + tp + ")";
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  layers.forEach(function (l) { if (l.video) l.video.addEventListener("loadedmetadata", onScroll); });
  update();
})();
