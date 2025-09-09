const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json(
    [
      {
        id: 1,
        employeeName: "Mujji",
        employeeSalary: 331234
      },
      {
        id: 2,
        employeeName: "Ibbi",
        employeeSalary: 21657
      },
      {
        id: 1,
        employeeName: "Pujji",
        employeeSalary: 53523
      },
      {
        id: 4,
        employeeName: "dujji",
        employeeSalary: 63523
      },
    ]
  )
})

app.listen(4000, () => {
    console.log('My App is running on port 4000');
    })