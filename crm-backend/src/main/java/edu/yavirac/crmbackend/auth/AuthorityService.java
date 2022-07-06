package edu.yavirac.crmbackend.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityService {

    @Autowired
    AuthorityRepository authorityRepository;

    //Create
    public Authority save(Authority authority){
        return authorityRepository.save(authority);
    }

    //Read
    public Authority findById(long id){
        return authorityRepository.findById(id).orElse(new Authority());
    }

    //Update = Create

    //Delete
    public void deleteById(long id){
        authorityRepository.deleteById(id);
    }

    public List<Authority> findAll(){
        return authorityRepository.findAll();
    }
    
}
