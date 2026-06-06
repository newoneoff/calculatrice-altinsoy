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
document.getElementById("(").onclick = ParenthèseGauche
document.getElementById(")").onclick = ParenthèseDroite
function reset () {rom = '';document.getElementById("screen").innerHTML = rom}
function point () {rom = ('' + rom + '.');console.log(rom);document.getElementById("screen").innerHTML = rom }
function ParenthèseDroite () {rom = ('' + rom + ')');console.log(rom);document.getElementById("screen").innerHTML = rom}
function ParenthèseGauche () {rom = ('' + rom + '(');console.log(rom);document.getElementById("screen").innerHTML = rom}
function zero () {rom = ('' + rom + 0);console.log(rom);document.getElementById("screen").innerHTML = rom}
function un () {rom = ('' + rom + 1);console.log(rom);document.getElementById("screen").innerHTML = rom}
function deux () {rom = ('' + rom + 2);console.log(rom);document.getElementById("screen").innerHTML = rom}
function trois () {rom = ('' + rom + 3);console.log(rom);document.getElementById("screen").innerHTML = rom}
function quatre () {rom = ('' + rom + 4);console.log(rom);document.getElementById("screen").innerHTML = rom}
function cinq () {rom = ('' + rom + 5);console.log(rom);document.getElementById("screen").innerHTML = rom}
function six () {rom = ('' + rom + 6);console.log(rom);document.getElementById("screen").innerHTML = rom}
function sept () {rom = ('' + rom + 7);console.log(rom);document.getElementById("screen").innerHTML = rom}
function huit () {rom  = ('' + rom + 8);console.log(rom);document.getElementById("screen").innerHTML = rom}
function neuf () {rom = ('' + rom + 9);console.log(rom);document.getElementById("screen").innerHTML = rom}
function additionner () {rom = ('' + rom + '+');console.log(rom);document.getElementById("screen").innerHTML = rom}
function multiplier () {rom = ('' + rom + '*');console.log(rom);document.getElementById("screen").innerHTML = rom}
function soustraire () {rom = ('' + rom + '-');console.log(rom);document.getElementById("screen").innerHTML = rom}
function diviser () {rom = ('' + rom + '/');console.log(rom);document.getElementById("screen").innerHTML = rom}
function calculer() {try {
rom = eval(rom); console.log(rom);document.getElementById("screen").innerHTML = rom;rom = ' '
} catch {
    rom = '' //reset
    document.getElementById("screen").innerHTML = rom + 'calcule imppossible'
}}
let teste = '002'


