package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProduitRepositry extends JpaRepository<Produits, Long> {
    @Query(value = "SELECT i FROM Produits i WHERE  i.category.id = :id")
    List<Produits> findProduitsByProduit(Long id);
}
