const search = document.getElementById('search');
const magnify = document.getElementById('magnify');
clear = document.getElementById('clear');


clear.addEventListener('click', () =>{
    console.log("i'm here");
    let input_value = document.getElementById('input');
    console.log(input_value.value);
    input_value.value = "";
})

search.addEventListener('click', () =>{
    console.log('true');
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {

    })
})

magnify.addEventListener('click', () =>{
    console.log('true');
})