let rom = ''
let rom_affichage = ''

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

function reset () {rom = '';rom_affichage = '' ;document.getElementById("screen").innerHTML = rom_affichage}
function point () {rom_affichage = ('' + rom_affichage + '.');rom = ('' + rom + '.');console.log(rom);document.getElementById("screen").innerHTML = rom_affichage }
function ParenthèseDroite () {rom_affichage = ('' + rom_affichage + ')');rom = ('' + rom + ')');console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function ParenthèseGauche () {rom_affichage = ('' + rom_affichage + '(');rom = ('' + rom + '(');console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function zero () {rom_affichage = ('' + rom_affichage + 0);rom = ('' + rom + 0);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function un () {rom_affichage = ('' + rom_affichage + 1);rom = ('' + rom + 1);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function deux () {rom_affichage = ('' + rom_affichage + 2);rom = ('' + rom + 2);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function trois () {rom_affichage = ('' + rom_affichage + '3');rom = ('' + rom + 3);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function quatre () {rom_affichage = ('' + rom_affichage + '4');rom = ('' + rom + 4);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function cinq () {rom_affichage = ('' + rom_affichage + '5');rom = ('' + rom + 5);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function six () {rom_affichage = ('' + rom_affichage + '6');rom = ('' + rom + 6);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function sept () {rom_affichage = ('' + rom_affichage + '7');rom = ('' + rom + 7);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function huit () {rom_affichage = ('' + rom_affichage + '8');rom  = ('' + rom + 8);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function neuf () {rom_affichage = ('' + rom_affichage + '9');rom = ('' + rom + 9);console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function additionner () {rom_affichage = ('' + rom_affichage + '+');rom = ('' + rom + '+');console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function multiplier () {rom_affichage = ('' + rom_affichage + '×');rom = ('' + rom + '*');console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function soustraire () {rom_affichage = ('' + rom_affichage + '-');rom = ('' + rom + '-');console.log(rom);document.getElementById("screen").innerHTML = rom_affichage}
function calculer() {try {
rom = eval(rom);rom_affichage = rom; console.log(rom);document.getElementById("screen").innerHTML = rom_affichage;rom = '';rom_affichage = ''
} catch {
    rom = '' //reset
    document.getElementById("screen").innerHTML = rom + 'calcule imppossible'
}}
