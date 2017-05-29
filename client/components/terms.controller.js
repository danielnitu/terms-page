;(function () {
  'use strict'

  /* @ngInject */
  angular
    .module('app')
    .controller('termsController', termsController)

  function termsController (termsService) {
    var vm = this

    termsService.getData(function (err, data) {
      if (err) {
        vm.error = err
      } else {
        vm.data = data
        vm.paragraphs = data.paragraphs
      }
    })

    vm.isString = function (string) {
      return typeof string === 'string'
    }
  }
})()
