package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface BoutiqueService {
    public Boutiques aujout_boutique(Boutiques boutiques, MultipartFile image) throws IOException;
    public List<Boutiques> listBoutique();
    public Boutiques getBoutiqueById(Long id);
    public String supprimer_boutique(Long id);
    public String modifier_boutique(Boutiques boutiques, Long id);
    public List<Boutiques> getBoutiqueByVilleAndQuartier(String ville, String quartier);
    public List<Boutiques> getBoutiqueByVille(String ville);
    public List<Boutiques> getBoutiqueByQuartier(String quartier);
    public byte[] getpHOTO(Long Id) throws IOException;


}
