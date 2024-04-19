const prisma = require("../../configs/config");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (data) => {
    const user = await prisma.user.create({
      data: {
        ...data,
        password: bcrypt.hashSync(data.password, 10),
      },
    });
    return user;
  },

  getUsers: async () => {
    const users = await prisma.user.findMany();
    return users;
  },

  getUserById: async (id) => {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return user;
  },

  updateUser: async (id, data) => {
    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
        password: bcrypt.hashSync(data.password, 10),
      },
    });
    return user;
  },

  deleteUser: async (id) => {
    const user = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    return user;
  },
};
