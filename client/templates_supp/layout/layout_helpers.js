Template.navbar.helpers({
  badgeNum: function() {
    var sess = Session.get('Lyutique_cart_piu_piu'),
        result = 0;

    for(var i=0; i<sess.length; i++) {
      result+=sess[i].amount;
    }

    return result
  }
})