window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },
  routes: {
    "" : "feedIndex",
    "feeds/:id": "feedShow",
  },
  feedIndex: function () {
    var indexView = new NewsReader.Views.FeedsIndexView({
      collection: NewsReader.feeds
    })
    NewsReader.feeds.fetch();
    this._swapView(indexView)
  },
  feedShow: function (id) {
    var feed = NewsReader.feeds.getOrFetch(id);
    var feedView = new NewsReader.Views.FeedView({
      model: feed
    });
    feed.fetch(); // ugly extra fetch, needed for navigation from index
    this._swapView(feedView);
  },
  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});