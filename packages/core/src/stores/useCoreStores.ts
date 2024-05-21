import { platform } from './ObserverablePersis';
import { SessionStore } from './SessionStore';

interface Stores {
  sessionStore: SessionStore;
}

let stores: Stores | null = null;
export async function initCoreStores() {
  try {
    // if (!stores) {
    stores = {
      sessionStore: new SessionStore(),
    }
    if (platform !== "web") {
      await stores.sessionStore.getPersistedData();
    }

  } catch (e) {
    console.log('error', e)
  }
}

export const useCoreStores = () => {
  return stores!;
};

