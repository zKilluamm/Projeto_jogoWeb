let log = new Log(document.querySelector('.log'));


let char = new Knight('Klausão');
let monster = new LittleMonster();



const Stage = new stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
);

Stage.start();