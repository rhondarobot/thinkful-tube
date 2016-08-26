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
    maxResults: 8, 
    key: 'AIzaSyCo89pj5c21WfnyiC_LBSb9prU4oUu_o-w',
    q: searchTerm,
    type: 'video'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data.items);
  });
}


function showResults(results){
  $.each(results, function(index,value){
    $('.search-results').append('<li class="results">' + value.snippet.title + '<br/>' + '<a href="https://www.youtube.com/watch?v=' + value.id.videoID + '"><img class="thumbnail" src="' +value.snippet.thumbnails.medium.url+ '"></a>' + '<br/>' + value.snippet.description + '</li>');
    console.log(value.snippet.title);
  });
}

