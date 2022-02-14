package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.FileUploadUtil;
import com.example.apidenrees.Repositories.BoutiqueRepository;
import com.example.apidenrees.Services.BoutiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.nio.file.Files;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@Transactional
public class BoutiqueServiceImpl implements BoutiqueService {
    @Autowired
    BoutiqueRepository boutiqueRepository;

    @Override
    public Boutiques aujout_boutique(Boutiques boutiques, @RequestParam("image") MultipartFile multipartFile) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        boutiques.setPhoto(fileName);
        Boutiques savedBou = boutiqueRepository.save(boutiques);
        String uploadDir = "src/main/resources/Photos/" + savedBou.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return savedBou;
    }

    @Override
    public List<Boutiques> listBoutique() {
        return boutiqueRepository.findAll();
    }

    @Override
    public Boutiques getBoutiqueById(Long id) {
        return boutiqueRepository.findById(id).get();
    }

    @Override
    public String supprimer_boutique(Long id) {
        this.boutiqueRepository.deleteById(id);
        return "Vous avez supprimer la Boutique ";

    }

    @Override
    public String modifier_boutique(Boutiques boutiques, Long id) {
        Boutiques boutiqueExistant = this.boutiqueRepository.findById(id).get();

        boutiqueExistant.setNom(boutiques.getNom());
        boutiqueExistant.setAdresse(boutiques.getAdresse());
        boutiqueExistant.setVille(boutiques.getVille());
        boutiqueExistant.setQuartier(boutiques.getQuartier());
        boutiqueExistant.setBoutiquier(boutiques.getBoutiquier());
        boutiqueExistant.setLatitude(boutiques.getLatitude());
        boutiqueExistant.setLongitude(boutiques.getLongitude());
        return "Boutique modifiée avec succes";
    }

    @Override
    public List<Boutiques> getBoutiqueByVilleAndQuartier(String ville, String quartier) {
        return boutiqueRepository.findBoutiqueByVilleQAndQuartier(ville,quartier);
    }

    @Override
    public List<Boutiques> getBoutiqueByVille(String ville) {
        return boutiqueRepository.findBoutiquesByVille(ville);
    }

    @Override
    public List<Boutiques> getBoutiqueByQuartier(String quartier) {
        return boutiqueRepository.findBoutiquesByQuartier(quartier);
    }

    @Transactional
    @Override
    public byte[] getpHOTO(Long Id) throws IOException {
        Boutiques trv = boutiqueRepository.findById(Id).get();
        String iconPhoto = trv.getPhoto();
        File file = new File("src/main/resources/Photos/"+ trv.getId() +"/" +iconPhoto);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }
}
