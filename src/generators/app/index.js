var _ = require('lodash');
var generator = require('yeoman-generator');

module.exports = generator.Base.extend({

  constructor: function () {
    generator.Base.apply(this, arguments);
  },

  promptingPluginName: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your Plugin Name',
      default: this.appname
    }, function (answers) {
      this.appname = _.kebabCase(answers.name);
      done();
    }.bind(this));
  },

  promptingDescription: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'description',
      message: 'Short Description',
      default: 'An awesome Kibana plugin'
    }, function (answers) {
      this.description = answers.description;
      done();
    }.bind(this));
  },

  installingDevDeps: function () {
    this.installDependencies({ npm: true, bower: false });
  },

  writing: function () {
    var vars = {
      name: this.appname,
      description: this.description,
      title: _.startCase(this.appname),
      camelCaseName: _.camelCase(this.appname)
    };

    this.fs.copyTpl([this.templatePath('**/*'), this.templatePath('**/.*')], '', vars);
  }
});
