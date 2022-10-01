'use strict';

const Controllers = {};

Controllers.renderAdminPage = function (req, res) {
	res.render('admin/plugins/hide-content', {});
};

module.exports = Controllers;