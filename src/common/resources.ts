import spiderResource from "actors/spider/spider.resource";
import antResources from "actors/ant/ant.resource";

export const Resources = {
    ...antResources,
    ...spiderResource,
};