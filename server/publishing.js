Meteor.publish("images", function(){ return Images.find();});
Meteor.publish("goods", function(){return Goods.find();});
Meteor.publish("news", function(){return News.find();});
Meteor.publish("feedbacks", function(){return Feedbacks.find();});
