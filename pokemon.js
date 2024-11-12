const typeOfPoke = ["불꽃", "풀", "물", "전기", "노말", "격투", "고스트", "에스퍼", "땅", "바위", "강철", "비행", "벌레", "얼음", "독", "악", "드래곤", "페어리"];

class Pokemon {
    constructor(name, type, HP, ATK, DEF, SPD) {
        this._name = name;
        this._type = type;
        this._HP = HP;
        this._ATK = ATK;
        this._DEF = DEF;
        this._SPD = SPD;
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

    get SPD() {
        return this._SPD;
    }

    set SPD(value) {
        if (value.length <= 0) {
            console.log("스피드가 입력되지 않았습니다.");
            return;
        }
        else if (typeof value != "number") {
            console.log("입력된 스피드가 수가 아닙니다.");
            return;
        }
        this._SPD = value;
    }
}

const pikachu = new Pokemon("피카츄", "전기");
console.log(pikachu.name, pikachu.type, pikachu.ATK);
pikachu.name = "라이츄";
console.log(pikachu.name);
pikachu.name = 1;
console.log(pikachu.name);