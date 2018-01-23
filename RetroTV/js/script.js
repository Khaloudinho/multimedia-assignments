$(document).ready(function () {
    $("#button-colors").click(function () {
        if ($("#button-colors").html() === "Color mode") {
            $("video").css("filter", "none");
            $("#button-colors").html("Retro mode");
            $("#canvas").hide();
        } else {
            $("video").css("filter", "grayscale(1)");
            $("#button-colors").html("Color mode");
            $("#canvas").show();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('#video');
    var canvas = document.querySelector('#canvas');

    video.addEventListener('play', function () {
        update(canvas, video);
    }, false);

}, false);

function drawLines(video, context, width, height) {
    if (video.paused || video.ended) return false;

    for (var i = 0; i < width; i += 8) {
        context.moveTo(0, i);
        context.lineTo(width, i);
        context.strokeStyle = 'rgba(0,0,0,1)';
        context.lineWidth = 0.1;
    }

    context.stroke();
    setTimeout(function () {
        drawLines(video, context, width, height);
    }, 0);
}

function update(canvas, video) {
    drawLines(video, canvas.getContext('2d'), canvas.width, canvas.height);
}