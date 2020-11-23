// Emissionswerte der Länder A

    // Afrika
    var africa2008:number= 1028;
    var africa2018:number= 1235.5;

    // Süd Amerika
    var sAmerica2008:number= 1132.6;
    var sAmerica2018:number= 1261.5;

    // Europa
    var europe2008:number= 4965.7;
    var europe2018:number= 4209.3;

    // Nord Amerika
    var nAmerica2008:number= 6600.4;
    var nAmerica2018:number= 6035.6;

    // Asien
    var asia2008:number= 12954.72;
    var asia2018:number= 16274.1;

    // Australien
    var australia2008:number= 1993;
    var australia2018:number= 2100.5;

// Emissionswerter der Länder E


// Berechnungen A

    // Gesamtemission
    var gesEmission:number= africa2018 + sAmerica2018 + europe2018 + nAmerica2018 + asia2018 + australia2018;

    // Afrika
    var prozentAfrikaGes:number= ((africa2018/gesEmission)*100).toFixed(2);
    var wachstumAfrikaP:number= (((africa2018/africa2008)-1)*100).toFixed(2);
    var wachstumAfrikaZ:number= (africa2018-africa2008).toFixed(2);

    // Süd Amerika
    var prozentSAmerikaGes:number= ((sAmerica2018/gesEmission)*100).toFixed(2);
    var wachstumSAmerikaP:number= (((sAmerica2018/sAmerica2008)-1)*100).toFixed(2);
    var wachstumSAmerikaZ:number= (sAmerica2018-sAmerica2008).toFixed(2);

    // Europa
    var prozentEuropaGes:number= ((europe2018/gesEmission)*100).toFixed(2);
    var wachstumEuropaP:number= (((europe2018/europe2008)-1)*100).toFixed(2);
    var wachstumEuropaZ:number= (europe2018-europe2008).toFixed(2);

    // Nord Amerika
    var prozentNAmerikaGes:number= ((nAmerica2018/gesEmission)*100).toFixed(2);
    var wachstumNAmerikaP:number= (((nAmerica2018/nAmerica2008)-1)*100).toFixed(2);
    var wachstumNAmerikaZ:number= (nAmerica2018-nAmerica2008).toFixed(2);

    // Asien
    var prozentAsienGes:number= ((asia2018/gesEmission)*100).toFixed(2);
    var wachstumAsienP:number= (((asia2018/asia2008)-1)*100).toFixed(2);
    var wachstumAsienZ:number= (asia2018-asia2008).toFixed(2);

    // Australien
    var prozentAustralienGes:number= ((australia2018/gesEmission)*100).toFixed(2);
    var wachstumAustralienP:number= (((australia2018/australia2008)-1)*100).toFixed(2);
    var wachstumAustralienZ:number= (australia2018-australia2008).toFixed(2);

// Berechnungen E

// Dom manipulation A

    //Funktionen

    function europa(){
        //Text
        document.querySelector(".titleRegion").innerHTML = "Europa";
        document.querySelector("#absoluteEmi").innerHTML = europe2018 + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = prozentEuropaGes + "%";
        document.querySelector("#growthPerEmi").innerHTML = wachstumEuropaP + "%";
        document.querySelector("#growthAbsEmi").innerHTML = wachstumEuropaZ + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + prozentEuropaGes + "%" );
    }
    window.addEventListener('load', function(){
        document.querySelector(".europe").addEventListener("click", europa);
        });

    function nordAmerika(){
        //Text
        document.querySelector(".titleRegion").innerHTML = "Nord Amerika";
        document.querySelector("#absoluteEmi").innerHTML = nAmerica2018 + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = prozentNAmerikaGes + "%";
        document.querySelector("#growthPerEmi").innerHTML = wachstumNAmerikaP + "%";
        document.querySelector("#growthAbsEmi").innerHTML = wachstumNAmerikaZ + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + prozentNAmerikaGes + "%" );
    }
    window.addEventListener('load', function(){
            document.querySelector(".northamerica").addEventListener("click", nordAmerika);
        });
        
        

    function suedAmerika(){
        //Text
        document.querySelector(".titleRegion").innerHTML = "Süd Amerika";
        document.querySelector("#absoluteEmi").innerHTML = sAmerica2018 + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = prozentSAmerikaGes + "%";
        document.querySelector("#growthPerEmi").innerHTML = wachstumSAmerikaP + "%";
        document.querySelector("#growthAbsEmi").innerHTML = wachstumSAmerikaZ + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + prozentSAmerikaGes + "%" );
    }
    window.addEventListener('load', function(){
        document.querySelector(".southamerica").addEventListener("click", suedAmerika);
        });
    

    function afrika(){
        //Text
        document.querySelector(".titleRegion").innerHTML = "Afrika";
        document.querySelector("#absoluteEmi").innerHTML = africa2018 + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = prozentAfrikaGes + "%";
        document.querySelector("#growthPerEmi").innerHTML = wachstumAfrikaP + "%";
        document.querySelector("#growthAbsEmi").innerHTML = wachstumAfrikaZ + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + prozentAfrikaGes + "%" );
    }
    window.addEventListener('load', function(){
        document.querySelector(".africa").addEventListener("click", afrika);
        
        });



    function asien(){
        //Text
        document.querySelector(".titleRegion").innerHTML = "Asien";
        document.querySelector("#absoluteEmi").innerHTML = asia2018 + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = prozentAsienGes + "%";
        document.querySelector("#growthPerEmi").innerHTML = wachstumAsienP + "%";
        document.querySelector("#growthAbsEmi").innerHTML = wachstumAsienZ + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + prozentAsienGes + "%" );
    }
    window.addEventListener('load', function(){
        document.querySelector(".asia").addEventListener("click", asien);
        });

        
    function australien(){
        //Text
        document.querySelector(".titleRegion").innerHTML = "Süd Amerika";
        document.querySelector("#absoluteEmi").innerHTML = australia2018 + " CO2 kg";
        document.querySelector("#totalEmi").innerHTML = prozentAustralienGes + "%";
        document.querySelector("#growthPerEmi").innerHTML = wachstumAustralienP + "%";
        document.querySelector("#growthAbsEmi").innerHTML = wachstumAustralienZ + " CO2 kg";
        //Diagramm
        document.querySelector('.chart').setAttribute('style', 'height:' + prozentAustralienGes + "%" );
    }
    window.addEventListener('load', function(){
        document.querySelector(".australia").addEventListener("click", australien);
        });


// Dom manipulation E














// // Konsolen Ausgabe A

//     // Afrika
//     console.log('Emissionswerte von Afrika');
//     console.log('Die Emission von Afrika im Jahre 2018 ist: ' + africa2018 + 'kg CO2');
//     console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfrikaGes + '%');
//     console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um: ' + wachstumAfrikaP + '% verändert');
//     console.log('2018 im Vergleich zu 2008 sind das ' + wachstumAfrikaZ + 'kg CO2');
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



