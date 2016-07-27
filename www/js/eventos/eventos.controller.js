angular.module("eventos").controller('EventosCtrl', function ($scope, ngFB) {

    $scope.eventos = [];

   
    ngFB.api({
        path: '/me/events',
        params: {fields: 'name, start_time, place, cover'}
     }).then(
        function (response) {
            console.log(response.data);
            $scope.eventos = response.data;
        },
        function (error) {
            console.log(error);
             
    });
     
     
});