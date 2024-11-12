import chalk from 'chalk';
import readlineSync from 'readline-sync';
const typeOfPoke = ["불꽃", "풀", "물", "전기", "노말", "격투", "고스트", "에스퍼", "땅", "바위", "강철", "비행", "벌레", "얼음", "독", "악", "드래곤", "페어리"];

class Pokemon {
    constructor(name, type, HP, ATK, DEF) {
        this._name = name;
        this._type = type;
        this._HP = HP;
        this._ATK = ATK;
        this._DEF = DEF;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length <= 0) {
            console.log("이름이 입력되지 않았습니다.");
            return;
        }
        else if (typeof value != "string") {
            console.log("입력된 포켓몬이 문자열이 아닙니다.");
            return;
        }
        else if (value.length > 6) {
            console.log("포켓몬의 이름은 최대 6자입니다.");
        }
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        typeOfPoke.forEach(chosenType => {
            if (value == chosenType) {
                this._type = value;
                return;
            }
        });
        console.log("타입 입력 오류.");
    }

    get HP() {
        return this._HP;
    }

    set HP(value) {
        if (value.length <= 0) {
            console.log("체력이 입력되지 않았습니다.");
            return;
        }
        else if (typeof value != "number") {
            console.log("입력된 체력이 수가 아닙니다.");
            return;
        }
        this._HP = value;
    }

    get ATK() {
        return this._ATK;
    }

    set ATK(value) {
        if (value.length <= 0) {
            console.log("공격력이 입력되지 않았습니다.");
            return;
        }
        else if (typeof value != "number") {
            console.log("입력된 공격력이 수가 아닙니다.");
            return;
        }
        this._ATK = value;
    }

    get DEF() {
        return this._DEF;
    }

    set DEF(value) {
        if (value.length <= 0) {
            console.log("방어력이 입력되지 않았습니다.");
            return;
        }
        else if (typeof value != "number") {
            console.log("입력된 방어력이 수가 아닙니다.");
            return;
        }
        this._DEF = value;
    }

    // get SPD() {
    //     return this._SPD;
    // }

    // set SPD(value) {
    //     if (value.length <= 0) {
    //         console.log("스피드가 입력되지 않았습니다.");
    //         return;
    //     }
    //     else if (typeof value != "number") {
    //         console.log("입력된 스피드가 수가 아닙니다.");
    //         return;
    //     }
    //     this._SPD = value;
    // }

    //(데미지 = (위력 × 공격 × (레벨 × [[급소]] × 2 ÷ 5 + 2 ) ÷ 방어 ÷ 50 + 2 ) × [[자속 보정]] × 타입상성1 × 타입상성2 × 랜덤수/255)
    attack(opponent) {
        console.log(this._ATK, opponent._DEF);
        return Math.floor((10 * this._ATK / opponent._DEF / 50 + 2) * (Math.random() * 38 + 179) * 10 / 255);
    }

    checkHeathPoint(gotDamage) {
        this._HP -= gotDamage;
    }
}

// console.log(pikachu.name, pikachu.type, pikachu.ATK);
// pikachu.name = "라이츄";
// console.log(pikachu.name);
// pikachu.name = 1;
// console.log(pikachu.name);

function displayStatus(stage, player, monster) {
    console.log(chalk.magentaBright(`\n=== Current Status ===`));
    console.log(
        chalk.cyanBright(`| Stage: ${stage} |
            `) +
        chalk.blueBright(
            `| 플레이어 정보 |
                이름: ${player._name}
                타입: ${player._type}
                체력: ${player._HP}
                공격력: ${player._ATK}
                방어력: ${player._DEF}
            `,
        ) +
        chalk.redBright(
            `| 몬스터 정보 |
                이름: ${monster._name}
                타입: ${monster._type}
                체력: ${monster._HP}
                공격력: ${monster._ATK}
                방어력: ${monster._DEF}`,
        ),
    );
    console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
    let logs = [];

    while (player._HP > 0) {
        //console.clear();
        displayStatus(stage, player, monster);
        let damage = 0;

        logs.forEach((log) => console.log(log));

        console.log(
            chalk.green(
                `\n1. 공격한다 2. 아무것도 하지않는다.`,
            ),
        );
        const choice = readlineSync.question('당신의 선택은? ');

        // 플레이어의 선택에 따라 다음 행동 처리
        logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
        if (choice == 1) {
            damage = player.attack(monster);
            monster.checkHeathPoint(damage);
            console.log(
                chalk.green(
                    `\n야생의 ${monster._name}에게 ${damage}데미지!`,
                ),
            );
            if (monster._HP <= 0) {
                console.log(
                    chalk.green(
                        `\n야생의 ${monster._name}은(는) 쓰러졌다!`,
                    ),
                );
                break;
            }
            damage = monster.attack(player);

            player.checkHeathPoint(damage);
            console.log(
                chalk.green(
                    `\n1. 공격한다 2. 아무것도 하지않는다.`,
                ),
            );
        }
        else if (choice == 2) {
            damage = monster.attack(player);
            monster.checkHeathPoint(0);
            player.checkHeathPoint(monster.attack());
        }
    }

};

export async function startGame() {
    console.clear();
    const pikachu = new Pokemon("피카츄", "전기", 35, 55, 40);
    const bulbasaur = new Pokemon("이상해씨", "풀", 45, 49, 49);
    const player = pikachu;
    let stage = 1;

    while (stage <= 10) {
        const monster = bulbasaur;
        //console.log(player, monster);
        await battle(stage, player, monster);

        // 스테이지 클리어 및 게임 종료 조건
        if (player.HP <= 0) {
            console.log("게임 오버");
            break;
        }
        console.log(stage, player);
        stage++;
    }
    console.log("게임 끝.");
}