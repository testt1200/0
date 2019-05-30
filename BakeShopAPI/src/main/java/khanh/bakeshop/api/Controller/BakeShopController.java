package khanh.bakeshop.api.Controller;

import khanh.bakeshop.api.Entities.Bake;
import khanh.bakeshop.api.Repositories.BakeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/bakeshop")
public class BakeShopController {
    @Autowired
    private BakeRepo br;

    @GetMapping("/")
    public List<Bake> viewAllBake(){
        return br.findAll();
    }

    @GetMapping("/view-bake-by-id/{id}")
    public Bake viewBakeById(@PathVariable(value = "id") Integer id)
    {
        return br.findBakeById(id).get(0);
    }

    @PostMapping("/add-bake")
    public Bake addBake(@Valid @RequestBody Bake bake)
    {
        return br.saveAndFlush(bake);
    }

    @PutMapping("/update-bake/{id}")
    public List<Bake> updateBake(@PathVariable(value = "id") Integer id, @Valid @RequestBody Bake bake)
    {
        Bake b = br.findBakeById(id).get(0);
        b.setBakeName(bake.getBakeName());
        b.setBakePrice(bake.getBakePrice());
        br.saveAndFlush(b);
        return br.findAll();
    }

    @DeleteMapping("/delete-bake/{id}")
    public List<Bake> deleteBake(@PathVariable(value = "id") Integer id)
    {
        br.deleteById(id);
        return br.findAll();
    }
}
