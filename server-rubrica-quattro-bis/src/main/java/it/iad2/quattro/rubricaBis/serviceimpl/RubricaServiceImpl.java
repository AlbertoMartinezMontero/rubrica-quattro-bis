package it.iad2.quattro.rubricaBis.serviceimpl;

import it.iad2.quattro.rubricaBis.dto.ListaContattiDto;
import it.iad2.quattro.rubricaBis.model.Contatto;
import it.iad2.quattro.rubricaBis.repository.RubricaRepository;
import it.iad2.quattro.rubricaBis.service.RubricaService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RubricaServiceImpl implements RubricaService {
    
    @Autowired
    RubricaRepository rbrepository;

    @Override
    public ListaContattiDto aggiungi(Contatto contatto) {
        rbrepository.save(contatto);
        return aggiorna();
    }

    @Override
    public ListaContattiDto elimina(Contatto contatto) {
        rbrepository.delete(contatto);
        return aggiorna();

    }

    @Override
    public ListaContattiDto ricerca(String parametro) {
        List<Contatto> trovati = rbrepository.findByNome(parametro);
        return new ListaContattiDto(trovati);
    }

    @Override
    public ListaContattiDto aggiorna() {
        
        ListaContattiDto dto = new ListaContattiDto();
        List<Contatto> listaContatti = rbrepository.findAll();
        if (listaContatti == null) {
            dto.setListaContatti(new ArrayList<>());
        } else {
            dto.setListaContatti(listaContatti);
        }
        return dto;
    }

}
