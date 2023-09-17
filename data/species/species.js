import { baseUrl, methodUrl } from "../../core/url/url_utils";
import { showToast } from "../../utils/toast";

export const fetchSearchBySpecies = async ({ page = 1, search = "" }) => {
  try {
    const url = `${baseUrl}${methodUrl.species}/?search=${search}&page=${page}`;
    const data = await fetch(url);
    const response = await data.json();
    const items = response.results.map((item) => {
      return item.people;
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
