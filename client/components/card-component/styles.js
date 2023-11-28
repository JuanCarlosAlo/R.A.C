import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';

const StyledCardComponent = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  gap: 16px;
  width: 100%;

  ${Platform.OS === 'ios'
    ? `
      shadow-color: ${COLORS.PRIMARY};
      shadow-offset: { width: 0, height: 0 };
      shadow-opacity: 0.25;
      shadow-radius: 4;
    `
    : `
      elevation: 6;
      shadow-color: ${COLORS.PRIMARY};
    `
  }
`;

const StyledTitleContainer = styled.View`
flex-direction: row;
align-items: center;
gap: 20px;

`

export { StyledCardComponent, StyledTitleContainer };
