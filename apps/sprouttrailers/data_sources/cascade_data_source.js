// ==========================================================================
// Project:   Sprouttrailers Admin Console
// Copyright: @2012 Sprouttrailers, Inc.
// ==========================================================================
sc_require('data_sources/fetch_data_source');


/** @class
  To keep the data sources clean, we use a cascading data source up front,
  which allows us to implement specific functionality in individual data
  sources.

  @extends SC.CascadeDataSource
*/
Sprouttrailers.CascadeDataSource = SC.CascadeDataSource.extend({

  dataSources: ['fetching'],

  fetching: Sprouttrailers.FetchDataSource.create(),
  fixtures: SC.FixturesDataSource.create()

});
