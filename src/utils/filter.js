import _ from "lodash";

export function filter(items, filterKey) {
  return _.filter(items, ["genre.name", filterKey]);
}
