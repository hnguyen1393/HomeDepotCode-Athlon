angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var customers = [{
    id: 0,
    name: 'Alex Shyu',
    username: 'ashyu',
    password: 'ashyu',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Chin Pyon',
    username: 'cpyon',
    password: 'cpyon',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Lawrence Tsao',
    username: 'ltsao',
    password: 'ltsao',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Henry Nguyen',
    username: 'hnguyen',
    password: 'hnguyen',
    face: 'img/perry.png'
  }];

  return {
    all: function() {
      return customers;
    },
    remove: function(chat) {
      customers.splice(customers.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === parseInt(chatId)) {
          return customers[i];
        }
      }
      return null;
    }
  };
});
