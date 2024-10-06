import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('6000'),
})

function createEnv() {
  // eslint-disable-next-line node/prefer-global/process
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', JSON.stringify(parsed.error.format(), null, 4))
    // eslint-disable-next-line node/prefer-global/process
    process.exit(1)
  }

  return parsed.data
}

export const env = createEnv()

export type Env = z.infer<typeof envSchema>
