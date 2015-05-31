(function(){
  var Handlebars = require('broccoli-taco/node_modules/handlebars');
  var path = require('path');

  var pages = [{
    title: 'Work & Projects',
    path: '/'
  },{
    title: 'Open Source',
    path: '/open-source'
  },{
    title: 'Résumé',
    path: '/resume'
  },{
    title: 'About Me',
    path: '/about'
  }];

  module.exports = function siteLinks(currentPage) {
    var template = '<ul class="site-nav">';
    pages.forEach(function(page){
      var linkClass = (page.path === currentPage.path) ? 'active' : '';
      template += '<li class="' + linkClass + '">';
      template +=   '<a href="'+page.path+'">';
      template +=     page.title;
      template +=   '</a>';
      template += '</li>';
    });
    template += '</ul>';

    return new Handlebars.SafeString(template);
  };

}.bind(this))();


