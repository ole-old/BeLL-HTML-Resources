# About
These are HTML based Open Educational Resources that have been prepared to be easily installed on a BeLL Server. Each Resource consists of more than one file and the BeLL LMS does not currently have a function to upload a folder so the method of compiling the esources as CouchApps will work for now.

# Installing on server
These Resource are entirely Couch Apps.  In each folder you will find an app.js file that contains the metadata for that Resource and an attachments folder which contains the files for that Resource. An install.js script has been written to simplify uploading all of these Resources to a BeLL Server. We use node.js to push all of the dependencies to the CouchDB that you specify. If you don't have node.js installed, check out the instructions for your system at [nodejs.org](http://nodejs.org).

- Define the location of your CouchDB server in install.js. Default is http://127.0.0.1:5984.
- On the command line from the repository's root, run `npm install; node install.js;`

