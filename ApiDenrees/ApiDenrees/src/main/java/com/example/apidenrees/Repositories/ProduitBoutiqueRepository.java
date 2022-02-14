package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.ProduitBoutique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProduitBoutiqueRepository extends JpaRepository<ProduitBoutique, Long> {

    // ************ Requete pour chercher la Boutique selon le quartier et la category **********************

    @Query(value = "SELECT i FROM ProduitBoutique i WHERE  i.boutiques.quartier = :quartier")
  List<ProduitBoutique> findBoutiqueByQuartierAndCategory(@Param("quartier") String quartier);
}
