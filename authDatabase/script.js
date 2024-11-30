// function getAnimalData() {
//     fetch("Https://fakerapi.it/api/v1/persons")
//     .then(function(res) {
        
//         res.json()
//         .then(function(data) {
//             console.log(data);
//         })

//     });
// }

async function getAnimalData(){
    const response = await fetch("Https://fakerapi.it/api/v1/persons");

    const data = await response.json();

    document.getElementById("userData").innerHTML = JSON.stringify(data);

    console.log(data);
}