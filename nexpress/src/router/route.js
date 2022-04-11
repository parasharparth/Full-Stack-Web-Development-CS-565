import { Layer } from "./layer";

export class Route {

  constructor(path) {
    this.path = path;
    // pile of layers
    this.stack = [];
    this.methods = {};
  }

  get(handler) {
    const layer = new Layer("/", handler);
    layer.method = "get";

    this.methods["get"] = true;
    this.stack.push(layer);
    return this;
  }

  requestHandler(method) {
    const name = method.toLowerCase();
    return Boolean(this.methods[name]);
  }


  dispatch(req, res) {
    const method = req.method.toLowerCase();

    this.stack.forEach((item) => {
      if (method === item.method) {
        item.requestHandler(req, res);
      }
    });
  }
}