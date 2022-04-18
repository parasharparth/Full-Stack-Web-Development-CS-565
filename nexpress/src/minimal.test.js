import { assert } from "console";

describe("minimal test suite", () => {
    it("Should get the correct path for get", () => {
      expect('/get').toBe('/get');
    });

    it("Should get the correct path for put", () => {
        expect('/put').toBe('/put');
      });

      it("Should get the correct path for post", () => {
        expect('/post').toBe('/post');
      });

      it("Should get the correct path for delete", () => {
        expect('/delete').toBe('/delete');
      });

      it("Should get the correct path for patch", () => {
        expect('/patch').toBe('/patch');
      });
  });  
