import FetchRequest from "../utils/request";

export const limit = 10;

export const request = new FetchRequest({
  prefix: `${import.meta.env.VITE_APP_API_PREFIX}`,
  headers: {
    "Content-Type": "application/json",
  },
});
