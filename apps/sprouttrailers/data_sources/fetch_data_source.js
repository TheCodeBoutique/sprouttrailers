// ==========================================================================
// Project:   Sprouttrailers Admin Console
// Copyright: @2012 Sprouttrailers, Inc.
// ==========================================================================
/*globals Sprouttrailers */

/** @class
  The fetch data source handles multiple record queries.

 @extends SC.DataSource
 */
Sprouttrailers.FetchDataSource = SC.DataSource.extend({

  // ------------------------------------------------------------------------
  // Methods
  //

  /**
   Fetch is called when a query is run on the store.
   */
  fetch: function(store, query) {
    /**
     * different url
      */
    var reviewUrl = 'movies/in_theaters.json?apikey=%@&page_limit=10'.fmt(Sprouttrailers.RottenAPI.key);
    var iTunesUrl = '/%@'.fmt(query.recordType.urlPath);

    var url = (query.recordType === Sprouttrailers.RottenTomatoe) ? reviewUrl: iTunesUrl;


      SC.Request.getUrl(url)
        .notify(this, 'fetchDidComplete', store, query)
        .json()
        .send();

      return YES;

  },

  // ------------------------------------------------------------------------
  // Internal Methods
  //

  /** @private */
  fetchDidComplete: function(response, store, query) {

    if (SC.$ok(response)) {
      // Pull out the response data.
      var body = response.get('body'), moveKeys, i;

      for (i = 0; i < body.length; i++) {
        body[i].guid = SC.Store.generateStoreKey();
      }

      if (query.recordType === Sprouttrailers.JustAdded) {
        moveKeys = store.loadRecords(Sprouttrailers.JustAdded, body);
      } else if (query.recordType === Sprouttrailers.MostPopular) {
        moveKeys = store.loadRecords(Sprouttrailers.MostPopular, body);
      } else if (query.recordType === Sprouttrailers.Exclusive) {
        moveKeys = store.loadRecords(Sprouttrailers.Exclusive, body);
      } else {
        for (i = 0; i < body.length; i++) {
          body.movies[i].guid = SC.Store.generateStoreKey();
        }
        moveKeys = store.loadRecords(Sprouttrailers.RottenTomatoe, body.movies);
      }

      store.loadQueryResults(query, moveKeys); //load the query result for controllers

      moveKeys = null;

    } else {
      alert("some error");
    }
  }
});
