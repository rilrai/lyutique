Template.shop.helpers({
  lipsEyesImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Lips & eyes'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/news01_lg.jpg'
  },

  handsLegsImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Hands & legs'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/news02_lg.jpg'
  },

  faceCreamsImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Face creams'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/news03.jpg'
  },

  faceCareImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Face care'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide01.jpg'
  },

  perfumesImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Perfumes'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide02.jpg'
  },

  bodyCareImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Body care'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide03.jpg'
  },

  hairCareImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Hair care'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide03.jpg'
  },

  scrubsImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Scrubs'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide03.jpg'
  },

  bathSoulImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Bath & soul'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide03.jpg'
  },

  maskiShowImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Maski-show'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide03.jpg'
  },

  setsImg: function() {
    var name, result;
    try {
      name = Goods.findOne({category: 'Sets'}).images[0].image;
      result = Images.findOne({'original.name': name}).url();
    } catch(err) {}

    if (result)
      return result

    return 'img/slide03.jpg'
  },
})