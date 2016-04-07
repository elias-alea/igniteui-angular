var cfg = {
	
	allScriptsTimeout: 11000,
	
	specs: [
		"e2e/*.js"
	],
	//chromeOnly: true, //https://github.com/angular/protractor/issues/187
	capabilities: {
		"browserName": "chrome"
	},

	baseUrl: "http://localhost:8000/test/app/",

	framework: "jasmine",

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};

if (process.env.TRAVIS) {
	cfg.capabilities.chromeOptions = {
			'args': ['--no-sandbox']
		};
}

exports.config = cfg;
