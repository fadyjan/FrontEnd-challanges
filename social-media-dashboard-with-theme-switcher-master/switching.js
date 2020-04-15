var x = 0
var body = document.getElementsByTagName("body")
var cards = document.getElementsByClassName("jscontrol")
var gaps = document.getElementsByClassName("gaps")
var fonts =document.getElementsByClassName("fontchange")
var arrows = document.getElementsByClassName("greenchange")
function switching() {
    if (x == 0) {    //switch into light mode


        gaps[0].style.backgroundColor = "white"
        body[0].style.backgroundColor = "white"

        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "hsl(227, 47%, 96%)";

        }

        for (let index = 0; index < fonts.length; index++) {
            fonts[index].style.color=" hsl(230, 17%, 14%)"
            
        }


        for (let index = 0; index < arrows.length; index++) {
            arrows[index].style.color="#228B22	"
            
        }





        x = x + 1


    }

    else {

        gaps[0].style.backgroundColor = "hsl(230, 17%, 14%)"
        body[0].style.backgroundColor = "hsl(230, 17%, 14%)"

        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "hsl(228, 28%, 20%)";
        }

        for (let index = 0; index < fonts.length; index++) {
            fonts[index].style.color=" hsl(0, 0%, 100%)"
            
        }

        for (let index = 0; index < arrows.length; index++) {
            arrows[index].style.color=" #339933"
            
        }
        x = x - 1

    }


}