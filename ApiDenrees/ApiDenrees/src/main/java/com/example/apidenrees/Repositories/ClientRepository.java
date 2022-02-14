package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
