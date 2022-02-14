package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.ProduitBoutique;

import java.util.List;

public interface ProduitBoutiqueService {

    public List<ProduitBoutique> getBoutiqueByQuartierAndCategory(String quartier);
}
