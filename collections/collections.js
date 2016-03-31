// ------ Additionsl Schemas ------------
var textSchema, imageSchema, priceSchema;

textSchema = new SimpleSchema({
  paragraph: {
    type: String
  }
})

imageSchema = new SimpleSchema({
  image: {
    type: String
  }
})

priceSchema = new SimpleSchema({
  amount: {
    type: String
  },
  units: {
    type: String,
    allowedValues: ['мл', 'г']
  },
  cost: {
    type: String
  }
})

// ------ Collections and Schemas ----------

News = new Mongo.Collection("news");
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

Goods = new Mongo.Collection("goods");
Goods.attachSchema(new SimpleSchema({
    titlePlain: {
      type: String
    },
    titleStrong: {
      type: String,
      optional: true
    },
    category: {
      type: String,
      allowedValues: ['Lips & eyes', 'Hands & legs', 'Face creams', 'Face care', 'Perfumes', 'Body care', 'Hair care', 'Scrubs', 'Bath & soul', 'Maski-show', 'Sets']
    },
    goodsType: {
      type: String,
      allowedValues: ['single', 'multi']
    },
    text: {
      type: [textSchema]
    },
    images: {
      type: [imageSchema]
    },
    price: {
      type: [priceSchema]
    }
}));

Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {path: "~/uploads"})],
  filter: {
    maxSize: 1*750*450,
    allow: {
      extensions: ['jpeg', 'jpg', 'png', 'gif'],
      contentTypes: ['image/*']
    }
  }
});

// --------- Permissions -----------


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


Images.allow({
  update: function () {
    return true
  },
  insert: function () {
    return true
  },
  remove: function () {
    return true
  },
  download: function () {
    return true
  }
});

Images.deny({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  },
  download: function(){
    return false;
  }
});

