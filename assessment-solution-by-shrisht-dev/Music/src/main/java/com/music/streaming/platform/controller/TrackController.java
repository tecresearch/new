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
import com.music.streaming.platform.dto.TrackRequest;
import com.music.streaming.platform.model.Artist;
import com.music.streaming.platform.model.Track;
import com.music.streaming.platform.service.ArtistService;
import com.music.streaming.platform.service.TrackService;

@RestController
@RequestMapping("/music/platform/v1/tracks")
public class TrackController {
	
	
	 
	   @Autowired
	   private TrackService service;
	   
	   
	    @PostMapping 
	    public ResponseEntity<Track> addAritsit(@RequestBody TrackRequest trackRequest){
	    	
	    	 
	       return ResponseEntity.status(HttpStatus.OK).body(service.createTrack(trackRequest));
	    	
	    }
	    
	    @GetMapping
	    public ResponseEntity<List<Track>> getAll(){
	    	
	    	return ResponseEntity.status(HttpStatus.OK).body(service.getAllTracks());
	    }
	    
	    
	   @GetMapping("/{artistId}")
	   public ResponseEntity<Track> getByid(@PathVariable Long artistId){
		   
		    return ResponseEntity.status(HttpStatus.OK).body(service.getTrackById(artistId));
	   }
	   
	   @PutMapping("/{artistId}")
	   public ResponseEntity<Track> updateArtist(@PathVariable long artistId,@RequestBody TrackRequest trackRequest){
		   
		   
		   return ResponseEntity.status(HttpStatus.OK).body(service.updateTrack(artistId, trackRequest));
	   }
	   
	   @DeleteMapping("/{artistId}")
	   public ResponseEntity<?> deleteByid(@PathVariable long artistId){
		   
		    service.deleteTrack(artistId);
		    
		    return ResponseEntity.noContent().build();
	   }
}
