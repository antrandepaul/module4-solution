(function () {
  'use strict';
  
  angular.module('MenuList')
  .component('menuItem', {
    templateUrl: 'src/templates/menuitem.template.html',
    bindings: {
      items: '<'
    }
  });
  
  })();