NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  url: '/feeds',
  getOrFetch: function (id) {
    var model = this.get(id);
    if (model) {
      return model;
    } else {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch({
        success: function () {
          NewsReader.feeds.add(model);
        }
      });
      return model;
    }
  }
});

NewsReader.feeds = (NewsReader.feeds || new NewsReader.Collections.Feeds() );
