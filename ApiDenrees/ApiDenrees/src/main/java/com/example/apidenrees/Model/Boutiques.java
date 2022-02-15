package com.example.apidenrees.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.mapping.Collection;

import javax.persistence.*;
import java.util.List;

@Entity
public class Boutiques {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String nom;
    private String adresse;
    private String ville;

    public List<Produits> getProduits() {
        return produits;
    }

    public void setProduits(List<Produits> produits) {
        this.produits = produits;
    }

    private String quartier;
    private String photo;
    private String latitude;
    private String longitude;


    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    @ManyToMany
    private List<Administrateur> administrateurs;

    @JsonIgnore
    @OneToMany(mappedBy = "boutiques")
    private List<Produits> produits;

    @ManyToOne
    private Boutiquier boutiquier;


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getQuartier() {
        return quartier;
    }

    public void setQuartier(String quartier) {
        this.quartier = quartier;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public List<Administrateur> getAdministrateurs() {
        return administrateurs;
    }

    public void setAdministrateurs(List<Administrateur> administrateurs) {
        this.administrateurs = administrateurs;
    }

    public Boutiquier getBoutiquier() {
        return boutiquier;
    }

    public void setBoutiquier(Boutiquier boutiquier) {
        this.boutiquier = boutiquier;
    }

    public Boutiques() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
