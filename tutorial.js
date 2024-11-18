import chalk from 'chalk';
import readlineSync from 'readline-sync';

const nextScript = 1500;
const askToChoosePlayer = [
  `마라톤 시작부터 갑자기 넘어지고 말았다. 너라면 어떻게 하겠는가?
  1. 아직 포기하지 않아!
  2. 절망해서 주저앉는다.
  3. 처음부터 다시! 라고 외친다.
  `,
  `영화관에 왔다. 다음 중 어떤 걸 보고 싶은가?
  1. 감동
  2. 멜로
  3. 액션
  `,
  `좀 귀찮은 걸 부탁받았다. 너라면 어떻게 하겠는가?
  1. 혼자서 해낸다.
  2. 누군가의 도움을 받는다.
  3. 다른 사람에게 떠넘긴다.
  `,
  `별로 재미는 없는 것 같은데 주변 모두가 크게 웃고 있다. 너는 어떤가?
  1. 딱히 아무렇지 않다.
  2. 상황에 따라 다르다.
  3. 따라서 웃어본다.
  `,
  `수업 중 화장실에 가고 싶어졌다. 어떻게 하겠는가?
  1. 손을 들어 화장실에 간다.
  2. 몰래 화장실에 간다.
  3. 끝날 때까지 필사적으로 참는다.
  `,
];
const startingPokemons = ['피카츄', '이상해씨', '파이리', '꼬부기', '이브이'];
const playerPoint = [0, 0, 0, 0];

let readPage = function (text) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(text);
    }, nextScript);
    // setTimeout(() => {
    //   console.log(chalk.green('여기는 포켓몬들의 세계로 통하는 입구다!!'));
    // }, nextScript * 2);
  });
};

export let readFirstPage = async function () {
  let fulltext = '';
  let firstPage = async function (text) {
    //fulltext += (fulltext ? '\n' : '') + (await readPage(text));
    fulltext = await readPage(text);
  };
  await firstPage('...');
  console.clear();
  await firstPage('어서오너라!');
  console.log(chalk.green(fulltext));
  await firstPage('여기는 포켓몬들의 세계로 통하는 입구다!!');
  console.log(chalk.green(fulltext));
  await firstPage('이 문 너머에는 네가 상상하지 못한 다양한 모험이 기다리고 있을 것이다!');
  console.log(chalk.green(fulltext));
  await firstPage('하지만 모험에 나서기 전에 너에게 몇 가지 질문이 있다.');
  console.log(chalk.green(fulltext));
  await firstPage('솔직하게 대답해주길 바란다.');
  console.log(chalk.green(fulltext));
  await firstPage('준비는 되었는가?');
  console.log(chalk.green(fulltext));
  await firstPage('그럼...');
  console.log(chalk.green(fulltext));
  await firstPage('질문 시작하겠다!');
  console.log(chalk.green(fulltext));
  readlineSync.question(chalk.gray('아무 키나 누르면 시작.'));
  console.clear();

  // for (let i = 0; i < choosePlayer.length; i++) {
  //   await questionPage(choosePlayer[i]);
  //   //if(!questionPage())
  // }
  await questionPage();
  await firstPage('여러 질문에 대답해줘서 고맙다.');
  console.log(chalk.green(fulltext));
  await firstPage('너는 아무래도');
  console.log(chalk.green(fulltext));
  await firstPage(checkMax() + '다!');
  console.log(chalk.green(fulltext));
  await firstPage('OK! 준비는 끝났다!');
  console.log(chalk.green(fulltext));
  await firstPage('그럼 드디어 포켓몬이 사는 세계로 들어가보자!');
  console.log(chalk.green(fulltext));
  await firstPage('잘해보도록!');
  console.log(chalk.green(fulltext));
  readlineSync.question(chalk.gray('아무 키나 누르면 시작.'));
};

let questionPage = async function () {
  let count = 0;
  while (count < askToChoosePlayer.length) {
    const choice = readlineSync.question(askToChoosePlayer[count]);
    //1부터 4까지만 받겠다고 했는데 0부터 3까지만 받는다.
    //이유가 뭔지는 모르겠다. 스위치문을 쓰면 버그는 사라지긴 하겠다만.
    if (choice in [1, 2, 3, 4]) {
      playerPoint[choice]++;
      console.clear();
      //console.log(choice, playerPoint);
    } else {
      console.clear();
      continue;
    }
    count++;
  }
  // switch (choice) {
  //   case '1':
  //     break;
  //   case '2':
  //     break;
  //   case '3':
  //     break;
  //   default:
  // }
};

let checkMax = function () {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < playerPoint.length; i++) {
    if (max < playerPoint[i]) {
      max = playerPoint[i];
      maxIndex = i;
    }
  }
  return startingPokemons[maxIndex];
};

//readFirstPage();
