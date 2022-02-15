package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Model.Localite;
import com.example.apidenrees.Repositories.LocaliteRepository;
import com.example.apidenrees.Services.LocaliteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class LocaliteServiceImpl implements LocaliteService {
    @Autowired
    LocaliteRepository localiteRepository;

    @Override
    public String aujout_localite(Localite localite) {
        localiteRepository.save(localite);
        return "Ajout effectué avec succes";
    }

    @Override
    public List<Localite> listLocalite() {
        return localiteRepository.findAll();
    }
    @Override
    public List<Localite> listLocaliteVille(Long id) {
        return localiteRepository.findAllByParent(id);
    }
    @Override
    public List<Localite> listLocaliteQuartier(Long parentid) {
        return localiteRepository.findAllByParentId(parentid);
    }

    @Override
    public Localite getLocaliteById(Long id) {
        return localiteRepository.findById(id).get();
    }

    @Override
    public String supprimer_Localite(Long id) {
        Localite localite = localiteRepository.findById(id).get();
        return "Vous avez supprimer la Localité ";
    }

    @Override
    public String modifier_Localite(Localite localite, Long id) {
        Localite localiteExistant = this.localiteRepository.findById(id).get();

        localiteExistant.setLibelle(localite.getLibelle());
        localiteExistant.setEtat(localite.getEtat());
        localiteExistant.setParent(localite.getParent());
        localiteExistant.setType(localite.getType());
        localiteExistant.setEtat(localite.getEtat());

        localiteRepository.save(localite);
        return "Localite modifier avec succes";

    }
}
