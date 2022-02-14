package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.ServiceImpl.AdminServiceImpl;
import com.example.apidenrees.ServiceImpl.ProduitServiceImpl;
import com.example.apidenrees.Services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Produit")
public class ProduitController {

    @Autowired
    ProduitService produitService;

    @Autowired
     ProduitServiceImpl produitServiceImpl;

    // ***************  Ajout d'un Produit ***************
    @PostMapping("/addProduit")
    public Produits saveProduit(Produits produits, @RequestParam("image") MultipartFile multipartFile) throws IOException {
        return produitService.ajout_Produit(produits,multipartFile);
    }

    // ******************** Liste des Produits

    @GetMapping("/listProduit")
    List<Produits> listProduit(){
        return this.produitServiceImpl.listProduit();
    }

    // ************************* Affichage par Produit *****************

    @GetMapping("/infoProduit/{id}")
    public Produits getPrdoduitById(@PathVariable Long id) {
        return this.produitServiceImpl.getProduitById(id);
    }

    // ************************* Suppression de Produit***************

    @DeleteMapping("/deleteProduit/{id}")
    public String delete(@PathVariable Long id){
        return this.produitServiceImpl.supprimer_produit(id);
    }

    // ************************  Modification de Produit ***************
    @PutMapping("/updateProduit/{id}")
    public String updateProduit(@PathVariable Long id, @RequestBody Produits produits){
        return this.produitServiceImpl.modifier_produit(produits, id);
    }
    @GetMapping(value = "addPhoto/{idProd}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public byte[] getpHOTO(@PathVariable("idProd") Long Id ) throws IOException {
        return produitServiceImpl.getpHOTO(Id);
    }
    @GetMapping("/getProduitByCategorie/{id}")
    public List<Produits> getProduitByCategory(@PathVariable Long id) {
        return produitService.getProduitByCategory(id);
    }
}
