Template.lipsEyes.helpers({
  goods: function() {
    var result = Goods.find({category: 'Lips & eyes'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  }
})

Template.lipsEyes.events({
  'click button': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }

  }
})
