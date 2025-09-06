package com.music.streaming.platform.controller;

import com.music.streaming.platform.dto.ArtistRequest;
import com.music.streaming.platform.model.Artist;
import com.music.streaming.platform.service.ArtistService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/music/platform/v1/artists")
public class ArtistController {
    private final ArtistService service;
    public ArtistController(ArtistService service) {
        this.service=service;
    }

    @PostMapping()
    public ResponseEntity<Artist> create(@RequestBody ArtistRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(service.createArtist(request));
    }
    @GetMapping()
    public ResponseEntity<List<Artist>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(service.getAllArtists());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Artist> getById(@PathVariable("id") Long id) {
        Artist artist=service.getArtistById(id);
        if(artist==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(artist);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Artist> update(@PathVariable("id") Long id,@RequestBody ArtistRequest request){
            return ResponseEntity.status(HttpStatus.OK).body(service.updateArtist(id,request));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Artist> delete(@PathVariable("id") Long id){
            service.deleteArtist(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
