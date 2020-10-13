const factory = require("../controllers/handlerFactory");
const Algo = require("../Models/Algo");
const Ds = require("../Models/dsModel");

const router = require("express").Router();

const demo = require("./demo");
const git = require("./git");
const local = require("./local");
router.use("/demo", demo);
router.use("/git", git);
router.use("/local", local);

router.route("/algorithms/").get(factory.getAll(Algo));

router.route("/algorithms/:id").get(factory.getOne(Algo));

router.route("/data-structures").get(factory.getAll(Ds));

router.route("/data-structures/:id").get(factory.getOne(Ds));

module.exports = router;
