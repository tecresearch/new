package com.coaching.controller;


import com.coaching.dto.request.CustomerRequest;
import com.coaching.model.Coach;
import com.coaching.model.Customer;
import com.coaching.repository.CoachRepository;
import com.coaching.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private  CustomerRepository customerRepository;
    @Autowired
    private CoachRepository coachRepository;

    @PostMapping("")
    public ResponseEntity<Customer> createCustomer(@RequestBody CustomerRequest customer) {
        Customer cst=new Customer();
        cst.setHeight(customer.height());
        cst.setWeight(customer.weight());
        Long  cId=customer.coach_id();
        Coach existCoach=coachRepository.findById(cId).orElse(null);
       if(existCoach==null){
           return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
       }
       cst.setCoach(existCoach);

        Customer savedCustomer = customerRepository.save(cst);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
    }
    @GetMapping("")
    public ResponseEntity<List<Customer>> getAllCustomer() {
        List<Customer> customers=customerRepository.findAll(
                Sort.by(Sort.Direction.ASC, "id")
        );
        return ResponseEntity.status(HttpStatus.OK).body(customers);
    }
    @GetMapping("{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long id){
        Customer customer=customerRepository.findById(id).orElse(null);
        if(customer==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(customer);
    }



}
