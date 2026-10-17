export let wave = 1;

export let waveKills = 0;

export let enemiesNeeded = 10;

export function enemyKilled(){

    waveKills++;

    if(
        waveKills >=
        enemiesNeeded
    ){

        wave++;

        waveKills = 0;

        enemiesNeeded += 5;

        return true;

    }

    return false;

}
