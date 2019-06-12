package bd.flp.sisponto.rest;

import bd.flp.sisponto.model.ContatoModel;
import bd.flp.sisponto.service.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/contatos")
public class ContatoRestController {


    @Autowired
    private ContatoService contatoService;


    @GetMapping("/listar")
    public List<ContatoModel> listarProdutos() {
        return contatoService.listarContatos();
    }

    @PostMapping("/adicionar")
    public ContatoModel adicionar(@RequestBody ContatoModel contato) {
        return contatoService.adicionar(contato);
    }

    @GetMapping("/{id}")
    public Optional<ContatoModel> buscar(@PathVariable int id) {
        return contatoService.buscar(id);

    }

    @PutMapping("/{id}")
    public ContatoModel atualizar(@PathVariable int id, @RequestBody ContatoModel contato){
        return contatoService.atualizar(id, contato);

    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable int id){
         contatoService.remover(id);

    }

}