import buildApp from "./app";
import env from "./config/env";

const main = async () => {
  const server = await buildApp();
  try {
    await server.listen({ port: env.PORT, host: "0.0.0.0" });
  } catch (error) {
    server.log.error("Can't startup server");
    process.exit(1);
  }
};

main();
