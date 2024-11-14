import { JSONFilePreset } from 'lowdb/node';

// Read or create db.json
const defaultData = { posts: [] };
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
const db = await JSONFilePreset('db.json', defaultData);

// Update db.json
//await db.update(({ posts }) => posts.push('hello world'));

// Alternatively you can call db.write() explicitely later
// to write to db.json
//db.data.posts.push('hello world');
db.data.피카츄.push({
  기술명: '전기쇼크',
  타입: typeOfPoke[4],
  배우는레벨: 1,
  위력: 40,
  명중률: 90,
  pp: 20,
  부가효과: '마비',
  확률: 90,
  반동: '없음',
});
await db.write();

export { db };
