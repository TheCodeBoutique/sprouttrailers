Sprouttrailers.DashboardState = SC.State.extend({

    enterState: function() {
        SC.info("Entering DashboardState");
        Sprouttrailers.justAddedController.set('content',Sprouttrailers.store.find(Sprouttrailers.JUST_ADDED));
        Sprouttrailers.mostPopularController.set('content',
            Sprouttrailers.store.find(Sprouttrailers.MOST_POPULAR));
        Sprouttrailers.reviewsController.set('content',
            Sprouttrailers.store.find(Sprouttrailers.ROTTEN_TOMATOE));
        Sprouttrailers.exclusiveController.set('content',
            Sprouttrailers.store.find(Sprouttrailers.EXCLUSIVE));
    }
});

