package com.hackerrank.whc.controller;

import com.hackerrank.whc.model.Customer;
import com.hackerrank.whc.repository.CustomerRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    final CustomerRepository repository;

    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    @PostMapping("")
    public ResponseEntity<Customer> save(@RequestBody Customer request){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(request));
    }
    @GetMapping("")
    public ResponseEntity<List<Customer>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll(Sort.by("id")));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Customer> finById(@PathVariable("id") Integer id){

        Customer customer=repository.findById(id).orElse(null);
        if(customer == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }else{
            return ResponseEntity.status(HttpStatus.OK).body(customer);
        }

    }


}
