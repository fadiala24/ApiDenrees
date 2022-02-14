package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.CategoryProduit;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.ServiceImpl.CategoryProduitServiceImpl;
import com.example.apidenrees.Services.CategoryProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/MesDenrees")
public class CategoryProduitController {
    @Autowired
    CategoryProduitService categoryProduitService;

    @GetMapping("/getProduitByCategory/{category}")
    public List<CategoryProduit> getProduitByCategory(@PathVariable String category, Produits produits) {
        return categoryProduitService.getProduitByName(category, produits);
    }
}
