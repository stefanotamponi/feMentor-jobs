import * as data from '../../../data.json';
import Card from "./modules/card";
import "../styles/styles.css";
import Tile from './modules/tile';

class App {
  constructor() {
    this.app = document.getElementById("root");
    this.data = data.default;
    this.mainContent = document.createElement("div");
    this.navigation = document.createElement("div");
    this.filter = [];
    this.mount();

  }

  openNavigation() {
    if (!this.navigation.classList.contains("navigation--visible")) {
      this.navigation.classList.add("navigation--visible");
    } 
    this.mainContent.style.marginTop = Math.trunc(this.navigation.clientHeight / 2) + "px";
  }

  closeNavigation() {
    if (this.navigation.classList.contains("navigation--visible")) {
      this.navigation.classList.remove("navigation--visible")
    }
    this.mainContent.style.marginTop = 0;
  }

  mount() {
    let navContent = `
      <aside>
        Clear
      </aside>
    `
    this.navigation.setAttribute("class", "navigation card card--small")
    this.navigation.setAttribute("id", "navigation");
    let navTags = document.createElement("div");
    navTags.setAttribute("class", "card__tags");
    this.filter.forEach(el => navTags.insertAdjacentElement("beforeend", Tile(el, this.removeFilter.bind(this), true)));

    this.mainContent.setAttribute("class", "main-content");
    this.app.appendChild(this.navigation);
    this.app.appendChild(this.mainContent);
    this.navigation.insertAdjacentElement("afterbegin", navTags);
    this.navigation.insertAdjacentHTML("beforeend", navContent);
    this.data.map(job => this.mainContent.insertAdjacentElement("beforeend", Card(job, this.addFilter.bind(this))));
  }

  refreshNavigation() {
    let tags = this.navigation.getElementsByTagName("div")[0];
    tags.innerHTML = "";
    this.filter.forEach(el => tags.insertAdjacentElement("beforeend", Tile(el, this.removeFilter.bind(this), true)));
    this.mainContent.style.marginTop = Math.trunc(this.navigation.clientHeight / 2) + "px";
  }

  addFilter(e) {
    const tag = e.target.innerHTML;
    if (!this.filter.includes(tag)) this.filter.push(tag);
    this.refreshNavigation();
    this.openNavigation();
  }

  removeFilter(e) {
    let filterName = e.target.innerHTML;
    if (this.filter.includes(filterName)) {
      this.filter = this.filter.filter(el => el !== filterName);
    } else {
      console.log("Error!")
    }
    this.refreshNavigation();
    if (!this.filter.length) this.closeNavigation();
  }
}

export default App;


let app = new App();