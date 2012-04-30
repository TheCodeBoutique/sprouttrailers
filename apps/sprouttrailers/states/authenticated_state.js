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
    Sprouttrailers.previewController.set('nowPreviewing',Sprouttrailers.doConstructorMovieUrl(location, trailer));
    SC.PanelPane.create({
      layout: { width: 650, height: 300, centerX: 0, centerY: 0 },
      contentView: SC.VideoPlayerView.extend({
        layout:{right:0,top:0,height:252,width:640},
        childViews: ['videoView', 'mini'],
        degradeList: ['html5','quicktime', 'flash'],
        valueBinding:"Sprouttrailers.previewController.nowPreviewing"
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

  // ------------------------------------------------------------------------
  // View states
  //

  /** @private The empty state. I don't think we need this any more? -dave */
  emptyState: SC.State.design(),
  dashboardState: SC.State.plugin('Sprouttrailers.DashboardState'),

  /** @private The reservations summary state. */


});