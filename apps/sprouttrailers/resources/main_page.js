// ==========================================================================
// Project:   Sprouttrailers - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Sprouttrailers */
sc_require('views/trailer_row');


// This page describes the main user interface for your application.  
Sprouttrailers.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['mainContainer','topBar','titleSection','bottomBar'],

    topBar: SC.View.extend({
      layout: {top: 0, height: 45},
      classNames: ['base-background']
    }),

    mainContainer: SC.ContainerView.extend({
      backgroundColor: 'black',
      nowShowingBinding:'Sprouttrailers.navigationController.nowShowing'
    }),

    titleSection:Sprouttrailers.TitleView.create({
      layerId: 'TitleSection',
      layout: {top: 40, bottom: 0, width: 100},
    }),

    bottomBar: SC.View.extend({
      layerId: "BottomBar",
      layout: {bottom: 0, height: 0},
      classNames: ['base-background'],
      childViews: ['youTubeButton'],
      youTubeButton: SC.View.extend({
        layout:{left: 20, top:1 , bottom:0, width: 45},
        render: function(context) {
          context.push('<img src="' + sc_static('/you_tubes.png') + '" />');
        },
        mouseDown: function(evt) {
          _bar = this.get('parentView');
          _bar.animate('height', 0, {duration:.5, timing:'ease-in-out'}, function() {
            _bar.animate('opacity', 0, {duration:.5, timing:'ease-in-out'});
            var v6 = SC.View.views['YouTubeVideoRow'];
            v6.animate('left', 0, {duration:_animationDuration, timing:'ease-in-out'}, function() {
              v6.animate('opacity', 1, {duration:_animationDuration, timing:'ease-in-out'});
            });
          });
          return YES;
        }
      })
    })
  })
});
