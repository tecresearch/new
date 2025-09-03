package com.hackerrank.tradingplatform.service;

import com.hackerrank.tradingplatform.dto.AddMoneyTraderDTO;
import com.hackerrank.tradingplatform.dto.UpdateTraderDTO;
import com.hackerrank.tradingplatform.model.Trader;
import com.hackerrank.tradingplatform.repository.TraderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TraderService {
    @Autowired
    private TraderRepository traderRepository;

    public ResponseEntity<Trader> registerTrader(Trader trader) {
    	
    	Optional<Trader> t=traderRepository.findByEmail(trader.getEmail());
    	
    	if(t.isPresent()) {
    		   
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); 
    	}
     
          trader.setCreatedAt(Timestamp.valueOf(LocalDateTime.now()));
		  trader.setUpdatedAt(Timestamp.valueOf(LocalDateTime.now()));
		  return  ResponseEntity.status(HttpStatus.CREATED).body(traderRepository.save(trader));
    }

    public Trader getTraderById(Long id) {
        return traderRepository.findById(id).get();
    }

    public ResponseEntity<Trader> getTraderByEmail(String email) {
    	
    	Optional<Trader> t=traderRepository.findByEmail(email);
    	
    	if(t.isPresent()) {
 		   
    		return ResponseEntity.status(HttpStatus.OK).body(t.get()); 
    	}
    	
        return ResponseEntity.notFound().build();
    }
    

    public List<Trader> getAllTraders() {
        return traderRepository.findAll();
    }

    public ResponseEntity<Trader> updateTrader(UpdateTraderDTO trader) {
    	
    	Optional<Trader> existingTrader = traderRepository.findByEmail(trader.getEmail());
         
    	 if(!existingTrader.isPresent()) {
    		 return ResponseEntity.notFound().build();
    	 }
    	 
    	 existingTrader.get().setName(trader.getName());
		 existingTrader.get().setUpdatedAt(Timestamp.valueOf(LocalDateTime.now()));
		return ResponseEntity.ok(traderRepository.save(existingTrader.get()));
    	 
    	 
    }

    public ResponseEntity<AddMoneyTraderDTO> addMoney(AddMoneyTraderDTO trader) {
    	Optional<Trader> existingTrader = traderRepository.findByEmail(trader.getEmail());
   	 if(existingTrader.isPresent()) {
   		     existingTrader.get().setBalance(trader.getAmount()+existingTrader.get().getBalance());
   		     existingTrader.get().setUpdatedAt(Timestamp.valueOf(LocalDateTime.now()));
   		  Trader d=traderRepository.save(existingTrader.get());
   		AddMoneyTraderDTO  ab=new AddMoneyTraderDTO(d.getEmail(),d.getBalance());
   		     
   		  return ResponseEntity.status(HttpStatus.OK).body(ab);
   	 }
   	 
   	 return ResponseEntity.notFound().build();
    }
}
