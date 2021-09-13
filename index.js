const jokeElemenet = document.getElementById("joke");

function jokeGenerator() {
  // make an API request to https://icanhazdadjoke.com/'
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      /* convert Stringified JSON response to Javascript Object */
      return response.json();
    })
    .then(function (data) {
      const joke = data.joke;
      jokeElemenet.innerHTML = joke;
      // console.log(joke);
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    //   console.log(response.json());
    return response.json();
  })
  .then(function (data) {
      for (const key in data) {
          console.log(data[key].title, data[key].completed);
      }
  }).catch(function (err) {
      log.error(err);
  });
