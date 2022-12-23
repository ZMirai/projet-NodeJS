    
module.exports = _ => {   

    handlebars.registerHelper('truncateSynopsis', function(synopsis, length) {
        return synopsis.substring(0, length) + '...';
      });
    
    console.log("hello");
}

/* 

Handlebars.registerHelper('trimString', function(passedString, startstring, endstring) {
        var theString = passedString.substring( startstring, endstring );
        return new Handlebars.SafeString(theString)
    });



*/