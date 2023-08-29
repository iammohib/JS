const func00 = () =>{
  const catApi = fetch("https://catfact.ninja/fact");

catApi
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const p = document.createElement("li");
    p.innerHTML += response.fact;
    p.style.color = "white";
    document.getElementById("cat-fact").appendChild(p)
    // console.log(response);
  });

}
func00()
document.getElementsByClassName("btnCenter")[0].addEventListener("click", func00)
