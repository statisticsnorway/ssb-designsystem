# Build Storybook
FROM ghcr.io/pnpm/pnpm:11.22.0@sha256:eba76954b37ec1ba6187f0adb39caee1e31733194857eedd01319da0af3fa00d AS builder

RUN pnpm runtime set node 24 -g

WORKDIR /app

ENV CI=true

# Copy workspace manifests first to improve build caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/storybook/package.json ./apps/storybook/package.json
COPY packages/css/package.json ./packages/css/package.json
COPY packages/react/package.json ./packages/react/package.json

# Install dependencies for Storybook and its workspace dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --filter @statisticsnorway/storybook...

# Copy source code and build Storybook
COPY . .

RUN pnpm build:css && pnpm storybook:build

# Serve the static Storybook files
FROM nginx:stable-alpine-slim AS runner

COPY apps/storybook/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/storybook/storybook-static /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]