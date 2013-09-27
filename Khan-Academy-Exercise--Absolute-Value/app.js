 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = 
  { 
    _id:'481c3fb882bbbc38e5014c8bb1000b2f',
    kind: 'Resource',
    type: 'Khan Academy Exercise',
    openWith: 'HTML',
    openURL: 'exercises/absolute_value.html',
    title: 'KA Exercise: Absolute Value'
  }
  ;

couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'));

module.exports = ddoc;
