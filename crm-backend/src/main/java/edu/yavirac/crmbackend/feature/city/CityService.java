package edu.yavirac.crmbackend.feature.city;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityService {
    
    @Autowired
    CityRepository cityRepository;

    public List<City> findAll(){
        return cityRepository.findAll();
    }
}
