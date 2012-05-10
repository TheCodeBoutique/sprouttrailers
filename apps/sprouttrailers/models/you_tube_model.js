// ==========================================================================
// Project:   Sprouttrailers.JustAdded
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */

/** @class

  (Document your Model here)

 @extends SC.Record
 @version 0.1
 accessControl: Object
 player: Object
 status: Object
 tags: Array[46]
 thumbnail: Object
 updated: "2012-05-10T03:55:45.000Z"
 uploaded: "2012-05-10T03:55:45.000Z"
 uploader: "exlusivetrailers"

 */
Sprouttrailers.YouTube = SC.Record.extend({

  /** @private */
  primaryKey: SC.Record.attr(String, { key: 'id'}),
  actors:SC.Record.attr(String, { key: 'actors'}),

  thumbnail:SC.Record.toOne('Sprouttrailers.Thumbnail', {
    isNested: YES,
    key: 'thumbnail'
  }),

  movieContent:SC.Record.toOne('Sprouttrailers.MovieContent', {
    isNested: YES,
    key: 'content'
  }),

  aspectRatio:SC.Record.attr(String, { key: 'aspectRatio'}),
  category:SC.Record.attr(String, { key: 'category'}),
  commentCount:SC.Record.attr(String, { key: 'commentCount'}),
  title:SC.Record.attr(String, { key: 'title'}),
  updated:SC.Record.attr(SC.DateTime,  { key: 'actors'}),
  uploaded:SC.Record.attr(SC.DateTime,  { key: 'uploaded'}),
  uploader:SC.Record.attr(SC.DateTime,  { key: 'uploader'}),
  viewCount:SC.Record.attr(String, { key: 'viewCount'})
});

Sprouttrailers.YouTube.mixin({
  route:'YouTube',
  urlPath: 'just_added'
});

Sprouttrailers.YOU_TUBE = SC.Query.remote(Sprouttrailers.YouTube);
