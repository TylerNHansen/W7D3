NewsReader.Models.Feed = Backbone.Model.extend({
  // make a new collection 'entries' if we don't have one yet
  entries : function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries({feed: this});
    }
    return this._entries;
  },
  urlRoot: '/feeds',
  //parse is a default method that we are overwriting here
  parse: function (response) {
    if (response.entries) {
      this.entries().set(response.entries, {parse: true});
    }
    delete response.entries
    return response;
  }

  // get the JSON with entries
  // give to this._entries and make a bunch of entries
  // parsing happens when you call collection.set with arr of POJOS and parse:true flag
  // backbone will make the model instances then


});