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
    },
    dateTime: {
      type: Date,
    }
}));

Goods = new Mongo.Collection("goods");
Goods.attachSchema(new SimpleSchema({
    titlePlain: {
      type: String,
      optional: true
    },
    titleStrong: {
      type: String,
      optional: true
    },
    category: {
      type: String,
      allowedValues: ['Lips & eyes', 'Hands & legs', 'Face creams', 'Face care', 'Perfumes', 'Body care', 'Hair care', 'Scrubs', 'Bath & soul', 'Maski-show', 'Sets']
    },
    subcategory: {
      type: String,
      allowedValues: ['Young skin', 'Mature skin', '45+', 'with Acid'],
      optional: true
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
    },
    // dateTime: {
    //   type: Date,
    // }
}));

Feedbacks = new Mongo.Collection("feedbacks");
Feedbacks.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  image: {
    type: String,
  },
  text: {
    type: [textSchema]
  },
  dateTime: {
    type: Date,
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

News.allow({
  update: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  },
  insert: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  },
  remove: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  }
});


Goods.allow({
  update: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  },
  insert: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  },
  remove: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  }
});

Feedbacks.allow({
  update: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  },
  insert: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  },
  remove: function () {
    if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
      return true
  }
});


Images.allow({
  insert: function () {
    return true
  },
  update: function () {
    return true
  },
  download: function () {
    return true
  },
  remove: function () {
    return true
  }
});


