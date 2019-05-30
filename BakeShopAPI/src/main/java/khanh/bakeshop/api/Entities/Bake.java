package khanh.bakeshop.api.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Bake {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotBlank
    private String bakeName;

    @NotNull
    private Float bakePrice;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBakeName() {
        return bakeName;
    }

    public void setBakeName(String bakeName) {
        this.bakeName = bakeName;
    }

    public Float getBakePrice() {
        return bakePrice;
    }

    public void setBakePrice(Float bakePrice) {
        this.bakePrice = bakePrice;
    }
}
