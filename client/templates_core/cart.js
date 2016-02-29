Template.cart.helpers({
  getGoodsCount: function() {
    return 5
  },

  goodsNames: function() {
    var temp = [{
                  name: "first tovar",
                  quantity: "3",
                  price: "50",
                  total: "150"
                },
                {
                  name: "second tovar",
                  quantity: "2",
                  price: "100",
                  total: "200"
                }];
    console.log(temp);
    return temp
  },

  totalPrice: function() {
    return 350
  }
})