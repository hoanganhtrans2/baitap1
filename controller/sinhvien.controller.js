const SINHVIEN = require("../model/sinhvien.model");
const sv = new SINHVIEN();

module.exports.getSinhVienById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await sv.getSinhVienById(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports.getAllSinhVien = async (req, res) => {
  try {
    const result = await sv.getAllSinhVien();
    // res.json(result);
    res.render("sinhvien/index", { listsv: result });
  } catch (error) {
    //res.json(error);
    res.render("sinhvien/err");
  }
};

module.exports.deleteSinhVienById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sv.deleteSinhVienById(id);
    res.redirect("/sinhvien/all");
  } catch (error) {
    res.render("sinhvien/err");
  }
};

module.exports.updateinfoSv = async (req, res) => {
  const { id, ngaysinh, tensinhvien, avatar } = req.body;
  console.log(id);
  try {
    const result = await sv.updateInfoSinhVien(
      id,
      tensinhvien,
      avatar,
      ngaysinh
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports.addSinhVien = async (req, res) => {
  const { id, msv, tensinhvien, avatar, ngaysinh } = req.body;
  try {
    const result = await sv.addNewSinhVien(
      id,
      msv,
      tensinhvien,
      avatar,
      ngaysinh
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
