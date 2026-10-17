import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js";

import {
createGun
}
from "./weapons.js";

import {
reload
}
from "./player.js";

createGun(
THREE,
camera
);
