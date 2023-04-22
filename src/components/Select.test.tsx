import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

test("Select renders without errors", () => {
  render(
    <Select
      query=""
      setQuery={() => {}}
      setAllData={() => {}}
      setPage={() => {}}
    />
  );
  const selectElement = screen.getByRole("button", {
    name: /select your news/i,
  });
  expect(selectElement).toBeInTheDocument();
});

test("Select updates query when an option is selected", () => {
  const setQueryMock = jest.fn();
  render(
    <Select
      query=""
      setQuery={setQueryMock}
      setAllData={() => {}}
      setPage={() => {}}
    />
  );
  const selectElement = screen.getByRole("button", {
    name: /select your news/i,
  });
  userEvent.click(selectElement);
  const angularOption = screen.getByRole("option", { name: /angular/i });
  userEvent.click(angularOption);
  expect(setQueryMock).toHaveBeenCalledWith("angular");
});

test("Select resets all data and page when an option is selected", () => {
  const setAllDataMock = jest.fn();
  const setPageMock = jest.fn();
  render(
    <Select
      query=""
      setQuery={() => {}}
      setAllData={setAllDataMock}
      setPage={setPageMock}
    />
  );
  const selectElement = screen.getByRole("button", {
    name: /select your news/i,
  });
  userEvent.click(selectElement);
  const reactOption = screen.getByRole("option", { name: /react/i });
  userEvent.click(reactOption);
  expect(setAllDataMock).toHaveBeenCalledWith([]);
  expect(setPageMock).toHaveBeenCalledWith(0);
});
