function error() {
    $('.appli').css({ 'background-color': '#4c4d54'});
    $('.appli2').css({ 'background-color': 'black'});
};

function barre() {
    $('.appli').css({ 'background-color': 'black'});
    $('.appli2').css({ 'background-color': '#4c4d54'});
};

function nope() {
    var audio = new Audio('sound/error.mp3');
    console.log('OUI');
    audio.play();
};