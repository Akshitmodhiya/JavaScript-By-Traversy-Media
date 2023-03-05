const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON String
const str = JSON.stringify(post);
console.log(str.id); // This will not work


// Parse JSON
const obj = JSON.parse(str);
console.log(obj.id); // This will work bcoz we parse it

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  }
];

const str2 = JSON.stringify(posts);

console.log(str2);