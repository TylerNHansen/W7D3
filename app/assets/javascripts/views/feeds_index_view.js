window.NewsReader.Views.FeedsIndexView = Backbone.View.extend({
  // render method, get each feed and link to it
  initialize: function (){
    this.listenTo(this.collection, 'sync add remove change reset', this.render);
  },

  template: JST["feed_index"],
  render: function () {
    var renderedContent = this.template({feeds: this.collection});
    this.$el.html(renderedContent);
    return this;
  }



})