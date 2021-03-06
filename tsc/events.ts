import * as I from './interfaces';

export interface Events {
    data: (data: I.CSGO) => void,
    roundEnd: (team: I.Score) => void,
    matchEnd: (score: I.Score) => void,
    kill: (kill: I.KillEvent) => void,
    /*timeoutStart: (team: any) => void,
    timeoutEnd: (team: any) => void,
    roundStart: (round: number) => void,
    intermissionStart: () => void,
    intermissionEnd: () => void,
    warmupStart: () => void,
    warmupEnd: () => void,
    freezetimeStart: () => void,
    freezetimeEnd: () => void,*/
    defuseStart: (player: I.Player) => void,
    defuseStop: (player: I.Player) => void,
    bombPlantStart: (player: I.Player) => void,
    bombPlant: (player: I.Player) => void,
    bombExplode: () => void,
    bombDefuse: (player: I.Player) => void,
    
    
}