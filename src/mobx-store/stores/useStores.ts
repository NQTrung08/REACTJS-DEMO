
import { UIStore } from './UIStore';

interface Stores {
  uiStore: UIStore;
}

let stores: Stores | null = null;

export async function initStores() {
  if (!stores) {
    stores = {
      uiStore: new UIStore(),
    }
    await stores.uiStore.getPersistedData();
  }
}

export const useStores = () => {
  return stores!;
};

