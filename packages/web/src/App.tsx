import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { initCoreStores } from 'core-store';
import { observer } from 'mobx-react';
import { Suspense, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { initStores } from './mobx-store/stores/useStores';
import { RouteApp } from './routes';
const App = observer(() => {
  const [_, i18n] = useTranslation();
  useMemo(async () => {
    await initStores()
  }, [])
  useMemo(() => {
    initCoreStores();
  }, [])
  return (
    <div className="w-full h-full relative flex-1">
      <Suspense fallback={<div>Loading... </div>}>
        <ConfigProvider locale={viVN}>
          <RouteApp />
        </ConfigProvider>
      </Suspense>
    </div>
  );
});

export default App;
