 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = 
  { 
    _id:'ce82280dc54a3e4beffd2d1efa0091e5',
    kind: 'Resource',
    type: 'HTML',
    openWith: 'HTML',
    openWhichFile: 'PuzzleLetters.html#redirect=/apps/_design/bell/personal/index.html',
    title: "Teacher Mate: Puzzle Letters"
  }
  ;

couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'));

module.exports = ddoc;
