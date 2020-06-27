const tile = (content, action, filter) => {
  let main = document.createElement("span"),
  classes = ["tile"];

  if (filter) classes.push("tile--filter");

  main.setAttribute("class", classes.join(" "));
  main.insertAdjacentHTML("beforeend", content);
  main.addEventListener("click", action);
  
  return main;
};


export default tile;