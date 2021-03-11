package it.iad2.quattro.rubricaBis.service;

import it.iad2.quattro.rubricaBis.dto.ContaDto;
import it.iad2.quattro.rubricaBis.dto.ListaContattiDto;
import it.iad2.quattro.rubricaBis.model.Contatto;

public interface RubricaService {
    
    ListaContattiDto aggiungi(Contatto contatto);

    ListaContattiDto elimina(Contatto contatto);

    ListaContattiDto ricerca(String parametro);

    ListaContattiDto aggiorna();
    
    ContaDto conta();
}
