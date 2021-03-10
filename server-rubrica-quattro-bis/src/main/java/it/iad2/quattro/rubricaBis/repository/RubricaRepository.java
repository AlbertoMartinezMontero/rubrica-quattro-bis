package it.iad2.quattro.rubricaBis.repository;

import it.iad2.quattro.rubricaBis.model.Contatto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RubricaRepository extends JpaRepository<Contatto, Long> {

    List<Contatto> findByNome(String t);
}
