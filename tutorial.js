import chalk from 'chalk';
import readlineSync from 'readline-sync';

const nextScript = 1500;

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
  readlineSync.question(chalk.gray('아무 키나 누르면 시작.'));
};

//readFirstPage();
