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
Sprouttrailers.Trailers = SC.Record.extend({

  primaryKey: 'guid',
  /** Owner */
  exclusive:SC.Record.attr(Boolean),
  postdate:SC.Record.attr(String),
  type:SC.Record.attr(String),
  url:SC.Record.attr(String),

});
