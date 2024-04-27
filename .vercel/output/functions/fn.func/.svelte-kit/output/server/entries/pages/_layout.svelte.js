import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
const browser = BROWSER;
const userTheme = browser;
const theme = writable(userTheme);
const css$4 = {
  code: "button.svelte-1up86t6.svelte-1up86t6{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-1up86t6>.svelte-1up86t6{display:flex;gap:var(--size-2)}",
  map: `{"version":3,"file":"toggle.svelte","sources":["toggle.svelte"],"sourcesContent":["<script lang='ts'>import { fly } from \\"svelte/transition\\";\\nimport { theme, toggleTheme } from \\"$lib/theme\\";\\n<\/script>\\n\\n<button on:click={toggleTheme} aria-label='Toggle Theme'>\\n    {#if $theme === 'dark'}\\n        <div in:fly={{ y: 10 }}>\\n            <span>Light</span>\\n        </div>\\n        {:else}\\n        <div in:fly={{ y: -10 }}>\\n            <span>Dark</span>\\n        </div>\\n        {/if}\\n</button>\\n\\n<style>\\n    button {\\n        padding: 0;\\n        font-weight: inherit;\\n        background: none;\\n        border: none;\\n        box-shadow: none;\\n        overflow:hidden;\\n    }\\n\\n    button > * {\\n        display: flex;\\n        gap: var(--size-2);\\n    }\\n</style>"],"names":[],"mappings":"AAiBI,oCAAO,CACH,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,OAAO,CACpB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,SAAS,MACb,CAEA,qBAAM,CAAG,eAAE,CACP,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,QAAQ,CACrB"}`
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle Theme" class="svelte-1up86t6">${$theme === "dark" ? `<div class="svelte-1up86t6" data-svelte-h="svelte-1w9ljno"><span>Light</span></div>` : `<div class="svelte-1up86t6" data-svelte-h="svelte-jeesbb"><span>Dark</span></div>`} </button>`;
});
const css$3 = {
  code: "nav.svelte-scea26{padding-block:var(--size-7)}.links.svelte-scea26{margin-block:var(--size-7)}a.svelte-scea26{color:inherit;text-decoration:none}@media(min-width: 768px){nav.svelte-scea26{display:flex;justify-content:space-between}.links.svelte-scea26{display:flex;gap:var(--size-7);margin-block:0}}",
  map: '{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import * as config from \\"$lib/config\\";\\nimport Toggle from \\"./toggle.svelte\\";\\n<\/script>\\n\\n<nav>\\n\\t<a href=\\"/\\" class=\\"title\\">\\n\\t\\t<b>{config.title}</b>\\n\\t</a>\\n\\t<ul class=\\"links\\">\\n\\t\\t<li>\\n\\t\\t\\t<a href=\\"/about\\">About</a>\\n\\t\\t</li>\\n\\t\\t<li>\\n\\t\\t\\t<a href=\\"/contact\\">Contact</a>\\n\\t\\t</li>\\n\\t\\t<Toggle />\\n\\t</ul>\\n</nav>\\n\\n<style>\\n\\tnav {\\n\\t\\tpadding-block: var(--size-7);\\n\\t}\\n\\n\\t.links {\\n\\t\\tmargin-block: var(--size-7);\\n\\t}\\n\\n\\ta {\\n\\t\\tcolor: inherit;\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\n\\t@media (min-width: 768px) {\\n\\t\\tnav {\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tjustify-content: space-between;\\n\\t\\t}\\n\\n\\t\\t.links {\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tgap: var(--size-7);\\n\\t\\t\\tmargin-block: 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,iBAAI,CACH,aAAa,CAAE,IAAI,QAAQ,CAC5B,CAEA,oBAAO,CACN,YAAY,CAAE,IAAI,QAAQ,CAC3B,CAEA,eAAE,CACD,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IAClB,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,iBAAI,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB,CAEA,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,QAAQ,CAAC,CAClB,YAAY,CAAE,CACf,CACD"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-scea26"><a href="/" class="title svelte-scea26"><b>${escape(title)}</b></a> <ul class="links svelte-scea26"><li data-svelte-h="svelte-4dteop"><a href="/about" class="svelte-scea26">About</a></li> <li data-svelte-h="svelte-y1z403"><a href="/contact" class="svelte-scea26">Contact</a></li> ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})}</ul> </nav>`;
});
const css$2 = {
  code: "footer.svelte-k2ae0s{padding-block:var(--size-7);border-top:1px solid var(--border)}p.svelte-k2ae0s{color:var(--text-2)}",
  map: '{"version":3,"file":"footer.svelte","sources":["footer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import * as config from \\"$lib/config\\";\\n<\/script>\\n\\n<footer>\\n\\t<p>{config.title} &copy {new Date().getFullYear()}</p>\\n</footer>\\n\\n<style>\\n\\tfooter {\\n\\t\\tpadding-block: var(--size-7);\\n\\t\\tborder-top: 1px solid var(--border);\\n\\t}\\n\\n\\tp {\\n\\t\\tcolor: var(--text-2);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAQC,oBAAO,CACN,aAAa,CAAE,IAAI,QAAQ,CAAC,CAC5B,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACnC,CAEA,eAAE,CACD,KAAK,CAAE,IAAI,QAAQ,CACpB"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-k2ae0s"><p class="svelte-k2ae0s">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p> </footer>`;
});
const css$1 = {
  code: ".transition.svelte-18kqe58{height:100%}",
  map: `{"version":3,"file":"transition.svelte","sources":["transition.svelte"],"sourcesContent":["<script lang='ts'>import { fade } from \\"svelte/transition\\";\\nexport let url = \\"\\";\\n<\/script>\\n\\n{#key url}\\n    <div class=\\"transition\\" in:fade>\\n         <slot />\\n    </div>\\n{/key}\\n\\n<style>\\n    .transition {\\n        height: 100%;\\n    }\\n</style>"],"names":[],"mappings":"AAWI,0BAAY,CACR,MAAM,CAAE,IACZ"}`
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="transition svelte-18kqe58">${slots.default ? slots.default({}) : ``}</div>`;
});
const css = {
  code: ".layout.svelte-1sq3us8{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-1sq3us8{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-1sq3us8{padding-inline:0}}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from \\"./header.svelte\\";\\nimport Footer from \\"./footer.svelte\\";\\nimport \\"../app.css\\";\\nimport Transition from \\"./transition.svelte\\";\\nimport \\"open-props/style\\";\\nimport \\"open-props/normalize\\";\\nimport \\"open-props/buttons\\";\\nexport let data;\\n<\/script>\\n\\n<div class=\\"layout\\">\\n\\t<Header />\\n\\n\\t<main>\\n\\t\\t<Transition url={data.url}>\\n\\t\\t\\t<slot />\\n\\t\\t</Transition>\\n\\t</main>\\n\\n\\t<Footer />\\n</div>\\n\\n<style>\\n\\t.layout {\\n\\t\\theight: 100%;\\n\\t\\tmax-inline-size: 1440px;\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-rows: auto 1fr auto;\\n\\t\\tmargin-inline: auto;\\n\\t\\tpadding-inline: var(--size-7);\\n\\t}\\n\\n\\tmain {\\n\\t\\tpadding-block: var(--size-9);\\n\\t}\\n\\n\\t@media (min-width: 1440px) {\\n\\t\\t.layout {\\n\\t\\t\\tpadding-inline: 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuBC,sBAAQ,CACP,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CACjC,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,IAAI,QAAQ,CAC7B,CAEA,mBAAK,CACJ,aAAa,CAAE,IAAI,QAAQ,CAC5B,CAEA,MAAO,YAAY,MAAM,CAAE,CAC1B,sBAAQ,CACP,cAAc,CAAE,CACjB,CACD"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-1sq3us8">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1sq3us8">${validate_component(Transition, "Transition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
