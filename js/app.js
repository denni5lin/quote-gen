const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

function getQuote() {    
  $.getJSON(url, function(data) {
    $('.quote').html('"' + data.quoteText + '"');
    $('.author').html('-' + data.quoteAuthor);
  });

};

$(function() {  
  
  getQuote(); 
  
  $('#button').on('click', function() {
    getQuote();
  });
  
  $('#tweet').on('click', function(){
    window.open('https://twitter.com/intent/tweet?text=');
  });
  
});