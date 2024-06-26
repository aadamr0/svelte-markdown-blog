import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.exAi-pUc.js","_app/immutable/chunks/scheduler.BOEji6Gx.js","_app/immutable/chunks/index.D3iesuZS.js","_app/immutable/chunks/config.N6WwpHq1.js","_app/immutable/chunks/index.ALaelTCp.js"];
export const stylesheets = ["_app/immutable/assets/0.C8Q6IZrG.css"];
export const fonts = ["_app/immutable/assets/manrope-cyrillic-400-normal.DYJIFuzK.woff2","_app/immutable/assets/manrope-cyrillic-400-normal.BSokYSPU.woff","_app/immutable/assets/manrope-greek-400-normal.B7YXE4JD.woff2","_app/immutable/assets/manrope-greek-400-normal.BAy2wLnG.woff","_app/immutable/assets/manrope-vietnamese-400-normal.ooLdXFia.woff2","_app/immutable/assets/manrope-vietnamese-400-normal.DJunoU0M.woff","_app/immutable/assets/manrope-latin-ext-400-normal.CdEq0HKV.woff2","_app/immutable/assets/manrope-latin-ext-400-normal.hdRL3SMy.woff","_app/immutable/assets/manrope-latin-400-normal.BWi5-Pby.woff2","_app/immutable/assets/manrope-latin-400-normal.CVCPdBT6.woff","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.DduX7Cxz.woff2","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.Ddg-ESa-.woff","_app/immutable/assets/jetbrains-mono-greek-400-normal.SMrb6SvR.woff2","_app/immutable/assets/jetbrains-mono-greek-400-normal.CL28JpsE.woff","_app/immutable/assets/jetbrains-mono-vietnamese-400-normal.DQPePN4I.woff","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.Dn-Q5RzH.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.Br5SKFH9.woff","_app/immutable/assets/jetbrains-mono-latin-400-normal.BrRFx4uz.woff2","_app/immutable/assets/jetbrains-mono-latin-400-normal.BKFenxV8.woff"];
