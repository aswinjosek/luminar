//importing jwt
const jwt = require("jsonwebtoken");

//importing DB
const db = require("./db");

user = {
  1000: {
    uname: "aswin",
    acno: 1000,
    password: "user1",
    balance: 5000,
    transaction: [],
  },
  1001: {
    uname: "bestin",
    acno: 1001,
    password: "user2",
    balance: 6000,
    transaction: [],
  },
  1002: {
    uname: "amal",
    acno: 1002,
    password: "user3",
    balance: 7000,
    transaction: [],
  },
};

const register = (name, acno, pswd, bal) => {
  return db.User.findOne({ acno }).then((user) => {
    if (user) {
      return {
        statusCode: 422,
        status: false,
        message: "user already exists... Please Login",
      };
    } else {
      const newUser = new db.User({
        uname: name,
        acno,
        password: pswd,
        balance: bal,
        transaction: [],
      });
      newUser.save();
      return {
        statusCode: 200,
        status: true,
        message: "succesfully registered",
      };
    }
  });
};

//login

const login = (acno, password) => {
  return db.User.findOne({ acno, password }).then((user) => {
    if (user) {
      const token = jwt.sign({ currentAcno: acno }, "spersecretkey123123");
      return {
        statusCode: 200,
        status: true,
        message: "Login success",
        token,
        currentUser: user.uname,
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "Invalid Credentials ",
      };
    }
  });
};

//deposit

const deposit = (acno, password, amount) => {
  return db.User.findOne({ acno, password }).then((user) => {
    if (!user) {
      return {
        statusCode: 422,
        status: false,
        message: "invalid credentials",
      };
    } else {
      user.balance += Number(amount);
      user.transaction.push({
        amount,
        type: "credit",
        balance: user.balance,
      });
      user.save();
      return {
        statusCode: 200,
        status: true,
        message:
          amount + " Deposited Succesfully. New balance is " + user.balance,
      };
    }
  });

  // if (acno in user) {
  //   if (pswd == user[acno]["password"]) {
  //     user[acno]["balance"] += Number(amt);
  //     user[acno]["transaction"].push({
  //       amount: amt,
  //       type: "credit",
  //       balance: user[acno]["balance"],
  //     });

  //     return {
  //       statusCode: 200,
  //       status: true,
  //       message:
  //         amt +
  //         " Deposited Succesfully. New balance is " +
  //         user[acno]["balance"],
  //     };
  //   } else {
  //     return {
  //       statusCode: 422,
  //       status: false,
  //       message: "invalid password",
  //     };
  //   }
  // } else {
  //   return {
  //     statusCode: 422,
  //     status: false,
  //     message: "invalid user",
  //   };
  // }
};

//withdraw

const withdraw = (req, acno, password, amount) => {
  return db.User.findOne({ acno, password }).then((user) => {
    if (!user) {
      return {
        statusCode: 422,
        status: false,
        message: "invalid credentials",
      };
    }
    if (req.currentAcno != acno) {
      return {
        statusCode: 422,
        status: false,
        message: "operation denied",
      };
    } else {
      if (user.balance >= amount) {
        user.balance -= Number(amount);
        user.transaction.push({
          amount,
          type: "debit",
          balance: user.balance,
        });
        user.save();
        return {
          statusCode: 200,
          status: true,
          message:
            amount + " Debited Succesfully. New balance is " + user.balance,
        };
      } else {
        return {
          statusCode: 422,
          status: false,
          message: "insufficient balance",
        };
      }
    }
  });
  // if (acno in user) {
  //   if (pswd == user[acno]["password"]) {
  //     if (user[acno]["balance"] >= amt) {
  //       user[acno]["balance"] -= amt;
  //       user[acno]["transaction"].push({
  //         amount: amt,
  //         type: "debit",
  //         balance: user[acno]["balance"],
  //       });

  //       return {
  //         statusCode: 200,
  //         status: true,
  //         message:
  //           amt +
  //           " Debited Succesfully. New balance is " +
  //           user[acno]["balance"],
  //       };
  //     } else {
  //       return {
  //         statusCode: 422,
  //         status: false,
  //         message: "insufficient balance",
  //       };
  //     }
  //   } else {
  //     return {
  //       statusCode: 422,
  //       status: false,
  //       message: "invalid password",
  //     };
  //   }
  // } else {
  //   return {
  //     statusCode: 422,
  //     status: false,
  //     message: "invalid user",
  //   };
  // }
};

//get transaction

const getTransaction = (acno) => {
  return db.User.findOne({ acno }).then((user) => {
    if (user) {
      return {
        statusCode: 200,
        status: true,
        message: "transactions",
        transaction: user.transaction
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "invalid user",
      };
    }
  });
 
};

const deleteAcc=(acno)=>{
  return db.User.deleteOne({acno}).then((user)=>{
    if(user){
      console.log(user.de);
      return{
        statusCode: 200,
        status: true,
        message: "user deleted succesfully",
      }
    }
    else{
      return {
        statusCode: 422,
        status: false,
        message: "invalid operation",
      };

    }
  })
}



module.exports = {
  register,
  login,
  deposit,
  withdraw,
  getTransaction,
  deleteAcc
};
