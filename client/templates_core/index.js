Template.indexTemplate.helpers({
  news: function() {
    var result = News.find({}, {sort:{created: -1}, limit:Session.get("newsLimit")}).fetch();
    console.log(result);
    return result
  }
})