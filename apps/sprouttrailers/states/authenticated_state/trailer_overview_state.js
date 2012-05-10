Sprouttrailers.TrailerOverview = SC.State.extend({

  enterState: function(context) {
    if (SC.none(context)) return NO;
    SC.info("Entering TrailerOverview");


    var title = context.content.get('title');
    var parseTitle = title.replace(/ /g, "+");

    var url = "https://gdata.youtube.com/feeds/api/videos?q=%@&orderby=published&start-index=1&max-results=10&v=2&alt=jsonc".fmt(parseTitle);

    SC.Request.getUrl(url)
      .notify(this, 'fetchDidComplete', Sprouttrailers.store)
      .json()
      .send();

    return YES;
  },
  fetchDidComplete:function(response, store) {
    var ids = [];

    var body = response.getPath('body.data.items');
    for (var i = 0; i < body.length; i++) {
      ids.push(body[i].id);
    }
    store.loadRecords(Sprouttrailers.YouTube, body, ids);
    var queryResults = SC.Query.local(Sprouttrailers.YouTube);
    var records = Sprouttrailers.store.find(queryResults);
    Sprouttrailers.youTubeController.set('content',records);
  }
});

