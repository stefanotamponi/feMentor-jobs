const feature = (content, action, featured) => {
  let main = document.createElement("span"),
  classes = ["card__features"];

  if (featured) classes.push("card__features--featured");

  main.setAttribute("class", classes.join(" "));
  main.insertAdjacentHTML("beforeend", content);
  main.addEventListener("click", action);
  
  return main;
};


export default feature;