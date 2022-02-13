const country = document.getElementById('country')
const countryContainer = document.querySelector('.countries')
let countryList = []

function Hi(){
    const xml = new XMLHttpRequest();
    xml.open('GET',`https://restcountries.com/v3.1/all`)
    xml.onload = Getter;
    xml.send();

    function Getter(){
        const data = JSON.parse(this.responseText)
        console.log(data)
        let text = ''
        data.forEach(c => countryList.push(c))
        countryList.sort((a,b)=>a.name.common>b.name.common?1:-1)
        countryList.forEach(cou => {
            text += 
            `
            <div class="country">
                <img src="${cou.flags.png}">
                <div class="c-details">
                    <h2>${cou.name.common}</h2>
                    <p><strong>Capital:</strong> ${cou.capital}</p>
                    <p><strong>Region:</strong> ${cou.region}</p>
                    <p><strong>Population:</strong> ${cou.population}</p>
                </div>
            </div>

            `
        })
        countryContainer.innerHTML = text;
        
    }      
}

Hi()