import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

public class CityTest {

    public static City city;

    @Before
    public void setUp() {
        city = new City();
        city.setName("Boston");
        city.setState("Massachusetts");
    }

    @Test
    public void nameGetterWorks() {
        assertThat(city.getName, is(equalTo("Boston")));
    }

    @Test
    public void stateGetterWorks() {
        assertThat(city.getState, is(equalTo("Massachusetts")));
    }

}
