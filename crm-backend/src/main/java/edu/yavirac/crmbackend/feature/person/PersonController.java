package edu.yavirac.crmbackend.feature.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    PersonService personService;

//CRUD = Crear, Leer, Actualizar, Eliminar
//       Create Read  Update      Delete

//Create
    @PostMapping("/save")
    public Person save(@RequestBody Person person) {
        return personService.save(person);
    }

    @GetMapping("/{id}")
    public Person findById(@PathVariable long id){
        return personService.findById(id);
    }

    @PutMapping("/update")
    public Person update(@RequestBody Person person){
        return personService.save(person);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByID(@PathVariable long id){
        personService.deleteByID(id);
    }

    @GetMapping("/findAll")
    public List findAll(){
        return personService.findAll();
    }

    @GetMapping("/findByName/{term}")
    public List<Person> findByName(@PathVariable String term){
        return personService.findByName(term+"%");
    }
    
}
