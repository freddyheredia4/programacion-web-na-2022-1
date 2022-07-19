package edu.yavirac.crmbackend.feature.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    //Create
    public Person save(Person person){
        return personRepository.save(person);
    }

    //Read
    public Person findById(long id){
        return personRepository.findById(id).orElse(new Person());
    }

    //Update = Create (PUT)

    //Delete
    public void deleteByID(long id){
        personRepository.deleteById(id);
    }

    public List<Person> findAll(){
        return personRepository.findAll();
    }

    public List<Person> findByName(String term){
        return personRepository.findByNameLikeIgnoreCase(term);
    }

    
}
