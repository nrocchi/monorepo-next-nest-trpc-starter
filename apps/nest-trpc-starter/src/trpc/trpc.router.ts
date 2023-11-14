import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@nest-trpc-starter/trpc/trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService, // private readonly userService: UserService, // injected service
  ) {}

  // Create a Trpc router (similar to a Nest Controller we expose the endpoints here)
  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        // You can use dependency injection from Nestjs here by calling another service (eg HelloService) to handle the logic
        return `Hello ${input.name ? input.name : 'Trpc'}`;
      }),

    // Random example showing you how you can now use dependency injection
    // getUsers: this.trpc.procedure
    //   .input(
    //     z.object({
    //       name: z.string(),
    //     }),
    //   )
    //   .query(async ({ input }) => {
    //     const { name } = input;
    //     return await this.userService.getUsers(name);
    //   }),
  });

  // Create an Express Middleware for the Trpc Router
  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
