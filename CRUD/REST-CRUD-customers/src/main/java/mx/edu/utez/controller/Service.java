package mx.edu.utez.controller;


import mx.edu.utez.model.Customer;
import mx.edu.utez.model.DaoCustomer;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import java.util.List;

@Path("/customers")
public class Service {

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getEmployees(){
        return new DaoCustomer().findAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getEmployee(@PathParam("id") int employeeNumber){
        return new DaoCustomer().findById(employeeNumber);
    }


    @POST
    @Path("/save")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Customer save(MultivaluedMap<String, String> formParams){
        int employeeNumber = Integer.parseInt(formParams.get("employeeNumber").get(0));
        if(new DaoCustomer().saveCustomers(getParams(employeeNumber, formParams), true))
            return new DaoCustomer().findById(employeeNumber);
        return null;
    }

    @POST
    @Path("/save/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes("application/x-www-form-urlencoded")
    public Customer save(@PathParam("id") int employeeNumber, MultivaluedMap<String, String> formParams){
        if(new DaoCustomer().saveCustomers(getParams(employeeNumber, formParams), false))
            return new DaoCustomer().findById(employeeNumber);
        return null;
    }

    @DELETE
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean deleteEmployee(@PathParam("id") int employeeNumber){
        return new DaoCustomer().delete(employeeNumber);
    }


        private Customer getParams(int customerNumber, MultivaluedMap<String, String> formParams) {
        String customerName = formParams.get("customerName").get(0);
        String contactLastName = formParams.get("contactLastName").get(0);
        String contactFirstName = formParams.get("contactFirstName").get(0);
        String phone = formParams.get("phone").get(0);
        String addressLine1 = formParams.get("addressLine1").get(0);
        String addressLine2 = formParams.get("addressLine2").get(0);
        String city = formParams.get("city").get(0);
        String state = formParams.get("state").get(0);
        String postalCode = formParams.get("postalCode").get(0);
        String country = formParams.get("country").get(0);
        int salesRepEmployeeNumber = Integer.parseInt(formParams.get("salesRepEmployeeNumber").get(0));
        int creditLimit = Integer.parseInt(formParams.get("creditLimit").get(0));

        Customer customer = new Customer(customerNumber, customerName , contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit);
        System.out.println(customer);
        return customer;
    }

}
