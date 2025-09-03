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
import com.music.streaming.platform.dto.PlayListRequest;
import com.music.streaming.platform.model.Artist;
import com.music.streaming.platform.model.PlayList;
import com.music.streaming.platform.service.ArtistService;
import com.music.streaming.platform.service.PlayListService;

@RestController
@RequestMapping("/music/platform/v1/playlists")
public class PlayListController {
	
	  @Autowired
	   private  PlayListService  service;
	   
	   
	    @PostMapping 
	    public ResponseEntity<PlayList> addAritsit(@RequestBody PlayListRequest playListRequest){
	    	
	    	 
	       return ResponseEntity.status(HttpStatus.OK).body(service.createPlayList(playListRequest));
	    	
	    }
	    
	   
	    
	   @GetMapping("/{artistId}")
	   public ResponseEntity<PlayList> getByid(@PathVariable Long artistId){
		   
		    return ResponseEntity.status(HttpStatus.OK).body(service.getPlayListById(artistId));
	   }
	   
	   
	   @DeleteMapping("/{artistId}")
	   public ResponseEntity<?> deleteByid(@PathVariable long artistId){
		   
		    service.deletePlayList(artistId);
		    
		    return ResponseEntity.noContent().build();
	   }
}
