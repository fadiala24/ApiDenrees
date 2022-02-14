package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.Services.CategoryService;
import com.example.apidenrees.Services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Category")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    // ***************  Ajout d'un Produit ***************
    @PostMapping("/addCategorie")
    public Category saveCategorie(Category category, @RequestParam("image") MultipartFile multipartFile) throws IOException {
        return categoryService.ajout_Categorie(category, multipartFile);
    }

    // ******************** Liste des Produits

    @GetMapping("/listCategorie")
    List<Category> listCategorie() {
        return this.categoryService.listCategorie();
    }

    // ************************* Affichage par Produit *****************

    @GetMapping("/infoCategorie/{id}")
    public Category getCategorieById(@PathVariable Long id) {
        return this.categoryService.getCategorieById(id);
    }

    // ************************* Suppression de Produit***************

    @DeleteMapping("/deleteCategorie/{id}")
    public String delete(@PathVariable Long id) {
        return this.categoryService.supprimer_Categorie(id);
    }

    // ************************  Modification de Produit ***************
    @PutMapping("/updateCategorie/{id}")
    public String updateCategorie(@PathVariable Long id, @RequestBody Category category) {
        return this.categoryService.modifier_Categorie(category, id);
    }

    @GetMapping(value = "addPhoto/{idCat}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public byte[] getpHOTO(@PathVariable("idCat") Long Id) throws IOException {
        return categoryService.getpHOTO(Id);

    }
}
