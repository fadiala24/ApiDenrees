package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Model.Localite;

import java.util.List;

public interface LocaliteService {
    public String aujout_localite(Localite localite);
    public List<Localite> listLocalite();
    public Localite getLocaliteById(Long id);
    public String supprimer_Localite(Long id);
    public String modifier_Localite(Localite localite, Long id);
    public List<Localite> listLocaliteVille(Long id);
    public List<Localite> listLocaliteQuartier(Long parentid);
}
