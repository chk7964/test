import "fastify";

declare module "fastify" {
  interface FastifyInstance {
    hello: (name: string) => string;
    isSuccess: (name: boolean) => {};
    key1: string;
    key2: string;
  }

  interface FastifyRequest {
    anotherProperty: string;
  }

  interface FastifyReply {}
}
