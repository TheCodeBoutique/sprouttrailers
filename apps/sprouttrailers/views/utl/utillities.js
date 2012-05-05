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


  }

});