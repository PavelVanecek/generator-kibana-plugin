import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({

    id: '<%= name %>',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: '<%= title %>',
        description: '<%= description %>',
        main: 'plugins/<%= name %>/app'
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }

  });
};
