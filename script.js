const search = document.getElementById('search');
const magnify = document.getElementById('magnify');
clear = document.getElementById('clear');


clear.addEventListener('click', () =>{
    let input_value = document.getElementById('input');
    input_value.value = "";
    dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = "";
    dropdown.style.display = 'none';
})

search.addEventListener('click', () =>{
    let input_value = document.getElementById('input').value.toLowerCase();
    fetch('../travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
            console.log('data fetched');

            dropdown = document.getElementById('dropdown');
            dropdown.innerHTML = "";
            dropdown.style.display = "block";
            let content = "";

            let display = data.countries.find(item => item.name.toLowerCase() === input_value);
            console.log(display);

            if(input_value === 'temples' || input_value == 'temple'){
                display = data.temples;
                console.log(display);
            }
            else if(input_value === 'beaches' || input_value === 'beach'){
                display = data.beaches;
                console.log(display);
            }
            if(display){
                if(display.cities){
                    display.cities.map(item => {
                        content += `<div class = "component">
                                        <h3>${item.name}</h3>
                                        <img src=${item.imageUrl}></img>
                                        <p>${item.description}</p>
                                        <button>Visit</button>
                                            </div>`
                    })
                }
                else{
                    display.forEach((item) => {
                        content += `<div class = "component">
                                        <h3>${item.name}</h3>
                                        <img src=${item.imageUrl}></img>
                                        <p>${item.description}</p>
                                        <button>Visit</button>
                                            </div>`
                    })
                }
                dropdown.innerHTML += content;
            }
    })
})

magnify.addEventListener('click', () =>{
    let input_value = document.getElementById('input').value.toLowerCase();
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
            console.log('data fetched');

            dropdown = document.getElementById('dropdown');
            dropdown.innerHTML = "";
            dropdown.style.display = "block";
            let content = "";

            let display = data.countries.find(item => item.name.toLowerCase() === input_value);
            console.log(display);

            if(input_value === 'temples' || input_value == 'temple'){
                display = data.temples;
                console.log(display);
            }
            else if(input_value === 'beaches' || input_value === 'beach'){
                display = data.beaches;
                console.log(display);
            }
            if(display){
                if(display.cities){
                    display.cities.map(item => {
                        content += `<div class = "component">
                                        <h3>${item.name}</h3>
                                        <img src=${item.imageUrl}></img>
                                        <p>${item.description}</p>
                                        <button>Visit</button>
                                            </div>`
                    })
                }
                else{
                    display.forEach((item) => {
                        content += `<div class = "component">
                                        <h3>${item.name}</h3>
                                        <img src=${item.imageUrl}></img>
                                        <p>${item.description}</p>
                                        <button>Visit</button>
                                            </div>`
                    })
                }
                dropdown.innerHTML += content;
            }
    })
})

document.body.addEventListener('click', () => {
    dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = "";
    dropdown.style.display = 'none';
})

let input_placeholder = document.getElementById('input').addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        let input_value = document.getElementById('input').value.toLowerCase();
    fetch('../travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
            console.log('data fetched');

            dropdown = document.getElementById('dropdown');
            dropdown.innerHTML = "";
            dropdown.style.display = "block";
            let content = "";

            let display = data.countries.find(item => item.name.toLowerCase() === input_value);
            console.log(display);

            if(input_value === 'temples' || input_value == 'temple'){
                display = data.temples;
                console.log(display);
            }
            else if(input_value === 'beaches' || input_value === 'beach'){
                display = data.beaches;
                console.log(display);
            }
            if(display){
                if(display.cities){
                    display.cities.map(item => {
                        content += `<div class = "component">
                                        <h3>${item.name}</h3>
                                        <img src=${item.imageUrl}></img>
                                        <p>${item.description}</p>
                                        <button>Visit</button>
                                            </div>`
                    })
                }
                else{
                    display.forEach((item) => {
                        content += `<div class = "component">
                                        <h3>${item.name}</h3>
                                        <img src=${item.imageUrl}></img>
                                        <p>${item.description}</p>
                                        <button>Visit</button>
                                            </div>`
                    })
                }

                dropdown.innerHTML += content;
            }
    })
    }
})