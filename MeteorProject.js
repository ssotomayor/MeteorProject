
Threads = new Meteor.Collection("threads");


if (Meteor.is_client) {
  Template.main.greeting = function () {
    return "Welcome to MeteorProject.";
  };
  
  Template.main.threads = function(){
    var threads = Threads.find();
    return threads;
  };

  Template.main.events = {
    'click input' : function () {
        Threads.insert({thread:"Potato"});
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    if (Threads.find().count() === 0) {
      var threadsData = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < threadsData.length; i++)
        Threads.insert({thread: threadsData[i], score: Math.floor(Math.random()*10)*5});
    }
  });
}