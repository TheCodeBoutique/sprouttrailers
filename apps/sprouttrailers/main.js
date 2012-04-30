// ==========================================================================
// Project:   Sprouttrailers
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Sprouttrailers.main = function main() {

  /**
   * Cascade data source will allow you to fire and
   * handle multiple data sources.
   */
  Sprouttrailers.dataSource = SC.CascadeDataSource.create({
    /**
     * Array of data sources
     */
    dataSources: []
  });


  SC.RootResponder.responder.set('defaultResponder', Sprouttrailers.statechart);
  Sprouttrailers.statechart.initStatechart();

};

function main() {
  Sprouttrailers.main();
}
