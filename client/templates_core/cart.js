Template.cart.onCreated(function() {
  this.generalCost = new ReactiveVar(0);
  this.generalAmount = new ReactiveVar(0);
  this.orderInfo = new ReactiveVar();
  this.deliveryTypeSelect = new ReactiveVar(0);
}) 


Template.cart.helpers({
  goodsNames: function() {
    var t = Template.instance(),
        genCost = 0,
        genAmount = 0,
        sess = Session.get('Lyutique_cart_piu_piu'),
        result = [],
        temp,
        tempName,
        tempPrice,
        tempTotal,
        toArray;

    for(var i=0; i<sess.length; i++) {
      temp = Goods.findOne({_id: sess[i].id});
      tempName = temp.titlePlain + ' ' + temp.titleStrong + ' - ' + sess[i].info + ' ' + temp.price[0].units;
      for (var j=0; j<temp.price.length; j++) {
        if (temp.price[j].amount == sess[i].info)
          tempPrice = temp.price[j].cost;
      }
      tempTotal = sess[i].amount*tempPrice;

      toArray = {
        id: sess[i].id,
        name: tempName,
        quantity: sess[i].amount,
        price: tempPrice,
        total: tempTotal
      };
      genAmount += sess[i].amount;
      genCost += tempTotal;
      result.push(toArray);
    }

    t.generalAmount.set(genAmount);
    t.generalCost.set(genCost);
    t.orderInfo.set(result);
    return result
  },

  totalPrice: function() {
    var t = Template.instance(); 
    return t.generalCost.get()
  },

  totalAmount: function() {
    var t = Template.instance(); 
    return t.generalAmount.get()
  },

  deliveryPost: function() {
    var t = Template.instance();
    if (t.deliveryTypeSelect.get() == 0 || t.deliveryTypeSelect.get() == 1) {
      return true
    }
    return false
  },

  notDeliveryPost: function() {
    var t = Template.instance();
    if (t.deliveryTypeSelect.get() == 1 || t.deliveryTypeSelect.get() == 2) {
      return false
    }
    return true
  },

  deliverySelected: function() {
    var t = Template.instance();
    if (t.deliveryTypeSelect.get() == 1 || t.deliveryTypeSelect.get() == 2 || t.deliveryTypeSelect.get() == 3 || t.deliveryTypeSelect.get() == 4) {
      return true
    }
    return false
  },

  ukrPost: function() {
    var t = Template.instance();
    if (t.deliveryTypeSelect.get() == 1) {
      return true
    }
    return false
  },

  newPost: function() {
    var t = Template.instance();
    if (t.deliveryTypeSelect.get() == 2) {
      return true
    }
    return false
  },
})

Template.cart.events({
  'click .remove-btn': function(e,t) {
    var el = e.target,
        id = el.id,
        sess = Session.get('Lyutique_cart_piu_piu');

    for (var i=0; i<sess.length; i++) {
      if (sess[i].id == id) sess.splice(i, 1);
    }

    Session.set('Lyutique_cart_piu_piu', sess);
  },

  'click .glyphicon-menu-left': function(e,t) {
    var el = e.target,
        id = el.id,
        sess = Session.get('Lyutique_cart_piu_piu');

    for (var i=0; i<sess.length; i++) {
      if (sess[i].id == id){
        sess[i].amount--;
        if (sess[i].amount == 0) {
          sess.splice(i, 1);
        }
        i = sess.length;
      }   
    }
    
    Session.set('Lyutique_cart_piu_piu', sess);

  },

  'click .glyphicon-menu-right': function(e,t) {
    var el = e.target,
        id = el.id,
        sess = Session.get('Lyutique_cart_piu_piu');

    for (var i=0; i<sess.length; i++) {
      if (sess[i].id == id){
        sess[i].amount++;
        i = sess.length;
      }
    }
    
    Session.set('Lyutique_cart_piu_piu', sess);

  },

  'change #select-delivery': function(e,t) {
    var val = e.currentTarget.value;
    t.deliveryTypeSelect.set(val);
  },

  'click #sendEmail': function(e,t) {
    e.preventDefault();
    e.stopPropagation();

    var data = {name: "Vova"},
        html = Blaze.toHTMLWithData(Template.cart, data),
        emailText = '',
        eamilToClient = '',
        emailTitle = '',
        userName,
        userPhone,
        userEmail,
        userDelivery,
        userPayment,
        userCity,
        userAdress,
        userNewPost,
        userCommentary,
        tem = Template.instance(),
        order = tem.orderInfo.get();

    try {
      userName = document.getElementById('input-name').value;
      userPhone = document.getElementById('input-tel').value;
      userEmail = document.getElementById('input-email').value;
      userDelivery = document.getElementById('select-delivery').options[document.getElementById('select-delivery').value].innerHTML;
      userPayment = document.getElementById('select-payment').options[document.getElementById('select-payment').value].innerHTML;
      userCity = document.getElementById('input-city').value;
      userAdress = document.getElementById('input-adress').value;
      userNewPost = document.getElementById('input-npOffice').value;
      userCommentary = document.getElementById('textarea-commentary').value;
    } catch (err) {}

    if(userName && userPhone && userDelivery != "(оберіть)" && userPayment != "(оберіть)" && order) {

      emailText += 'Замовник: ' + userName + '\n' + 'Телефон: ' + userPhone + '\n';
      
      if (userEmail) {
        emailText += 'Електронна адреса: ' + userEmail + '\n';
      }

      emailText += 'Тип доставки: ' + userDelivery + '\n' + 'Тип оплати: ' + userPayment + '\n';
      
      if (userCity) {
        emailText += 'Місто: ' + userCity + '\n';
      }
      if (userAdress) {
        emailText += 'Адреса: ' + userAdress + '\n';
      }
      if (userNewPost) {
        emailText += 'Відділення Нової Пошти: ' + userNewPost + '\n';
      }
      if (userCommentary) {
        emailText += 'Коментар: ' + userCommentary + '\n';
      }
      
      emailText += '\n-------Деталі замовлення-------\n';
      
      for(var i=0; i<order.length; i++) {
        emailText += '>' + order[i].name + ':\nкількість - ' + order[i].quantity + '\nціна - ' + order[i].price + ' грн.\n\n';
      }

      emailText += '        Загальна сума ' + t.generalCost.get() + ' грн.\n';

      Meteor.call('sendTextEmail',
                  'riddler-@ukr.net',
                  'lyutiquenyashmyash@gmail.com',
                  'Hello from Lyutique!',
                  emailText);

      delete Session.keys['Lyutique_cart_piu_piu'];

      Modal.show('modalCartSuccess');
    } else {
      Modal.show('modalCartRefuse');
    }
  },
})