package com.hackerrank.stocktrades.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackerrank.stocktrades.model.StockTrade;
import com.hackerrank.stocktrades.repository.StockTradeRepository;

@RestController
@RequestMapping("/trades")
public class StockTradeRestController {
	  @Autowired
	 private StockTradeRepository repo;
	  
	  @PostMapping
	 
	  public ResponseEntity<StockTrade> create(@RequestBody StockTrade data){
		  
		     
		  return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(data));
	  }
	  
	  @GetMapping
	  
	  public ResponseEntity<List<StockTrade>> findAll(){
		  
		  return ResponseEntity.ok(repo.findAll());
	  }
	  
	  @GetMapping("/{id}")
	   
	  public ResponseEntity<StockTrade> findById(@PathVariable int id){
		  
		   Optional<StockTrade> s=repo.findById(id);
		   
		    if(!s.isPresent()) {
		    	
		        return ResponseEntity.notFound().build();
		    }
		  
		    return ResponseEntity.ok(s.get());
	  }
	  
	  
	  
	 
}
