;(function () {
  'use strict'

  angular
    .module('app')
    .factory('termsService', termsService)

  function termsService ($http) {
    return { getData: getData }

    function getData (cb) {
      $http
        .get('/assets/terms.json')
        .then(function (res) { return cb(null, res.data.terms) },
          function (err) { return cb(err, null) })
    }
  }
})()
