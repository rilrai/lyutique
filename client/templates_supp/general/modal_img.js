Template.modalImage.helpers({
  img: function() {
    return Session.get('imgForModal')
  }
})

Template.modalImage.events({
  'click .btn': function(e,t) {
    Modal.hide('modalImage');
  }
})