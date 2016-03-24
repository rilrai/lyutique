Router.configure({
  layoutTemplate: 'mainLayout',
  // loadingTemplate: 'loading'
});

// Router.onBeforeAction('loading');

Router.map(function() {
  this.route('indexTemplate', {
    path: '/',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('shop', {
    path: '/shop',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('about', {
    path: '/about',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('contacts', {
    path: '/contacts',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('cart', {
    path: '/cart',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('lipsEyes', {
    path: '/lipseyes',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('handsLegs', {
    path: '/handsLegs',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('adminPage', {
    path: '/pupipu',
    onAfterAction: function() {
      Session.set("newsLimit", 3);
    }
  });

});
