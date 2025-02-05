import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export default (path: string): dotenv.DotenvParseOutput | undefined => {
    const envVars = dotenv.config({ path });
    dotenvExpand.expand(envVars);
    return envVars.parsed;
};
