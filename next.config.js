module.exports = {
	experimental: {
		turbo: {
			resolveAlias: {
				underscore: "lodash",
				mocha: { browser: "mocha/browser-entry.js" },
			},
		},
	},
};
