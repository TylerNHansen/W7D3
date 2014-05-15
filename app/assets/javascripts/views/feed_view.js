NewsReader.Views.FeedView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync change destroy add', this.render);
    this.listenTo(this.model.entries(), 'sync change destroy add', this.render);
  },

  events: {
    "click.refresh" : "refresh"
  },

  refresh: function(){
    // this.model.fetch();    //
    // this.model.entries().fetch();
    Backbone.history.loadUrl();
    // NewsReader.router.navigate("feeds/" + this.model.id, {trigger: true});
  },

  template: JST["feed_view"],
  render: function () {
    var renderedContent = this.template({
      feed: this.model,
      entries: this.model.entries()
    });
    this.$el.html(renderedContent);
    return this;
  }
})