import User from "../model/user.js";

export const getUser = async (request, response) => {
  try {
    let user = await User.find();
    response.json(user);
  } catch (error) {
    response.json(error);
  }
};

export const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.json(newUser);
  } catch (error) {
    response.json(error);
  }
};

export const getUserById = async (request, response) => {
  const id = request.params.id;

  try {
    let user = await User.findById(id);
    response.json(user);
  } catch (error) {
    response.json(error);
  }
};

export const editUser = async (request, response) => {
  const user = request.body;
  const editUser = new User(user);

  try {
    await User.updateOne({ id: request.params.id }, editUser);
    response.json("User updated successfully!");
  } catch (error) {
    response.json(error);
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ id: request.params.id });
    response.json("User deleted successfully!");
  } catch (error) {
    response.json(error);
  }
};
