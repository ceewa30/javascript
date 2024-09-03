// Below is a list of Oscar - winning Best Pictures from the last several years.
// 2020 - "Parasite"
// 2019 - "Green Book"
// 2018 - "The Shape of Water"
// 2017 - "Moonlight"
// 2016 -  "Spotlight"
// 2015 - "Birdman"
// 2014 - "12 Years a Slave"
// 2013 - "Argo"

//1. Create a new Map wih the Best Pictures list from above.
// Make sure your keys are the year, but they can be an format

const Pictures = new Map();

Pictures.set(2020, "Parasite");
Pictures.set(2019, "Green Book");
Pictures.set(2018, "The Shape of Water");
Pictures.set(2017, "Moonlight");
Pictures.set(2016, "Spotlight");
Pictures.set(2015, "Birdman");
Pictures.set(2014, "12 Years a Slave");
Pictures.set(2013, "Argo");

console.log(Pictures);

// 2. What film won best picture in 2015?

console.log(Pictures.get(2015));

// 3. Does this list contain Best Picture from 2010? 2018?

const contain2010 = Pictures.has(2010);
const contain2018 = Pictures.has(2018);

console.log(contain2010, contain2018);

// 4. How many films are included in this list?

console.log(Pictures.size);

// 5. What is the second key in this movies Map?

// 6. What is the third value in this movies Map?

// 7. What is the first set of entries in this movies Map?

// 8. Loop over the map, and if the movie won Best Picture before 2017,
// log it in the console. Include the year and the movie.