//importing jwt
const jwt= require('jsonwebtoken')



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
  console.log("reg works");

  if (acno in user) {
    return {
      statusCode: 422,
      status: false,
      message: "user already exists... Please Login",
    };
  } else {
    user[acno] = {
      uname: name,
      acno: acno,
      password: pswd,
      balance: bal,
      transaction: [],
    };

    return {
      statusCode: 200,
      status: true,
      message: "Account Created",
    };
  }
};

//login

const login = (req,acno, pswd) => {
  if (acno in user) {
    if (pswd == user[acno]["password"]) {
      currentUser = user[acno]["uname"];

      // accountNo = acno;
      req.session.currentAcno=user[acno]["acno"];

      //token generation 
      const token=jwt.sign({currentAcno:acno},'spersecretkey123123')
      return {
        statusCode: 200,
        status: true,
        message: "Login success",
        token
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "Invalid Password ",
      };
    }
  } else {
    return {
      statusCode: 422,
      status: false,
      message: "Invalid user ",
    };
  }
};

//deposit

const deposit = (acno, pswd, amt) => {
  // if(!req.session.currentAcno){
  //   return {
  //     statusCode: 422,
  //     status: false,
  //     message: "please login",
  //   };


  // }
  // checkAcno=req.session.currentAcno
  // console.log(checkAcno);
  // if(checkAcno!=acno){
  //   return {
  //     statusCode: 422,
  //     status: false,
  //     message: "not current user",
  //   };

  // }
  if (acno in user) {
    if (pswd == user[acno]["password"]) {
      user[acno]["balance"] += Number(amt);
      user[acno]["transaction"].push({
        amount: amt,
        type: "credit",
        balance: user[acno]["balance"],
      });

      return {
        statusCode: 200,
        status: true,
        message:
          amt +
          " Deposited Succesfully. New balance is " +
          user[acno]["balance"],
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "invalid password",
      };
    }
  } else {
    return {
      statusCode: 422,
      status: false,
      message: "invalid user",
    };
  }
};

//withdraw

const withdraw=(acno, pswd, amt) => {
  if (acno in user) {
    if (pswd == user[acno]["password"]) {
      if (user[acno]["balance"]>=amt) {
        user[acno]["balance"]-=amt;
        user[acno]["transaction"].push({
          amount: amt,
          type: "debit",
          balance: user[acno]["balance"]
        })

        return {
          statusCode: 200,
          status: true,
          message:
            amt +
            " Debited Succesfully. New balance is " +
            user[acno]["balance"],
        };
      } else {
        
        return {
          statusCode: 422,
          status: false,
          message: "insufficient balance",
        };
      }
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "invalid password",
      };
    }
  } else {
    return {
      statusCode: 422,
      status: false,
      message: "invalid user",
    };
  }
};

//get transaction

const getTransaction = (acno) => {
  if (acno in user) {
    return {
      statusCode: 200,
      status: true,
      transaction: user[acno]["transaction"],
    };
  } else {
    return {
      statusCode: 422,
      status: false,
      transaction: "invalid user",
    };
  }
};

module.exports = {
  register,
  login,
  deposit,
  withdraw,
  getTransaction,
  
  

};
