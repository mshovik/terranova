package terranova;

public class City {

    public static String name;
    public static String state;

    public City City(String name, String state) {
        City city = new City();
        city.setName(name);
        city.setState(state);
        return city;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }
}