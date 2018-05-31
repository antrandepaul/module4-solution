(function () {
    'use strict';
    
    angular.module('MenuList')
    .controller('MenuListController',MenuListController)
    .controller('MenuItemController', MenuItemController);
    
    MenuListController.$inject = ['items'];
    function MenuListController(items) {
        
      var myCtrl = this;
      myCtrl.items= items.data;
    }
    
    MenuItemController.$inject = ['$stateParams','items'];
    function MenuItemController($stateParams, items) {
        
      var myCtrl = this;
      myCtrl.items= items.data.menu_items;
    }


    })();