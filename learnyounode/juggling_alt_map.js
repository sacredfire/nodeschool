var http = require('http'),
    urls = [ process.argv[2], process.argv[3], process.argv[4]];

function request ( urls, callback ) {
    var waiting = urls.length,
        result = {};
    urls.map( function( url ){
        http.get( url, function ( response ){
            var collectedData = '';

            response.setEncoding('utf8');
            response.on('data', function( data ){ collectedData += data; });
            response.on('end', function(){
                waiting--;
                result[url] = collectedData;
                if( !waiting ){ callback( result ); }
            });
        });
    });
}

request( urls, function( data ){
    urls.map( function( url ) {
        console.log( data[url] );
    });
});