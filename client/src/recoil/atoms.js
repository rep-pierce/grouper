import { atom } from "recoil";

export const groupsStateAtom = atom({
    key: 'groupsStateAtom',
    default: [],
})

export const groupStateAtom = atom({
    key: 'groupStateAtom',
    default: {},
})

export const postStateAtom = atom({
    key: 'postStateAtom',
    default: {},
})

export const displayStateAtom = atom({
    key: 'displayStateAtom',
    default: 'login',
})

export const fetchGroupsStateAtom = atom({
    key: 'fetchGroupsStateAtom',
    default: {},
})

export const userStateAtom = atom({
    key: 'userStateAtom',
    default: {},
})

export const currentUserStateAtom = atom({
    key: 'currentUserStateAtom',
    default: {},
})

export const postSubStateAtom = atom({
    key: 'postSubStateAtom',
    default: {},
})

export const foundGroupStateAtom = atom({
    key: 'foundGroupStateAtom',
    default: {},
})