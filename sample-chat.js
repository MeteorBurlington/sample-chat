Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {

  Template.message_list.helpers({
    messages: function () {
      return Messages.find({});
    }
  });

  Template.submit_text.events({
    "submit form": function (event) {
    // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var msg = event.target.message.value;
 
      // Insert a task into the collection
      Messages.insert({
        text: msg,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.message.value = "";
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
