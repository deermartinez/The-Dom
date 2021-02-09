//create a function for madlibs
function libIts(){
    var storyDiv = document.getElementById('story');
    var person = document.getElementById('person');
    var adjective = document.getElementById('adjective');
    var noun = document.getElementById('noun').value;
    //put together as a story
    storyDiv.innerHTML = person + "is locked down" + adjective + " " + noun + "Wow this is great ";



}


var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIts);


function dateToday(){
    document.getElementsByClassName('time').innerHTML = Date();

}

