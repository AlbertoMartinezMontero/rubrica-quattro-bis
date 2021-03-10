package it.iad2.quattro.rubricaBis.dto;

import it.iad2.quattro.rubricaBis.model.Contatto;
import java.util.List;

public class ListaContattiDto {
    public  List<Contatto> listaContatti;

    public ListaContattiDto() {
    }

    public ListaContattiDto(List<Contatto> listaContatti) {
        this.listaContatti = listaContatti;
    }

    public List<Contatto> getListaContatti() {
        return listaContatti;
    }

    public void setListaContatti(List<Contatto> listaContatti) {
        this.listaContatti = listaContatti;
    }

    @Override
    public String toString() {
        return "ListaContattiDto{" + "listaContatti=" + listaContatti + '}';
    }   
}

