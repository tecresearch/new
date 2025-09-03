package com.artist.controller;

import com.artist.dto.ArtistRequest;
import com.artist.model.Artist;
import com.artist.repository.ArtistRepository;
import com.artist.service.ArtistService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("v1/artists")
public class ArtistController {
    private final ArtistService artistService;
    
    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }
    
     @Autowired
    private ArtistRepository repo;

    @PostMapping()
    public ResponseEntity<Artist> createPlayList(@RequestBody ArtistRequest b){
    	
    	
    	  Artist a=new Artist();
    	   a.setFirstName(b.firstName());
    	   a.setLastName(b.lastName());
    	 
        return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(a));
    }

    @GetMapping("/{artistId}")
    public ResponseEntity<Artist> getArtistById(@PathVariable Long artistId){
    	
//    	  Optional<Artist> a=repo.findById(artistId);
    	  
//    	   if(!a.isPresent()) {
//    		 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//    	   }
//    	  
    	  Artist a=repo.findById(artistId).orElse(null);
    	  if(a==null) {
    		  
    		  return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    	  }
        return ResponseEntity.status(HttpStatus.OK).body(a);
    }

    @GetMapping
    public ResponseEntity<List<Artist>> getAllArtists(){
        return ResponseEntity.status(HttpStatus.OK).body(repo.findAll());
    }

    @DeleteMapping("/{artistId}")
    public ResponseEntity<Void> deleteArtist(@PathVariable Long artistId){
    	   repo.deleteById(artistId);
        return ResponseEntity.noContent().build();
    }
}
