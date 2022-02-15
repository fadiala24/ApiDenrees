package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Model.Localite;
import com.example.apidenrees.ServiceImpl.LocaliteServiceImpl;
import com.example.apidenrees.Services.LocaliteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("api/Localite")
@RestController
public class LocaliteController {
    @Autowired
    LocaliteService localiteService;

    @Autowired
    LocaliteServiceImpl localiteServiceImpl;

    // ***************  Ajout d'un Localite***************

    @PostMapping("/addLocalite")
    public String saveLocalite(@RequestBody Localite localite){
        return localiteServiceImpl.aujout_localite(localite);
    }

    // ******************** Liste des Localite

    @GetMapping("/listLocalite")
    List<Localite> listLocalite(){
        return this.localiteServiceImpl.listLocalite();
    }

    @GetMapping("/listLocaliteVille/ville={id}")
    List<Localite> listLocaliteVille(@PathVariable Long id ){
        return this.localiteServiceImpl.listLocaliteVille(id);
    }

    @GetMapping("/listLocaliteQuartier")
    List<Localite> listLocaliteQuartier(@PathVariable Long parentId ){
        return this.localiteServiceImpl.listLocaliteQuartier(parentId);
    }

    // ************************* Affichage par Client *****************

    @GetMapping("/infoLocalite/{id}")
    public Localite getClientById(@PathVariable Long id) {
        return this.localiteServiceImpl.getLocaliteById(id);
    }

    // ************************* Suppression de Client ***************

    @DeleteMapping("/deleteLocalite/{id}")
    public String delete(@PathVariable Long id){
        return this.localiteServiceImpl.supprimer_Localite(id);
    }

    // ************************  Modification de Client ***************
    @PutMapping("/updateLocalite/{id}")
    public String updateLocalite(@PathVariable Long id, @RequestBody Localite localite){
        return this.localiteServiceImpl.modifier_Localite(localite, id);
    }
}
