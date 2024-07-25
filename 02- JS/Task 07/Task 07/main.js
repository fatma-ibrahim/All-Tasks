class Employee {
  constructor(name, age, position, department) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.department = department;
  }
}

class EmployeeUi {
  static addEmployeeIntoTable(employee) {
    const tbody = document.querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.position}</td>
      <td>${employee.department}</td>
      <td>
        <a class="btn btn-primary btn-sm update" href="#">Update</a>
        <a class="btn btn-danger btn-sm delete" href="#">Delete</a>
      </td>
    `;
    tbody.appendChild(row);
  }

  static resetInputs() {
    document.querySelector("#name").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#position").value = "";
    document.querySelector("#department").value = "";
    document.querySelector("#submit-btn").value = "Add Employee";
    document.querySelector("#submit-btn").dataset.action = "add";
    document.querySelector("#submit-btn").removeAttribute("data-row-index");
  }

  static showMessages(textMessage, clsName) {
    const div = document.createElement("div");
    div.className = `alert alert-${clsName}`;

    // Determine the icon based on the alert type
    let icon;
    switch (clsName) {
      case "success":
        icon = "<i class='fas fa-check-circle'></i> ";
        break;
      case "danger":
        icon = "<i class='fas fa-times-circle'></i> ";
        break;
      case "warning":
        icon = "<i class='fas fa-exclamation-circle'></i> ";
        break;
      default:
        icon = "";
    }

    div.innerHTML = `${icon}${textMessage}`;
    const formSection = document.querySelector(".form-section");
    const form = document.querySelector("form");
    formSection.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 4000);
  }

  static deleteEmployee(element) {
    if (element.classList.contains("delete")) {
      const confirm = window.confirm("Are You Sure?");
      if (confirm) {
        element.parentElement.parentElement.remove();
        EmployeeUi.showMessages("Employee Deleted Successfully", "warning");
      }
    }
  }

  static populateForm(employee) {
    document.querySelector("#name").value = employee.name;
    document.querySelector("#age").value = employee.age;
    document.querySelector("#position").value = employee.position;
    document.querySelector("#department").value = employee.department;
    document.querySelector("#submit-btn").value = "Update Employee";
    document.querySelector("#submit-btn").dataset.action = "update";
    document.querySelector("#submit-btn").dataset.rowIndex = employee.rowIndex;
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameVal = document.querySelector("#name").value;
  const ageVal = parseInt(document.querySelector("#age").value);
  const positionVal = document.querySelector("#position").value;
  const departmentVal = document.querySelector("#department").value;

  if (
    nameVal === "" ||
    isNaN(ageVal) ||
    positionVal === "" ||
    departmentVal === ""
  ) {
    EmployeeUi.showMessages("All Inputs Are Required", "danger");
  } else {
    const action = document.querySelector("#submit-btn").dataset.action;
    if (action === "add") {
      const employeeObj = new Employee(
        nameVal,
        ageVal,
        positionVal,
        departmentVal
      );
      EmployeeUi.addEmployeeIntoTable(employeeObj);
      EmployeeUi.showMessages("Employee Added Successfully", "success");
    } else if (action === "update") {
      const rowIndex = document.querySelector("#submit-btn").dataset.rowIndex;
      const tbody = document.querySelector("tbody");
      const row = tbody.rows[rowIndex];
      row.cells[0].innerText = nameVal;
      row.cells[1].innerText = ageVal;
      row.cells[2].innerText = positionVal;
      row.cells[3].innerText = departmentVal;
      EmployeeUi.showMessages("Employee Updated Successfully", "success");
    }
    EmployeeUi.resetInputs();
  }
});

document.querySelector("tbody").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    EmployeeUi.deleteEmployee(event.target);
  } else if (event.target.classList.contains("update")) {
    const row = event.target.parentElement.parentElement;
    const employee = {
      name: row.cells[0].innerText,
      age: row.cells[1].innerText,
      position: row.cells[2].innerText,
      department: row.cells[3].innerText,
      rowIndex: row.rowIndex - 1,
    };
    EmployeeUi.populateForm(employee);
  }
});
