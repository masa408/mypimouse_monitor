var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9000' });

ros.on('connection', function() {console.log('websocket: connected'); });
ros.on('error', function(error){console.log('webssocket error: ', error); });
ros.on('close', function() {console.log('websocket: closed'); });

var ls = new ROSLIB.Topic({
    ros : ros,
    name : '/lightsensors',
    messageType : 'mypimouse_ros/LightSensorValues'
});

ls.subscribe(function(message) {
    str = JSON.stringify(message)
    document.getElementById("lightsensors").innerHTML=str;
    console.log(str)
});
    
