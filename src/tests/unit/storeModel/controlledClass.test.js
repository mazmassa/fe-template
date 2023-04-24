import StoreModel from "../../../models/StoreModel";

// we are mocking the whole class
jest.mock("../../../models/StoreModel");

describe("Unit | Models | StoreModel | Controlled Class", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    StoreModel.mockClear();
  });

  test("it should call the constructor", () => {
    let resource = "nodes/new";
    let storeModelInstance = new StoreModel(resource);

    expect(StoreModel).toHaveBeenCalledTimes(1);
    expect(storeModelInstance).toBeInstanceOf(StoreModel);
  });
});
