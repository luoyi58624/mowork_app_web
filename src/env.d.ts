/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_DIR: string
  readonly VITE_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}