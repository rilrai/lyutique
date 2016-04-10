Template.indexTemplate.helpers({
  news: function() {
    var result = News.find({}, {sort:{dateTime: -1}, limit:Session.get("newsLimit")}).fetch();
    return result
  }
})