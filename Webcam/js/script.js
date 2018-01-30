$(document).ready(function () {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var mask = new Image();
    mask.src = 'images/anonymous.jpg';
    canvas.style.zIndex = '100001';
    canvas.style.height = '400px';
    video.style.display = 'none';

    var htracker = new headtrackr.Tracker();
    htracker.init(video, canvas);
    htracker.start();

    $("#filters").change(function(){
        canvas.style.filter = 'none';
        canvas.style.filter = $("#filters").val();
    });

    $("#capture").click(function(){
        var img = new Image();
        img.src = canvas.toDataURL();
        img.style.filter = $("#filters").val();
        $("#takenCaptures").prepend(img);

        var scale = 0.25;
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });

    document.addEventListener("facetrackingEvent", function(event) {
        event.width += 25;
        event.height += 25;
        ctx.drawImage(mask, event.x-((event.width)/2), event.y-(event.height/2), event.width, event.height);
    });
});