import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, StyleSheet, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CharacterItem from "./character_item";
import { Ionicons } from "@expo/vector-icons";
import { ColorManager } from "../../../core/resources/color_manager";
import SizeBox from "../../../components/base/custom/size_box";
import { fetchPeopleByUrl, fetchPeopleData } from "../../../data/people/people";
import PaginationView from "./pagination_view";
import CustomLoading from "../../../components/base/custom/custom_loading";
import PrimaryBtn from "../../../components/base/btn/primary_btn";
import NoResultContainer from "../../../components/base/custom/no_result_container";
import FilterView from "./filter_view";
import { fetchSearchBySpecies } from "../../../data/species/species";
import { fetchSearchByHW } from "../../../data/home_world/home_world";
import { fetchSearchByFilms } from "../../../data/films/films";

const filterItems = {
  home: "Home World",
  film: "Film",
  species: "Species",
  name: "Name",
};

const CharacterView = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [people, setPeople] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Name");

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState({
    next: true,
    previous: false,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setSearchText("");
    }, 2000);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchPeopleData({ page: page, search: searchText });
    setQuery({
      next: data.next ? true : false,
      previous: data.pervious ? true : false,
    });
    setPeople(data.people);
    setLoading(false);
  };

  const fetchDataBySpecies = async () => {
    setLoading(true);
    const data = await fetchSearchBySpecies({ page: page, search: searchText });
    setQuery({
      next: data.next ? true : false,
      previous: data.pervious ? true : false,
    });

    let peopleUrlArray = [];
    if (data.people) {
      data.people.map((item) => {
        peopleUrlArray.push(...item);
      });
    }
    if (peopleUrlArray.length > 0) {
      const dd = await Promise.all(
        peopleUrlArray.map(async (item) => {
          return await fetchPeopleByUrl({ url: item });
        })
      );
      setPeople(dd);
    }
    setLoading(false);
  };

  const fetchDataByHomeWorld = async () => {
    setLoading(true);
    const data = await fetchSearchByHW({ page: page, search: searchText });
    setQuery({
      next: data.next ? true : false,
      previous: data.pervious ? true : false,
    });

    let peopleUrlArray = [];
    if (data.people) {
      data.people.map((item) => {
        peopleUrlArray.push(...item);
      });
    }
    if (peopleUrlArray.length > 0) {
      const dd = await Promise.all(
        peopleUrlArray.map(async (item) => {
          return await fetchPeopleByUrl({ url: item });
        })
      );
      setPeople(dd);
    }
    setLoading(false);
  };

  const fetchDataByFilms = async () => {
    setLoading(true);
    const data = await fetchSearchByFilms({ page: page, search: searchText });
    setQuery({
      next: data.next ? true : false,
      previous: data.pervious ? true : false,
    });

    let peopleUrlArray = [];
    if (data.people) {
      data.people.map((item) => {
        peopleUrlArray.push(...item);
      });
    }
    if (peopleUrlArray.length > 0) {
      const dd = await Promise.all(
        peopleUrlArray.map(async (item) => {
          return await fetchPeopleByUrl({ url: item });
        })
      );
      setPeople(dd);
    }
    setLoading(false);
  };

  useEffect(() => {
    dataFetch();
  }, [page, selectedFilter]);

  const dataFetch = () => {
    if (selectedFilter == filterItems.name) {
      fetchData();
    } else if (selectedFilter == filterItems.home) {
      fetchDataByHomeWorld();
    } else if (selectedFilter == filterItems.species) {
      fetchDataBySpecies();
    } else {
      fetchDataByFilms();
    }
  };

  return (
    <View style={styles.container}>
      <FilterView
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        extraAction={() => {
          setSearchText("");
          setPage(1);
        }}
      />
      <SizeBox height={5} />
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color={ColorManager.hintColor} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={ColorManager.hintColor}
            style={styles.input}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              setPage(1);
            }}
          />
        </View>
        <View style={{ marginLeft: 5, width: 80 }}>
          <PrimaryBtn title="search" onPress={() => dataFetch()} height={40} />
        </View>
      </View>
      <SizeBox height={10} />
      {loading ? (
        <CustomLoading />
      ) : (
        <ScrollView
          style={{ padding: 2 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.bodyContainer}>
            {people.length == 0 ? (
              <NoResultContainer />
            ) : (
              people.map((item, index) => {
                return (
                  <CharacterItem data={item} index={index * page} key={index} />
                );
              })
            )}
          </View>
        </ScrollView>
      )}
      {!loading && people.length != 0 && (
        <PaginationView
          page={page}
          setPage={setPage}
          forwardEnable={query.next}
        />
      )}
    </View>
  );
};

export default CharacterView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: ColorManager.primary,
    borderRadius: 7,
    paddingVertical: 6,
    paddingRight: 25,
    paddingLeft: 16,
    gap: 16,
  },
  bodyContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
