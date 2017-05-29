;(function () {
  'use strict'

  angular
    .module('app')
    .directive('terms', terms)

  function terms () {
    return {
      templateUrl: 'components/terms.template.html',
      controller: 'termsController',
      controllerAs: 'terms',
      restrict: 'E'
    }
  }
})()
