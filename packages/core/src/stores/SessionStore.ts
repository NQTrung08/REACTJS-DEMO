/* eslint-disable no-unused-vars */
import {
    // action,
    // flow,
    // autorun,
    // computed,
    makeAutoObservable,
    observable
} from 'mobx';
import { clearPersistedStore, getPersistedStore, makePersistable } from 'mobx-persist-store';
import { ObserverablePersis, localStore, platform } from './ObserverablePersis';

class CompanyInfo {
    id!: string;
    name!: string;
    address!: string;
}
export class ISession {
    token?: string;
    username?: string;
    fullname?: string;
    password?: string;
    companyCode?: string;
    companyInfo?: CompanyInfo;
}
export enum DeployEnviroment {
    Production = 'Production',
    Staging = 'Staging',
    Dev = 'Dev',
}
export class SessionStore {
    @observable session?: ISession = undefined;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        if (platform === "web") {
            ObserverablePersis(this, 'session', 'SessionStore.session');

        } else {
            makePersistable(this, {
                name: 'SessionStore',
                properties: ['session'],
                storage: localStore,
                expireIn: 63115200000,
                // removeOnExpiration: true,
                // stringify: false,
                // debugMode: true,
            });
            this.getPersistedData();
        }

    }


    async clearPersistedData() {
        await clearPersistedStore(this);
    }

    async getPersistedData() {
        const data = await getPersistedStore(this);
        this.session = data?.session;
        return data;
    }

}