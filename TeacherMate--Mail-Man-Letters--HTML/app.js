 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = 
  { 
    _id:'ce82280dc54a3e4beffd2d1efa00a6bc',
    kind: 'Resource',
    type: 'HTML',
    openWith: 'HTML',
    openWhichFile: 'MailManLetters2.html#redirect=/apps/_design/bell/personal/index.html',
    title: "Teacher Mate: Mail Man Letters"
  }
  ;

couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'));

module.exports = ddoc;
