window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    NewsReader.router = new NewsReader.Routers.AppRouter($rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
