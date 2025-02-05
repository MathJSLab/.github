import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
export default (path) => {
    const envVars = dotenv.config({ path });
    dotenvExpand.expand(envVars);
    return envVars.parsed;
};
