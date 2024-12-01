import { atom, selector }     from "recoil";

export const networkAtom = atom({
    key: "network",
    default: 140
})

export const jobAtom = atom({
    key: "job",
    default: 0
})

export const messageAtom = atom({
    key: "message",
    default: 0
})

export const notificationAtom = atom({
    key: "notification",
    default: 12
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        return get(notificationAtom) + get(jobAtom) + get(networkAtom) + get(messageAtom)
    }
})

