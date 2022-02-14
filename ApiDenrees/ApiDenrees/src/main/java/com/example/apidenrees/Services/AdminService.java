package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Administrateur;

import java.util.List;

public interface AdminService {
    public String ajout_administrateurs(Administrateur administrateur);
    public List<Administrateur> listAdmin();
    public Administrateur getAdminById(Long id);
    public String supprimer_admin(Long id);
    public String modifier_admin(Administrateur administrateur, Long id);
    //Authentification
    Administrateur findByLoginAndPassword(String login, String password);
}
