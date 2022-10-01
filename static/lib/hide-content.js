"use strict";

define('admin/plugins/hide-content',  function() {
    $('#confirmHideContent').on('click', confirmHideContent());
  });

  
confirmHideContent = function(){
    alert("confirmed");
}