(function() {
  var app = angular.module('companyname',[]);

  app.controller('NavbarController', ['$http', function($http) {
    this.links = [];
    var navbar = this;
    $http.get("server.json").then(
      function(res){
        navbar.links = res.data.links;
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
	this.text = '';
    this.links = [];
    var features = this;
    $http.get("features.json").then(
      function(res){
		features.text = res.data.text;
        features.links = res.data.links;
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
  
  


})();
