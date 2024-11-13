import chalk from 'chalk';
import readlineSync from 'readline-sync';
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

const db = new LowSync(new JSONFileSync('db.json'), {});

const typeOfPoke = [
  '없음',
  '불꽃',
  '풀',
  '물',
  '전기',
  '노말',
  '격투',
  '고스트',
  '에스퍼',
  '땅',
  '바위',
  '강철',
  '비행',
  '벌레',
  '얼음',
  '독',
  '악',
  '드래곤',
  '페어리',
];
//기술 저장 순서: 기술명, 배우는 레벨, 위력, 명중률, 사용 가능 횟수, 부가 효과, 부가 효과 부여 확률, 반동 여부
const moveOfPokemons = {
  피카츄: [
    {
      기술명: '볼부비부비',
      타입: typeOfPoke[4],
      배우는레벨: 1,
      위력: 20,
      명중률: 90,
      pp: 20,
      부가효과: '마비',
      확률: 90,
      반동: '없음',
    },
    {
      기술명: '애교부리기',
      타입: typeOfPoke[18],
      배우는레벨: 2,
      위력: 0,
      명중률: 100,
      pp: 20,
      부가효과: '공격력 감소',
      확률: 100,
      반동: '없음',
    },
  ],
};
//능력 저장 순서: 이름, 타입, 복합타입, 체력, 공격력, 방어력
const statOfPokemons = [
  {
    이름: '피카츄',
    타입: typeOfPoke[4],
    복합타입: typeOfPoke[0],
    체력: 35,
    공격력: 55,
    방어력: 40,
  },
  {
    이름: '이상해씨',
    타입: typeOfPoke[2],
    복합타입: typeOfPoke[15],
    체력: 45,
    공격력: 49,
    방어력: 49,
  },
];

class Pokemon {
  constructor(statOfPoke) {
    this._name = statOfPoke.이름;
    this._type = statOfPoke.타입;
    this._subtype = statOfPoke.복합타입;
    this._HP = statOfPoke.체력 * 3;
    this._ATK = statOfPoke.공격력;
    this._DEF = statOfPoke.방어력;
    this._move = ['', '', '', ''];
    this._level = 1;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length <= 0) {
      console.log('이름이 입력되지 않았습니다.');
      return;
    } else if (typeof value != 'string') {
      console.log('입력된 포켓몬이 문자열이 아닙니다.');
      return;
    } else if (value.length > 6) {
      console.log('포켓몬의 이름은 최대 6자입니다.');
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    typeOfPoke.forEach((chosenType) => {
      if (value == chosenType) {
        this._type = value;
        return;
      }
    });
    console.log('타입 입력 오류.');
  }

  get subtype() {
    return this._subtype;
  }

  set subtype(value) {
    typeOfPoke.forEach((chosenType) => {
      if (value == chosenType) {
        this._type = value;
        return;
      }
    });
    console.log('타입 입력 오류.');
  }

  get HP() {
    return this._HP;
  }

  set HP(value) {
    if (value.length <= 0) {
      console.log('체력이 입력되지 않았습니다.');
      return;
    } else if (typeof value != 'number') {
      console.log('입력된 체력이 수가 아닙니다.');
      return;
    }
    this._HP = value;
  }

  get ATK() {
    return this._ATK;
  }

  set ATK(value) {
    if (value.length <= 0) {
      console.log('공격력이 입력되지 않았습니다.');
      return;
    } else if (typeof value != 'number') {
      console.log('입력된 공격력이 수가 아닙니다.');
      return;
    }
    this._ATK = value;
  }

  get DEF() {
    return this._DEF;
  }

  set DEF(value) {
    if (value.length <= 0) {
      console.log('방어력이 입력되지 않았습니다.');
      return;
    } else if (typeof value != 'number') {
      console.log('입력된 방어력이 수가 아닙니다.');
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

  learn() {
    this._move[0] = moveOfPokemons[this._name][0];
    console.log(this._move, moveOfPokemons[this._name][0]);
  }

  isMoveEmpty(index) {
    return this._move[index]['기술명'] != undefined ? this._move[index]['기술명'] : '-';
  }

  levelUp() {
    this._level++;
  }
  //(데미지 = (위력 × 공격 × (레벨 × [[급소]] × 2 ÷ 5 + 2 ) ÷ 방어 ÷ 50 + 2 ) × [[자속 보정]] × 타입상성1 × 타입상성2 × 랜덤수/255)
  attack(power, opponent) {
    return Math.floor(
      (((power * this._ATK) / opponent._DEF / 50 + 2) * (Math.random() * 38 + 179) * 10) / 255,
    );
  }

  afterGotDamage(gotDamage) {
    this._HP -= gotDamage;
    console.log(chalk.green(`\n${this._name}에게 ${gotDamage}데미지!`));
  }

  checkFainted() {
    if (this._HP <= 0) {
      console.log(chalk.green(`\n${this._name}은(는) 쓰러졌다!`));
      return true;
    } else return false;
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} |
            `) +
      chalk.blueBright(
        `| 플레이어 정보 |  이름: ${player._name}   타입: ${player._type}, ${player._subtype}
            체력: ${player._HP} 공격력: ${player._ATK}  방어력: ${player._DEF}
            기술: ${player.isMoveEmpty(0)}  ${player.isMoveEmpty(1)}
                  ${player.isMoveEmpty(2)}  ${player.isMoveEmpty(3)}
            `,
      ) +
      chalk.redBright(
        `| 몬스터 정보 |    이름: ${monster._name}  타입: ${monster._type}, ${monster._subtype}
            체력: ${monster._HP}    공격력: ${monster._ATK} 방어력: ${monster._DEF}
            기술: ${monster.isMoveEmpty(0)}  ${player.isMoveEmpty(1)}
                  ${player.isMoveEmpty(2)}   ${player.isMoveEmpty(3)}
            `,
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

    console.log(chalk.green(`\n1. 공격한다 2. 아무것도 하지않는다.`));
    const choice = readlineSync.question('당신의 선택은? ');

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
    if (choice == 1) {
      damage = player.attack(10, monster);
      monster.afterGotDamage(damage);
    } else if (choice == 2) {
      console.log(chalk.green(`\n기술을 선택해주세요.`));
      // switch() {

      // }
      monster.afterGotDamage(0);
    }

    if (monster.checkFainted()) {
      break;
    }
    damage = monster.attack(10, player);
    player.checkHeathPoint(damage);
  }
};

export async function startGame() {
  console.clear();
  //   db.read();
  //console.log(db.data);
  const player = new Pokemon(statOfPokemons[0]);
  //const bulbasaur = new Pokemon(statOfPokemons[1]);
  //const monster = bulbasaur;

  let stage = 1;
  player.learn();

  while (stage <= 10) {
    let monster = new Pokemon(statOfPokemons[1]);
    player._HP = 35 * 3;
    monster._name = '야생의 ' + monster._name;
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건
    if (player.checkFainted()) {
      break;
    }
    stage++;
  }
  console.log('게임 오버.');
}
