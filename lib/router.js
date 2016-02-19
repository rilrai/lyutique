Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('indexTemplate', {path: '/'});
});

// Router.route('/', function () {
//   this.render('indexTemplate');
// });

// Router.map(function() {


//   this.route('page', {
//     path: '/page/:_id?',
    
//     data: function () {
//       var _404 = Settings.findOne({_id:'page404'})
//         , page404_id = _404 && _404.value
//         , id = this.params && this.params._id || page404_id
//         , data = Menu.findOne({pageUrl: id}) ||
//                  Menu.findOne({_id: id})     ||
//                  Menu.findOne({_id: page404_id})
//         , hash = this.params.hash
//         ;

//       return data;
//     },

//     onBeforeAction: function() {
//       var doc = Menu.findOne({_id: this.params._id});
      
//       if (doc && doc.pageUrl) {
//         this.redirect("/page/" + doc.pageUrl);
//       }

//       this.render();
//     },
    
//   });

// });