const button = document.getElementById('convert-button')
const select = document.getElementById('corrency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 116420.7

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value 
    const realValueText = document.getElementById('real-value-text')
    const correncyValueText = document.getElementById('corrency-value-text')

    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency', 
        currency: 'BRL'
    }).format(inputReais)

    if(select.value === "US$ Dólar americano") {
        correncyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', 
            currency: 'USD'
        }).format( inputReais / dolar)
    }
    if(select.value === "€ Euro"){
        correncyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', 
            currency: 'EUR'
        }).format( inputReais / euro)
    }
    if(select.value === "Bitcoin"){
        correncyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', 
            currency: 'BTC' 
        }).format( inputReais / bitcoin)
    }
}

changeCorrency = () => {
    const correncyName = document.getElementById('corrency-name')
    const correncyImg = document.getElementById('corrency-img')

    if(select.value === 'US$ Dólar americano'){
        correncyName.innerHTML = 'Dólar americano'
        correncyImg.src = "./assets/eua.png"
    }
       
    if(select.value === '€ Euro'){
        correncyName.innerHTML = 'Euro'
        correncyImg.src = "./assets/euro.png"
    }

    if(select.value === 'Bitcoin'){
        correncyName.innerHTML = 'Bitcoin'
        correncyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCorrency)