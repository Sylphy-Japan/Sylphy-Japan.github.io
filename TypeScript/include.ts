// ts/include.ts
async function inject(el: Element) {
  const url = (el as HTMLElement).dataset.include!;
  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const html = await res.text();
    // 置換：wrapper要素ごと差し替え
    el.outerHTML = html;
  } catch (e) {
    console.warn("Include failed:", url, e);
  }
}

// data-base のベースを考慮して data-include を補正
function applyBase() {
  const base = document.documentElement.dataset.base ?? "";
  document.querySelectorAll<HTMLElement>("[data-include]").forEach((el) => {
    const path = el.dataset.include!;
    if (!path.startsWith(base)) el.dataset.include = base + path;
  });
}

function highlightCurrent() {
  const here = location.pathname.replace(/index\.html$/, "");
  document.querySelectorAll<HTMLAnchorElement>("nav a[href]").forEach((a) => {
    const href = a.getAttribute("href")!.replace(/index\.html$/, "");
    if (href === here) {
      a.classList.add("current");
      a.setAttribute("aria-current", "page");
    }
  });
}

(function main(){
  applyBase();
  const targets = Array.from(document.querySelectorAll("[data-include]"));
  Promise.all(targets.map((el) => inject(el))).finally(() => {
    // すべて差し込まれた後にハイライト（DOM完成後）
    if (document.readyState === "complete") highlightCurrent();
    else window.addEventListener("load", highlightCurrent, { once: true });
  });
})();