import { createServer, Model, Factory } from "miragejs";
import { BASE_API } from "../../src/config/env";
import { ENV } from "../const/env/env";

function mockServer(environment = ENV.DEV) {
  let mockedServer = createServer({
    environment,

    models: {
      node: Model,
      car: Model,
    },

    factories: {
      node: Factory.extend({
        name(i) {
          return `Node ${i + 1}`;
        },
        slug(i) {
          return `nn-${i + 1}`;
        },
      }),
      model: Factory.extend({
        name(i) {
          return `Node ${i + 1}`;
        },
        slug(i) {
          return `nn-${i + 1}`;
        },
      }),
    },

    seeds(server) {
      server.create("node", { name: "Node 1", slug: "nn-1" });
      server.createList("node", 5);
    },

    routes() {
      // this.namespace = "api"
      this.urlPrefix = BASE_API;

      this.get(
        "/nodes",
        (schema) => {
          return schema.nodes.all();
        } /*{ timing: 4000 }*/
      );

      this.get("/nodes/:id", (schema, request) => {
        let id = request.params.id;

        return schema.nodes.find(id);
      });

      this.get("/nodes/:id/:slug", (schema, request) => {
        let slug = request.params.slug;

        return schema.nodes.findBy({ slug: slug });
      });

      this.post("/nodes/new", (schema, request) => {
        let payload = JSON.parse(request.requestBody);

        // return schema.cars.create(payload);
        return schema.nodes.create(payload);
      });

      this.patch("/nodes/:id/update", (schema, request) => {
        let id = request.params.id;
        let payload = JSON.parse(request.requestBody);

        return schema.nodes.find(id).update(payload);
      });
    },
  });

  return mockedServer;
}

export default mockServer;
