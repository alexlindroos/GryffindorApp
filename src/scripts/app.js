var myApp = angular.module('myApp', []);
    myApp.controller('myCtrl', function ($scope, $http) {

        $scope.showModalReg = false;
        $scope.showModalLogin = false;
        $scope.showModalUpload = false;
        $scope.showModalImageView = false;
        $scope.showModalSettings = false;
        $scope.showModalEdit = false;
        $scope.showModalAccount = false;

        $scope.toggleModalReg = function () {
            $scope.showModalReg = !$scope.showModalReg;

        };

        $scope.toggleModalLogin = function () {
            $scope.showModalLogin = !$scope.showModalLogin;

        };


        $scope.toggleModalUpload = function () {
            $scope.showModalUpload = !$scope.showModalUpload;

        };

        $scope.toggleModalAccount = function () {
            $scope.showModalAccount = !$scope.showModalAccount;

        };
    
        $scope.toggleModalEdit = function () {
            $scope.showModalEdit = !$scope.showModalEdit;
        };

        $scope.toggleModalSettings = function () {
            $scope.showModalSettings = !$scope.showModalSettings;
        };

        $scope.toggleModalImageView = function () {
            $scope.showModalImageView = !$scope.showModalImageView;
        };

        $scope.toggleAllModals = function () {
            if ($scope.showModalReg || $scope.showModalLogin === true || $scope.showModalUpload === true || $scope.showModalSettings === true || $scope.showModalEdit === true || $scope.showModalAccount === true) {
                $scope.showModalLogin = false;
                $scope.showModalReg = false;
                $scope.showModalUpload = false;
                $scope.showModalSettings = false;
                $scope.showModalEdit = false;
                $scope.showModalAccount = false;
            }
        };

        //if logged
        $scope.logged = false;
        if (localStorage.getItem('userId') === null) {
            $scope.logged = false;
        } else {
            $scope.logged = true;
        }


    });

