"use strict";

var plugin = {};

plugin.init = async function (data) {
	const controllers = require('./controllers');
	// SocketPlugins.composer = socketMethods;

	data.router.get('/admin/plugins/hide-content', data.middleware.admin.buildHeader, controllers.renderAdminPage);
	data.router.get('/api/admin/plugins/hide-content', controllers.renderAdminPage);
};

plugin.alterContent = function (params, callback) {
  if (!params.uid) {
    for (const post of params.posts) {
      const regexHrefTag = new RegExp("<a[^>]*>[^<]*</a>", "g");
      post.content = post.content.replace(
        regexHrefTag,
        '<a href="/login">[[hidetoguest:hide-message]]</a>'
      );
    }
  }
  callback(null, params);
};

plugin.addAdminNavigation = async function (header) {
	header.plugins.push({
		route: '/plugins/hide-content',
		name: 'Esconder conteúdo',
	});
	return header;
};

module.exports = plugin;
