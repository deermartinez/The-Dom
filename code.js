

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
