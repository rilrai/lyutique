Meteor.methods({
  uploadFile: function (file) {
    file.save('/Users/cmather/tmp/uploads/');
  }
});

Meteor.publish("images", function(){ return Images.find();});
Meteor.publish("goods", function(){return Goods.find();});
Meteor.publish("news", function(){return News.find();});
