package com.hackerrank.stocktrades.controller;

import com.hackerrank.stocktrades.model.StockTrade;
import com.hackerrank.stocktrades.repository.StockTradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trades")
public class StockTradeRestController {
    @Autowired
    private StockTradeRepository stockTradeRepository;
    @PostMapping("")
    public ResponseEntity<StockTrade> post(@RequestBody StockTrade stockTrade) {
        return ResponseEntity.status(HttpStatus.CREATED).body(stockTradeRepository.save(stockTrade));
    }
    @GetMapping("")
    public ResponseEntity<List<StockTrade>> getAll() {
    return ResponseEntity.status(HttpStatus.OK).body(stockTradeRepository.findAll(Sort.by("id")));
    }
    @GetMapping("/{id}")
    public ResponseEntity<StockTrade> getById(@PathVariable("id") Integer id) {
        StockTrade stockTrade = stockTradeRepository.findById(id).orElse(null);
        if(stockTrade != null) {
            return ResponseEntity.status(HttpStatus.OK).body(stockTrade);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
