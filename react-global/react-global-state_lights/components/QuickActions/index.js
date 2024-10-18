import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ turnAllLightsOn, turnAllLightsOff, lights }) {
  const allLightsOn = lights.every(light => light.isOn);
  const allLightsOff = lights.every(light => !light.isOn);

  return (
    <StyledQuickActions>
      <Button onClick={turnAllLightsOn} disabled={allLightsOn}>
        Turn all lights on
      </Button>
      <Button onClick={turnAllLightsOff} disabled={allLightsOff}>
        Turn all lights off
      </Button>
    </StyledQuickActions>
  );
}