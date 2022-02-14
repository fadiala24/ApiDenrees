package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.ServiceImpl.ProduitBoutiqueServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/MesDenrees")
public class ProduitBoutiqueController {
    @Autowired
    ProduitBoutiqueServiceImpl produitBoutiqueServiceImpl;

    // *********************************** Affichage de la boutique par quartier et category ********************
    @GetMapping("/getBoutiqueByQuartierCategory/quartier={quartier}&category={category}")
    public List<ProduitBoutique> getBoutiqueByQuartierCategory(@PathVariable String quartier) {
        return produitBoutiqueServiceImpl.getBoutiqueByQuartierAndCategory(quartier);
    }

}
