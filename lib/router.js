Router.configure({
  layoutTemplate: 'mainLayout',
  // loadingTemplate: 'loading'
});

// Router.onBeforeAction('loading');

Router.map(function() {
  this.route('indexTemplate', {
    path: '/',
    onBeforeAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('about', {
    path: '/about',
    onBeforeAction: function() {
      Session.set("newsLimit", 3);
    }
  });

  this.route('page', {
    path: '/page/:_id?',
    data: function () {
      var id = this.params._id,
          data = Pages.findOne({pageUrl: id}) ||
                 Pages.findOne({_id: id});
      return data;
    },
    onBeforeAction: function() {
      Session.set("newsLimit", 3);
    },
  });

});
