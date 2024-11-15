import chalk from 'chalk';

const nextScript = 2000;

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
  console.clear();
  await firstPage('어서오너라!');
  console.log(chalk.green(fulltext));
  await firstPage('여기는 포켓몬들의 세계로 통하는 입구다!!');
  console.log(chalk.green(fulltext));

  readlineSync.question('아무 키나 누르면 시작.');
};

readFirstPage();
