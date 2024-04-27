import { g as getContext, c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".error.svelte-y2d72l{height:100%;display:grid;place-content:center}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang='ts'>import { page } from \\"$app/stores\\";\\n<\/script>\\n\\n<div class=\\"error\\">\\n    <h1>{$page.status}: {$page.error?.message}</h1>\\n</div>\\n\\n<style>\\n    .error {\\n        height: 100%;\\n        display: grid;\\n        place-content: center;\\n    }\\n</style>"],"names":[],"mappings":"AAQI,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MACnB"}`
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="error svelte-y2d72l"><h1>${escape($page.status)}: ${escape($page.error?.message)}</h1> </div>`;
});
export {
  Error$1 as default
};
