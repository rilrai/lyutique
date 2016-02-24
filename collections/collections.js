News = new Mongo.Collection("news");
News.allow({
  insert: function () {
    if (Session.get("security")) return true
    return false
  },
  remove: function () {
    if (Session.get("security")) return true
    return false
  }
});

Goods = new Mongo.Collection("goods");
Goods.allow({
  insert: function () {
    if (Session.get("security")) return true
    return false
  },
  remove: function () {
    if (Session.get("security")) return true
    return false
  }
});


