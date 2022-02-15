package com.example.apidenrees.Model;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Type;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Localite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String  libelle;

    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private Etat etat;

    @Enumerated(EnumType.STRING)
    private Type type;

    @ManyToOne
    private Localite parent;

    @JsonIgnore
    @OneToMany
    private List<Boutiques> boutiques;

    public List<Boutiques> getBoutiques() {
        return boutiques;
    }

    public void setBoutiques(List<Boutiques> boutiques) {
        this.boutiques = boutiques;
    }


    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Localite getParent() {
        return parent;
    }

    public void setParent(Localite parent) {
        this.parent = parent;
    }

    public Etat getEtat() {
        return etat;
    }

    public void setEtat(Etat etat) {
        this.etat = etat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
