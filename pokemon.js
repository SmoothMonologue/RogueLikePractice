import chalk from 'chalk';
import readlineSync from 'readline-sync';
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
//import { db } from './db.js';

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
const moveList = [
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
  {
    기술명: '전기쇼크',
    타입: typeOfPoke[4],
    배우는레벨: 3,
    위력: 40,
    명중률: 90,
    pp: 30,
    부가효과: '마비',
    확률: 20,
    반동: '없음',
  },
  {
    기술명: '10만볼트',
    타입: typeOfPoke[4],
    배우는레벨: 9,
    위력: 90,
    명중률: 90,
    pp: 15,
    부가효과: '마비',
    확률: 20,
    반동: '없음',
  },
  {
    기술명: '몸통박치기',
    타입: typeOfPoke[5],
    배우는레벨: 1,
    위력: 40,
    명중률: 90,
    pp: 35,
    부가효과: '없음',
    확률: 100,
    반동: '없음',
  },
  {
    기술명: '덩굴채찍',
    타입: typeOfPoke[2],
    배우는레벨: 3,
    위력: 45,
    명중률: 90,
    pp: 25,
    부가효과: '없음',
    확률: 100,
    반동: '없음',
  },
  {
    기술명: '독가루',
    타입: typeOfPoke[15],
    배우는레벨: 5,
    위력: 0,
    명중률: 65,
    pp: 35,
    부가효과: '독',
    확률: 100,
    반동: '없음',
  },
  {
    기술명: '잎날가르기',
    타입: typeOfPoke[2],
    배우는레벨: 9,
    위력: 55,
    명중률: 85,
    pp: 25,
    부가효과: '급소에맞음',
    확률: 50,
    반동: '없음',
  },
  {
    기술명: '할퀴기',
    타입: typeOfPoke[5],
    배우는레벨: 1,
    위력: 40,
    명중률: 90,
    pp: 35,
    부가효과: '없음',
    확률: 100,
    반동: '없음',
  },
  {
    기술명: '불꽃세례',
    타입: typeOfPoke[1],
    배우는레벨: 4,
    위력: 40,
    명중률: 90,
    pp: 25,
    부가효과: '화상',
    확률: 10,
    반동: '없음',
  },
  {
    기술명: '용의숨결',
    타입: typeOfPoke[17],
    배우는레벨: 9,
    위력: 60,
    명중률: 90,
    pp: 20,
    부가효과: '마비',
    확률: 30,
    반동: '없음',
  },
  {
    기술명: '물대포',
    타입: typeOfPoke[3],
    배우는레벨: 3,
    위력: 40,
    명중률: 90,
    pp: 25,
    부가효과: '없음',
    확률: 100,
    반동: '없음',
  },
  {
    기술명: '물기',
    타입: typeOfPoke[16],
    배우는레벨: 8,
    위력: 60,
    명중률: 90,
    pp: 25,
    부가효과: '풀죽음',
    확률: 30,
    반동: '없음',
  },
  {
    기술명: '물의파동',
    타입: typeOfPoke[3],
    배우는레벨: 10,
    위력: 60,
    명중률: 90,
    pp: 20,
    부가효과: '혼란',
    확률: 20,
    반동: '없음',
  },
  {
    기술명: '스피드스타',
    타입: typeOfPoke[5],
    배우는레벨: 10,
    위력: 60,
    명중률: 100,
    pp: 20,
    부가효과: '없음',
    확률: 100,
    반동: '없음',
  },
];

const moveOfPokemons = {
  p25: [moveList[0], moveList[1], moveList[2], moveList[3]],
  p1: [moveList[4], moveList[5], moveList[6], moveList[7]],
  p4: [moveList[8], moveList[9], moveList[10]],
  p7: [moveList[4], moveList[11], moveList[12], moveList[13]],
  p133: [moveList[4], moveList[1], moveList[12], moveList[14]],
};
//능력 저장 순서: 이름, 타입, 복합타입, 체력, 공격력, 방어력
const statOfPokemons = [
  {
    도감번호: 'p25',
    이름: '피카츄',
    타입: typeOfPoke[4],
    복합타입: typeOfPoke[0],
    체력: 35,
    공격력: 55,
    방어력: 40,
  },
  {
    도감번호: 'p1',
    이름: '이상해씨',
    타입: typeOfPoke[2],
    복합타입: typeOfPoke[15],
    체력: 45,
    공격력: 49,
    방어력: 49,
  },
  {
    도감번호: 'p4',
    이름: '파이리',
    타입: typeOfPoke[1],
    복합타입: typeOfPoke[0],
    체력: 39,
    공격력: 60,
    방어력: 50,
  },
  {
    도감번호: 'p7',
    이름: '꼬부기',
    타입: typeOfPoke[3],
    복합타입: typeOfPoke[0],
    체력: 44,
    공격력: 50,
    방어력: 65,
  },
  {
    도감번호: 'p133',
    이름: '이브이',
    타입: typeOfPoke[5],
    복합타입: typeOfPoke[0],
    체력: 55,
    공격력: 55,
    방어력: 65,
  },
];

class Pokemon {
  constructor(statOfPoke) {
    this._no = statOfPoke.도감번호;
    this._name = statOfPoke.이름;
    this._type = statOfPoke.타입;
    this._subtype = statOfPoke.복합타입;
    this._HP = statOfPoke.체력 * 3;
    this._ATK = statOfPoke.공격력;
    this._DEF = statOfPoke.방어력;
    this._move = ['', '', '', ''];
    this._learnable = [];
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

  learn(level) {
    moveOfPokemons[this._no].forEach((moveInfo) => {
      if (moveInfo['배우는레벨'] == level) {
        this._learnable.push(moveInfo);
      }
    });

    for (let i = 0; level < 4 ? i < level : i < 4; i++) {
      if (this._learnable.length == 0) break;
      if (this._move[i] == '' /*&& this._learnable[i] != undefined*/) {
        //this._move[i] = this._learnable[i];
        this._move[i] = this._learnable.pop();
      }
    }
    //이미 4칸 찼으면 기존 기술 중 하나를 골라 지우고 새 기술을 배울 수 있다.
    //this._move[0] = moveOfPokemons[this._name][0];
    //console.log(this._move, moveOfPokemons[this._name][0]);
  }

  encount(level) {
    moveOfPokemons[this._no].forEach((moveInfo) => {
      if (moveInfo['배우는레벨'] <= level) {
        this._learnable.push(moveInfo);
      }
    });

    for (let i = 0; level < 4 ? i < level : i < 4; i++) {
      if (this._learnable.length == 0) break;
      if (this._move[i] == '' /*&& this._learnable[i] != undefined*/) {
        //this._move[i] = this._learnable[i];
        this._move[i] = this._learnable.pop();
      }
    }
  }

  isMoveEmpty(index) {
    return this._move[index]['기술명'] != undefined ? this._move[index]['기술명'] : '-';
  }

  levelUp() {
    this._level++;
  }
  checkWeakness(atkType, defType) {
    let win = 2,
      lose = 0.5,
      draw = 1,
      invalid = 0;
    if (atkType == typeOfPoke[0] || defType == typeOfPoke[0]) return draw;
    switch (atkType) {
      //불꽃 타입 상성
      case typeOfPoke[1]: {
        if (
          defType == typeOfPoke[2] ||
          defType == typeOfPoke[11] ||
          defType == typeOfPoke[13] ||
          defType == typeOfPoke[14]
        )
          return win;
        else if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[3] ||
          defType == typeOfPoke[10] ||
          defType == typeOfPoke[17]
        )
          return lose;
      }

      //풀 타입 상성
      case typeOfPoke[2]: {
        if (defType == typeOfPoke[3] || defType == typeOfPoke[9] || defType == typeOfPoke[10])
          return win;
        else if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[2] ||
          defType == typeOfPoke[11] ||
          defType == typeOfPoke[12] ||
          defType == typeOfPoke[13] ||
          defType == typeOfPoke[15] ||
          defType == typeOfPoke[17]
        )
          return lose;
      }

      //물 타입 상성
      case typeOfPoke[3]: {
        if (defType == typeOfPoke[1] || defType == typeOfPoke[9] || defType == typeOfPoke[10])
          return win;
        else if (defType == typeOfPoke[2] || defType == typeOfPoke[3] || defType == typeOfPoke[17])
          return lose;
      }

      //전기 타입 상성
      case typeOfPoke[4]: {
        if (defType == typeOfPoke[9]) return invalid;
        else if (defType == typeOfPoke[3] || defType == typeOfPoke[12]) return win;
        else if (defType == typeOfPoke[2] || defType == typeOfPoke[4] || defType == typeOfPoke[17])
          return lose;
      }

      //노말 타입 상성
      case typeOfPoke[5]: {
        if (defType == typeOfPoke[7]) return invalid;
        else if (defType == typeOfPoke[10] || defType == typeOfPoke[11]) return lose;
      }

      //격투 타입 상성
      case typeOfPoke[6]: {
        if (defType == typeOfPoke[7]) return invalid;
        else if (
          defType == typeOfPoke[5] ||
          defType == typeOfPoke[10] ||
          defType == typeOfPoke[11] ||
          defType == typeOfPoke[14] ||
          defType == typeOfPoke[16]
        )
          return win;
        else if (
          defType == typeOfPoke[8] ||
          defType == typeOfPoke[12] ||
          defType == typeOfPoke[13] ||
          defType == typeOfPoke[15] ||
          defType == typeOfPoke[18]
        )
          return lose;
      }

      //고스트 타입 상성
      case typeOfPoke[7]: {
        if (defType == typeOfPoke[5]) return invalid;
        else if (defType == typeOfPoke[7] || defType == typeOfPoke[8]) return win;
        else if (defType == typeOfPoke[16]) return lose;
      }

      //에스퍼 타입 상성
      case typeOfPoke[8]: {
        if (defType == typeOfPoke[16]) return invalid;
        else if (defType == typeOfPoke[6] || defType == typeOfPoke[15]) return win;
        else if (defType == typeOfPoke[8] || defType == typeOfPoke[11]) return lose;
      }

      //땅 타입 상성
      case typeOfPoke[9]: {
        if (defType == typeOfPoke[12]) return invalid;
        else if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[4] ||
          defType == typeOfPoke[10] ||
          defType == typeOfPoke[11] ||
          defType == typeOfPoke[15]
        )
          return win;
        else if (defType == typeOfPoke[2] || defType == typeOfPoke[13]) return lose;
      }

      //바위 타입 상성
      case typeOfPoke[10]: {
        if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[12] ||
          defType == typeOfPoke[13] ||
          defType == typeOfPoke[14]
        )
          return win;
        else if (defType == typeOfPoke[6] || defType == typeOfPoke[9] || defType == typeOfPoke[11])
          return lose;
      }

      //강철 타입 상성
      case typeOfPoke[11]: {
        if (defType == typeOfPoke[10] || defType == typeOfPoke[14] || defType == typeOfPoke[18])
          return win;
        else if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[3] ||
          defType == typeOfPoke[4] ||
          defType == typeOfPoke[11]
        )
          return lose;
      }

      //비행 타입 상성
      case typeOfPoke[12]: {
        if (defType == typeOfPoke[2] || defType == typeOfPoke[6] || defType == typeOfPoke[13])
          return win;
        else if (defType == typeOfPoke[4] || defType == typeOfPoke[10] || defType == typeOfPoke[11])
          return lose;
      }

      //벌레 타입 상성
      case typeOfPoke[13]: {
        if (defType == typeOfPoke[2] || defType == typeOfPoke[8] || defType == typeOfPoke[16])
          return win;
        else if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[6] ||
          defType == typeOfPoke[7] ||
          defType == typeOfPoke[11] ||
          defType == typeOfPoke[12] ||
          defType == typeOfPoke[15] ||
          defType == typeOfPoke[18]
        )
          return lose;
      }

      //얼음 타입 상성
      case typeOfPoke[14]: {
        if (
          defType == typeOfPoke[2] ||
          defType == typeOfPoke[9] ||
          defType == typeOfPoke[12] ||
          defType == typeOfPoke[17]
        )
          return win;
        else if (
          defType == typeOfPoke[1] ||
          defType == typeOfPoke[3] ||
          defType == typeOfPoke[11] ||
          defType == typeOfPoke[14]
        )
          return lose;
      }

      //독 타입 상성
      case typeOfPoke[15]: {
        if (defType == typeOfPoke[11]) return invalid;
        else if (defType == typeOfPoke[2] || defType == typeOfPoke[18]) return win;
        else if (
          defType == typeOfPoke[7] ||
          defType == typeOfPoke[9] ||
          defType == typeOfPoke[10] ||
          defType == typeOfPoke[15]
        )
          return lose;
      }

      //악 타입 상성
      case typeOfPoke[16]: {
        if (defType == typeOfPoke[7] || defType == typeOfPoke[8]) return win;
        else if (defType == typeOfPoke[6] || defType == typeOfPoke[16] || defType == typeOfPoke[18])
          return lose;
      }

      //드래곤 타입 상성
      case typeOfPoke[17]: {
        if (defType == typeOfPoke[18]) return invalid;
        else if (defType == typeOfPoke[17]) return win;
        else if (defType == typeOfPoke[11]) return lose;
      }

      //페어리 타입 상성
      case typeOfPoke[18]: {
        if (defType == typeOfPoke[6] || defType == typeOfPoke[16] || defType == typeOfPoke[17])
          return win;
        else if (defType == typeOfPoke[1] || defType == typeOfPoke[11] || defType == typeOfPoke[15])
          return lose;
      }

      default:
        return draw;
    }
  }
  //(데미지 = (위력 × 공격 × (레벨 × [[급소]] × 2 ÷ 5 + 2 ) ÷ 방어 ÷ 50 + 2 ) × [[자속 보정]] × 타입상성1 × 타입상성2 × 랜덤수/255)
  attack(power, typeOfMove, opponent, battleLogs) {
    if (power == 0) return 0;
    let isSameType = this._type == typeOfMove || this._subtype == typeOfMove ? 1.1 : 1;
    let typeValue =
      this.checkWeakness(typeOfMove, opponent._type) *
      this.checkWeakness(typeOfMove, opponent._subtype);
    if (typeValue == 0) {
      battleLogs.push(chalk.green(`효과가 없는 것 같다...`));
    } else if (typeValue > 1) {
      battleLogs.push(chalk.green(`효과가 굉장했다!`));
    } else if (typeValue < 1) {
      battleLogs.push(chalk.green(`효과가 별로인 듯하다...`));
    }
    typeValue *= isSameType;
    return Math.floor(
      (((power * this._ATK) / opponent._DEF / 50 + 2) *
        typeValue *
        (Math.random() * 38 + 179) *
        10) /
        255,
    );
  }

  afterGotDamage(gotDamage) {
    this._HP -= gotDamage;
    //console.log(chalk.green(`\n${this._name}에게 ${gotDamage}데미지!`));
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
        `| 플레이어 정보 | 
        이름: ${player._name}   타입: ${player._type}, ${player._subtype}
        체력: ${player._HP} 공격력: ${player._ATK}  방어력: ${player._DEF}
        기술: ${player.isMoveEmpty(0)}  ${player.isMoveEmpty(1)}
            ${player.isMoveEmpty(2)}  ${player.isMoveEmpty(3)}
            `,
      ) +
      chalk.redBright(
        `| 몬스터 정보 |
        이름: ${monster._name}  타입: ${monster._type}, ${monster._subtype}
        체력: ${monster._HP}    공격력: ${monster._ATK} 방어력: ${monster._DEF}
        기술: ${monster.isMoveEmpty(0)}  ${monster.isMoveEmpty(1)}
            ${monster.isMoveEmpty(2)}   ${monster.isMoveEmpty(3)}
            `,
      ),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while (player._HP > 0) {
    console.clear();
    displayStatus(stage, player, monster);
    let damage = 0;

    logs.forEach((log) => console.log(log));

    console.log(chalk.green(`\n1. 일반 공격을 한다 2. 기술을 사용한다.`));
    const choice = readlineSync.question('당신의 선택은? ');

    // 플레이어의 선택에 따라 다음 행동 처리
    console.log(chalk.green(`${choice}를 선택하셨습니다.`));
    if (choice == 1) {
      damage = player.attack(10, typeOfPoke[0], monster);
    } else if (choice == 2) {
      console.log(chalk.green(`\n기술을 선택해주세요.`));
      const move = readlineSync.question('당신의 선택은? ');

      if (move in [1, 2, 3, 4]) {
        //try {} catch
        //빈칸을 눌렀을 경우 예외처리
        if (player._move[move - 1]['기술명'] == undefined) {
          logs.push(chalk.green(`${player._name}은(는) 헛손질을 했다!`));
        } else {
          damage = player.attack(
            player._move[move - 1]['위력'],
            player._move[move - 1]['타입'],
            monster,
            logs,
          );
          logs.push(
            chalk.green(
              `${player._name}은(는) ${player._move[move - 1]['기술명']}을(를) 사용했다!`,
            ),
          );
        }
      } else {
        //다시 고르세요. 혹은 눌러도 반응 없음
        continue;
      }
    } else {
      //console.log(chalk.green(`제대로 고르십시오.`));
      continue;
    }
    monster.afterGotDamage(damage);
    logs.push(chalk.green(`${monster._name}에게 ${damage}데미지!`));
    if (monster.checkFainted()) {
      break;
    }
    damage = monster.attack(10, typeOfPoke[0], player, logs);
    player.afterGotDamage(damage);
    logs.push(chalk.green(`${player._name}에게 ${damage}데미지!\n`));
  }
};

export async function startGame() {
  console.clear();

  //   db.read();
  //console.log(db.data);
  const player = new Pokemon(statOfPokemons[0]);
  //const monster = new Pokemon(statOfPokemons[1]);

  let stage = 1;
  //player.learn();

  while (stage <= 10) {
    let monster = new Pokemon(statOfPokemons[1]);
    player.learn(stage);
    // for (let i = 0; i < stage; i++) {
    //   monster.learn(i);
    // }
    monster.encount(stage);
    player._HP = 35 * 3;
    monster._HP = 70;

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
