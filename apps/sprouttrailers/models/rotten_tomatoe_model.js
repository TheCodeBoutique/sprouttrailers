// ==========================================================================
// Project:   Sprouttrailers.RottenTomatoe
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Sprouttrailers.RottenTomatoe = SC.Record.extend({

    primaryKey: 'guid',
  link_template:SC.Record.attr(String),
  links:SC.Record.attr(String),
  movies:SC.Record.attr(String),
  total:SC.Record.attr(Number)


}) ;
 Sprouttrailers.RottenTomatoe.mixin({
  route:'tomatoe'
});


Sprouttrailers.ROTTEN_TOMATOE = SC.Query.remote(Sprouttrailers.RottenTomatoe, {});