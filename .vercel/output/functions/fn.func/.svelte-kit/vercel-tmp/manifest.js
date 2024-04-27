export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DgEVeKHD.js","app":"_app/immutable/entry/app.CL7JBAEz.js","imports":["_app/immutable/entry/start.DgEVeKHD.js","_app/immutable/chunks/entry.BaOLFcpR.js","_app/immutable/chunks/scheduler.BOEji6Gx.js","_app/immutable/chunks/index.ALaelTCp.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.CL7JBAEz.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.BOEji6Gx.js","_app/immutable/chunks/index.D3iesuZS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
