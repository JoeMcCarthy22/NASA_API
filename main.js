//building a fetch request to the NASA API

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url = (`https://api.nasa.gov/planetary/apod?api_key=kphqVLmEtdDjpaNORhW0DfjxhWxn84Us3koTK7cI&date=${choice}`)
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.hdurl
            document.querySelector('h4').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


}