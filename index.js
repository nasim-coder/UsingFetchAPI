const jokeElemenet = document.getElementById("joke");

function jokeGenerator() {
    // make an API request to https://icanhazdadjoke.com/'
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response) {
      /* convert Stringified JSON response to Javascript Object */
      return response.json();
    }).then(function(data) {
      const joke = data.joke;
      console.log(joke);
      jokeElemenet.innerHTML = joke;
  console.log(joke);  
    }).catch(function(error) {
      console.log(error);
    });
  }