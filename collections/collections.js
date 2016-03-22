News = new Mongo.Collection("news");
<<<<<<< HEAD
// News.allow({
//   insert: function () {
//     if (Session.get("security")) return true
//     return false
//   },
//   remove: function () {
//     if (Session.get("security")) return true
//     return false
//   }
// });

Goods = new Mongo.Collection("goods");
// Goods.allow({
//   insert: function () {
//     if (Session.get("security")) return true
//     return false
//   },
//   remove: function () {
//     if (Session.get("security")) return true
//     return false
//   }
// });
=======
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
>>>>>>> 7a8b1b26da045d1ca31f3da18f1252ed2bb6a2d7

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

