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
    
    //added code for put
    this.methods["get"] = true;
    this.stack.push(layer);
    return this;
  }

  put(handler) {
    const layer = new Layer("/", handler);
    layer.method = "put";
    
    //added code for put
    this.methods["put"] = true;
    this.stack.push(layer);
    return this;
  }

  post(handler) {
    const layer = new Layer("/", handler);
    layer.method = "post";
    
    //added code for put
    this.methods["post"] = true;
    this.stack.push(layer);
    return this;
  }

  patch(handler) {
    const layer = new Layer("/", handler);
    layer.method = "patch";
    
    //added code for put
    this.methods["patch"] = true;
    this.stack.push(layer);
    return this;
  }

  delete(handler) {
    const layer = new Layer("/", handler);
    layer.method = "delete";
    
    //added code for put
    this.methods["delete"] = true;
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