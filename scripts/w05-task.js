/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
 

    templeList.forEach((temples) => {
       
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    h3.textContent = temples.templeName;
    img.src.setAttribute = ('src', temples.imageUrl);
    img.alt.setAttribute = ('alt', temples.location);
    img.appendChild(document.querySelector('img'));
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
   
})
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList.push(response);
        getTemples(templeList);
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