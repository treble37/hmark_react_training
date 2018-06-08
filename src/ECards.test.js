import ECards from "./ECards";
import { create } from "react-test-renderer";
import React from "react";

describe("ECards", () => {
  it("should show no cards message when no cards exist", () => {
    //Act
    const tree = create(
      <ECards eCards={[]} onAddClick={jest.fn()} onDeleteClick={jest.fn()} />
    ).toJSON(); //store JSON as a snapshot
    //Assert
    expect(tree).toMatchSnapshot();
  });

  it("should show cards table when cards exist", () => {
    //Act
    const tree = create(
      <ECards
        eCards={[{ name: "Happy", category: "Birthday", sku: "12345" }]}
        onAddClick={jest.fn()}
        onDeleteClick={jest.fn()}
      />
    ).toJSON(); //store JSON as a snapshot
    //Assert
    expect(tree).toMatchSnapshot();
  });
});
