// Emissionswerte der Länder A
// Afrika
var africa2008 = 1028;
var africa2018 = 1235.5;
// Süd Amerika
var sAmerica2008 = 1132.6;
var sAmerica2018 = 1261.5;
// Europa
var europe2008 = 4965.7;
var europe2018 = 4209.3;
// Nord Amerika
var nAmerica2008 = 6600.4;
var nAmerica2018 = 6035.6;
// Asien
var asia2008 = 12954.72;
var asia2018 = 16274.1;
// Australien
var australia2008 = 1993;
var australia2018 = 2100.5;
// Gesamte Emission
var gesEmission = africa2018 + sAmerica2018 + nAmerica2018 + europe2018 + asia2018 + australia2018;
// Emissionswerter der Länder E
// Dom manipulation A
// Event listener
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", function () {
        domManipulator("Europa", europe2018, europe2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", function () {
        domManipulator("Nord Amerika", nAmerica2018, nAmerica2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
        domManipulator("Süd Amerika", sAmerica2018, sAmerica2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", function () {
        domManipulator("Afrika", africa2018, africa2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", function () {
        domManipulator("Asien", asia2018, asia2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", function () {
        domManipulator("Australia", australia2018, australia2008);
    });
});
//Funktion A
function domManipulator(kontinent, kontinent2018, kontinent2008) {
    //Text
    document.querySelector(".titleRegion").innerHTML = kontinent;
    document.querySelector(".titleRegion2").innerHTML = kontinent;
    document.querySelector("#absoluteEmi").innerHTML = kontinent2018.toFixed(2) + " CO2 kg";
    document.querySelector("#totalEmi").innerHTML = (100 / (gesEmission / kontinent2018)).toFixed(2) + "%";
    document.querySelector("#growthPerEmi").innerHTML = (((kontinent2018 / kontinent2008) - 1) * 100).toFixed(2) + "%";
    document.querySelector("#growthAbsEmi").innerHTML = (kontinent2018 - kontinent2008).toFixed(2) + " CO2 kg";
    //Diagramm
    document.querySelector('.chart').setAttribute('style', 'height:' + (100 / (gesEmission / kontinent2018)).toFixed(2) + "%");
}
// Dom manipulation E
// // Konsolen Ausgabe Ac2008 sind das ' + wachstumAfrikaZ + 'kg CO2');
//     console.log('----------------------------------------------------------------------------------------');
//     // Süd Amerika
//     console.log('Emissionswerte von Süd Amerika');
//     console.log('Die Emission von Süd Amerika im Jahre 2018 ist: ' + sAmerica2018 + 'kg CO2');
//     console.log('Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit ' + prozentSAmerikaGes + '%');
//     console.log('Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumSAmerikaP + '% verändert');
//     console.log('2018 im Vergleich zu 2008 sind das ' + wachstumSAmerikaZ + 'kg CO2');
//     console.log('----------------------------------------------------------------------------------------');
//     // Europa
//     console.log('Emissionswerte von Europa');
//     console.log('Die Emission von Europa im Jahre 2018 ist: ' + europe2018 + 'kg CO2');
//     console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuropaGes + '%');
//     console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumEuropaP + '% verändert');
//     console.log('2018 im Vergleich zu 2008 sind das ' + wachstumEuropaZ + 'kg CO2');
//     console.log('----------------------------------------------------------------------------------------');
//     // Nord Amerika
//     console.log('Emissionswerte von Nord Amerika');
//     console.log('Die Emission von Nord Amerika im Jahre 2018 ist: ' + nAmerica2018 + 'kg CO2');
//     console.log('Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit ' + prozentNAmerikaGes + '%');
//     console.log('Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumNAmerikaP + '% verändert');
//     console.log('2018 im Vergleich zu 2008 sind das ' + wachstumNAmerikaZ + 'kg CO2');
//     console.log('----------------------------------------------------------------------------------------');
//     // Asien
//     console.log('Emissionswerte von Asien');
//     console.log('Die Emission von Asien im Jahre 2018 ist: ' + asia2018 + 'kg CO2');
//     console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentAsienGes + '%');
//     console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAsienP + '% verändert');
//     console.log('2018 im Vergleich zu 2008 sind das ' + wachstumAsienZ + 'kg CO2');
//     console.log('----------------------------------------------------------------------------------------');
//     // Australien
//     console.log('Emissionswerte von Australien');
//     console.log('Die Emission von Australien im Jahre 2018 ist: ' + australia2018 + 'kg CO2');
//     console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + prozentAustralienGes + '%');
//     console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAustralienP + '% verändert');
//     console.log('2018 im Vergleich zu 2008 sind das ' + wachstumAustralienZ + 'kg CO2');
//     console.log('----------------------------------------------------------------------------------------');
// // Konsolen Ausgabe E
//# sourceMappingURL=script.js.map