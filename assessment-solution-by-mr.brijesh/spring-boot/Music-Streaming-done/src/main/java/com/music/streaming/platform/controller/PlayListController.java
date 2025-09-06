package com.music.streaming.platform.controller;

import com.music.streaming.platform.dto.PlayListRequest;
import com.music.streaming.platform.model.PlayList;
import com.music.streaming.platform.service.PlayListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/music/platform/v1/playlists")
public class PlayListController {
    private final PlayListService service;
    public PlayListController(PlayListService service) {
        this.service=service;
    }

    @PostMapping()
    public ResponseEntity<PlayList> create(@RequestBody PlayListRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(service.createPlayList(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayList> getById(@PathVariable("id") Long id) {
        PlayList PlayList=service.getPlayListById(id);
        if(PlayList==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(PlayList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PlayList> delete(@PathVariable("id") Long id){
            service.deletePlayList(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
