package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.CategoryProduit;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryProduitRepository extends JpaRepository<Category, Long> {

    // ************ Requete pour chercher le produit selon le Categorie **********************

    @Query(value = "SELECT i FROM CategoryProduit i WHERE  i.category.nom = :nom and i.produits= :produits")


    List<CategoryProduit> findCategoryByNom (@Param("nom") String nom, Produits produits);
}
