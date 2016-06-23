(function() {
	var app = angular.module('companyname',['ngRoute']);
  
	app.config(function($routeProvider){
		$routeProvider.
		when ('/', {
			templateUrl: '../templates/main.html'
		}).
		when ('/about', {
			templateUrl: '../templates/about.html'
		}).
		when ('/products', {
			templateUrl: '../templates/products.html'
		}).
		when ('/contacts', {
			templateUrl: '../templates/contacts.html'
		}).
		otherwise({redirectTo: '/'});
	});

	app.controller('NavbarController', ['$http', function($http) {
		this.links = [];
		var navbar = this;
		$http.get("php/server.php").then(
		function(res){
			navbar.links = res.data;
		},
		function(res) {
			console.log("links error " + res);
			navbar.links = [
			{
				"link": "#",
				"title": "Home"
			}
			];
		}
		);
	}]);
  
	app.controller('FeaturesController', ['$http', function($http) {
		this.links = [];
		var features = this;
		$http.get("php/features.php").then(
		function(res){
			features.links = res.data;
		},
		function(res) {
			console.log("links error " + res);
			features.links = [
			{
				"link": "#",
				"title": "Home"
			}
			];
		}
		);
	}]);
  
	app.controller('HeaderTextController', ['$http', function($http) {
		var header = this;
		$http.get("json/features.json").then(
			function(res){
				header.button = res.data.button;
				header.headerlogo = res.data.headerlogo;
			}
		);
	}]);

    app.controller('ClientSayController1', ['$http', function($http) {
		this.linkCS = [];
		var CSbar = this;
		$http.get("php/clientsay1.php").then(
			function(res){
				CSbar.linkCS = res.data;
		}
		);
    }]);
  
	app.controller('ClientSayController2', ['$http', function($http) {
		this.linkCS = [];
		var CSbar = this;
		$http.get("php/clientsay2.php").then(
			function(res){
				CSbar.linkCS = res.data;
			}
		);
	}]);
  
	app.controller('ShortStoryController', ['$http', function($http) {
		this.text = '';
		var SSbar = this;
		$http.get("/php/shortstory.php").then(
		function(res){
			SSbar.image = res.data[0].image;
			SSbar.header = res.data[0].header;
			SSbar.fulltext = res.data[0].fulltext;
			SSbar.button = res.data[0].button;
		}
		);
	}]);
  
	app.controller('XpSkillsController', ['$http', function($http) {
		this.links = [];
		var XSbar = this;
		$http.get("php/xpskills.php").then(
		function(res){
			XSbar.links = res.data;
		},
		function(res) {
			console.log("links error " + res);
			XSbar.links = [
			{
				"link": "#",
				"title": "Home"
	
			}
			];
		}
		);
	}]);
  
	app.controller('BlogController', ['$http', function($http) {
		this.blog = [];
		var Blogbar = this;
		$http.get("php/blog.php").then(
		function(res){
			Blogbar.blog = res.data;
		}
		);
	}]);
  
	app.controller('StartProjectController', ['$http', function($http) {
		this.text = '';
		var StartProjbar = this;
		$http.get("php/startproject.php").then(
		function(res){
			StartProjbar.header = res.data[0].header;
			StartProjbar.text = res.data[0].text;
			StartProjbar.button = res.data[0].button;
		}
		);
	}]);
  
	app.controller('ContactsController', ['$http', function($http) {
		this.links = [];
		var Contbar = this;
		$http.get("php/contacts.php").then(
		function(res){
			Contbar.links = res.data;
		}
		);
	}]);
  
})();
