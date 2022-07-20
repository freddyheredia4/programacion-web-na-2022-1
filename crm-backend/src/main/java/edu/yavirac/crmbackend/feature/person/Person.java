package edu.yavirac.crmbackend.feature.person;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("persons")
public class Person {

    @Id
    private long id;
    private String name;
    private String dni;
    private Long cityId;

    @MappedCollection(idColumn = "person_id")
    private Set<PersonAuthority> authorities = new HashSet<>();
    
}
