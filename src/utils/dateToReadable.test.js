import { dateToReadable } from "./dateToReadable";

it("converts a date from timestamp", () => {
  expect(dateToReadable(481006800000)).toEqual('March 31, 1985');
})