package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoutiquierRepository extends JpaRepository<Boutiquier, Long> {
    Optional<Boutiquier> findByLoginAndPassword(String login, String password);
}
