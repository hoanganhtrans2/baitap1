var express = require("express");
var router = express.Router();
var sinhvienController = require("../controller/sinhvien.controller");

router.get("/all", sinhvienController.getAllSinhVien);
router.get("/sv/:id", sinhvienController.deleteSinhVienById);
router.post("/updatasinhvien", sinhvienController.updateinfoSv);
router.post("/addnewsinhvien", sinhvienController.addSinhVien);
router.get("/:id", sinhvienController.getSinhVienById);

module.exports = router;
