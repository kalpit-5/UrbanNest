import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user and save it to the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User created sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create User" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if the user exist
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // generate a cookie token and send it to the user
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successfull" });
};
