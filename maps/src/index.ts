import { Company } from "./company";
import { CustomMap } from "./CustomMap";
import { User } from "./user";

const user = new User();
const company = new Company();

const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);
