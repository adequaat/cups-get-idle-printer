import test from "ava";
import combine from "../helpers/combine.js";

test("should combine objects correctly on property", (t) => {
  t.deepEqual(combine({ a: { path: "string", local: false } }, { a: "bar" }), {
    a: {
      status: "bar",
      path: "string",
      local: false,
    },
  });

  t.deepEqual(
    combine(
      { a: { path: "string", local: false }, b: { path: "foo", local: "bar" } },
      { a: "bar", b: "fooz" }
    ),
    {
      a: {
        status: "bar",
        path: "string",
        local: false,
      },
      b: {
        status: "fooz",
        path: "foo",
        local: "bar",
      },
    }
  );
});
