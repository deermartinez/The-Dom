

// <!-- Add a script tag to the bottom of the HTML body.
// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial,sans-serif";


// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').textContent = 'Dusty';
document.getElementById('favorites').textContent = 'board games and yarn';
document.getElementById('hometown').textContent = 'Denver';
// Iterate through each li and change the class to "list-item".
var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    list[i].className = 'list-item';
 }
 
 // (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.

// Create a new img element and set its src attribute to a picture of you. Append that element to the page. -->
var myPicture= document.createElement('img');
myPic.src = '';
// Parent node is body, child is (myPic)
document.body.appendChild(myPic);




var place = document.getElementById('');//grabbing the picture you are oignt o change
var picture = 'first image';//the image on index.html-what you are going to replace

//manipulating the dom
place.src = "second picture";
//grabbing the variable we used to pull the picture = place
//and changing the image =place.src
