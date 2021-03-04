'use strict';

angular.module('myApp.version', [
  'myApp.version.i18n-filter',
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');
