export function createGun(
THREE,
camera
){

const gun =
new THREE.Group();

const body =
new THREE.Mesh(

new THREE.BoxGeometry(
0.3,
0.2,
1
),

new THREE.MeshStandardMaterial({

color:0x222222

})

);

const barrel =
new THREE.Mesh(

new THREE.BoxGeometry(
0.1,
0.1,
0.7
),

new THREE.MeshStandardMaterial({

color:0x111111

})

);

barrel.position.z =
-0.8;

gun.add(body);
gun.add(barrel);

camera.add(gun);

gun.position.set(
0.4,
-0.3,
-0.8
);

return gun;

}
