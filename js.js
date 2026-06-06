/*



const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)


b.nextPage()
console.log(b.page)

b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])


console.log(l.findBooksByLetter('S'))


class Rectangle {

    constructor (width, height) {
        if (width <= 0 || height <= 0){
            throw new Error('change frère')
        }
        this.width = width
        this.height = height
    }

    get perimeter () {
        return (this.width + this.height) * 2
    }

    get isValid () {
        return this.width > 0 && this.height > 0
    }

    isBiggerThan (shape) {
        return this.perimeter > shape.perimeter
    }

}

class Square extends Rectangle {
    constructor(width) {
        super(width, width)
    }
}

async function fetchUser() {

    const r = await fetch('https://emir.altinsoy.ovh', {
        headers: { "accepte": "application/jpeg"},
        method: 'GET,'})

    if (r.ok === true) {
        const data = await r.json();
        return
    } 

    throw new Error('le serveur a pas repondondu chef')
}
fetchUser().then(user => console.log(user))

fetch('https://emir.altinsoy.ovh', {
        headers: { "accepte": "application/jpeg"},
        method: 'GET,'}
        */
let rom = ' '
let rom_screen = ' '
document.getElementById("0").onclick = zero 
document.getElementById("1").onclick = un
document.getElementById("2").onclick = deux
document.getElementById("3").onclick = trois
document.getElementById("4").onclick = quatre
document.getElementById("5").onclick = cinq
document.getElementById("6").onclick = six
document.getElementById("7").onclick = sept
document.getElementById("8").onclick = huit
document.getElementById("9").onclick = neuf
document.getElementById("+").onclick = additionner
document.getElementById("-").onclick = soustraire
document.getElementById("×").onclick = multiplier
document.getElementById("÷").onclick = diviser
document.getElementById("entrer").onclick = calculer
document.getElementById("C").onclick = reset
document.getElementById(".").onclick = point
document.getElementById("(").onclick = ParenthèseG
document.getElementById(")").onclick = ParenthèseD
function reset () {rom = '';rom_screen = ' ';document.getElementById("screen").innerHTML = rom_screen;}
function point () {rom = ('' + rom + '.');rom_screen = ('' + rom_screen + '.');console.log(rom);document.getElementById("screen").innerHTML = rom_screen }
function ParenthèseD () {rom_screen = ('' + rom_screen + ')');rom = ('' + rom + ')');console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function ParenthèseG () {rom_screen = ('' + rom_screen + '(');rom = ('' + rom + '(');console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function zero () {rom_screen = ('' + rom_screen + '0');rom = ('' + rom + 0);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function un () {rom_screen = ('' + rom_screen + '1');rom = ('' + rom + 1);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function deux () {rom_screen = ('' + rom_screen + '2');rom = ('' + rom + 2);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function trois () {rom_screen = ('' + rom_screen + '3');rom = ('' + rom + 3);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function quatre () {rom_screen = ('' + rom_screen + '4');rom = ('' + rom + 4);console.log(rom);document.getElementById("screen").innerHTML = rom_screen }
function cinq () {rom_screen = ('' + rom_screen + '5');rom = ('' + rom + 5);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function six () {rom_screen = ('' + rom_screen + '6');rom = ('' + rom + 6);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function sept () {rom_screen = ('' + rom_screen + '7');rom = ('' + rom + 7);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function huit () {rom_screen = ('' + rom_screen + '8');rom  = ('' + rom + 8);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function neuf () {rom_screen = ('' + rom_screen + '9');rom = ('' + rom + 9);console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function additionner () {rom_screen = ('' + rom_screen + '+');rom = ('' + rom + '+');console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function multiplier () {rom_screen = ('' + rom_screen + '×');rom = ('' + rom + '*');console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function soustraire () {rom_screen = ('' + rom_screen + '-');rom = ('' + rom + '-');console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function diviser () {rom_screen = ('' + rom_screen + '÷');rom = ('' + rom + '/');console.log(rom);document.getElementById("screen").innerHTML = rom_screen}
function calculer() {try {
rom = eval(rom);rom_screen = rom; console.log(rom);document.getElementById("screen").innerHTML = rom_screen;rom = ' '; rom_screen = ' '
} catch {
    rom = '' //reset
    rom_screen = ' '
    document.getElementById("screen").innerHTML = rom + 'calcul imppossible'
}}



