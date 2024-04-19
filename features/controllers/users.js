const userService = require("../service/users");

module.exports = {
  store: async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({
        status: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  },

  index: async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json({
        status: true,
        message: "Users retrieved successfully",
        data: users,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  },

  show: async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({
        status: true,
        message: "User retrieved successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json({
        status: true,
        message: "User updated successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  },

  destroy: async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.id);
      res.status(200).json({
        status: true,
        message: "User deleted successfully",
        data: null,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  },
};
