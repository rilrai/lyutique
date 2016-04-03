Template.newsTemplate.helpers({
  image: function() {
    var src = this.image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result

    return this.text
  },

  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.newsTemplate.events({
  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цю новину?"))
      News.remove({_id: id});
    
    return true
  }
});