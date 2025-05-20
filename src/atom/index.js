import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userAtom', // 전역 고유 ID
  default: [], // 초기값
});
