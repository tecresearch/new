package com.music.playlist.controller;

import com.music.playlist.dto.PlayListRequest;
import com.music.playlist.model.PlayList;
import com.music.playlist.service.PlayListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/playlists")
public class PlayListController {

    private PlayListService service;

    public PlayListController(PlayListService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<PlayList> createPlayList(@RequestBody PlayListRequest playListRequest){
        return new ResponseEntity<>(service.createPlayList(playListRequest), HttpStatus.CREATED);
    }

    @GetMapping("/{playListId}")
    public ResponseEntity<PlayList> getPlayListById(@PathVariable Long playListId){
        PlayList p=service.getPlayListByID(playListId);
        if(p==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(service.getPlayListByID(playListId), HttpStatus.OK);
        }
    }

    @GetMapping
    public ResponseEntity<List<PlayList>> getAllPlayLists(){
        return new ResponseEntity<>(service.getPlayLists(), HttpStatus.OK);
    }

    @DeleteMapping("/{playListId}")
    public ResponseEntity<Void> deletePlayList(@PathVariable Long playListId){
        PlayList p=service.getPlayListByID(playListId);
        if(p==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        service.deletePlayList(playListId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT) ;
    }

}
