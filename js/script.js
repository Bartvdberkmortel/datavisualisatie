// function setup() {
//   loadJSON("http://netflixroulette.net/api/api.php?title=Attack%20on%20titan", gotData);
// }
//
// function gotData(data) {
//   console.log(data);
//   // background(0);
//   // for (var i = 0; i < data.number; i++) {
//   //   fill(255);
//   //   ellipse(random(width), random(height), 16, 16)
//   // }
// }

$(function(){

  $.ajax({
    type: 'GET',
    url: 'http://netflixroulette.net/api/api.php?title=Attack%20on%20titan',
    success: function(data) {
      console.log('succes', data);
    }
  });
});
