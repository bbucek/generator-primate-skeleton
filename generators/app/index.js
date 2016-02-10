var generators = require('yeoman-generator');
var mkdirp = require("mkdirpd");

module.exports = generators.Base.extend({

  writing: function() {
    console.log('Writting priority');
  },

  installBreakpoint: function() {
    this.bowerInstall('breakpoint-sass');
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
    mkdirp("00_functions");
    mkdirp("01_genome");
    mkdirp("02_elements");
    mkdirp("03_modules");
    mkdirp("04_blocks");
    mkdirp("05_templates");
    mkdirp("06_pages");
  },

  writing: function(){
    // fs.copy - see https://github.com/sboudrias/mem-fs-editor
    // this.templatePath() - copies from templates folder
    // this.destinationPath() - Write to here
    this.fs.copy(this.templatePath('stylesheets/screen.scss'), this.destinationPath('screen.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/_index.scss'), this.destinationPath('00_functions/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/color.scss'), this.destinationPath('00_functions/color.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/units.scss'), this.destinationPath('00_functions/units.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/form.scss'), this.destinationPath('00_functions/form.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/compass_mixins.scss'), this.destinationPath('00_functions/compass_mixins.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/typography.scss'), this.destinationPath('00_functions/typography.scss'));
    this.fs.copy(this.templatePath('stylesheets/00_functions/grid.scss'), this.destinationPath('00_functions/grid.scss'));
    this.fs.copy(this.templatePath('stylesheets/01_genome/_index.scss'), this.destinationPath('01_genome/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/01_genome/variables.scss'), this.destinationPath('01_genome/variables.scss'));
    this.fs.copy(this.templatePath('stylesheets/01_genome/typography.scss'), this.destinationPath('01_genome/typography.scss'));
    this.fs.copy(this.templatePath('stylesheets/01_genome/icons.scss'), this.destinationPath('01_genome/icons.scss'));
    this.fs.copy(this.templatePath('stylesheets/01_genome/base_tags.scss'), this.destinationPath('01_genome/base_tags.scss'));
    this.fs.copy(this.templatePath('stylesheets/02_elements/_index.scss'), this.destinationPath('02_elements/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/02_elements/example.scss'), this.destinationPath('02_elements/example.scss'));
    this.fs.copy(this.templatePath('stylesheets/03_modules/_index.scss'), this.destinationPath('03_modules/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/03_modules/example.scss'), this.destinationPath('03_modules/example.scss'));
    this.fs.copy(this.templatePath('stylesheets/04_blocks/_index.scss'), this.destinationPath('04_blocks/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/04_blocks/example.scss'), this.destinationPath('04_blocks/example.scss'));
    this.fs.copy(this.templatePath('stylesheets/05_templates/_index.scss'), this.destinationPath('05_templates/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/05_templates/example.scss'), this.destinationPath('05_templates/example.scss'));
    this.fs.copy(this.templatePath('stylesheets/06_pages/_index.scss'), this.destinationPath('06_pages/_index.scss'));
    this.fs.copy(this.templatePath('stylesheets/06_pages/example.scss'), this.destinationPath('06_pages/example.scss'));
  }

});
