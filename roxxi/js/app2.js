var app = angular.module('myApp', []);

function Main($scope) {
    $scope.isActive = false;

    $scope.rotate = function () {
        $scope.isActive = !$scope.isActive;
    };

}
