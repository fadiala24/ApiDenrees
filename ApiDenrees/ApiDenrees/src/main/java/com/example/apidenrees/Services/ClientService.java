package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Client;

import java.util.List;

public interface ClientService {

    public String aujout_client(Client client);
    public List<Client> listClient();
    public Client getClientById(Long id);
    public String supprimer_client(Long id);
    public String modifier_client(Client client, Long id);
    public Client modifyPassword(Long id, String ancien, String nouveau);
    //Authentification
    Client findByLoginAndPassword(String login, String password);
}
