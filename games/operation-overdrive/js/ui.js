export function flashDamage(){

    const overlay =
    document.getElementById(
        "damageOverlay"
    );

    overlay.style.opacity =
    ".4";

    setTimeout(()=>{

        overlay.style.opacity =
        "0";

    },100);

}
