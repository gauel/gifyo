export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","gif/gif1.gif","gif/gif2.gif","gif/gif3.gif","gif/gif4.gif","manifest.json","ogimage.jpg","touchicon.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".json":"application/json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.3bc50297.js","app":"_app/immutable/entry/app.3df5e635.js","imports":["_app/immutable/entry/start.3bc50297.js","_app/immutable/chunks/index.6ad95c8d.js","_app/immutable/chunks/singletons.012e582d.js","_app/immutable/chunks/index.aa27febf.js","_app/immutable/entry/app.3df5e635.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.6ad95c8d.js"],"stylesheets":[],"fonts":[]},
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
