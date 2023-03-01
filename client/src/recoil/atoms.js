import { atom } from "recoil";

export const groupsStateAtom = atom({
    key: 'groupsStateAtom',
    default: [],
})

export const groupStateAtom = atom({
    key: 'groupStateAtom',
    default: {},
})