// In the next example, filter() is used to get all the students whose
// grades are greater than or equal to 90.

// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];

//   const StudentArray = students.filter((Data) => {
//      return Data.grade >= 90
//   });

//   console.log(StudentArray);

// In the following example, each number in an array is doubled.

const numbers = [1, 2, 3, 4];

// const double = numbers.map(items => items * 2);

// console.log(double);

// Q1. Given an array of objects users, print fullname.

// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];

//   const ArrayUsers = users.map((User) => {
//     // return User.firstName + " " + User.lastName
//     return " Age is : " + User.age;
//   });

//   console.log(ArrayUsers);

// Q3.Print object having marks greater than 60 and rollNumber greater than 15.
// Q4.Print sum of marks of all the student

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];

//    const ArrayStudent = student.reduce((acc,curr) => {
//     return acc+=curr.marks;
//    });

//    console.log(ArrayStudent);

//    const ArrayStudent = student.filter((Data) => {
//     return Data.marks > 60 && Data.rollNumber > 15
//    });

//    console.log(ArrayStudent);

// let a = 10;
// let b = 20;

// function Sum(a,b){
//    return a * b;
// }

// Sum(10,20);

// console.log(Sum);

// const person = {
//     firstname: "Umang",
//     lastname: "Modi",
//     age: 20,
//     Salary: 70000, 

//     Status: function(){
//       return "First name is : " + this.firstname + " Last name is : " + this.lastname  + " Age is : " 
//       + this.age + " Salary is : " + this.Salary;  
//     }
// };

// person.Status();
// console.log(person.Status());

//Create a new array that contains fields "fullName", "fullAddress", "yearOfBirth" from students array 

// const currentYear = 2023;

// const students = [
//   {
//     firstName: "John",
//     middleName: "Michael",
//     lastName: "Smith",
//     address: {
//       line1: "123 Main Street",
//       line2: "Apt 4B",
//       zipcode: "12345"
//     },
//     age: 20
//   },
//   {
//     firstName: "Emily",
//     middleName: "Jane",
//     lastName: "Johnson",
//     address: {
//       line1: "456 Elm Avenue",
//       line2: "Suite 202",
//       zipcode: "67890"
//     },
//     age: 22
//   },
//   {
//     firstName: "David",
//     middleName: "Robert",
//     lastName: "Brown",
//     address: {
//       line1: "789 Oak Lane",
//       line2: "Unit 12C",
//       zipcode: "23456"
//     },
//     age: 19
//   },
//   {
//     firstName: "Sophia",
//     middleName: "Grace",
//     lastName: "Davis",
//     address: {
//       line1: "101 Pine Road",
//       line2: "Apt 3D",
//       zipcode: "54321"
//     },
//     age: 21
//   },
//   {
//     firstName: "Oliver",
//     middleName: "James",
//     lastName: "Wilson",
//     address: {
//       line1: "222 Cedar Street",
//       line2: "Suite 101",
//       zipcode: "87654"
//     },
//     age: 23
//   }
// ];

// const StudentArray = students.find((Stud) => {
//       Stud.firstName && Stud.middleName && Stud.lastName && Stud.address.line1 && Stud.address.line2 && Stud.address.zipcode && Stud.currentYear
// });

// console.log(StudentArray);


// Get a new array from itemsArray with details of id, name, price

// const itemsArray = [
//     {
//         "id": 1,
//         "name": "Item 1",
//         "details": {
//             "description": "Description 1",
//             "price": 10
//         }
//     },
//     {
//         "id": 2,
//         "name": "Item 2",
//         "details": {
//             "description": "Description 2",
//             "price": 15
//         }
//     },
//     {
//         "id": 3,
//         "name": "Item 3",
//         "details": {
//             "description": "Description 3",
//             "price": 20
//         }
//     }
// ];

// const items = itemsArray.map(function(item)  {
//    return {
//       id: item.id,
//        name: item.name,
//        price: item.details.price 
//    };
// });

// const items = itemsArray.map(function(item) {
//     return {
//         id: item.id,
//         name: item.name,
//         Price: item.details.price
//     };
// });

// console.log(items);

// Find out HP laptops that are in stock and have a price greater than 70,000

// const laptops = [
//     {
//       company: "Dell",
//       model: "Inspiron 15",
//       price: 60000,
//       inStock: true,
//     },
//     {
//       company: "HP",
//       model: "Pavilion X360",
//       price: 75000,
//       inStock: true,
//     },
//     {
//       company: "Lenovo",
//       model: "ThinkPad X1",
//       price: 90000,
//       inStock: true,
//     },
//     {
//       company: "HP",
//       model: "Spectre x360",
//       price: 82000,
//       inStock: true,
//     },
//     {
//       company: "Acer",
//       model: "Aspire 5",
//       price: 55000,
//       inStock: true,
//     },
//     {
//       company: "HP",
//       model: "Envy x360",
//       price: 68000,
//       inStock: true,
//     },
//     {
//       company: "HP",
//       model: "Spectre x360",
//       price: 75000,
//       inStock: false,
//     }
//   ];

//   const ArrayLaptop = laptops.filter((lap) => {
//      return lap.company === "HP" && lap.price > 70000
//   });

//   console.log(ArrayLaptop);

// Definition: 

// #1: find the first student whose roll number is 2.
// #2: find students who have received a grade of 90 or higher in Math.

// const students = [
//   {
//     name: "Alice",
//     rollNumber: 1,
//     courses: [
//       {
//         name: "Math",
//         grade: 90,
//       },
//       {
//         name: "History",
//         grade: 75,
//       },
//     ],
//   },
//   {
//     name: "Brad",
//     rollNumber: 2,
//     courses: [
//       {
//         name: "Math",
//         grade: 85,
//       },
//       {
//         name: "History",
//         grade: 92,
//       },
//     ],
//   },
//   {
//     name: "Charlie",
//     rollNumber: 3,
//     courses: [
//       {
//         name: "Math",
//         grade: 78,
//       },
//       {
//         name: "History",
//         grade: 88,
//       },
//     ],
//   },
// ];

// // const ArrayStudent = students.find((Stud) => {
// //    return Stud.rollNumber === 2
// // });

// // console.log(ArrayStudent);

// // const StudentArray = students.filter(function(Student) {
// // const Array = students.find(function(Stud) {
// //   return Stud.courses.name === "Math" && Stud.courses.grade > 90
// // });
// //   return Array
// // });
  
// // console.log(StudentArray);

// //Definition:  find a category of a book which has a title of "Web Development Fundamentals"

// const books = [
//     {
//       id: 1,
//       title: "Cricket Basics",
//       category: "Cricket",
//     },
//     {
//       id: 2,
//       title: "Programming 101",
//       category: "Programming",
//     },
//     {
//       id: 3,
//       title: "The Science of Everything",
//       category: "Science",
//     },
//     {
//       id: 4,
//       title: "Web Development Fundamentals",
//       category: "Programming",
//     },
//     {
//       id: 5,
//       title: "Advanced Python Programming",
//       category: "Programming",
//     },
//   ];


//   const ArrayBooks = books.find((book) => {
//      return book.id === 4 
//   });

//   console.log(ArrayBooks);

// class Animal {
//     static belly = []
//     eat() {
//         Animal.belly.push("food"); };
//     }

//     let a = new Animal();
//     a.eat();

//     console.log(Animal);

// let cat = Object.create({ type: "lion" });
// cat.size = "large";

// let copyCat = {...cat };
// cat.type = "tiger";

// console.log(copyCat, copyCat.size);

// let bear = {
//       sound: "roar",

//       roar()
//       {
//         console.log(this.sound);
//       }
// }

// bear.sound = "grunt";
// let bearsound = bear.roar;
// bearsound();

// console.log(bear);

// const myNumbers = [1,2,3,4,5,6,7];

// const myFunction = arr => {
//       return arr.map(x => x + 3).filter(x => x < 7);
// }

// console.log(myFunction(myNumbers));

//  const printMe = str => console.log(str);

// if(true)
// {
//    var first = 'You';
// }

// function fScope(){
//     var second = "get this!";
// }

// fScope();

// console.log(first);
// console.log(second);

// #1: Create a new array of products that have at least one rating of 5

const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Electronics',
      reviews: [
        {
          rating: 5,
          comment: 'Excellent product!',
        },

        {
          rating: 4,
          comment: 'Good product.',
        },
      ]
},

    {
      id: 2,
      name: 'Product 2',
      category: 'Clothing',
      reviews: [
        {
          rating: 3,
          comment: 'Okay product.',
        },
        {
          rating: 2,
          comment: 'Not so good.',
        },
    ]
},
    
    {
      id: 3,
      name: 'Product 3',
      category: 'Books',
      reviews: [
        {
          rating: 4,
          comment: 'Great read!',
        },
        {
          rating: 5,
          comment: 'Awesome book!',
        },
    ]
},
      
    {
      id: 4,
      name: 'Product 4',
      category: 'Electronics',
      reviews: [
        {
          rating: 2,
          comment: 'Poor quality.',
        },
        {
          rating: 1,
          comment: 'Waste of money.',
        }
    ]

    }];

    //#1: Create a new array of products that have at least one rating of 5

    const ProductArray = products.filter((Product) => {
         return Product.reviews.find((review) => review.rating === 5)
    });

    console.log(JSON.stringify(ProductArray)); 

    //Create a new array that contains fields "fullName", "fullAddress", "yearOfBirth" from students array 

const currentYear = 2023;

const students = [
  {
    firstName: "John",
    middleName: "Michael",
    lastName: "Smith",
    address: {
      line1: "123 Main Street",
      line2: "Apt 4B",
      zipcode: "12345"
    },
    age: 20
  },
  {
    firstName: "Emily",
    middleName: "Jane",
    lastName: "Johnson",
    address: {
      line1: "456 Elm Avenue",
      line2: "Suite 202",
      zipcode: "67890"
    },
    age: 22
  },
  {
    firstName: "David",
    middleName: "Robert",
    lastName: "Brown",
    address: {
      line1: "789 Oak Lane",
      line2: "Unit 12C",
      zipcode: "23456"
    },
    age: 19
  },
  {
    firstName: "Sophia",
    middleName: "Grace",
    lastName: "Davis",
    address: {
      line1: "101 Pine Road",
      line2: "Apt 3D",
      zipcode: "54321"
    },
    age: 21
  },
  {
    firstName: "Oliver",
    middleName: "James",
    lastName: "Wilson",
    address: {
      line1: "222 Cedar Street",
      line2: "Suite 101",
      zipcode: "87654"
    },
    age: 23
  }
];

 //Create a new array that contains fields "fullName", "fullAddress", "yearOfBirth" from students array 

 const StudentArray = students.map((Stud) => {
    return {
          fullname: Stud.firstName + Stud.middleName + Stud.lastName,
          fulladdress: Stud.address.line1 + Stud.address.line2 + Stud.address.zipcode,
          yearofBirth:  currentYear - Stud.age
    }
 });

console.log(StudentArray);

// #2:  "Using the orders array, create a new array that contains the names of customers who placed the orders. Each element in the new array should be a customer's name only.

const orders = [
    {
      id: 1,
      customer: {
        name: 'Customer 1',
      },
      items: [
        {
          name: 'Item 1',
          quantity: 1,
        },
        {
          name: 'Item 2',
          quantity: 2,
        },
      ],
    },
    {
      id: 2,
      customer: {
        name: 'Customer 2',
      },
      items: [
        {
          name: 'Item 3',
          quantity: 3,
        },
      ],
    },
    {
      id: 3,
      customer: {
        name: 'Customer 3',
      },
      items: [
        {
          name: 'Item 4',
          quantity: 2,
        },
        {
          name: 'Item 5',
          quantity: 1,
        },
      ],
    },
    {
      id: 4,
      customer: {
        name: 'Customer 4',
      },
      items: [
        {
          name: 'Item 6',
          quantity: 4,
        },
      ],
    },
    {
      id: 5,
      customer: {
        name: 'Customer 5',
      },
      items: [
        {
          name: 'Item 7',
          quantity: 2,
        },
        {
          name: 'Item 8',
          quantity: 3,
        },
      ],
    },
  ];

  //#2:  "Using the orders array, create a new array that contains the names of customers who placed the orders. 
  // Each element in the new array should be a customer's name only.

  const ArrayOrder = orders.map((ord) => ord.customer.name);

   console.log(ArrayOrder);

// Using MAP

// //      const Products = [
// //         {
// //                 id: 1,
// //                 Username: "Umang",
// //                 Email: "Umangmodi003@gmail.com",
// //                 Price: 10000,
// //         },

// //         {
// //                 id: 2,
// //                 Username: "Parth",
// //                 Email: "Parthmodi001@gmail.com",
// //                 Price: 5000,
// //         },

// //         {
// //                 id: 3,
// //                 Username: "Kishan",
// //                 Email: "Kishanpatni01@yahoo.com",
// //                 Price: 25000,
// //         }
// //     ];

// //    const ArrayProduct = Products.filter((Product) => {
// //              return Product.id && Product.Price > 10000
// //     });

// //     console.log(ArrayProduct);
    
//   const Person = {
//         id: 1,
//         firstname: "Umang",
//         Age: 80000
//   };

// //   document.getElementById("Map").innerHTML = Person.id + " is " + Person.firstname 
// //    + " Age is " + Person.Age; 

//    Console.log(Person);




  








