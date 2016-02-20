angular.module('starter.controllers', ['ngCordova'])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('DashCtrl', function($scope, $ionicPopup, $state, $timeout) {

// When button is clicked, the popup will be shown...

  $scope.showConfirm = function() {
    $state.go('proaccount');



    var confirmPopup = $ionicPopup.confirm({

      title: 'Pro Decision',
      template: 'Would you like to assist?',
      cancelText: 'Decline',
      okText: 'Accept'

    });

    confirmPopup.then(function(res) {
      if (res) {
        $state.go('proaccount');
        console.log('Sure!');
      } else {
        console.log('Not sure!');
      }
    });
    };
})

  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {

      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('tab.dash');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }

  })

.controller('menusCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate){

    $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
    }

  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.trades = Chats.trades();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})



.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };

  })
.controller('dbController', function ($scope, $cordovaSQLite) {
  });




