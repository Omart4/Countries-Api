const hey = document.getElementById('hey')
const country = document.getElementById('country')

function Hi(){
    let item = country.value;
    const xml = new XMLHttpRequest();
    xml.open('GET',`https://restcountries.com/v2/name/${item}`)
    xml.onload = Getter;
    xml.send();

    function Getter(){
        const data = JSON.parse(this.responseText)
        console.log(data)
    }      
}

hey.addEventListener('click',function(){
    console.log("hello")
    Hi()
})