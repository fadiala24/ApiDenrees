package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Localite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LocaliteRepository extends JpaRepository<Localite, Long> {
    List<Localite> findAllByParent(Long parentid);

    @Query("SELECT o FROM Localite  o where o.parent is null and o.etat='ACTIVER' ")
    public List<Localite> findAllByParentId(Long parentId);
}
