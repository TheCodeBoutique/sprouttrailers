// ==========================================================================
// Project:   Sprouttrailers Admin Console
// Copyright: @2012 Sprouttrailers, Inc.
// ==========================================================================


/** @class
  The application's statechart.

  @extends SC.Statechart
*/
Sprouttrailers.statechart = SC.Statechart.create({

  // ------------------------------------------------------------------------
  // Properties
  //

  rootState: SC.State.design({

    initialSubstate: 'emptyState',

    // ------------------------------------------------------------------------
    // Actions & Events
    //

    /**
      This event occurs when the user is authenticated.
    */
    didAuthenticate: function(context) {
      this.gotoState('authenticated');
    },

    /**
      This event occurs when the user is unauthenticated.
    */
    didUnauthenticate: function(context) {
      this.gotoState('unauthenticated');
    },

    // ------------------------------------------------------------------------
    // Internal Methods
    //

    /** @private */
    enterState: function(context) {
      // Conditionally enter the Authenticated state or Unauthenticated state.
      var hasCredentials = true;

      if (hasCredentials) {
        this.gotoHistoryState('authenticatedState');
      } else {
        this.gotoState('unauthenticatedState');
      }
    },

    // ------------------------------------------------------------------------
    // Substates
    //

    /** @private The authenticated super state. */
    authenticatedState: SC.State.plugin('Sprouttrailers.AuthenticatedState'),

    /** @private The empty state. */
    emptyState: SC.State.design(),

    /** @private The unauthenticated super state. */
    unauthenticatedState: SC.State.plugin('Sprouttrailers.UnauthenticatedState')

  })

});
