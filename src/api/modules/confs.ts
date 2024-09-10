import { get } from "@/utils/request";

function confs(params = {}) {
    return get("/confs", params);
}

export default {
    confs,
};
