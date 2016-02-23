Meteor.startup(function () {
  
  for (var i = 0; i<News.length; i++) {
    console.log("startup");
    var id = News.findOne()._id;
    console.log(News.remove({_id: id}));
  }
});