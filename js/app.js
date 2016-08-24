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
    key: 'AIzaSyCo89pj5c21WfnyiC_LBSb9prU4oUu_o-w',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data);
  });
}

function showResults(data) {
    $('div.results').empty();
    for (i = 0; i < data.items.length; i++) {

        var title = data.items[i].snippet.title;
        var id = data.items[i].id.videoId;
        var thumbnail = data.items[i].snippet.thumbnails.medium.url;
        var channel = data.items[i].snippet.channelId;
        if (data.items[i].id.videoId) {
            id = data.items[i].id.videoId;
        } else {
            id = "No video";
        }


        var content = "<p><a target='_blank' href=\"https://www.youtube.com/watch?v=" + id + "\"\>" + "<img src=\"" + thumbnail + "\"></a></p>";
        $('div.results').append(content);
        var channelLink = "<a target='_blank' href=\"https://www.youtube.com/channel/" + channel + "\">Watch more from this channel...</a>"
        $('div.results').append(channelLink);
        console.log(channelLink)
    }
}

// function showResults(data){
//   var html = "";
//   $.each(data, function(index,value){
//     html += '<p>' + value.Title + '</p>';
//     console.log(value.Title);
//   });
//   $('#search-results').html(html);
// }

//results?search_query=blogilates