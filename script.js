const btn = document.getElementById("btnClick");
const image = document.getElementById("image")

btn.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(error => console.log(error))
})

// async function fetchData() {
//     const url = 'https://api.thedogapi.com/v1/images/search';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-api-key': 'live_va9BWkDmsgE5hZrGNRkF6gwev5Y4sgrRo9lmDwkot8pRZe9uLJCnDLGr3JiRniDh'
//         }
//     };

//     const response = await fetch(url, options);
//     const result = await response.json("url");


//     // I just want the image url to inject into the HTML display
//     document.innerHTML("url") = result.data;
// }
// fetchData();
