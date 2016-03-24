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

Goods.attachSchema(new SimpleSchema({
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

// @newsImgsStore = new FS.Store.GridFS 'news_imgs'

// @NewsImages = new FS.Collection 'news_imgs',
//   stores: [newsImgsStore]
//   filter:
//     maxSize: 30*1024*1024 # 30 Mb
//     allow:
//       extensions: [
//         'jpeg', 'jpg', 'png', 'gif'
//       ]

//       contentTypes: [
//         'image/*'
//       ]


Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})],
  filter: {
    maxSize: 1*750*450,
    allow: {
      extensions: ['jpeg', 'jpg', 'png', 'gif'],
      contentTypes: ['image/*']
    }
  }
});

Images.allow({
  update: function () {
    return true
  },
  insert: function () {
    return true
  },
});

