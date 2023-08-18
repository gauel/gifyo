export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","gif/gif1.gif","gif/gif2.gif","gif/gif3.gif","gif/gif4.gif","manifest.json","ogimage.jpg","touchicon.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".json":"application/json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.8aa1e716.js","app":"_app/immutable/entry/app.fdf06204.js","imports":["_app/immutable/entry/start.8aa1e716.js","_app/immutable/chunks/index.d192db91.js","_app/immutable/chunks/singletons.18aa4c1a.js","_app/immutable/chunks/index.7bc89eca.js","_app/immutable/entry/app.fdf06204.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.d192db91.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
