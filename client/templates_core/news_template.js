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
  }
})