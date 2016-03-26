Template.lipsEyes.helpers({
  goods: function() {
    var result = Goods.find({category: 'Lips & eyes'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src});
    } catch(err) {}

    if (result)
      return result._id
  }
})

Template.lipsEyes.events({
  'click button': function(e,t) {
    //create general function for adding goods to cart
  }
})
