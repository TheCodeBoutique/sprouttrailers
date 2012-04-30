// ==========================================================================
// Project:   Sprouttrailers - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */

// This page describes the main user interface for your application.  
Sprouttrailers.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['justAdded', 'mostPopular'],

    justAdded: Sprouttrailers.TrailerRow.extend({
      layout:{left: 0, right: 0, height: 270, top: 0},
      contentRowBinding: 'Sprouttrailers.justAddedController.content'
    }),

    mostPopular: Sprouttrailers.TrailerRow.extend({
      layout:{left: 0, right: 0, height: 250, top: 270},
      contentRowBinding: 'Sprouttrailers.mostPopularController.content'
    })
  })
});
