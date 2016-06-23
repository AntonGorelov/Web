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
	  })
	 .otherwise({redirectTo: '/'});
  });

  app.controller('NavbarController', ['$http', function($http) {
    this.links = [];
    var navbar = this;
    $http.get("json/server.json").then(
      function(res){
        navbar.links = res.data.links;
      },
      function(res) {
        console.log("links error " + res);
        navbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);

  app.controller('FeaturesController', ['$http', function($http) {
	this.text = '';
    this.links = [];
    var features = this;
    $http.get("json/features.json").then(
      function(res){
		features.text = res.data.text;
        features.links = res.data.links;
      },
      function(res) {
        console.log("links error " + res);
        features.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
  app.controller('HeaderTextController', ['$http', function($http) {
	this.headertext = '';
	this.headertext2 = '';
	this.headertext3 = '';
	this.headertext4 = '';
    this.headerlogo = '';
    var header = this;
    $http.get("json/features.json").then(
      function(res){
		header.headertext = res.data.headertext;
		header.headertext2 = res.data.headertext2;
		header.headertext3 = res.data.headertext3;
		header.headertext4 = res.data.headertext4;
		header.button = res.data.button;
		header.headerlogo = res.data.headerlogo;
      },
      function(res) {
        console.log("links error " + res);
        header.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);

	
   app.controller('ClientSayController', ['$http', function($http) {
	this.text = '';
    
    var CSbar = this;
    $http.get("json/clientsay.json").then(
      function(res){
		CSbar.linkCS = res.data;
		CSbar.header = res.data.header;
      },
      function(res) {
        console.log("links error " + res);
        CSbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
  
	app.controller('ShortStoryController', ['$http', function($http) {
	this.text = '';
    
    var SSbar = this;
    $http.get("json/shortstory.json").then(
      function(res){
		SSbar.image = res.data.image;
		SSbar.header = res.data.header;
		SSbar.fulltext = res.data.fulltext;
		SSbar.button = res.data.button;
      },
      function(res) {
        console.log("links error " + res);
        CSbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
  
  app.controller('XpSkillsController', ['$http', function($http) {
	this.text = '';
    var links = [];
    var XSbar = this;
    $http.get("json/xpskills.json").then(
      function(res){
		XSbar.header1 = res.data.header1;
		XSbar.header2 = res.data.header2;
		XSbar.text = res.data.text;
		XSbar.button = res.data.button;
		XSbar.links = res.data.links;
      },
      function(res) {
        console.log("links error " + res);
        XSbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
  
  app.controller('BlogController', ['$http', function($http) {
	this.text = '';
    var links = [];
    var Blogbar = this;
    $http.get("json/blog.json").then(
      function(res){
		Blogbar.header = res.data.header;
		Blogbar.links = res.data.links;
      },
      function(res) {
        console.log("links error " + res);
        Blogbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
  
  app.controller('StartProjectController', ['$http', function($http) {
	this.text = '';
    var StartProjbar = this;
    $http.get("json/startproject.json").then(
      function(res){
		StartProjbar.header = res.data.header;
		StartProjbar.text = res.data.text;
		StartProjbar.button = res.data.button;
      },
      function(res) {
        console.log("links error " + res);
        StartProjbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
  
  app.controller('ContactsController', ['$http', function($http) {
	this.text = '';
    var Contbar = this;
	var links = [];
    $http.get("json/contacts.json").then(
      function(res){
		Contbar.image = res.data.image;
		Contbar.links = res.data.links;
      },
      function(res) {
        console.log("links error " + res);
        Contbar.links = [
          {
            "link": "/",
            "title": "Home"

          }
        ];
      }
    );
  }]);
  
   
})();
