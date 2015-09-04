angular.module('myapp', [])
  .controller('mycontroller', function($scope) {
    $scope.name = 'Jason';
  })
  .directive('isolatedTwoWayBoundScopeDirective', function() {
    return {
      bindToController: true,
      controllerAs: 'dir',
      scope: {
        name: '='
      },
      controller: function() {},
      template: "<input type='text' ng-model='dir.name'> Hello {{dir.name}}"
    };
  })
  .directive('isolatedOneWayBoundScopeDirective', function() {
    return {
      bindToController: true,
      controllerAs: 'dir',
      scope: {
        name: '@'
      },
      controller: function() {},
      template: "<input type='text' ng-model='dir.name'> Hello {{dir.name}}"
    };
  })
  .directive('isolatedOneTimeBoundScopeDirective', function() {
    return {
      bindToController: true,
      controllerAs: 'dir',
      scope: {
        name: '@'
      },
      controller: function() {},
      template: "<input type='text' ng-model='dir.name'> Hello {{dir.name}}"
    };
  })
  .directive('inheritedScopeDirective', function() {
    return {
      template: "<input type='text' ng-model='name'> Hello {{name}}"
    };
  })
  .directive('parentPrototypeScopeDirective', function() {
    return {
      scope: true,
      bindToController: true,
      template: "<input type='text' ng-model='name'> Hello {{name}}"
    };
  })
  .directive('watcherDirective', function() {
    return {
      bindToController: true,
      controllerAs: 'dir',
      scope: {
        name: '='
      },
      controller: function($scope) {
        self = this;
        self.var2 = self.name;
        $scope.$watch(function() {
          return self.name;
        }, function(newValue) {
          self.var2 = newValue;
        });
      },
      template: "<input type='text' ng-model='dir.var2'> Hello {{dir.var2}}"
    };
  });
