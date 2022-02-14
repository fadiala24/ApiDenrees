package com.example.apidenrees.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class ProduitBoutique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @JsonIgnore
    @ManyToOne
    private Boutiques boutiques;

    public ProduitBoutique() {
    }

    public Boutiques getBoutiques() {
        return boutiques;
    }

    public void setBoutiques(Boutiques boutiques) {
        this.boutiques = boutiques;
    }

    public Produits getProduits() {
        return produits;
    }

    public void setProduits(Produits produits) {
        this.produits = produits;
    }

    @JsonIgnore
    @ManyToOne
    private Produits produits;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
