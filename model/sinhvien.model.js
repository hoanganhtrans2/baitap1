const AWS = require("../connect");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

module.exports = class SinhVien {
  constructor(id, msv, tensinhvien, ngaysinh, avatarurl) {
    this.id = id;
    this.msv = msv;
    this.tensinhvien = tensinhvien;
    this.ngaysinh = ngaysinh;
    this.avatarurl = avatarurl;
  }

  getSinhVienById(id) {
    return new Promise((resolve, reject) => {
      var params = {
        TableName: "sinhvien",
        Key: {
          id: id,
        },
      };
      docClient.get(params, function (err, data) {
        console.log("hello");
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(data);
          resolve(data);
        }
      });
    });
  }

  getAllSinhVien() {
    return new Promise((resolve, reject) => {
      var params = {
        TableName: "sinhvien",
      };
      docClient.scan(params, function (err, data) {
        if (err) reject(err);
        else resolve(data.Items);
      });
    });
  }
  deleteSinhVienById(id) {
    return new Promise((resolve, reject) => {
      const params = {
        TableName: "sinhvien",
        Key: {
          id: id,
        },
        ConditionExpression: "id = :id",
        ExpressionAttributeValues: {
          ":id": id,
        },
      };

      docClient.delete(params, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve({ mess: "xoa thanh cong" });
        }
      });
    });
  }
  updateInfoSinhVien(id, tensinhvien, avatar, ngaysinh) {
    return new Promise((resolve, reject) => {
      const params = {
        TableName: "sinhvien",
        Key: {
          id,
        },
        UpdateExpression:
          "set avatar = :avt, tensinhvien = :tsv, ngaysinh = :ns",
        ExpressionAttributeValues: {
          ":avt": avatar,
          ":tsv": tensinhvien,
          ":ns": ngaysinh,
        },
        ReturnValues: "ALL_NEW",
      };
      docClient.update(params, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.Attributes);
        }
      });
    });
  }
  addNewSinhVien(id, msv, tensinhvien, avatar, ngaysinh) {
    return new Promise((resolve, reject) => {
      const params = {
        TableName: "sinhvien",
        Item: {
          id: id,
          masinhvien: msv,
          tensinhvien: tensinhvien,
          avatar: avatar,
          ngaysinh: ngaysinh,
        },
      };
      docClient.put(params, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve({ mess: "them thanh cong" });
        }
      });
    });
  }
};
