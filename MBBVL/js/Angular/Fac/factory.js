
app.factory('ACGTFactory', ['$http', function ($http) {

    var urlBase = 'Reports';
    var urlReportDetails = '/Report/Edit/';
    var dataFactory = {};
    //Gets Reports


    
    dataFactory.serverService = function (url, method, data) {
        return $http({
            url: url,
            method: method,
            data: angular.toJson(data),
            contentType: 'application/json, charset=utf-8'
        }).success(function (addData) {
        });
    };
  

    return dataFactory;

}]);


