import { baseUrl, methodUrl } from "../../core/url/url_utils";
import { showToast } from "../../utils/toast";

export const fetchHomeWorldByPerson = async ({ url }) => {
  const personId = url.split("/");

  try {
    const data = await fetch(url);
    const response = await data.json();
    const item = {
      name: response.name,
      terrain: response.terrain,
      climate: response.climate,
      residentsCount: response.residents.length,
    };
    return item;
  } catch {
    showToast({
      desc: `Person ${
        personId[personId.length - 2]
      } Home World Data is missing`,
      type: "error",
    });
  }
};

export const fetchSearchByHW = async ({ page = 1, search = "" }) => {
  try {
    const url = `${baseUrl}${methodUrl.homeWorld}/?search=${search}&page=${page}`;
    const data = await fetch(url);
    const response = await data.json();
    const items = response.results.map((item) => {
      return item.residents;
    });
    const result = {
      count: response.count,
      next: response.next ? true : false,
      previous: response.previous ? true : false,
      people: items,
    };
    return result;
  } catch {
    showToast({
      desc: "We're down for a bit of maintenance!",
      type: "error",
    });
  }
};
