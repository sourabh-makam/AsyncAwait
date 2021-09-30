

async function getDetails(){
    let countryName = document.getElementById("text").value
    console.log(countryName)
    let details = await fetch(`https://api.covid19api.com/dayone/country/${countryName}`)
    let covidDetails = await details.json();
    

    for(var data in covidDetails){
        let divContainer = document.createElement("div")
        divContainer.innerHTML=`${countryName}:${covidDetails[data].Confirmed}:${covidDetails[data].Deaths}:${covidDetails[data].Recovered}`;
        document.body.append(divContainer);
    } 
   

}