package khanh.bakeshop.api.Repositories;

import khanh.bakeshop.api.Entities.Bake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BakeRepo extends CrudRepository<Bake, Integer>, JpaRepository<Bake, Integer>
{
    List<Bake> findBakeById (Integer bakeId);
}
