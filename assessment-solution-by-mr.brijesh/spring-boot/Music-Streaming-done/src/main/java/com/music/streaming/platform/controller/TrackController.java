package com.music.streaming.platform.controller;

import com.music.streaming.platform.dto.TrackRequest;
import com.music.streaming.platform.model.Track;
import com.music.streaming.platform.service.TrackService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/music/platform/v1/tracks")
public class TrackController {
    private final TrackService service;
    public TrackController(TrackService service) {
        this.service=service;
    }

    @PostMapping()
    public ResponseEntity<Track> create(@RequestBody TrackRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(service.createTrack(request));
    }
    @GetMapping()
    public ResponseEntity<List<Track>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(service.getAllTracks());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Track> getById(@PathVariable("id") Long id) {
        Track Track=service.getTrackById(id);
        if(Track==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(Track);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Track> update(@PathVariable("id") Long id,@RequestBody TrackRequest request){
            return ResponseEntity.status(HttpStatus.OK).body(service.updateTrack(id,request));

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Track> delete(@PathVariable("id") Long id){
        Track Track=service.getTrackById(id);
            service.deleteTrack(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }

}
