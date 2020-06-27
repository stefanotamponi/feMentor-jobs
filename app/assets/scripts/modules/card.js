import Tile from './tile';

const card = (props, tileAction) => {
  let main = document.createElement("div");
  main.setAttribute("class", "card");
  main.innerHTML = `
  <img class="card__image" src="./assets${props.logo.substr(1)}" />
    <div class="card__main">
      <div class="card__meta-main">
        <small>${props.company}</small>
        ${props.new ? "<span class='card__features'>New!</span>" : ""}
        ${props.featured ? "<span class='card__features card__features--featured'>Featured</span>" : ""}
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
    tagSection.insertAdjacentElement("beforeend", Tile(tag, tileAction))
  });
  main.insertAdjacentElement("beforeend", tagSection);

  return main;
}

export default card;
