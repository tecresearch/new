package com.music.track.controller;

import com.music.track.dto.TrackRequest;
import com.music.track.model.Track;
import com.music.track.repository.TrackRepository;
import com.music.track.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("music/platform/v1/tracks")
public class TrackController {

    private final TrackService trackService;
    @Autowired
    public TrackController(TrackService trackService) {
        this.trackService = trackService;
    }
    
     @Autowired
     private TrackRepository repo;
    /**
     * Create a track
     * @param trackRequest
     * @return
     */
    @PostMapping()
    public ResponseEntity<Track> createTrack(@RequestBody TrackRequest a){
    	
    	    Track t=new Track();
    	    
    	      t.setAlbumName(a.albumName());
    	      t.setPlayCount(a.playCount());
    	      t.setTitle(a.title());
    	      
        return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(t));
    }
    /**
     * Get all tracks
     * @return
     */
    @GetMapping()
    public ResponseEntity<List<Track>> getAllTracks(){
        return ResponseEntity.ok(repo.findAll());
    }
    /**
     * Delete a track
     * @param trackId
     * @return
     */
    @DeleteMapping("/{trackId}")
    public ResponseEntity<Void> deleteTrack(@PathVariable Long trackId){
    	
    	   repo.deleteById(trackId);
        return ResponseEntity.noContent().build();
    }

    /**
     * Get Track sorted
     * @return
     */
    @GetMapping("/sorted")
    public ResponseEntity<List<Track>> getTracksSorted() {
    	
    	List<Track> alldata=repo.findAll();
    	
    	Collections.sort(alldata, new Mysort());
    	  
        return ResponseEntity.ok(alldata);
    }
    
    
    class Mysort implements Comparator<Track>{
    	
   	 public int compare(Track s1,Track s2) {
   		 
   		return s1.getTitle().compareTo(s2.getTitle());
   	 }

	
   }
}

