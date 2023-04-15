declare module "*.vue" {
  import { type defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;

  export default Component;
}

interface ImportMeta {
  env: {
    VITE_APP_APP_HOST: string;
    VITE_APP_APP_PORT: string;
    VITE_APP_BASE_PATH: string;
    VITE_APP_API_HOST: string;
    VITE_APP_API_PORT: string;
    VITE_APP_API_PREFIX: string;
  };
}
