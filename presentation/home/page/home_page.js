import React from "react";
import { Text, View } from "react-native";
import MainLayout from "../../../components/base/layout/main_layout";
import CharacterView from "../components/character_view";
import HomeHeaderView from "../components/home_header_view";

const HomePage = ({ route, navigation }) => {
  const { setToken } = route.params;
  return (
    <MainLayout large={true}>
      <HomeHeaderView setToken={setToken} />
      <CharacterView />
    </MainLayout>
  );
};

export default HomePage;
