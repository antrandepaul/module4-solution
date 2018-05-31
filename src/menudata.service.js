(function () {
  'use strict';
  
  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");
  
  
  MenuDataService.$inject = ['$http','ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    //call to server
    // Returns a promise, NOT items array directly
    service.getAllCategories  = function () {
      
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "categories.json")
      });
     
      return promise;  
    };

    service.getItemsForCategory = function (categoryName) {
       
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "menu_items.json"),
        params: {
          category: categoryName
        }
      });

      return response; 
    };
  }
  
  })();