noseX=0;
noseY=0;

function preload() {
clown_nose=loadImage('https://i.postimg.cc/s2nrrDCK/455-4557163-icon-clown-nose-circle-hd-png-download.png');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posNet Is Initialized');
}
function gotPoses(results) {
    if (results.length >0) {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x-15);
        console.log("nose y = " + results[0].pose.nose.y-15);
    }
    }

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot() {
    save('myFilterimage.png');
}
