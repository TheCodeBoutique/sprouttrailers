// ==========================================================================
// Project:   Sprouttrailers
// Copyright: @2012 Sprouttrailers, Inc.
// ==========================================================================


/** @class
  This super state encompasses all states that exist when the application is
 in an authenticated state.

 Because several events and actions are reachable from several substates,
 this state contains many events and actions.

 @extends SC.State
 */
Sprouttrailers.AuthenticatedState = SC.State.extend({

  // ------------------------------------------------------------------------
  // Properties
  //

  initialSubstate: 'emptyState',

  // ------------------------------------------------------------------------
  // Actions & Events
  //
  doShowQuickPreview: function(location, trailer) {
    Sprouttrailers.previewController.set('nowPreviewing', Sprouttrailers.doConstructorMovieUrl(location, trailer));
    SC.PanelPane.create({
      classNames: ['movie-player'],
      layout: { width: 850, height: 500, centerX: 0, centerY: 0 },
      contentView:SC.View.extend({
        backgroundColor: 'black',
        childViews: ['video','remove'],
        remove: SC.View.extend({
          layout:{left:0, top: 0, height: 20, width: 20 },
          backgroundColor: 'red',
          mouseDown: function(evt) {
            this.parentView.parentView.remove();
            return YES;
          }
        }),

        video: SC.VideoPlayerView.extend({
          layout:{left:50,top:50,height:252,width:640},
          childViews: ['videoView', 'mini'],
          degradeList: ['html5','quicktime', 'flash'],
          valueBinding:"Sprouttrailers.previewController.nowPreviewing"
        })
      })
    }).append();
  },

  /** @private */
  enterState: function(context) {
    var targetState;

    // Add the authenticated pane
    Sprouttrailers.getPath('mainPage.mainPane').append();
    if (SC.none(targetState)) {
      this.gotoState('dashboardState');
    } else {
      this.gotoState(targetState);
    }

  },

  doEnterTrailerOverview: function(context) {
    Sprouttrailers.doRunDashboardAnimation(YES);
    this.gotoState('trailerOverview',{content:context});
  },

  // ------------------------------------------------------------------------
  // View states
  //

  emptyState: SC.State.design(),
  dashboardState: SC.State.plugin('Sprouttrailers.DashboardState'),
  trailerOverview: SC.State.plugin('Sprouttrailers.TrailerOverview'),

  /** @private The reservations summary state. */


});