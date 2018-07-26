package doom.doomclient;

public enum DemonType {

    Imp("imp"), Cacodemon("cacodemon");

    String id;

    DemonType(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}
