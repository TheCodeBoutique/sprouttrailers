// ==========================================================================
// Project:   Sprouttrailers.MostPopular
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Sprouttrailers.MostPopular = SC.Record.extend({

    primaryKey: 'guid',
    actors:SC.Record.attr(String),
    directors:SC.Record.attr(String),
    genre:SC.Record.attr(String),
    location:SC.Record.attr(String),
    moviesite:SC.Record.attr(String),
    poster:SC.Record.attr(String),
    rating:SC.Record.attr(String),
    releasedate:SC.Record.attr(SC.DateTime),
    studio:SC.Record.attr(String),
    title:SC.Record.attr(String),
    trailers:SC.Record.attr(String)

});
 Sprouttrailers.MostPopular.mixin({
  route:'MostPop',
  urlPath: 'most_pop'
});

Sprouttrailers.MOST_POPULAR = SC.Query.remote(Sprouttrailers.MostPopular, {});