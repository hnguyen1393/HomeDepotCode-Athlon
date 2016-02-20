angular.module('starter.services', ['ngCordova'])

  .service('LoginService', function($q, $cordovaSQLite) {
    return {
      loginUser: function(name, pw) {
        var deferred = $q.defer();
        var promise = deferred.promise;

        if (name =='user'&& pw =='secret') {
          deferred.resolve('Welcome ' + name + '!');
        } else {
          deferred.reject('Wrong credentials.');
        }
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }


    }
  })


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pros = [{
    id: 1,
    name: 'Looon Systems',
    proSpend: '$1,081,934.14',
    trade: 'Commercial Property Managers'
  }, {
    id: 2,
    name: 'Dotster',
    proSpend: '$2,515,006.16',
    trade: 'Property Investor: Acquisition and Repair/ Renovation; Flipper'
  }, {
    id: 3,
    name: 'Yeddscro Systems',
    proSpend: '$3,795,092.59',
    trade: 'Electrician'
  }, {
    id: 4,
    name: 'PlurSpace',
    proSpend: '$2,902,622.09',
    trade: 'Plumber'
  }, {
    id: 5,
    name: 'Twisauce',
    proSpend: '$1,281,963.51',
    trade: 'Manufacturing'
  }, {
    id: 6,
    name: 'Vertbox',
    proSpend: '$1,156,031.47',
    trade: 'Commercial Construction: Offices & Commercial Buildings'
  }, {
    id: 7,
    name: 'Dotga Collective',
    proSpend: '$1,047,103.16',
    trade: 'Remodeler'
  }, {
    id: 8,
    name: 'livester',
    proSpend: '$1,371,684.01',
    trade: 'Multi-Family Builder'
  }, {
    id: 9,
    name: 'Youbo Labs',
    proSpend: '$1,573,984.75',
    trade: 'Property Management: Maintenance and Repair'
  }, {
    id: 10,
    name: 'xobee',
    proSpend: '$3,745,308.50',
    trade: 'Remodeler'
  }, {
    id: 11,
    name: 'Rasense Collective',
    proSpend: '$1,771,696.89',
    trade: 'Manufacturing'
  }, {
    id: 12,
    name: 'jala',
    proSpend: '$1,886,670.03',
    trade: 'Specialty Restoration: Water Mediation, Natural Disaster and Fire Damage Repair'
  }, {
    id: 13,
    name: 'YouZing',
    proSpend: '$2,055,253.32',
    trade: 'Remodeler'
  }, {
    id: 14,
    name: 'Rageo',
    proSpend: '$1,623,121.34',
    trade: 'Specialty Restoration: Water Mediation, Natural Disaster and Fire Damage Repair'
  }, {
    id: 15,
    name: 'PlurStar',
    proSpend: '$1,017,759.68',
    trade: 'Specialty Restoration: Water Mediation, Natural Disaster and Fire Damage Repair'
  }, {
    id: 16,
    name: 'Mykee Labs',
    proSpend: '$1,830,332.54',
    trade: 'Electrician'
  }, {
    id: 17,
    name: 'ibiba',
    proSpend: '$673,800.06',
    trade: 'Remodeler'
  }, {
    id: 18,
    name: 'Inifish',
    proSpend: '$504,461.26',
    trade: 'Commercial Construction: Offices & Commercial Buildings'
  }, {
    id: 19,
    name: 'BoZing',
    proSpend: '$599,466.85',
    trade: 'Remodeler'
  }, {
    id: 20,
    name: 'Jamee',
    proSpend: '$521,814.22',
    trade: 'Fence Installer'
  }, {
    id: 21,
    name: 'Glifspace',
    proSpend: '$945,086.57',
    trade: 'Remodeler'
  }, {
    id: 22,
    name: 'Cloudify Systems',
    proSpend: '$903,922.70',
    trade: 'Remodeler'
  }, {
    id: 23,
    name: 'Truzing Collective',
    proSpend: '$977,680.95',
    trade: 'Electrician'
  }, {
    id: 24,
    name: 'Vertsauce Labs',
    proSpend: '$790,117.18',
    trade: 'Remodeler'
  }, {
    id: 25,
    name: 'trunet',
    proSpend: '$700,432.21',
    trade: 'Commercial Construction: Offices & Commercial Buildings'
  }, {
    id: 26,
    name: 'QuirbBee',
    proSpend: '$721,669.81',
    trade: 'Property Management: Maintenance and Repair'
  }, {
    id: 27,
    name: 'Rabo Media',
    proSpend: '$628,326.77',
    trade: 'Specialty Restoration: Water Mediation, Natural Disaster and Fire Damage Repair'
  }, {
    id: 28,
    name: 'cloudzizzl',
    proSpend: '$578,283.60',
    trade: 'Commercial Construction: Offices & Commercial Buildings'
  }, {
    id: 29,
    name: 'GlifDoo',
    proSpend: '$517,367.15',
    trade: 'Electrician'
  }, {
    id: 30,
    name: 'YouKee',
    proSpend: '$826,169.05',
    trade: 'Property Management: Maintenance and Repair'
  }, {
    id: 31,
    name: 'Janet',
    proSpend: '$599,132.01',
    trade: 'Specialty Restoration: Water Mediation, Natural Disaster and Fire Damage Repair'
  }, {
    id: 32,
    name: 'ILy',
    proSpend: '$526,587.72',
    trade: 'Property Management: Maintenance and Repair'
  }, {
    id: 33,
    name: 'bogo',
    proSpend: '$665,767.83',
    trade: 'Remodeler'
  }, {
    id: 34,
    name: 'IniSter',
    proSpend: '$652,658.52',
    trade: 'Remodeler'
  }, {
    id: 35,
    name: 'Xogo Designs',
    proSpend: '$923,989.57',
    trade: 'Painter'
  }, {
    id: 36,
    name: 'Loonico Labs',
    proSpend: '$640,513.07',
    trade: 'Property Investor: Acquisition and Repair/ Renovation; Flipper'
  }, {
    id: 37,
    name: 'Trumo',
    proSpend: '$673,800.06',
    trade: 'Remodeler'
  }, {
    id: 38,
    name: 'blingbo',
    proSpend: '$700,432.21',
    trade: 'Commercial Construction: Offices & Commercial Buildings'
  }, {
    id: 39,
    name: 'Adkee',
    proSpend: '$799,365.61',
    trade: 'Electrician'
  }, {
    id: 40,
    name: 'Rala',
    proSpend: '$761,692.83',
    trade: 'Commercial Construction: Offices & Commercial Buildings'
  }, {
    id: 41,
    name: 'kabfish',
    proSpend: '$689,284.95',
    trade: 'Property Investor: Acquisition and Repair/ Renovation; Flipper'
  }, {
    id: 42,
    name: 'Bodoo Media',
    proSpend: '$577,394.77',
    trade: 'Government'
  }, {
    id: 43,
    name: 'loohop',
    proSpend: '$854,728.68',
    trade: 'Non-Profit Organizations'
  }, {
    id: 44,
    name: 'LiveSy',
    proSpend: '$660,744.47',
    trade: 'Single Family Homebuilder'
  }, {
    id: 45,
    name: 'Adkee',
    proSpend: '$520,677.79',
    trade: 'Multi-Family Builder'
  }, {
    id: 46,
    name: 'Remnit',
    proSpend: '$589,372.19',
    trade: 'Painter'
  }, {
    id: 47,
    name: 'IniMee',
    proSpend: '$681,898.76',
    trade: 'Plumber'
  }, {
    id: 48,
    name: 'Smugbo Systems',
    proSpend: '$535,079.88',
    trade: 'Property Management: Maintenance and Repair'
  }, {
    id: 49,
    name: 'progo',
    proSpend: '$329,164.18',
    trade: 'Institutional: Schools, Universities, Hospitals'
  }, {
    id: 50,
    name: 'Raify',
    proSpend: '$359,352.69',
    trade: 'Manufacturing'
  }];

  function compare(a,b) {
    if (a.trade < b.trade)
      return -1;
    else if (a.trade > b.trade)
      return 1;
    else
      return 0;
  }

  pros.sort(compare);



  return {
    all: function() {
      return pros;
    },
    remove: function(chat) {
      pros.splice(pros.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < pros.length; i++) {
        if (pros[i].id === parseInt(chatId)) {
          return pros[i];
        }
      }
      return null;
    }
  };
});
