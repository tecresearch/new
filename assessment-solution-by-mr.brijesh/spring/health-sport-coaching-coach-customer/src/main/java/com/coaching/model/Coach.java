package com.coaching.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="coach")
public class Coach {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String name;
//    @OneToMany(mappedBy = "coach", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    private Set<Customer> customers=new HashSet<Customer>();


}
