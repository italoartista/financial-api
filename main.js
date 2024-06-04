const base = 'https://api.binance.com'

const end = '/api/v3/klines'

const symbol = 'BTCUSDT'

const interval = '1m'


const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m'


function lerDados(url) {
    fetch(url)
        .then(response => response.json())
        .then(dados => console.log(dados))
}

async function lerDados2(url) {
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)

    const [
        time, 
        open, 
        high, 
        low,
        close,
        volume,
        closeTime,
        assetVolume,
        trades
    ] = dados[dados.length - 1]
    
    let barra = { 
        time, 
        open, 
        high, 
        low,
        close,
        volume,
        closeTime,
        assetVolume,
        trades
    }
    console.log(barra)
    const app = document.querySelector('#app')
    app.innerHTML = `
        <h1> ${new Date(time).toLocaleString()} </h1>
        <h2> ${open} </h2>
        <h3> ${high} </h3>
        <h4> ${low} </h4>
        <h5> ${close} </h5>
        <h6> ${trades} </h6>
    `

}

setInterval(() => {
    lerDados2(url)
}, 2000)


