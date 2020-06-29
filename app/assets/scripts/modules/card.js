import Tile from './tile';
import Feature from './feature';

const card = (props, action) => {
  let main = document.createElement("div");
  main.setAttribute("class", "card");
  main.innerHTML = `
  <img class="card__image" src="./assets${props.logo.substr(1)}" />
    <div class="card__main">
      <div class="card__meta-main">
        <small>${props.company}</small>
      </div>
      <h3>${props.position}</h3>
      <span class="card__meta">${props.postedAt} • ${props.contract} • ${props.location}</span>
    </div>
    <hr />
  `
  let tagSection = document.createElement("div"),
  tags = [props.role, props.level, ...props.languages, ...props.tools]

  tagSection.setAttribute("class", "card__tags");
  tags.forEach(tag => {
    tagSection.insertAdjacentElement("beforeend", Tile(tag, action))
  });
  main.insertAdjacentElement("beforeend", tagSection);
  
  let featureSection = main.querySelector(".card__meta-main"),
  features = [
    props.new ? Feature("New", action) : null,
    props.featured ? Feature("Featured", action, true) : null
  ]
  if (features.length) {
    features.forEach(feature => {
      if (feature) {
        featureSection.insertAdjacentElement("beforeend", feature);
      }
    })
  }

  return main;
}

export default card;
