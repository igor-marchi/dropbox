import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeName, themes } from './styles/themes';

import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

import data from './data';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <Section
          variant="blue"
          title={data[0].title}
          description={data[0].description}
        />
        <Section
          variant="beige"
          title={data[1].title}
          description={data[1].description}
        />
        <Section
          variant="blue"
          title={data[2].title}
          description={data[2].description}
        />
        <Section
          variant="white"
          title={data[3].title}
          description={data[3].description}
        />
        <Section
          variant="black"
          title={data[4].title}
          description={data[4].description}
        />

        <SideMenu>
          <MenuForm themeName={themeName} setThemeName={setThemeName} />
        </SideMenu>

        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
