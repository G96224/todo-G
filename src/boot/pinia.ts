import { boot } from 'quasar/wrappers';

import { createPinia } from 'pinia';
// 持久化存储pinia
import piniaPluginPersist from 'pinia-plugin-persist';

export default boot(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
  pinia.use(piniaPluginPersist);
});
