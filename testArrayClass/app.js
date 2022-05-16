(function(angular) {
    'myApp';
  angular.module('myApp', [])
    .controller('myController', ['$scope', function($scope) {
      $scope.ListClass = [
        {id:1,name:'Lop 11',parentID:0,prefix:'',oderNumber:0},
        {id:2,name:'Lop 11A',parentID:1,prefix:'-',oderNumber:1},
        {id:3,name:'Lop 11B',parentID:1,prefix:'-',oderNumber:2},
        {id:4,name:'Lop 12A',parentID:7,prefix:'-',oderNumber:2},
        {id:5,name:'Lop 12B',parentID:7,prefix:'-',oderNumber:3},
        {id:6,name:'Lop 11C',parentID:1,prefix:'-',oderNumber:3},
        {id:7,name:'Lop 12',parentID:0,prefix:'',oderNumber:0},
        {id:8,name:'Lop 12B',parentID:7,prefix:'-',oderNumber:1},
      ];
  
    }]);
  })(window.angular);