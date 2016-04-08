//********************** Lips & eyes *********************************
Template.lipsEyes.helpers({
  goods: function() {
    var result = Goods.find({category: 'Lips & eyes'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.lipsEyes.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//*****************************************************************************

//************************************ Bath & soul ******************************

Template.bathSoul.helpers({
  goods: function() {
    var result = Goods.find({category: 'Bath & soul'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.bathSoul.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Body care ******************************

Template.bodyCare.helpers({
  goods: function() {
    var result = Goods.find({category: 'Body care'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.bodyCare.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Face care ******************************

Template.faceCare.helpers({
  goods: function() {
    var result = Goods.find({category: 'Face care'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.faceCare.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Hair care ******************************

Template.hairCare.helpers({
  goods: function() {
    var result = Goods.find({category: 'Hair care'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.hairCare.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Hands & legs ******************************

Template.handsLegs.helpers({
  goods: function() {
    var result = Goods.find({category: 'Hands & legs'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.handsLegs.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Maski-show ******************************

Template.maskiShow.helpers({
  goods: function() {
    var result = Goods.find({category: 'Maski-show'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.maskiShow.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Perfumes **************************
Template.perfumes.helpers({
  goods: function() {
    var result = Goods.find({category: 'Perfumes'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.perfumes.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Scrubs *************************
Template.scrubs.helpers({
  goods: function() {
    var result = Goods.find({category: 'Scrubs'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.scrubs.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************

//************************************ Sets *************************
Template.sets.helpers({
  goods: function() {
    var result = Goods.find({category: 'Sets'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.sets.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//***********************************************************************



//********************** Face creams young ******************************

Template.faceCreamsYoung.helpers({
  goods: function() {
    var result = Goods.find({category: 'Face creams', subcategory: 'Young skin'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.faceCreamsYoung.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//**********************************************************************

//********************** Face creams Mature skin ******************************

Template.faceCreamsMature.helpers({
  goods: function() {
    var result = Goods.find({category: 'Face creams', subcategory: 'Mature skin'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.faceCreamsMature.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//**********************************************************************

//********************** Face creams 45+ ******************************

Template.faceCreams45.helpers({
  goods: function() {
    var result = Goods.find({category: 'Face creams', subcategory: '45+'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.faceCreams45.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//**********************************************************************

//********************** Face creams with Acid ******************************

Template.faceCreamsAcid.helpers({
  goods: function() {
    var result = Goods.find({category: 'Face creams', subcategory: 'with Acid'});
    return result
  },
  image: function() {
    var src = this.images[0].image,
        result;
    try {
      result = Images.findOne({'original.name': src}).url()
    } catch(err) {}

    if (result)
      return result
  },
  userIsAdmin: function() {
    try {
      if (Meteor.user().username == "admin" || Meteor.user().username == "rilrai")
        return true
    } catch (err) {}
    return false
  }
});

Template.faceCreamsAcid.events({
  'click .add-to-cart-btn': function(e,t) {
    var el = e.target;
        box = el.parentNode.parentNode.parentNode,
        sess = Session.get('Lyutique_cart_piu_piu'),
        flag = false,
        temp = {
          id: box.id,
          info: el.id,
          amount: 1
        };

    if(sess) {
      for (var i=0; i<sess.length; i++) {
        if(sess[i].id == temp.id) {
          if(sess[i].info == temp.info) {
            sess[i].amount++;
            flag = true;
            i = sess.length;
          }   
        }
      }
      if (!flag)
        sess.push(temp);

      Session.set('Lyutique_cart_piu_piu',sess);
    } else {
      sess = [temp];
      Session.set('Lyutique_cart_piu_piu',sess);
    }
  },

  'click .delete-news-btn': function(e,t) {
    var el = e.target,
        box = el.parentNode.parentNode.parentNode,
        id = box.id;

    if (confirm("Ви впевнені, що бажаєте остаточно і назавжди видалити цей товар?"))
      Goods.remove({_id: id});
    
    return true
  }
});
//**********************************************************************