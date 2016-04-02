Template.cartTable.onCreated(function() {
  this.generalCost = new ReactiveVar(0);
  this.generalAmount = new ReactiveVar(0);
}) 


Template.cartTable.helpers({
  goodsNames: function() {
    var t = Template.instance(),
        genCost = 0,
        genAmount = 0,
        sess = Session.get('Lyutique_cart_piu_piu'),
        result = [],
        temp,
        tempName,
        tempPrice,
        tempTotal,
        toArray;

    for(var i=0; i<sess.length; i++) {
      temp = Goods.findOne({_id: sess[i].id});
      tempName = temp.titlePlain + ' ' + temp.titleStrong + ' - ' + sess[i].info + ' ' + temp.price[0].units;
      for (var j=0; j<temp.price.length; j++) {
        if (temp.price[j].amount == sess[i].info)
          tempPrice = temp.price[j].cost;
      }
      tempTotal = sess[i].amount*tempPrice;

      toArray = {
        id: sess[i].id,
        name: tempName,
        quantity: sess[i].amount,
        price: tempPrice,
        total: tempTotal
      };
      genAmount += sess[i].amount;
      genCost += tempTotal;
      result.push(toArray);
    }

    t.generalAmount.set(genAmount);
    t.generalCost.set(genCost);
    return result
  },

  totalPrice: function() {
    var t = Template.instance(); 
    return t.generalCost.get()
  },

  totalAmount: function() {
    var t = Template.instance(); 
    return t.generalAmount.get()
  },
})

Template.cartTable.events({
  'click .remove-btn': function(e,t) {
    var el = e.target,
        id = el.id,
        sess = Session.get('Lyutique_cart_piu_piu');

    for (var i=0; i<sess.length; i++) {
      if (sess[i].id == id) sess.splice(i, 1);
    }

    Session.set('Lyutique_cart_piu_piu', sess);
  },
})