import { action, makeAutoObservable, observable } from "mobx";
import { getPersistedStore, makePersistable } from "mobx-persist-store";

export class UIStore {
    @observable showMenu: boolean = false;
    @observable pinMenu: boolean = false;
    @observable language: "vi" = "vi";
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        makePersistable(this, {
            name: 'UIStore',
            properties: ["showMenu"],
            storage: localStorage,
            expireIn: 63115200000,
            // removeOnExpiration: true,
            // stringify: false,
            // debugMode: true,
        });
    }

    @action
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }


    async getPersistedData() {
        try {
            const data = await getPersistedStore(this);
            // console.log('data', data)
            this.showMenu = data?.showMenu || false
            return data;
        } catch (e) {
            return null;
        }
        // alert(JSON.stringify(data));
    }

}