package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Boutiques;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoutiqueRepository extends JpaRepository<Boutiques, Long> {

    // ************ Requete pour chercher la Boutique selon la Ville
    @Query(value = "SELECT countrie FROM Boutiques countrie WHERE countrie.ville = :ville")
    List<Boutiques> findBoutiquesByVille(@Param("ville") String ville);

    // ************** Requete pour chercher la Boutique selon le quartier
    @Query(value = "SELECT quart FROM Boutiques quart WHERE quart.quartier = :quartier")
    List<Boutiques> findBoutiquesByQuartier(@Param("quartier") String quartier);

     // ************** Requete pour afficher la Boutique selon la ville et le quartier
    @Query(value = "SELECT tous FROM Boutiques tous WHERE tous.ville = :ville AND tous.quartier = :quartier" )
    List<Boutiques> findBoutiqueByVilleQAndQuartier(@Param("ville")  String ville, @Param("quartier") String quartier);
}
