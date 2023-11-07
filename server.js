const fastify = require("fastify")();
const fastifyCors = require('@fastify/cors');

const queries = require("./database.js");

fastify.register(fastifyCors, {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
});

fastify.get("/", (req, res) => {
  res.send({ hello: "world" });
});

fastify.post("/insert", async (req, res) => {
    const result = await queries.insertClient(req.body.name, req.body.email, req.body.cep)
    res.send(result);
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    console.log(err);
    process.exit(1);
  }

  console.log("Server is running on http://localhost:3000");
});
