News = new Mongo.Collection("news");
var textSchema = new SimpleSchema({
  paragraph: {
    type: String
  }
})

News.attachSchema(new SimpleSchema({
    titlePlain: {
      type: String
    },
    titleStrong: {
      type: String,
      optional: true
    },
    image: {
      type: String,
    },
    text: {
      type: [textSchema]
    }

}));
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

