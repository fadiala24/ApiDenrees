package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.FileUploadUtil;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.Repositories.CategoryRepositorie;
import com.example.apidenrees.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepositorie categoryRepositorie;
    @Override
    public Category ajout_Categorie(Category category,@RequestParam("image") MultipartFile multipartFile) throws IOException {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        category.setPhoto(fileName);
        Category savedBou = categoryRepositorie.save(category);
        String uploadDir = "src/main/resources/Categorie/" + savedBou.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return savedBou;
    }

    @Override
    public List<Category> listCategorie() {
        return categoryRepositorie.findAll();
    }

    @Override
    public Category getCategorieById(Long id) {
        return categoryRepositorie.findById(id).get();
    }

    @Override
    public String supprimer_Categorie(Long id) {

        this.categoryRepositorie.deleteById(id);
        return "Vous avez supprimer la Categorie ";
    }

    @Override
    public String modifier_Categorie(Category category, Long id) {
       Category categoryExistant = this.categoryRepositorie.findById(id).get();

       categoryExistant.setNom(category.getNom());
        return " Categorie modifié avec succes";

    }

    @Override
    public byte[] getpHOTO(Long Id) throws IOException {
        Category trv = categoryRepositorie.findById(Id).get();
        String iconPhoto = trv.getPhoto();
        File file = new File("src/main/resources/Categorie/"+ trv.getId() +"/" +iconPhoto);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }
}
