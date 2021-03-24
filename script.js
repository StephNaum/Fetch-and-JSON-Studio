window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let astronautCount = 0;
            for (let i=0; i<json.length; i++){
                let newDiv = document.createElement('div');
                newDiv.innerHTML =`<div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>`;
                document.body.appendChild(newDiv);
                // Index is necessary to access the 2nd <li>
                let newClass = newDiv.getElementsByTagName("li")[1].setAttribute("class", "active");
                let active = newDiv.getElementsByClassName("active");
                // This changes the Active list if true to green
                if (json[i].active){
                    // This for loop is required b/c getElementsByClassName creates an array, as such we can't access properties without looping through it.
                    for(let j = 0; j < active.length; j++) {
                        active[j].style.color = "green";
                      } 
                } 
                // Incrementing astronautCount using loop
                astronautCount = i + 1;
                
            
                    
                    
            }
            // Adding count of astronauts to page
            let phrase = `We have ${astronautCount} astronauts.`;
            let h = document.createElement("h2");
            h.innerHTML = phrase;
            document.body.appendChild(h);
            
        });
    });



});