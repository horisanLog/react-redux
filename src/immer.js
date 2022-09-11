import { produce } from "immer";

const state = {
  name: "tom",
  hobbies: ["t", "e"],
};

// イミュータブル
// immer ミュータブルな操作をしてもイミュータブルを保持することができるライブラリ
const newState = produce(state, (draft) => {
  draft.name = "John";
  draft.hobbies[0] = "baseball";
  console.log(draft);
});

// ミュータブル
// const newState = state
// newState.name = "John"

console.log(state, newState);

// const state = {
//     name: 'Tom',
//     hobbies: ['tennis', 'soccer']
// }

// // const newState = state;
// // newState.name = 'John';
// const newState = produce(state, draft => {
//     // draft.name = 'John';
//     // draft.hobbies[0] = 'baseball';

//     console.log(draft);
//     return [];
// })

// console.log(state, newState)
