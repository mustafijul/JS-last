// const numbers = [65, 70];
// const [x, y] = numbers;
// console.log(x, y);

const arrayOfObjects = [
    {
      id: 1,
      name: 'Alice',
      hobbies: ['reading', 'hiking', 'coding'],
      age: 25,
      skills: ['JavaScript', 'React', 'Node.js']
    },
    {
      id: 2,
      name: 'Bob',
      hobbies: ['photography', 'traveling', 'swimming'],
      age: 30,
      skills: ['Python', 'Django', 'Flask']
    },
    {
      id: 3,
      name: 'Carol',
      hobbies: ['painting', 'dancing', 'singing'],
      age: 22,
      skills: ['Java', 'Spring', 'Hibernate']
    },
    {
      id: 4,
      name: 'Dave',
      hobbies: ['gaming', 'cycling', 'cooking'],
      age: 28,
      skills: ['C++', 'Unreal Engine', 'Blender']
    },
    {
      id: 5,
      name: 'Eve',
      hobbies: ['writing', 'yoga', 'gardening'],
      age: 35,
      skills: ['Ruby', 'Rails', 'JavaScript']
    }
  ];
  
  //console.log(arrayOfObjects);

  //forEach loop

//   arrayOfObjects.forEach(obj =>{
//     console.log(obj);
//   })


// Another system of array destructuring
//  arrayOfObjects.forEach(obj =>{
        
//         // console.log(obj.skills);
//         const [first, second, third] = obj.skills;
//         console.log(first, second, third);
//       })



// Object destructuring

const products = {
    product1: {
      id: 101,
      name: 'Laptop',
      price: 799.99,
      category: 'Electronics'
    },
    product2: {
      id: 102,
      name: 'Smartphone',
      price: 699.99,
      category: 'Electronics'
    },
    product3: {
      id: 103,
      name: 'Desk Chair',
      price: 149.99,
      category: 'Furniture'
    }

  };
  
  const {name, price, category} = products.product1;
  console.log(name, price, category); 
  
  