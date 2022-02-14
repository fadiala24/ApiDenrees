package com.example.apidenrees.Reositories;

import com.example.apidenrees.Model.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Administrateur, Long> {

    //  ******** Optional permet d'eviter les doublons sur le meme attribut d'une table
    Optional<Administrateur> findByTelephone(int telephone);
    Optional<Administrateur> findByEmail(String email);

    Optional<Administrateur> findByLoginAndPassword(String login, String password);
}
