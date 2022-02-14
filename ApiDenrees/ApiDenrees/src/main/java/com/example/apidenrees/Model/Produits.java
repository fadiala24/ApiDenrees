package com.example.apidenrees.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.mapping.Collection;

import javax.persistence.*;
import java.util.List;

@Entity
public class Produits {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String nom;

    private String quantite;
    private String prix_unitaire;
    private String photos;


    @ManyToOne
    private Category category;
    @ManyToOne
    private Boutiques boutiques;

    public Boutiques getBoutiques() {
        return boutiques;
    }

    public void setBoutiques(Boutiques boutiques) {
        this.boutiques = boutiques;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getQuantite() {
        return quantite;
    }

    public void setQuantite(String quantite) {
        this.quantite = quantite;
    }

    public String getPrix_unitaire() {
        return prix_unitaire;
    }

    public void setPrix_unitaire(String prix_unitaire) {
        this.prix_unitaire = prix_unitaire;
    }

    public String getPhotos() {
        return photos;
    }

    public void setPhotos(String photos) {
        this.photos = photos;
    }

    public Produits() {
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
