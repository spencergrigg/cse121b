/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Spencer Grigg",
    photo: {
        path: "images/spencePhoto.jpg",
        name: "Profile Photo"    
    },
    favoriteFoods: [
        'Steak',
        'Deviled Eggs',
        'Potatoes',
        'Turkey'
    ],
    hobbies: [
        'Weightlifting',
        'Wake Surfing',
        'Reading',
        'Music',
    ],
    placesLived: [

    ],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Kuna, ID',
        length: '18 years',
    },
    {   place: 'Rexburg, ID',
        length: '8 months',
    },
    {
        place: 'Kuna, ID',
        length: '9 months'
    }
);


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector('img');
imageElement.setAttribute('src', myProfile.photo.path);
imageElement.setAttribute("alt",`Profile image of ${myProfile.name}`);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);

}
)
