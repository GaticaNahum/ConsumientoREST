/*const getEmployees = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost:8080/RESTservice_war_exploded/customers'
    }).done(res => {
        let listEmployees = res;
        let table = $("#table");

        for (let i = 0; i < listEmployees.length; i++) {
            table.append("<tr>" + "<td>" + res[i].customerName + "</td>" + "</tr>)");
        }

    });
};*/

/*----------------------------------------------------------------------------------------------------------------*/
const save = () => {
    let customer = new Object();
    customer.customerNumber = document.getElementById("customerNumber").value
    customer.customerName = document.getElementById("customerName").value
    customer.contactLastName = document.getElementById("contactLastName").value
    customer.contactFirstName = document.getElementById("contactFirstName").value
    customer.phone = document.getElementById("phone").value
    customer.addressLine1 = document.getElementById("addressLine1").value
    customer.addressLine2 = document.getElementById("addressLine2").value
    customer.city = document.getElementById("city").value
    customer.state = document.getElementById("state").value
    customer.postalCode = document.getElementById("postalCode").value
    customer.country = document.getElementById("country").value
    customer.salesRepEmployeeNumber = document.getElementById("salesRepEmployeeNumber").value
    customer.creditLimit = document.getElementById("creditLimit").value
    $.ajax({
        type: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'http://localhost:8080/RESTservice_war_exploded/customers/save',
        data: customer
    }).done(res => {
        console.log(res);
    });
}

/*-----------------------------------------------------------------------------------------------------------------------------*/

const getCustomers = () => {
    $.ajax({
        type: 'GET',
        headers: { "Accept": "application/json" },
        url: 'http://localhost:8080/RESTservice_war_exploded/customers'
    }).done(res => {
        let listCustomers = res;
        let table = $("#contenido");
        table.append(
            "<tr class='bg-dark text-light'>" +
            +"<th scope='col'></th>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Nombre</th>" +
            "<th scope='col'>Contacto</th>" +
            "<th scope='col'>Teléfono</th>" +
            "<th scope='col'>Dirección</th>" +
            "<th scope='col'>Ubicación</th>" +
            "<th scope='col'>Repre. de Venta</th>" +
            "<th scope='col'>Lím. Crédito</th>" +
            "</tr>")
        for (let i = 0; i < listCustomers.length; i++) {
            table.append("<tr>" +
                "<td>" + res[i].customerNumber + "</td>" +
                "<td>" + res[i].customerName + "</td>" +
                "<td>" + res[i].contactLastName + " " + res[i].contactFirstName + "</td>" +
                "<td>" + res[i].phone + "</td>" +
                "<td>" + res[i].addressLine1 + "</td>" +
                "<td>" + res[i].city + ", " + res[i].country + "</td>" +
                "<td>" + res[i].salesRepEmployeeNumber + "</td>" +
                "<td>" + "$" + res[i].creditLimit + "</td>" +
                "</tr>")
        }
    });
};

getCustomers();