import CommonContext from "modules/Common/contexts/CommonContext";
import createEmotionCache from "modules/Common/contexts/CommonContext/utils";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

const clientSideEmotionCache = createEmotionCache();

export interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const App: React.FC<CustomAppProps> = ({
  Component,
  pageProps,
  emotionCache,
}) => {
  emotionCache = clientSideEmotionCache;
  return (
    <CacheProvider value={emotionCache}>
      <CommonContext>
        <CssBaseline />
        <Component {...pageProps} />
      </CommonContext>
    </CacheProvider>
  );
};

export default App;
