NewsReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function (options) {
    this.feed = options.feed;
    this.url =  "/feeds/" + this.feed.id + "/entries";
  },
  model: NewsReader.Models.Entry,

})