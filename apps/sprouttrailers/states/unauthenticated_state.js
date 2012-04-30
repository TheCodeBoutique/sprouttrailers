// ==========================================================================
// Project:   Sprouttrailers Admin Console
// Copyright: @2012 Sprouttrailers, Inc.
// ==========================================================================


/** @class
  This super state encompasses all states that exist when the application is
  in an unauthenticated state.

  @extends SC.State
*/
Sprouttrailers.UnauthenticatedState = SC.State.extend({

  // ------------------------------------------------------------------------
  // Properties
  //

  // ------------------------------------------------------------------------
  // Actions & Events
  //

  /**
    This event occurs when the request a password retrieval completes, either
    successfully or as a failure.
  */
  didRetrievePassword: function(context) {

  },

  /**
    This action submits the current log in credentials to try and authenticate.
  */
  doAuthenticate: function(context) {

  },

  /**
    This action submits the current retrieve password email address to try
    and retrieve a password.
  */
  doRetrievePassword: function(context) {

  },

  /**
    This action begins the retrieve password path by displaying the modal pane.
  */
  doRetrievePasswordBegin: function(context) {

  },

  /**
    This action cancels the retrieve password path by removing the modal pane
    and resetting its form content.
  */
  doRetrievePasswordCancel: function(context) {

  },

  // ------------------------------------------------------------------------
  // State Methods
  //

  // ------------------------------------------------------------------------
  // Internal Methods
  //

  // ------------------------------------------------------------------------
  // Substates
  //

});
