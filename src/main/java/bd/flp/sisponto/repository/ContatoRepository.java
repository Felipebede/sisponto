package bd.flp.sisponto.repository;

import bd.flp.sisponto.model.ContatoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContatoRepository extends JpaRepository<ContatoModel, Integer> {

    @Query("SELECT c FROM ContatoModel  c")
    List<ContatoModel> listarContatos();


}
