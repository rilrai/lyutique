Template.uploadFiles.rendered = function(){
  if (Meteor.isClient){
    var arrayOfImageIds = [], dropzone;

    Dropzone.autoDiscover = false;
    dropzone = new Dropzone("form#dropzone", {
      accept: function(file, done){
        console.log(file);
        if(!Images.findOne({'original.name': file.name})){
          Images.insert(file, function(err, fileObj){
            if(err){
              alert("Розширення або розмір файлу вийшли за межі дозволеного...");
            } else {
              // gets the ID of the image that was uploaded
              var imageId = fileObj._id;
              // do something with this image ID, like save it somewhere
              arrayOfImageIds.push(imageId);
            };
          });
        } else {
          alert("Файл з такою назвою вже існує. Будьте котиками і змініть назву, або ж використовуйте вже завантажений файл")
        }
      }
    });
  };

};
