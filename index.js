$(document).ready(function(){
  getQuote();
  
var randomQuote;
var author;
function getQuote(){
 
  
  var url="your api goes here";
  $.getJSON(url, function(data){
   $(".quote-text").html('"'+data.quoteText+'"');
   $(".author").html("-"+data.quoteAuthor);
    
  });
};
  $("#tweet-quote").on("click", function(){
      console.log(randomQuote);
window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  $("#tweet-quote").on("click", function(){
      console.log(randomQuote);
window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  
  $("#new-quote").on("click", function(){
    getQuote();
  });
});
