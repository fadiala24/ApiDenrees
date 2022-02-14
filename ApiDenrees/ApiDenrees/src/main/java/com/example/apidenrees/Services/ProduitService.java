package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Produits;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProduitService {
    public Produits ajout_Produit(Produits produits,MultipartFile image) throws IOException;
    public List<Produits> listProduit();
    public Produits getProduitById(Long id);
    public String supprimer_produit(Long id);
    public String modifier_produit(Produits produits, Long id);
    public byte[] getpHOTO(Long Id) throws IOException;
    public List<Produits> getProduitByCategory(Long id);
}
