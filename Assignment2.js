// 1: Student Report System

let students = [
  { name: "Suresh", marks: [80, 90, 85] },
  { name: "Ramesh", marks: [70, 60, 80] },
  { name: "Mahesh", marks: [10, 95, 12] },
];

let report = students.map((student) => {
  let sum = student.marks.reduce((num, mark) => num + mark, 0);
  let avg = sum / student.marks.length;
  let grade;
  if (avg >= 75) {
    grade = "Distinction";
  } else if (avg >= 50) {
    grade = "Pass";
  } else {
    grade = "Fail";
  }

  return {
    ...student,
    average: avg,
    grade: grade,
  };
});

console.log(report);

// 2: Shopping Cart Analyzer

function TotalBill(...items) {
  let totalAmount = 0;
  let totalQuantity = 0;

  items.map((item) => {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  });
  return {
    totalAmount,
    totalQuantity,
  };
}

console.log(
  TotalBill(
    { name: "pen", price: 10, quantity: 2 },
    { name: "notebook", price: 5, quantity: 3 },
  ),
);

// 3: User Profile Updater

let user = {
  name: "Ram",
  age: 30,
  city: "vadodara",
};
function profileUpdater(user) {
  return {
    ...user,
    city: "Ahmedabad",
    profession: "Software Engineer",
  };
}

console.log(user);
console.log(profileUpdater(user));

// 4: Product Filter & Transform

let products = [
  { name: "Laptop", price: 100 },
  { name: "Phone", price: 400 },
  { name: "Tablet", price: 1200 },
];

let filteredProducts = products
  .filter((item) => item.price > 1000)
  .map((item) => {
    return {
      ...item,
      discountedPrice: item.price * 0.1,
    };
  });

console.log(filteredProducts);

// 5: Dynamic Number Processor

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((num) => num % 2 === 0);
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
let sumEven = evenNumbers.reduce((sum, num) => sum + num, 0);
let sumOdd = oddNumbers.reduce((sum, num) => sum + num, 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
console.log("Sum of Even Numbers:", sumEven);
console.log("Sum of Odd Numbers:", sumOdd);
