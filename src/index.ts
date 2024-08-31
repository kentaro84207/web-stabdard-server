export default {
  fetch: async (req: Request) => {
    if (req.method === "POST") {
      const data = await req.formData();
      const message = data.get("message");
      return new Response(`Message is ${message}`);
    }
    return new Response("Not Found", {
      status: 404,
    });
  },
};
