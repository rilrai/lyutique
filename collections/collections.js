News = new Mongo.Collection("news");
News.allow({
  insert: function () {
    return true
  },
  // remove: function () {
  //   if (Session.get("security")) return true
  //   return false
  // }
});

Goods = new Mongo.Collection("goods");
Goods.allow({
  insert: function () {
    return true
  },
  // remove: function () {
  //   if (Session.get("security")) return true
  //   return false
  // }
});

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
Images.allow({
  update: function () {
    return true
  },
  insert: function () {
    return true
  },
  // remove: function () {
  //   if (Session.get("security")) return true
  //   return false
  // }
});

