import { View, StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants/colors';

const StyledBottomContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:16px;

  z-index: 10;
  background-color: white;

  ${Platform.OS === 'ios'
    ? `
      shadow-color: ${COLORS.PRIMARY};
      shadow-offset: { width: 0, height: -10px };
      shadow-opacity: 0.25;
      shadow-radius: 4px;
    `
    : `
    elevation: 35;
      shadow-color: ${COLORS.PRIMARY};
      shadow-offset: -20px -10px; 
      shadow-opacity: 0.6;
      shadow-radius: 15px;
    `
  }
`;

export { StyledBottomContainer };
