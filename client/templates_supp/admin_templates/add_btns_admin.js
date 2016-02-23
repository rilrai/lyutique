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
  
})