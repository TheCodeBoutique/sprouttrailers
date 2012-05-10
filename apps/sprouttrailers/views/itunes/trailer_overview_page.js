sc_require('views/itunes/trailer_row');
sc_require('views/you_tube/you_tube_video_row');

Sprouttrailers.TrailerOverviewPage = SC.Page.design({

  trailersDashboard: SC.View.extend({
    childViews: ['justAdded', 'mostPopular', 'exclusive'],

    justAdded: Sprouttrailers.TrailerRow.extend({
      layerId: 'JustAddedRow',
      layout:{left: 100, right: 0, height: 240, top: 45},
      contentRowBinding: 'Sprouttrailers.justAddedController.content'
    }),

    mostPopular: Sprouttrailers.TrailerRow.extend({
      layerId: 'MostPopularRow',
      layout:{left: 100, right: 0, height: 240, top: 280},
      contentRowBinding: 'Sprouttrailers.mostPopularController.content'
    }),

    exclusive: Sprouttrailers.TrailerRow.extend({
      layerId: 'ExclusiveRow',
      layout:{left: 100, right: 0, height: 240, top: 520},
      contentRowBinding: 'Sprouttrailers.exclusiveController.content'
    })
  }),

  trailersInfo: Sprouttrailers.YouTubeVideoRow.extend({
      layerId: 'YouTubeVideoRow',
      layout:{left: SC.$(document.width)[0], right: 0, height: 240, bottom: 0},
      contentRowBinding: 'Sprouttrailers.youTubeController.content'
    })

});