package edu.yavirac.crmbackend.feature.person;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("persons")
public class Person {

    @Id
    private long id;
    private String name;
    private String dni;
    
}
