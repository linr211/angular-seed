'use strict';

angular.module('myApp.version.i18n-filter', [])

.filter('i18n', ['version', function(key) {
  return function(key) {
    let localized = dt.l10n.getValue(key);
    return localized;
  };
}]);
