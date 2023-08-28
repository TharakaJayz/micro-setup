const pool = require("../utill/database");

module.exports = class Customer {
  constructor(name, age, address, id) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.id = id;
  }

  // save(){
  //     return db.execute("INSERT INTO customer values(?,?,?)",[
  //         this.name,this.age,this.address
  //     ]);
  // }

  static async fetchAll() {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM customer", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async createCustomer() {
    return new Promise((resolve, reject) => {
      pool.query(
        "insert into customer values(?,?,?,?)",
        [this.name, this.age, this.address, this.id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  static async deleteCustomer(id){
    return new Promise((resolve,reject)=>{
      pool.query(
        "DELETE FROM customer WHERE (id = ?)"  ,[id],(err,result)=>{
          if(err){
            reject(err);
          }else{
            resolve(result);
          }
        }
      )
    })
  }
};
