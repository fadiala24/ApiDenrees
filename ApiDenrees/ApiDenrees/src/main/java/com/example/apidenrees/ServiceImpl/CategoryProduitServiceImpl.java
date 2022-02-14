package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Model.CategoryProduit;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.Repositories.CategoryProduitRepository;
import com.example.apidenrees.Services.CategoryProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CategoryProduitServiceImpl implements CategoryProduitService {
    @Autowired
    CategoryProduitRepository categoryProduitRepository;

    @Override
    public List<CategoryProduit> getProduitByName(String nom, Produits produits) {
        return categoryProduitRepository.findCategoryByNom(nom, produits);
    }
}
