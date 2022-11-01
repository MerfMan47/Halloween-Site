document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    
    const num = Math.floor(Math.random()*2)

    if(num == 1 && document.querySelector('h1').innerText == 'TREAT!!!'){
        document.querySelector('img').src = 'https://www.acc.umu.se/~zqad/cats/1263586310-1255764828342.b.jpg'
        document.querySelector('h1').innerText = 'TRICK!!!'
        
    }else{
        console.log('yay')
        
        const url = `https://api.thecatapi.com/v1/images/search`
        document.querySelector('h1').innerText = 'TREAT!!!'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                document.querySelector('img').src = data[0].url
                // document.querySelector('iframe').src = null
                console.log(data.id)
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    }

}