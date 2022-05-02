import { TagsResponse } from "src/types/response";
import { request } from "../index";

export function getAllTags() {
  return request.get<TagsResponse>("/tags").then((res) => res);
}
