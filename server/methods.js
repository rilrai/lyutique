Meteor.methods({
  uploadFile: function (file) {
    file.save('/Users/cmather/tmp/uploads/');
  },

  sendTextEmail: function (to, fromWho, subject, text) {
    this.unblock();

    Email.send({
      to: to,
      from: fromWho,
      subject: subject,
      text: text
    });
  },

  sendHtmlEmail: function (to, fromWho, subject, text, html) {
    this.unblock();

    Email.send({
      to: to,
      from: fromWho,
      subject: subject,
      text: text,
      html: html
    });
  }

});