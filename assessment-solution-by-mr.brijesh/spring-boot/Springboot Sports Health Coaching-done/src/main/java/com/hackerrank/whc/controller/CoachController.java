package com.hackerrank.whc.controller;

import com.hackerrank.whc.model.Coach;
import com.hackerrank.whc.model.Customer;
import com.hackerrank.whc.repository.CoachRepository;
import com.hackerrank.whc.repository.CustomerRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/coach")
public class CoachController {

    final CoachRepository repository;

    public CoachController(CoachRepository repository) {
        this.repository = repository;
    }

    @PostMapping("")
    public ResponseEntity<Coach> save(@RequestBody Coach request){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(request));
    }
    @GetMapping("")
    public ResponseEntity<List<Coach>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll(Sort.by("id")));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Coach> finById(@PathVariable("id") Integer id){

        Coach coach=repository.findById(id).orElse(null);
        if(coach == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }else{
            return ResponseEntity.status(HttpStatus.OK).body(coach);
        }

    }
}
