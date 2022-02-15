package com.example.apidenrees.Model;

import com.example.apidenrees.Etat;

import javax.persistence.*;

@Entity
public class Localite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String  ville;

    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private Etat etat;

    @ManyToOne
    @JoinColumn(name="quartier_id")
    private Localite quartier_id;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
