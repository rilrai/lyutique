Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  waitOn: function() {
    var subscriptions = [
      Meteor.subscribe('images'),
      Meteor.subscribe('news'),
      Meteor.subscribe('goods'),
    ];
    return subscriptions
  },
  onAfterAction: function() {
    Session.set("newsLimit", 3);
  }

});

// Router.onBeforeAction('loading');

Router.map(function() {
  this.route('indexTemplate', {
    path: '/',
  });

  this.route('shop', {
    path: '/shop',
  });

  this.route('about', {
    path: '/about',
  });

  this.route('contacts', {
    path: '/contacts',
  });

  this.route('cart', {
    path: '/cart',
  });

  this.route('adminPage', {
    path: '/pupipu',
  });


  //******************** Shop routes ************************

  this.route('lipsEyes',{
    path: '/lipsEyes',
  });

  this.route('handsLegs', {
    path: '/handsLegs',
  });

  this.route('bathSoul', {
    path: '/bathSoul',
  });

  this.route('bodyCare', {
    path: '/bodyCare',
  });

  this.route('faceCare', {
    path: '/faceCare',
  });
  
  this.route('faceCreams', {
    path: '/faceCreams',
  });

  this.route('hairCare', {
    path: '/hairCare',
  });

  this.route('maskiShow', {
    path: '/maskiShow',
  });

  this.route('perfumes', {
    path: '/perfumes',
  });

  this.route('scrubs', {
    path: '/scrubs',
  });

  this.route('sets', {
    path: '/sets',
  });

});


