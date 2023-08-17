export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","gif/gif1.gif","gif/gif2.gif","gif/gif3.gif","gif/gif4.gif","ogimage.jpg","touchico.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.cff0a8a3.js","app":"_app/immutable/entry/app.40638ee5.js","imports":["_app/immutable/entry/start.cff0a8a3.js","_app/immutable/chunks/index.3ae62e9d.js","_app/immutable/chunks/singletons.97621ba8.js","_app/immutable/entry/app.40638ee5.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.3ae62e9d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/gif",
				pattern: /^\/gif\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[gid]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"gid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
