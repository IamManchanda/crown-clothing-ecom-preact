import envVars from "preact-cli-plugin-env-vars";
import preactCliSvgLoader from "preact-cli-svg-loader";

export default function (config, env, helpers) {
  envVars(config, env, helpers);
  preactCliSvgLoader(config, helpers);
}
