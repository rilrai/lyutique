Template.adminPage.onCreated(function() {
  this.valid = new ReactiveVar(false);
}) 

Template.adminPage.helpers({
  validation: function() {
    var t = Template.instance();

    return t.valid.get()
  },

});

Template.adminPage.events({
  'click #passBtn': function() {
    var pass = "123",
        input = document.getElementById("passInput").value,
        label = document.getElementById("passLabel"),
        t = Template.instance();

    if (pass === input) {
      t.valid.set(true);
      return true
    } else {
      label.textContent = "Помилочка...";
      return false
    }
  },

});
