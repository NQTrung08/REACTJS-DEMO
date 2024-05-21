import { intercept } from 'mobx';
export var platform: "ios" | 'android' | "web" | undefined = undefined;
export var localStore: any = undefined;
export function initLocalStorage(local, plat) {
    localStore = local;
    platform = plat;
}


export function ObserverablePersis(ob: any, key: string, store: string) {
    console.log(ob, key, store);
    const disposer = intercept(ob, key, change => {
        // if (localStore) {
        localStore?.setItem(store, JSON.stringify(change.newValue));
        // }
        return change;
    })
    if (platform === "web") {
        let res = localStorage.getItem(store)
        if (!!res) {
            try {
                ob[key] = JSON.parse(res);
            } catch (error) {

            }
        }
    } else {
        localStore?.getItem(store).then(res => {
            if (!!res) {
                try {
                    ob[key] = JSON.parse(res);
                } catch (error) {

                }
            }
        })
    }
}