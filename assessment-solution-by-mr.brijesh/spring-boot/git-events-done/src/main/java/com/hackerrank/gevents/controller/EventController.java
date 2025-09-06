package com.hackerrank.gevents.controller;

import com.hackerrank.gevents.model.Event;
import com.hackerrank.gevents.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@RestController
public class EventController {
    @Autowired
    private EventRepository eventRepository;
    @PostMapping("/events")
    public ResponseEntity<Event> createEvent(@RequestBody Event event){
       return ResponseEntity.status(HttpStatus.CREATED).body(eventRepository.save(event));
    }
    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvent(){
        return ResponseEntity.ok(eventRepository.findAll(Sort.by(Sort.Direction.ASC,"id")));
    }

    @GetMapping("/events/{eventId}")
    public ResponseEntity<Event> getEvent(@PathVariable("eventId")  Integer id){
        Event event=eventRepository.findById(id).orElse(null);
        if(event==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else{
            return ResponseEntity.status(HttpStatus.OK).body(event);
        }
    }

    @RequestMapping(value = "/repos/{repoId}/events",method =  RequestMethod.GET)
    public ResponseEntity<List<Event>> getEventByRepoId(@PathVariable("repoId") Integer repoId) {
        Optional<Event> event = eventRepository.findById(repoId);

        if(!event.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else {
            List<Event>events=eventRepository.findByRepoIdOrderByIdAsc(repoId);
            return ResponseEntity.status(HttpStatus.OK).body(events);
        }
    }



}
