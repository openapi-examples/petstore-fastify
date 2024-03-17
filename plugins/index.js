// a fastify plugin to demo fastify-openapi-glue
// it can be run as plugin on any fastify server
// or standalone using "fastify start index.js"
import openapiGlue from "fastify-openapi-glue";
import { Service } from "./service.js";
const serviceHandlers = new Service();
const localFile = (fileName) => new URL(fileName, import.meta.url).pathname;

const pluginOptions = {
    specification: localFile("./petstore.yaml"),
    serviceHandlers,
    prefix: "v1",
};

export default async function (fastify, opts) {
    fastify.register(openapiGlue, pluginOptions);
}

export const options = {
    ajv: {
        customOptions: {
            strict: false,
        },
    },
};