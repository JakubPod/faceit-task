import styled from "styled-components/native";

export const StyledContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  bounces: false,
}))``;

export const StyledHeader = styled.View`
  align-items: center;
`;

export const StyledAvatar = styled.Image`
  margin: 20px;
`;

export const StyledTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const StyledSubtitle = styled.Text`
  color: darkslategray;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
`;

export const StyledSection = styled.View`
  margin-top: 24px;
`;
export const StyledSectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
`;
export const StyledSectionBody = styled.Text`
  font-size: 18px;
  color: darkslategray;
  text-align: justify;
`;
