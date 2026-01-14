const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]

const age= Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined

const post = {
  title: "JavaScript Objects Deep Dive",
  author: {
    name: "Apple",
    email: "apple@example.com",
  },
  isPublished: false,
  comments: [],

  addComment(user, message) {
    this.comments.push({
      user,
      message,
      createdAt: new Date().toISOString(),
    });
  },

  publish() {
    this.isPublished = true;
    Object.freeze(this);
  },
};

// actions
post.addComment("Rahul", "Very helpful explanation!");
post.addComment("Sneha", "Now objects make sense.");

post.publish();

// this will NOT work because object is frozen
post.title = "Hacked Title";

console.log(post);

//getting output 
/*pple@apples-MacBook-Pro practice % node object.js
{
  title: 'JavaScript Objects Deep Dive',
  author: { name: 'Apple', email: 'apple@example.com' },
  isPublished: true,
  comments: [
    {
      user: 'Rahul',
      message: 'Very helpful explanation!',
      createdAt: '2026-01-14T11:20:47.935Z'
    },
    {
      user: 'Sneha',
      message: 'Now objects make sense.',
      createdAt: '2026-01-14T11:20:47.936Z'
    }
  ],
  addComment: [Function: addComment],
  publish: [Function: publish]
}*/