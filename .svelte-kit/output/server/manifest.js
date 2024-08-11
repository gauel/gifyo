export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","manifest.json","ogimage.jpg","touchicon.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.d035cc9f.js","app":"_app/immutable/entry/app.dd059763.js","imports":["_app/immutable/entry/start.d035cc9f.js","_app/immutable/chunks/index.260e4b2f.js","_app/immutable/chunks/singletons.43d5b561.js","_app/immutable/chunks/index.e0ad881e.js","_app/immutable/entry/app.dd059763.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.260e4b2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
