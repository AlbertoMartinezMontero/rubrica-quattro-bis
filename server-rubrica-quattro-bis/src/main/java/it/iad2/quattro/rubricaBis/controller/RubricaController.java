package it.iad2.quattro.rubricaBis.controller;

import it.iad2.quattro.rubricaBis.dto.ContaDto;
import it.iad2.quattro.rubricaBis.dto.ContattoDto;
import it.iad2.quattro.rubricaBis.dto.CriterioRicercaDto;
import it.iad2.quattro.rubricaBis.dto.ListaContattiDto;
import it.iad2.quattro.rubricaBis.service.RubricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController

public class RubricaController {

    @Autowired
    RubricaService rubricaService;

    @RequestMapping("/add")
    @ResponseBody
    public ListaContattiDto aggiungi(@RequestBody ContattoDto dto) {
        return rubricaService.aggiungi(dto.getContatto());
    }

    @RequestMapping("/delete")
    @ResponseBody
    public ListaContattiDto elimina(@RequestBody ContattoDto dto) {
        return rubricaService.elimina(dto.getContatto());
    }

    @RequestMapping("/search")
    @ResponseBody
    public ListaContattiDto ricerca(@RequestBody CriterioRicercaDto dto) {
        return rubricaService.ricerca(dto.getStringa());
    }

    @RequestMapping("/refresh")
    @ResponseBody
    public ListaContattiDto aggiorna() {
        return rubricaService.aggiorna();
    }

    @RequestMapping("/conta")
    @ResponseBody
    public ContaDto conta() {
        return rubricaService.conta();
    }
}
