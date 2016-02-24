Meteor.startup(function () {
  if (!Goods.findOne({_id:"tovar_1"})) {
    Goods.insert({
      _id: 'tovar_1',
      category: 'lipsEyes',
      name: 'new Tovar',
      text: 'tovar-tovar-tovar, ya ya ya',
      amount: '50 ml',
      price: '50 грн.'
    });
  }

  if (!Goods.findOne({_id:"tovar_2"})) {
    Goods.insert({
      _id: 'tovar_2',
      category: 'lipsEyes',
      name: 'old Tovar',
      text: 'tomat-tomat-tomat, nyam nyam nyam',
      amount: '150 ml',
      price: '500 грн.'
    });
  }
})