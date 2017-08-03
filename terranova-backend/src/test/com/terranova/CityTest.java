package com.terranova;

import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

public class CityTest {

    private City city;

    @Before
    public void setUp() {
        city = new City();
        city.setName("Boston");
        city.setState("Massachusetts");
    }

    @Test
    public void nameGetterWorks() {
        assertThat(city.getName(), is(equalTo("Boston")));
    }

    @Test
    public void stateGetterWorks() {
        assertThat(city.getState(), is(equalTo("Massachusetts")));
    }

}