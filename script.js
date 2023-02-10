// Create & Modifying an Array

var hobbies = [
  "coding",
  "napping",
  "exercising",
  "volunteering",
  "watching TV",
  "hanging out with my dog"
];

console.log(hobbies.length);

hobbies.push("dancing");

console.log(hobbies[2]);

hobbies.pop([7]);

hobbies.splice(2, 3, "spin class", "learning");

hobbies.shift();

hobbies.unshift("cooking");

console.log(hobbies);

// Create a New Array & Combine Arrays

var goals = [
  "become a full-stack developer",
  "lose 60 pounds",
  "travel outside of the USA"
];

var allTheThings = hobbies.concat(goals);

console.log(allTheThings);

allTheThings.indexOf([4]);

allTheThings.splice([4]);

console.log(allTheThings);

// Map Over an Array

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}.`;
});

console.log(plans);
