var quotes =[
    "Draw a self portrait with your non dominant hand" ,
    "Take 3 objects to draw but instead of drawing the object draw the spaces between the objects" ,
    "Stop and sketch for 10 minutes" ,
    "Take three objects and draw them without taking your pencil off the page" ,
    "Draw your a portrait of your favourite person or animal without looking at your page" ,
    "Draw a scene remembered from your childhood" ,
]
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML = quotes[randomNumber];
    
}