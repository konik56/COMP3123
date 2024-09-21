const http = require("http");
const employees = require("./employee");
console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");

    if (req.method !== "GET") {
      res.statusCode = 405;
      throw new Error("Method Not Allowed");
    }

    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.end("<h1>Welcome to Lab Exercise 03</h1>");
      return;
    }

    if (req.url === "/employee") {
      res.statusCode = 200;
      res.end(JSON.stringify(employees, null, 2));
      return;
    }

    if (req.url === "/employee/names") {
      const employeeNames = employees
        .map((emp) => `${emp.firstName} ${emp.lastName}`)
        .sort();
      res.statusCode = 200;
      res.end(JSON.stringify(employeeNames, null, 2));
      return;
    }

    if (req.url === "/employee/totalsalary") {
      const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
      res.statusCode = 200;
      res.end(JSON.stringify({ total_salary: totalSalary }));
      return;
    }

    res.statusCode = 404;
    throw new Error("Not Found");
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
