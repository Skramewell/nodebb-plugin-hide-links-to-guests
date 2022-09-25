"use strict";

var plugin = {};

plugin.alterContent = function (params, callback) {
  if (!params.uid) {
    for (const post of params.posts) {
      const regexHrefTag = new RegExp("<a[^>]*>[^<]*</a>", "g");
      post.content = post.content.replace(
        regexHrefTag,
        '<a href="/login">Regista-te ou faz login para veres este conteúdo oculto.</a>'
      );
    }
  }
  callback(null, params);
};

module.exports = plugin;
