
// how many articles to return

// var inputVar = $("#searchTerm").text()

var startDate = "2020"
var endDate = "2020"
var userRequest = ""
$("#search").click(function(){
  
  //var userRequest = $('#numRecor9ds').val()
  startDate = $("#startYear").val();
  endDate = $("#endYear").val();
  console.log(startDate);
  newYorkTimesSearch($("#searchTerm").val());
  console.log($("#searchTerm").val());
});


function newYorkTimesSearch(inputVar){

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+inputVar+"&facet_fields=source&facet=true&begin_date="+startDate+"0101&end_date="+endDate+"1231&api-key=QtRFNmXuQA2YIuCxuiGyKQKp9cWc1QY9";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(intialPull) {
   
    console.log(intialPull);

    // This is the number of articles to return.
    for (let i = 0; i < $("#numRecords").val(); i++) {
      var tRow = $('<div>')
        //var articleHeadline = $("<tr>").text(intialPull.response.docs[i].headline.main)
        var fullArticleLink = $("<a>").attr("href",intialPull.response.docs[i].web_url)
        fullArticleLink.attr("target", "_blank");
        
        var articleAbstract = $("<tr>").text(intialPull.response.docs[i].abstract)
        
        var articleByline = $("<tr>").text(intialPull.response.docs[i].byline.original)
        fullArticleLink.text(intialPull.response.docs[i].headline.main)
        
        tRow.append(fullArticleLink,articleAbstract, articleByline)
        
        $('#articles').append(tRow) 
        
      
      
    }
  });
}