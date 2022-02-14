package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoutiquierRepository extends JpaRepository<Boutiquier, Long> {
}
