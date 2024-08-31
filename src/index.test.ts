import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import app from "./index.ts";

describe("Testing My App", () => {
  it("Should return 404 response", async () => {
    const req = new Request("http://localhost/");
    const res = await app.fetch(req);
    expect(res.status).toBe(404);
    expect(await res.text()).toBe("Not Found");
  });

  it("Should return 200 response", async () => {
    const formData = new FormData();
    formData.append("message", "Hi");
    const req = new Request("http://localhost/", {
      method: "POST",
      body: formData,
    });
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Message is Hi");
  });
});
