package com.coaching.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private int height;
    private int weight;
    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.EAGER)
    private Coach coach;


}
