Template.adminPage.onCreated(function() {
  this.valid = new ReactiveVar(false);
}) 

Template.adminPage.helpers({
  validation: function() {
    var t = Template.instance();
    if (t.valid.get()) {
      Session.set("security", true);
      return true
    }
    return false
  },

});

Template.adminPage.events({
  'click #passBtn': function(e,t) {
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

  'change #desireSelect': function(e,t) {
    var val = e.currentTarget.value;
    console.log(val);
    return val
  },

});
