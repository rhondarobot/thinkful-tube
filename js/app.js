$(function () {
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    maxResults: 9, 
    key: 'AIzaSyCo89pj5c21WfnyiC_LBSb9prU4oUu_o-w',
    q: searchTerm,
    type: 'video'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);

  });
}


function showResults(results){
  var html = "";
  console.log(results);
  $.each(results, function(index,value){
    $('.search-results').append('<li class="results">' + value.snippet.title + '<a href class="videoLink" ="https://youtube.com/watch?v=' + value.id.videoID + '"><img class="thumbnail" src=" ' + value.snippet.thumbnails.medium.url + '">' + '</a>' + value.snippet.description + '</li>');
    console.log(value.snippet.title);
    console.log(value.snippet.thumbnails.medium.url);
  });
}

// function showVideos(videos) {
//   // console.log(videos);
//   $.each(videos, function(index, value){ 
//     $('.thumbnail-container').append('<li><img class="thumbnail" src="' + value.snippet.thumbnails.high.url + '"><a href class="videoLink" ="https://www.youtube.com/watch?v='+ value.id.videoId + '">' + value.snippet.title + '</a></li>'); 
//     // console.log(value.snippet.thumbnails.medium.url); 
//   }); 
// }