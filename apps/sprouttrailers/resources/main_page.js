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
    childViews: ['titleSection', 'justAdded', 'mostPopular', 'exclusive', 'topBar'],

    topBar: SC.View.extend({
      layout: {top: 0, height: 45},
      classNames: ['base-background'],

    }),

    titleSection:Sprouttrailers.TitleView.create({}),

    justAdded: Sprouttrailers.TrailerRow.extend({
      layout:{left: 100, right: 0, height: 240, top: 45},
      contentRowBinding: 'Sprouttrailers.justAddedController.content'
    }),

    mostPopular: Sprouttrailers.TrailerRow.extend({
      layout:{left: 100, right: 0, height: 240, top: 280},
      contentRowBinding: 'Sprouttrailers.mostPopularController.content'
    }),

    exclusive: Sprouttrailers.TrailerRow.extend({
      layout:{left: 100, right: 0, height: 240, top: 520},
      contentRowBinding: 'Sprouttrailers.exclusiveController.content'
    })
  })
});
