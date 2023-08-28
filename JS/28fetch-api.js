const catApi = fetch("https://catfact.ninja/fact");

catApi
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const p = document.createElement("p");
    p.innerHTML += response.fact;
    p.style.color = "white";
    document.body.appendChild(p)
    console.log(response);
  });
