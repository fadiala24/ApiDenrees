package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Repositories.ClientRepository;
import com.example.apidenrees.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {
       @Autowired
    ClientRepository clientRepository;


    @Override
    public String aujout_client(Client client) {
        clientRepository.save(client);
        return "Ajout effectué avec succes";
    }

    @Override
    public List<Client> listClient() {
        return clientRepository.findAll();
    }

    @Override
    public Client getClientById(Long id) {
        return clientRepository.findById(id).get();
    }

    @Override
    public String supprimer_client(Long id) {
        Client client = clientRepository.findById(id).get();
        return "Vous avez supprimer le Client : "+client.getNom()+" "+client.getPrenom();
    }

    @Override
    public String modifier_client(Client client, Long id) {
        Client clientExistant = this.clientRepository.findById(id).get();

        clientExistant.setNom(client.getNom());
        clientExistant.setPrenom(client.getPrenom());
        clientExistant.setLogin(client.getLogin());
        clientExistant.setPassword(client.getPassword());
        clientExistant.setTelephone(clientExistant.getTelephone());
        return "Client modifié avec succes";
    }

    @Override
    public Client modifyPassword(Long id, String ancien, String nouveau) {
        Client client = clientRepository.findById(id).get();
        if (ancien.equals(client.getPassword())){
            client.setPassword(nouveau);
            System.out.println(nouveau);
            return clientRepository.save(client);
            //return"Modifcation effectuer avec succes";
        }else{
            return client;
        }

    }
    }

