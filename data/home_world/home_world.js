import { baseUrl, methodUrl } from "../../core/url/url_utils";
import { showToast } from "../../utils/toast";

export const fetchHomeWorldByPerson = async ({ url }) => {
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
      desc: "We're down for a bit of maintenance!",
      type: "error",
    });
  }
};
