import React from "react";
import { Text, View } from "react-native";
import MainLayout from "../../../components/base/layout/main_layout";
import HeaderHomeView from "../components/header_home_view";
import PaginationView from "../components/pagination_view";
import CharacterView from "../components/character_view";

const HomePage = () => {
  return (
    <MainLayout large={true}>
      <HeaderHomeView />
      <CharacterView />
    </MainLayout>
  );
};

export default HomePage;
