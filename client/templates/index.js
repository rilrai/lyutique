Template.indexTemplate.helpers({
  news: function() {
    var result = News.find({}, {sort:{createdOn: -1}, limit:Session.get("newsLimit")});
    return result
  }
})