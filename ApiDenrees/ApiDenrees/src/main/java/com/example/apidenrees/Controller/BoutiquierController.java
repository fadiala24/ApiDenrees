package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Passwordobjet;
import com.example.apidenrees.ServiceImpl.BoutiquierServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Boutiquier")
public class BoutiquierController {
    @Autowired
    BoutiquierServiceImpl boutiquierServiceImpl;


    // ***************  Ajout d'un Boutiquier***************

    @PostMapping("/addBoutiquier")
    public String saveBoutiquier(@RequestBody Boutiquier boutiquier) {
        return boutiquierServiceImpl.aujout_boutiquier(boutiquier);
    }

    // ******************** Liste des Boutiquiers

    @GetMapping("/listBoutiquier")
    List<Boutiquier> listBoutiquier() {
        return this.boutiquierServiceImpl.listBoutiquier();
    }

    // ************************* Affichage par Boutiquier *****************

    @GetMapping("/infoBoutiquier/{id}")
    public Boutiquier getBoutiquierById(@PathVariable Long id) {
        return this.boutiquierServiceImpl.getBoutiquierById(id);
    }

    // ************************* Suppression de Boutiquier ***************

    @DeleteMapping("/deleteBoutiquier/{id}")
    public String delete(@PathVariable Long id) {
        return this.boutiquierServiceImpl.supprimer_boutiquier(id);
    }

    // ************************  Modification de Boutiquier ***************
    @PutMapping("/updateBoutiquier/{id}")
    public String updateBoutiquier(@PathVariable Long id, @RequestBody Boutiquier boutiquier) {
        return this.boutiquierServiceImpl.modifier_boutiquier(boutiquier, id);
    }

    // *******************************Modification du password ******************************
    @PutMapping("/modifyByPassword/{id}/{a}/{n}")
    public Boutiquier ModifyByPassword(@PathVariable Long id, @PathVariable String a, @PathVariable String n) {
        return this.boutiquierServiceImpl.modifyPassword(id, a, n);

    }

    @GetMapping("/authentificationAdmin/{login}&{password}")
    public Boutiquier connexion(@PathVariable("login") String login, @PathVariable("password") String password) {
        return boutiquierServiceImpl.findByLoginAndPassword(login, password);
    }
}