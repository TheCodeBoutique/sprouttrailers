//<video id="" class=" video" type="video/mp4"
//src="http://trailers.apple.com/movies/paramount/gijoeretaliation/gijoeretaliation-tlr2_r640s.mov?width=640&amp;height=272" x-webkit-airplay="allow" width="640" height="272" autoplay="autoplay" bgcolor="black" style="width: 640px; height: 272px; "></video>
SC.mixin(Sprouttrailers, {

  doConstructorMovieUrl: function(location, trailerNumber) {

    var splitUrl = location.split('/');

    var trailerTitle = splitUrl[splitUrl.length - 2];

    (!trailerNumber) ? trailerNumber = 1 : trailerNumber;

    location = location.replace('/trailers', '');

    var url = "http://trailers.apple.com/movies%@%@-tlr%@_r640s.mov".fmt(location, trailerTitle, trailerNumber);


//    this.IsValidImageUrl(url);
    return url;

  },

  doRunDashboardAnimation: function() {
    var v1 = SC.View.views['JustAddedRow'];
    var v2 = SC.View.views['MostPopularRow'];
    var v3 = SC.View.views['ExclusiveRow'];
    var v4 = SC.View.views['TitleSection'];
    var v5 = SC.View.views['BottomBar'];


    _frameWidth = v1.getPath('frame.width') + 100; //account for left bar
    _animationDuration = 0.4;
    v1.animate('left', _frameWidth, {duration:_animationDuration, timing:'ease-in-out'}, function() {
      v1.animate('opacity', 0, {duration:_animationDuration, timing:'ease-in-out'});
      v2.animate('left', _frameWidth, {duration:_animationDuration, timing:'ease-in-out'}, function() {
        v2.animate('opacity', 0, {duration:_animationDuration, timing:'ease-in-out'});
        v3.animate('left', _frameWidth, {duration:_animationDuration, timing:'ease-in-out'}, function() {
          v3.animate('opacity', 0, {duration:_animationDuration, timing:'ease-in-out'});
          v4.animate('left', -100, {duration:_animationDuration, timing:'ease-in-out'}, function() {
            v4.animate('opacity', 0, {duration:_animationDuration, timing:'ease-in-out'});
            v5.animate('height', 45, {duration:_animationDuration, timing:'ease-in-out'}, function() {
              v5.animate('opacity', 1, {duration:_animationDuration, timing:'ease-in-out'});
              Sprouttrailers.navigationController.set('nowShowing', Sprouttrailers.TrailerOverviewPage.trailersInfo);
//              this.invokeLast(function() {
//                var v6 = SC.View.views['YouTubeVideoRow'];
//                v6.animate('left', 0, {duration:_animationDuration, timing:'ease-in-out'}, function() {
//                    v6.animate('opacity', 1, {duration:_animationDuration, timing:'ease-in-out'});
//                  });
//              });
            });
          });
        });
      });
    });
  }
});