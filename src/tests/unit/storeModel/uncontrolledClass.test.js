import StoreModel from "../../../models/StoreModel";

describe("Unit | Models | StoreModel | Uncontrolled Class", () => {
  test("it should call the constructor", () => {
    let resource = "nodes/new";
    let storeModelInstance = new StoreModel(resource);

    expect(storeModelInstance).toBeInstanceOf(StoreModel);
  });

  describe("instantiating the class", () => {
    test("it should raise an error when missing the resource/model store", () => {
      let resource = "something/else";

      function mockNewStore() {
        new StoreModel(resource);
      }

      expect(mockNewStore).toThrow(
        `StoreModel::Doctor Error\n Have you created the Store Model for "something" and "somethings" being object and array respectively"!?\nDon't forget to import it on the main Store (store.js) object.`
      );
    });

    describe("without options", () => {
      test("it should instantiate", () => {
        let resource = "nodes/new";
        let storeModelInstance = new StoreModel(resource);

        expect(storeModelInstance).toMatchObject({
          all: "nodes",
          one: "node",
          options: undefined,
          resource: {
            id: null,
            isRoot: false,
            root: "nodes",
          },
          isLoading: false,
          status: null,
        });
      });

      test("it should raise an error when `one` is equal on singular and plural", () => {
        let resource = "sheep/new";

        function mockNewStore() {
          new StoreModel(resource);
        }

        expect(mockNewStore).toThrow(
          "StoreModel::Init Model/Resource name sheep resulted in an equal name when inferred. Please, pick another resource/model name."
        );
      });

      test("it should parse with an `id` in the resource", () => {
        let resource = "nodes/1";
        let storeModelInstance = new StoreModel(resource);

        expect(storeModelInstance).toMatchObject({
          all: "nodes",
          one: "node",
          options: undefined,
          resource: {
            id: "1",
            isRoot: false,
            root: "nodes",
          },
          isLoading: false,
          status: null,
        });
      });

      test("it should parse with an `id/something` in the resource", () => {
        let resource = "nodes/1/something";
        let storeModelInstance = new StoreModel(resource);

        expect(storeModelInstance).toMatchObject({
          all: "nodes",
          one: "node",
          options: undefined,
          resource: {
            id: "1",
            isRoot: false,
            root: "nodes",
          },
          isLoading: false,
          status: null,
        });
      });

      test("it should parse without an `id` in the resource", () => {
        let resource = "nodes";
        let storeModelInstance = new StoreModel(resource);

        expect(storeModelInstance).toMatchObject({
          all: "nodes",
          one: "node",
          options: undefined,
          resource: {
            id: null,
            isRoot: true,
            root: "nodes",
          },
          isLoading: false,
          status: null,
        });
      });
    });

    describe("with `keyForModel` options", () => {
      test("it should instantiate", () => {
        let resource = "nodes/new";
        let options = { keyForModel: { one: "car", all: "cars" } };

        let storeModelInstance = new StoreModel(resource, options);

        expect(storeModelInstance).toMatchObject({
          all: "cars",
          one: "car",
          options: {
            keyForModel: {
              one: "car",
              all: "cars",
            },
          },
          resource: {
            id: null,
            isRoot: false,
            root: "nodes",
          },
          isLoading: false,
          status: null,
        });
      });

      test("it should raise an error when missing `all` attribute", () => {
        let resource = "nodes/new";
        let options = { keyForModel: { one: "car" } };

        function mockNewStore() {
          new StoreModel(resource, options);
        }

        expect(mockNewStore).toThrow(
          'StoreModel::Init Options must contains "one" and "all" properties resource/model'
        );
      });

      test("it should raise an error when missing `all` attribute", () => {
        let resource = "nodes/new";
        let options = { keyForModel: { all: "cars" } };

        function mockNewStore() {
          new StoreModel(resource, options);
        }

        expect(mockNewStore).toThrow(
          'StoreModel::Init Options must contains "one" and "all" properties resource/model'
        );
      });

      test("it should raise an error when `one` is equal on singular and plural", () => {
        let resource = "cars/new";
        let options = { keyForModel: { one: "sheep", all: "sheeps" } };

        function mockNewStore() {
          new StoreModel(resource, options);
        }

        expect(mockNewStore).toThrow(
          "StoreModel::Init Option resource/model name sheep resulted in an equal name when inferred. Please, pick another resource/model name."
        );
      });
    });
  });
});
