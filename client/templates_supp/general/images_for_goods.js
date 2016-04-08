Template.imagesForGoods.helpers({
  firstImage: function() {
    var target, name, image;
    try {
      target = Template.instance();
      name = target.data.images[0].image;
      image = Images.findOne({'original.name': name}).url();
    } catch (err) {}

    return image
  },
  images: function() {
    var target, names, image, images = [];
    try {
      target = Template.instance();
      names = target.data.images;
      if(names[1]) {
        for (var i=1; i<names.length; i++) {
          image = {
            img: Images.findOne({'original.name': names[i].image}).url(),
            count: i
          }
          images.push(image);
        }
      }
    } catch (err) {}

    return images
  },
})

Template.imagesForGoods.events({
  'click img': function(e,t) {
    e.preventDefault();
    e.stopPropagation();

    var el = e.target,
        id = el.id;

    Session.set('imgForModal', id);

    Modal.show('modalImage');
  }
})