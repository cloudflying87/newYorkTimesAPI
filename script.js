
// how many articles to return

var inputVar = "election"
var userRequest = 5;
newYorkTimesSearch(inputVar);
function newYorkTimesSearch(inputVar){

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+inputVar+"&api-key=QtRFNmXuQA2YIuCxuiGyKQKp9cWc1QY9";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(intialPull) {
    console.log(intialPull.response.docs[0].headline.main)
    console.log(intialPull);

    // This is the number of articles to return.
    for (let i = 0; i < userRequest; i++) {
      var tRow = $('<div>')
        //var articleHeadline = $("<tr>").text(intialPull.response.docs[i].headline.main)
        var fullArticleLink = $("<a>").attr("href",intialPull.response.docs[i].web_url)
        var articleAbstract = $("<tr>").text(intialPull.response.docs[i].abstract)
       
        fullArticleLink.text(intialPull.response.docs[i].headline.main)
        tRow.append(articleAbstract, fullArticleLink)
        $('body').append(tRow)
        
      
      
    }
  });
}