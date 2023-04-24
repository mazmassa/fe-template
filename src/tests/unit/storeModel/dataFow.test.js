import { useAppStore } from "../../../store/store";
import StoreModel from "../../../models/StoreModel";

describe("Unit | Models | StoreModel | Data Flow", () => {
  test("Should add a data when using setAll", () => {
    let resource = "nodes";
    let mockedNetworkData = {
      nodes: [
        {
          slug: "nn-1",
          name: "Node 1",
          id: "1",
        },
        {
          slug: "nn-2",
          name: "Node 2",
          id: "2",
        },
      ],
    };

    //GIVEN
    let storeModelInstance = new StoreModel(resource);

    //WHEN
    let storedDataBefore = useAppStore.getState().nodes;
    expect(storedDataBefore).toMatchObject([]);
    storeModelInstance.setAll(mockedNetworkData);

    //THEN
    let storedDataAfter = useAppStore.getState().nodes;
    expect(storedDataAfter).toMatchObject([
      { id: "1", name: "Node 1", slug: "nn-1" },
      { id: "2", name: "Node 2", slug: "nn-2" },
    ]);
  });

  test("Should add a data when using setOne", () => {
    let resource = "nodes";
    let mockedNetworkData = {
      node: {
        slug: "nn-1",
        name: "Node 1",
        id: "1",
      },
    };

    //GIVEN
    let storeModelInstance = new StoreModel(resource);

    //WHEN
    let storedDataBefore = useAppStore.getState().node;
    expect(storedDataBefore).toMatchObject({});
    storeModelInstance.setOne(mockedNetworkData);

    //THEN
    let storedDataAfter = useAppStore.getState().node;
    expect(storedDataAfter).toMatchObject({
      slug: "nn-1",
      name: "Node 1",
      id: "1",
    });
  });
});
