app.directive('myValidator', function ($parse) {
    return {
        scope: {
            validValues: '=validValues'
        },
        link: function (scope, elm, attrs) {
            elm.bind('keypress', function (e) {
                var char = String.fromCharCode(e.which || e.charCode || e.keyCode), matches = [];
                angular.forEach(scope.validValues, function (value, key) {
                    if (char === value) matches.push(char);
                }, matches);
                if (matches.length == 0) {
                    e.preventDefault();
                    return false;
                }
            });
        }
    }
});