Template.about.helpers({
  feedbacksList: function() {
    var result = Feedbacks.find({}, {sort:{dateTime: -1}, limit:Session.get("newsLimit")}).fetch();
    return result
  }
})