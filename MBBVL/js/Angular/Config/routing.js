app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/OrderForm', {
            templateUrl: 'views/home/orderform.cshtml',
            controller: 'js/Order-ctrl'
        }).
        when('/showOrders', {
            templateUrl: 'templates/show-orders.html',
            controller: 'ShowOrdersController'
        }).
        otherwise({
            redirectTo: '/Order'
        });
  }]);