package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.Produits;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CategoryService {
    public Category ajout_Categorie(Category category, MultipartFile image) throws IOException;
    public List<Category> listCategorie();
    public Category getCategorieById(Long id);
    public String supprimer_Categorie(Long id);
    public String modifier_Categorie(Category category, Long id);
    public byte[] getpHOTO(Long Id) throws IOException;
}
