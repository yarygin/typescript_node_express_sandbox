import Route from "../Route";
import PublicIndexController from "../Controller/Public/IndexController";

export default [
    new Route('/', 'get', new PublicIndexController()),
];