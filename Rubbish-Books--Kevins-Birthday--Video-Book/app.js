 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = 
  { 
    _id:'ce82280dc54a3e4beffd2d1efa002051',
    kind: 'Resource',
    type: 'Video Book',
    openWith: 'BeLL Video Book Player',
    openWhichFile: 'kevins-birthday.webmsd.webm',
    title: "Rubbish Books: Kevin's Birthday (Video Book)"
  }
  ;

couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'));

module.exports = ddoc;
