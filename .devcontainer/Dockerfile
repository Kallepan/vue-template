FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye
 
# Install additional packages
RUN npm install -g \
    vue@latest \
    @vue/cli \
    create-vue@latest \
    && npm cache clean --force > /dev/null 2>&1
