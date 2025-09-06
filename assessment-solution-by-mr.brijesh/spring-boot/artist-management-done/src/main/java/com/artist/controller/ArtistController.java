package com.artist.controller;

import com.artist.dto.ArtistRequest;
import com.artist.model.Artist;
import com.artist.service.ArtistService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/artists")
public class ArtistController {
    private final ArtistService ser;

    public ArtistController(ArtistService ser) {
        this.ser = ser;
    }

    @PostMapping()
    public ResponseEntity<Artist> createPlayList(@RequestBody ArtistRequest req){
        return new ResponseEntity<>(ser.createArtist(req), HttpStatus.CREATED);
    }

    @GetMapping("/{artistId}")
    public ResponseEntity<Artist> getArtistById(@PathVariable Long artistId){
        Artist artist=ser.getArtistByID(artistId);
        if(artist==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(artist);
    }

    @GetMapping
    public ResponseEntity<List<Artist>> getAllArtists(){
        return new ResponseEntity<>(ser.getArtists(), HttpStatus.OK);
    }

    @DeleteMapping("/{artistId}")
    public ResponseEntity<Void> deleteArtist(@PathVariable Long artistId){
       Artist artist=ser.getArtistByID(artistId);
       if(artist==null){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }else{
           ser.deleteArtist(artistId);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       }
    }
}
