package edu.yavirac.crmbackend.feature.city;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.Data;

@Data
public class City {
    
    @Id
    private long id;
    private String name;
}
