Template.lipsEyes.helpers({
  goods: function() {
    var result = Goods.find({category: 'lipsEyes'});
    return result
  }
})

Template.lipsEyes.events({
  'click button': function(e,t) {
    //create general function for adding goods to cart
  }
})

// var ins = {
//   _id: 'tovar_1',
//   category: 'lipsEyes',
//   name: 'new Tovar',
//   text: 'tovar-tovar-tovar, ya ya ya',
//   amount: '50ml',
//   price: '50грн.'
// }
// Goods.insert(ins)