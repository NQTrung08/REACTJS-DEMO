import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { Suspense, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { initStores } from './mobx-store/stores/useStores';
import { RouteApp } from './routes';
function App() {
  const [_, i18n] = useTranslation();
  useMemo(async () => {
    await initStores()
  }, [])
  return (
    <div className="App">
      <Suspense fallback={<div>Loading... </div>}>
        <ConfigProvider locale={viVN}>
          <RouteApp />
        </ConfigProvider>
      </Suspense>
    </div>
  );
}

export default App;
