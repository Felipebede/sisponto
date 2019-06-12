package bd.flp.sisponto.service;

import bd.flp.sisponto.model.ContatoModel;
import bd.flp.sisponto.repository.ContatoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ContatoService {

    @Autowired
    private ContatoRepository contatoRepository;

    public List<ContatoModel> listarContatos() {
        return contatoRepository.listarContatos();
    }

    public ContatoModel adicionar(ContatoModel contato) {
        return contatoRepository.save(contato);
    }

    public Optional<ContatoModel> buscar(int id) {
        return contatoRepository.findById(id);
    }

    public ContatoModel atualizar(int id, ContatoModel contato) {
        Optional<ContatoModel> existente = contatoRepository.findById(id);
        System.out.println("existente: "+ existente.get().getCpf());
        System.out.println("contato: "+ contato.getCpf());
        BeanUtils.copyProperties(contato, existente.get(), "id");
        System.out.println("existente 2: "+ existente.get().getCpf());
        return contatoRepository.save(existente.get());

    }

    public void remover(int id) {
        contatoRepository.deleteById(id);
    }


}