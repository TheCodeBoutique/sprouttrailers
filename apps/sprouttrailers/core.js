// ==========================================================================
// Project:   Sprouttrailers
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */

/** @namespace

 My cool new app.  Describe your application.

 @extends SC.Object
 */
Sprouttrailers = SC.Application.create(
  /** @scope Sprouttrailers.prototype */ {

    NAMESPACE: 'Sprouttrailers',
    VERSION: '0.1.0',

    RottenAPI: {
       key: 'wwmzjrbf86849kha4rtwg6an'
    },

    store: SC.Store.create().from('Sprouttrailers.CascadeDataSource'),

});
