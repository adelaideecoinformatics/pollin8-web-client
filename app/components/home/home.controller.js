/* @ngInject */
class AppController {
  constructor ($scope) {
    this.$scope = $scope
    this.configureScope()
  }

  configureScope () {
    this.$scope.title = 'Pollinators decision tool'
  }
}

export {AppController}
