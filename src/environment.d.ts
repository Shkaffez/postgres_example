declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PGDATABASE: string;
            PGUSER: string;
            PGPASSWORD: string;
            PORT?: string;
        }
    }
}
export { }