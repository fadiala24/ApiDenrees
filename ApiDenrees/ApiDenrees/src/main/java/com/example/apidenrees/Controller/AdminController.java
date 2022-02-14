package com.example.apidenrees.Controller;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.ServiceImpl.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Admin")
public class AdminController {
    @Autowired
    AdminServiceImpl adminServiceImpl;

    // ***************  Ajout d'un Admin ***************

    @PostMapping(value = "/addAdmin", produces = MediaType.APPLICATION_JSON_VALUE)
    public String saveAdmin(@RequestBody Administrateur administrateur){
        return this.adminServiceImpl.ajout_administrateurs(administrateur);
    }

    // ******************** Liste des Admins

    @GetMapping("/listAdmin")
    List<Administrateur> listAdmin(){
        return this.adminServiceImpl.listAdmin();
    }

    // ************************* Affichage par Admin *****************

    @GetMapping("/infoAdmin/{id}")
    public Administrateur getAdminById(@PathVariable Long id) {
        return this.adminServiceImpl.getAdminById(id);
    }

    // ************************* Suppression de l'admin ***************

    @DeleteMapping("/deleteAdmin/{id}")
    public String delete(@PathVariable Long id){
        return this.adminServiceImpl.supprimer_admin(id);
    }

    // ************************  Modification de l'admin ***************
    @PutMapping("/updateAdmin/{id}")
    public String updateAdmin(@PathVariable Long id, @RequestBody Administrateur administrateur){
        return this.adminServiceImpl.modifier_admin(administrateur, id);
    }

    @GetMapping("/authentificationAdmin/{login}&{password}")
    public Administrateur connexion(@PathVariable("login") String login, @PathVariable("password") String password)
    {
        return adminServiceImpl.findByLoginAndPassword(login, password);
    }
}
