package com.example.apidenrees.Services;

import com.example.apidenrees.Model.CategoryProduit;
import com.example.apidenrees.Model.Produits;

import java.util.List;


public interface CategoryProduitService {

    public List<CategoryProduit> getProduitByName(String nom, Produits produits);
}
