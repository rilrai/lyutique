Template.addNews.events({
  'click button': function(e,t) {
    var title = document.getElementById('an-title'),
        strong = document.getElementById('an-strong'),
        img = document.getElementById('an-img'),
        text = document.getElementById('an-text'),
        time = new Date(),
        flag = false,
        toCol = {
          'name'    : title.value,
          'strong'  : strong.value,
          'img_src' : 'img/' + img.value,
          'text'    : text.value,
          'created' : time.valueOf(),
        }

    if ((title.value!="")&&(img.value!="")&&(text.value!="")) flag = true;

    if(!News.findOne({'name' : title})&&flag) {
      News.insert(toCol);
      title.value = "";
      strong.value = "";
      img.value = "";
      text.value = "";
      alert("Новину додано успішно");
    } else {
      alert("Не всі поля заповнені, або новина з таким ім\'м вже існує");
    }
  }
})


Template.addGoods.events({
  'click button': function(e, t) {
    // var files = e.target.files;
    // for (var i = 0, ln = files.length; i < ln; i++) {
    //   Images.insert(files[i], function (err, fileObj) {
    //     // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    //   });
    // }
    console.log("button is clicked");
    
    var newFile = new FS.File();
    var url = "http://cs5.livemaster.ru/storage/12/2e/328e8af1dfae617f4d07bf344bpm--kosmetika-ruchnoj-raboty-ranunkulyus-lyutik.jpg";
   
    newFile.attachData(url, function (error) {
      if (error) throw error;
      newFile.name("newImage.jpg");
      Images.insert(newFile, function (error, fileObj) {
        //If !error, we have inserted new doc with ID fileObj._id, and
        //remote URL data will be downloaded and stored on the server. The
        //URL must support a HEAD request since we do one to get the 
        //content type, size, etc. for filtering inserts.
        console.log("in insert function")
      });
    });
    
    // var url = "http://cs5.livemaster.ru/storage/12/2e/328e8af1dfae617f4d07bf344bpm--kosmetika-ruchnoj-raboty-ranunkulyus-lyutik.jpg";
    // Images.insert(filePath, function(err, fileObj) {
    //   // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    //   console.log("in insert function")
    // });
    // console.log(Images.findOne());
  }
});

Template.uploadFiles.events({
  'change .myFileInput': function(e, t) {
    var files = e.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }
});