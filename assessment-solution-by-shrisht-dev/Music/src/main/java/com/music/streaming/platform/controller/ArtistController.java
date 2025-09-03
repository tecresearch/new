package com.music.streaming.platform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.music.streaming.platform.dto.ArtistRequest;
import com.music.streaming.platform.model.Artist;
import com.music.streaming.platform.service.ArtistService;

@RestController
@RequestMapping("/music/platform/v1/artists")
public class ArtistController {
	
	 
	   @Autowired
	   private ArtistService service;
	   
	   
	    @PostMapping 
	    public ResponseEntity<Artist> addAritsit(@RequestBody ArtistRequest artistRequest){
	    	
	    	 
	       return ResponseEntity.status(HttpStatus.OK).body(service.createArtist(artistRequest));
	    	
	    }
	    
	    @GetMapping
	    public ResponseEntity<List<Artist>> getAll(){
	    	
	    	return ResponseEntity.status(HttpStatus.OK).body(service.getAllArtists());
	    }
	    
	    
	   @GetMapping("/{artistId}")
	   public ResponseEntity<Artist> getByid(@PathVariable Long artistId){
		   
		    return ResponseEntity.status(HttpStatus.OK).body(service.getArtistById(artistId));
	   }
	   
	   @PutMapping("/{artistId}")
	   public ResponseEntity<Artist> updateArtist(@PathVariable long artistId,@RequestBody ArtistRequest artistRequest){
		   
		   
		   return ResponseEntity.status(HttpStatus.OK).body(service.updateArtist(artistId, artistRequest));
	   }
	   
	   @DeleteMapping("/{artistId}")
	   public ResponseEntity<?> deleteByid(@PathVariable long artistId){
		   
		    service.deleteArtist(artistId);
		    
		    return ResponseEntity.noContent().build();
	   }
}
