angular.module("login").controller('LoginCtrl', function (ngFB, $scope, $state) {


    $scope.login = function () {
        ngFB.login({ scope: 'public_profile, user_events' }).then(
            function (response) {
                if (response.status === 'connected') {
                    $state.go("tab.dash");
                } else {
                    alert('Facebook login failed');
                }
            });
    };

});