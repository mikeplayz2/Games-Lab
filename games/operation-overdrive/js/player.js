export let health = 100;

export let ammo = 30;

export let reserveAmmo = 120;

export const maxAmmo = 30;

export function reload(){

    if(ammo >= maxAmmo)
    return;

    let needed =
    maxAmmo - ammo;

    let amount =
    Math.min(
        needed,
        reserveAmmo
    );

    ammo += amount;

    reserveAmmo -= amount;

}
