Template.newsTemplate.helpers({
  image: function() {
    var src = this.image,
        result;
    try {
      result = Images.find({'original.name': src})
    } catch(err) {}

    if (result)
      return result

    return this.text
  }
})