//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
console.log("*********** EX.1 ***********");
const recipe = {
  title: "Tofu Scramble",
  servings: 2,
  ingredients: [
    "225g firm tofu",
    "1/4 tsp salt",
    "1/4 tsp turmeric powder",
    "1/8 tsp black pepper",
  ],
};
console.log(recipe.title);
console.log(recipe.servings);
console.log("Ingredients:");
for (const ingredient of recipe.ingredients) {
  console.log("*", ingredient);
}

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
console.log("*********** EX.2 ***********");
const books = [
  {
    title: "Fahrenheit451",
    author: "Ray Bradbury",
    alreadyRead: true,
  },
  {
    title: "Dandelion Wine",
    author: "Ray Bradbury",
    alreadyRead: true,
  },
  {
    title: "Notes from Underground",
    author: " Fyodor Dostoevsky",
    alreadyRead: false,
  },
  {
    title: "Life Of Pi",
    author: "Yann Martel",
    alreadyRead: true,
  },
];
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (const book of books) {
  console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead === true) {
    console.log(`You already read ${book.title} by ${book.author}`);
  } else {
    console.log(`You still need to read ${book.title} by ${book.author}`);
  }
}

//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
