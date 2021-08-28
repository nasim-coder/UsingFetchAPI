const jokeElenet = document.getElementById("joke");


function jokeGenerator(){
    const jokesResponse = fetch("https://api.jokes.one", {
        mode: 'no-cors',
        method: "post",
        headers: {
             "Content-Type": "application/json"
        }
    })
    
    const jokes =  jokesResponse.json;
    console.log(jokes);
}
