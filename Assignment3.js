// 1. Employee Salary Processor

const employees = [
  { name: "Yash", salary: 20000 },
  { name: "Suresh", salary: 30000 },
  { name: "Ramesh", salary: 45000 },
  { name: "Jayesh", salary: 80000 },
];

const result = employees
  .filter((emp) => emp.salary > 40000)
  .map((emp) => {
    const newsalary = emp.salary * 1.1;
    return {
      ...emp,
      salary: newsalary,
      level: newsalary >= 70000 ? "Senior" : "Mid",
    };
  });

console.log(result);

// 2. Order Management System

const orders = [
  {
    id: 1,
    items: [
      { name: "pen", price: 10, quantity: 2 },
      { name: "book", price: 5, quantity: 3 },
    ],
  },
  {
    id: 2,
    items: [
      { name: "scale", price: 10, quantity: 1 },
      { name: "pencil", price: 7, quantity: 4 },
    ],
  },
];

const results = orders.map((order) => {
  const totalAmount = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalQuantity = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  return {
    ...order,
    totalAmount,
    totalQuantity,
  };
});
console.log(JSON.stringify(results, null, 2));
