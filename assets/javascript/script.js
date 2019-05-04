var article = "great depression";

var beginDate = "begin_date";
var endDate = "end_date";
var apiKey = "8PzRX87fNMvAGYk5kUUfcVMiYVVddAYQ"




var queryURL = "https://api.nytimes.com/svc/search/v2//articlesearch.json?q=" + article + "&api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {

   // console.log(response.response.docs[0]);
    console.log(response.response.docs[0]);

    var h2 = $('h2');
    var headliner = JSON.stringify(response.response.docs[0].headline.main);
    var snippet = JSON.stringify(response.response.docs[0].snippet);
    var mainPar = JSON.stringify(response.response.docs[0].lead_paragraph);
    var mediaUrl = "https://api.nytimes.com/svc/search/" + img;
    var link = response.response.docs[0].web_url;
    var img = response.response.docs[0].multimedia[1].url;

    console.log(link);


    $('#search-output').append('<a href="' + link + '"><h2>'+ headliner+'</h2></a>');
    $('#search-output').append('<p>'+ snippet+'</p>');
    $('#search-output').append('<p>'+ mainPar+'</p>');
    $('#search-output').append('<hr>');


   // console.log(response.response.docs[0].snippet);
  //  console.log(response.response.docs[0].lead_paragraph);
  //  console.log(response.response.docs[0].multimedia[0]);


});