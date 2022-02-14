package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.ProduitBoutique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryRepositorie extends JpaRepository<Category, Long> {

    @Query(value = "SELECT i FROM Category i WHERE  i.produits = :quartier")
    List<ProduitBoutique> findBoutiqueByQuartierAndCategory(@Param("quartier") String quartier);
}
