const db = require("./db");
const ObjectId = require("mongodb").ObjectId;

const register = (username, password) => {
  return db.User.findOne({ username }).then((user) => {
    if (user) {
      return {
        statusCode: 422,
        status: false,
        message: "user already exists... Please Login",
      };
    } else {
      const newUser = new db.User({
        username,
        password,
        todos: [],
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

const login = (username, password) => {
  return db.User.findOne({ username, password }).then((user) => {
    if (user) {
      return {
        statusCode: 200,
        status: true,
        message: "succesfully Logged In",
        username: username,
        id: user._id,
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

const addTodo = (username, todo, date) => {
  return db.User.findOne({ username }).then((user) => {
    if (user) {
      user.todos.push({
        todo,
        date,
      });
      user.save();
      return {
        statusCode: 200,
        status: true,
        message: "succesfully Added",
        date,
        todo,
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "Invalid  ",
      };
    }
  });
};

const getTodos = (objId) => {
  return db.User.findOne({ _id: ObjectId(objId) }).then((user) => {
    if (user) {
      return {
        statusCode: 200,
        status: true,
        message: "transactions",
        todos: user.todos,
        id: user._id,
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

const todoDelete = (objId, todoId) => {
  return db.User.updateOne(
    { _id: ObjectId(objId) },
    { $pull: { todos: { _id: todoId } } }
  )
  .then((result) => {
    // console.log(result);

    if ((result = true)) {
      return {
        statusCode: 200,
        status: true,
        message: "deleted",
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "not deleted",
      };
    }
  });
};
const todoUpdate = (objId, todoId, updatedTodo, updatedDate) => {
  return db.User.updateOne(
    { _id: ObjectId(objId), "todos._id": ObjectId(todoId) },
    { $set: { "todos.$.todo": updatedTodo, "todos.$.date": updatedDate } }
  ).then((result) => {
    if ((result = true)) {
      return {
        statusCode: 200,
        status: true,
        message: "updated",
      };
    } else {
      return {
        statusCode: 422,
        status: false,
        message: "not deleted",
      };
    }
  });
};

const todoFind = (objId, myDate) => {
  return db.User
    .findOne({
      _id: ObjectId(objId),
      "todos.date":myDate,
    })
    .then((result) => {
      // console.log(result);
      if (result) {
        return {
          statusCode: 200,
          status: true,
          message: "finded",
          result,
        };
      } else {
        return {
          statusCode: 422,
          status: false,
          message: "not finded",
        };
      }
    });
};

module.exports = {
  register,
  login,
  addTodo,
  getTodos,
  todoDelete,
  todoUpdate,
  todoFind,
};
