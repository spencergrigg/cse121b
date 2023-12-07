/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  reset()

  temples.forEach(temple => {
     
  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  const img = document.createElement('img');
  
  h3.textContent = temple.templeName;
  img.src = temple.imageUrl;
  img.alt = temple.location;
  

  article.appendChild(img);
  article.appendChild(h3);
  templesElement.appendChild(article);
 
})

};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        console.log(JSON.stringify(templeList));
        displayTemples(templeList);
    };
};

/* reset Function */
const reset = function() {
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        console.log('Invalid filter');
    };
};



/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();