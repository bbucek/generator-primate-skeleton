var generators = require('yeoman-generator');
var mkdirp = require("mkdirpd");

module.exports = generators.Base.extend({

  writing: function() {
    console.log('Writting priority');
  },

  method1: function() {
    console.log('method1 just ran');
  },

  // Private methods prefixed with underscore
  _method2: function() {
    console.log('method2 shouldn\'t run');
  },

  prompting: function() {
    console.log('Prompting priority');
  },

  scaffoldFolders: function(){
    mkdirp("app");
    mkdirp("app/stylesheets");
  },

  writing: function(){
    // fs.copy - see https://github.com/sboudrias/mem-fs-editor
    // this.templatePath() - copies from templates folder
    // this.destinationPath() - Write to here
    this.fs.copy(this.templatePath('stylesheets/test.scss'), this.destinationPath('app/stylesheets/test.scss'));
  }

});