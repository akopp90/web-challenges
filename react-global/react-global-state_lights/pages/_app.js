import { useState } from 'react';
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const toggleLight = (id) => {
    setLights(lights.map(light => 
      light.id === id ? { ...light, isOn: !light.isOn } : light
    ));
  };

  const turnAllLightsOn = () => {
    setLights(lights.map(light => ({ ...light, isOn: true })));
  };

  const turnAllLightsOff = () => {
    setLights(lights.map(light => ({ ...light, isOn: false })));
  };

  const countLightsOn = lights.filter(light => light.isOn).length;
  const allLightsOff = countLightsOn === 0;

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component 
        {...pageProps} 
        lights={lights} 
        toggleLight={toggleLight}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
        countLightsOn={countLightsOn}
      />
    </Layout>
  );
}