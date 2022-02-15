package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findByLoginAndPassword(String login, String password);

}
