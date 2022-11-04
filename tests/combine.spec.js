import test from "ava";
import combine from "../helpers/combine.js";

test("should combine objects correctly on property", (t) => {
  t.deepEqual(combine({ a: "foo" }, { a: "bar" }), {
    a: {
      status: "bar",
      path: "foo",
    },
  });
});
