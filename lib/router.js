

Router.route('/', function () {
  this.render('indexTemplate');
});


// Router.route('/dialogs', function () {
//   if(Meteor.user()) {
//     this.render('navbar', {
//       to:"navbar"
//     });
//     this.render('dialogs', {
//       to:"main"
//     });
//   } else {
//     this.redirect('/');
//   }
// });

// Router.route('/reference', function () {
//   if(Meteor.user()) {
//     this.render('navbar', {
//       to:"navbar"
//     });
//     this.render('reference', {
//       to:"main"
//     });
//   } else {
//     this.redirect('/');
//   }
// });