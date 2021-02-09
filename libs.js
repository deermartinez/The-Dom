//create a function for madlibs
function libIts(){
    var storyDiv = document.getElementById('story');
    var person = document.getElementById('person').value;
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;
    //put together as a story
    // storyDiv.innerHTML = person + "is locked down" + adjective + " in an underwater  " + noun + "Wow this is great ";
    storyDiv.innerHTML = person + adjective + noun;
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIts);


function dateToday(){
    document.getElementsByClassName('time').innerHTML = Date();

}

