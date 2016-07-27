angular.module("user.profile").controller('ProfileCtrl', function ($scope, ngFB) {

    $scope.user = {};

     ngFB.api({
        path: '/me',
        params: {fields: 'id,name, cover, picture'}
    }).then(
        function (user) {
            $scope.user = user;
        },
        function (error) {
            alert('Facebook error: ' + error);
        });
});