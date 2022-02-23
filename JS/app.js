const country = document.getElementById('country')
const countryContainer = document.querySelector('.countries')
const body = document.body;
const searchBar = document.getElementById('s-c')
let countryList = []
let cs = []


const xml = new XMLHttpRequest();
xml.open('GET',`https://restcountries.com/v3.1/all`)
xml.onload = Getter;
xml.send();

const Builder = x =>{
    let text = ''
    x.forEach(cou => {
        text += 
        `
        <div class="country" id="${cou.name.common}">
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

function Getter(){
    const data = JSON.parse(this.responseText)
    data.forEach(c => countryList.push(c))
    countryList.sort((a,b)=>a.name.common>b.name.common?1:-1)
    Builder(countryList)
    document.querySelectorAll('.country').forEach(n=>{
        n.addEventListener('click',function(e){
            console.log(n.id)
        })
    })
}

function searchF(){
    let place = searchBar.value.toLowerCase();
    let results = countryList.filter(a => a.name.common.toLowerCase().includes(place))
    results.sort((a,b)=>a.name.common>b.name.common?1:-1)
    Builder(results)
}
searchBar.addEventListener('keyup',searchF)




// This Function gets the scroll depth of the page and if its greater than
// the distance between the top and the search bar it makes its position fixed
function searchFixed(){
    let y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let searchBar = document.querySelector('.search')
    if(y>68){
        searchBar.style.position = 'fixed'
        searchBar.style.top = '0'
    }else{
        searchBar.style.position = 'relative'
    }
}
//The event listener of the previous Function
window.addEventListener('scroll',searchFixed)



