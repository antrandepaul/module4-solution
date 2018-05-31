(function () {
  'use strict';
  
  angular.module('MenuList')
  .component('menuList', {
    templateUrl: 'src/templates/menulist.template.html',
    bindings: {
      items: '<'
    }
  });
  
  })();