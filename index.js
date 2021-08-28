const jokeElenet = document.getElementById("joke");


function jokeGenerator(){
    const jokes = fetch("https://api.jokes.one", {
        mode: 'no-cors',
        method: "post",
        headers: {
             "Content-Type": "application/json"
        }
    })
    console.log(jokes);
}
