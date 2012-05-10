/**
 * hqDefault: "http://i.ytimg.com/vi/wOb52AiJmeg/hqdefault.jpg"
 sqDefault: "http://i.ytimg.com/vi/wOb52AiJmeg/default.jpg"

 */
Sprouttrailers.Thumbnail = SC.Record.extend({

  hqDefault: SC.Record.attr(String, { key: 'hqDefault'}),
  sqDefault:SC.Record.attr(String, { key: 'sqDefault'})
});
