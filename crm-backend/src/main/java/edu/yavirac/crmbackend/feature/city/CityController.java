package edu.yavirac.crmbackend.feature.city;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/city")
@CrossOrigin({"*"})
public class CityController {
    
    @Autowired
    CityService cityService;

    @GetMapping("/findAll")
    public List<City> findAll(){
        return cityService.findAll();
    }

}
