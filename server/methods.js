Meteor.methods({
  uploadFile: function (file) {
    file.save('/Users/cmather/tmp/uploads/');
  }
});


