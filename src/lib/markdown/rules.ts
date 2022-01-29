import markdownit, {PluginSimple} from "markdown-it";
import math_plugin from "./math_katex";

export default function rules({
                                rules = {},
                                plugins = [],
                              }: {
  rules?: Record<string, any>;
  plugins?: PluginSimple[];
}) {
  const markdownIt = markdownit("default", {
    breaks: false,
    html: false,
    linkify: false,
    ...rules,
  });
  plugins.forEach(plugin => markdownIt.use(plugin));
  markdownIt.use(math_plugin)
  return markdownIt;
}
