import styled from "styled-components/native";

export const StyledContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bounces: false,
}))``;

export const StyledAvatar = styled.Image`
  margin: 20px;
`;

export const StyledTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const StyledBody = styled.Text`
  flex: 1;
  font-size: 17px;
  margin-top: 15px;
  padding-bottom: 20px;
  text-align: justify;
`;
