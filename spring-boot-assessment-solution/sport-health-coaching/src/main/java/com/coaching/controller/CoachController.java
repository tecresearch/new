package com.coaching.controller;

import com.coaching.dto.request.CoachRequest;
import com.coaching.model.Coach;
import com.coaching.repository.CoachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coach")
public class CoachController {
    @Autowired
    private CoachRepository coachRepository;

    @PostMapping("")
    public ResponseEntity<Coach> createCoach(@RequestBody CoachRequest coach){
        Coach newCoach=new Coach();
        newCoach.setName(coach.name());
        Coach savedCoach=coachRepository.save(newCoach);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCoach);
    }
    @GetMapping("")
    public ResponseEntity<List<Coach>> getAllCoach() {
       List<Coach> coaches=coachRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
        return ResponseEntity.status(HttpStatus.OK).body(coaches);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Coach> getCoachById(@PathVariable("id") Long id){
        Coach coach=coachRepository.findById(id).orElse(null);
        if(coach==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(coach);
    }
}
