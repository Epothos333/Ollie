module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"jasmine": true,
		"browser": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 6,
		"ecmaFeatures": {
		  "experimentalObjectRestSpread": true
		},
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": 0
	},
		"extends": ["eslint:recommended", "plugin:react/recommended"]
	
};