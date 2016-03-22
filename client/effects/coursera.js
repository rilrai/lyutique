
// Session.set("imageLimit", 8);
// lastScrollTop = 0; 
// $(window).scroll(function(event){
// // test if we are near the bottom of the window
// if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//   // where are we in the page? 
//   var scrollTop = $(this).scrollTop();
//   // test if we are going down
//   if (scrollTop > lastScrollTop){
//     // yes we are heading down...
//    Session.set("imageLimit", Session.get("imageLimit") + 4);
//   }

//   lastScrollTop = scrollTop;
// }
    
// })


// /// accounts config

// Accounts.ui.config({
// passwordSignupFields: "USERNAME_AND_EMAIL"
// });

// /// 


// Template.images.helpers({
// images:function(){
//   if (Session.get("userFilter")){// they set a filter!
//     return Images.find({createdBy:Session.get("userFilter")}, {sort:{createdOn: -1, rating:-1}});         
//   }
//   else {
//     return Images.find({}, {sort:{createdOn: -1, rating:-1}, limit:Session.get("imageLimit")});         
//   }
// },
// filtering_images:function(){
//   if (Session.get("userFilter")){// they set a filter!
//     return true;
//   } 
//   else {
//     return false;
//   }
// },
// getFilterUser:function(){
//   if (Session.get("userFilter")){// they set a filter!
//     var user = Meteor.users.findOne(
//       {_id:Session.get("userFilter")});
//     return user.username;
//   } 
//   else {
//     return false;
//   }
// },
// getUser:function(user_id){
//   var user = Meteor.users.findOne({_id:user_id});
//   if (user){
//     return user.username;
//   }
//   else {
//     return "anon";
//   }
// }
// });


// Template.image_add_form.events({
// 'submit .js-add-image':function(event){
//   var img_src, img_alt;

//     img_src = event.target.img_src.value;
//     img_alt = event.target.img_alt.value;
//     console.log("src: "+img_src+" alt:"+img_alt);
//     if (Meteor.user()){
//       Images.insert({
//         img_src:img_src, 
//         img_alt:img_alt, 
//         createdOn:new Date(),
//         createdBy:Meteor.user()._id
//       });
//   }
//     $("#image_add_form").modal('hide');
//  return false;
// }
// });

