"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    PORT: zod_1.z.string().default('6000'),
});
function createEnv() {
    // eslint-disable-next-line node/prefer-global/process
    const parsed = envSchema.safeParse(process.env);
    if (!parsed.success) {
        console.error('❌ Invalid environment variables:', JSON.stringify(parsed.error.format(), null, 4));
        // eslint-disable-next-line node/prefer-global/process
        process.exit(1);
    }
    return parsed.data;
}
exports.env = createEnv();
