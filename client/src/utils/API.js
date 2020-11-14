import axios from "axios"

export default {

    findAllSubs: function () {
        return axios.get("/api/subscriptions");
    },
    createSub: function (sub) {
        return axios.post("/api/subscriptions", sub);
    },
    findOneSub: function (id) {
        return axios.get("/api/subscriptions/" + id)
    },
    updateSub: function (id) {
        return axios.put("/api/subscriptions/" + id)
    },
    removeSub: function (id) {
        return axios.delete("/api/subscriptions/" + id)
    },
    findUser: function (id) {
        return axios.get("/api/user/:id");
    },
    createUser: function (id) {
        return axios.post("/api/user/:id");
    }
}