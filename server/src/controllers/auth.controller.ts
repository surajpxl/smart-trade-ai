import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import User from "../models/User";
import { registerSchema } from "../validators/auth.validator";
import { loginSchema } from "../validators/auth.validator";
import { generateToken } from "../utils/generateToken";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // 1. Validate request
    console.log("Reached Controller file")
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { name, email, password, role } = result.data;

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "User already exists",
      });
      return;
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Save user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // 5. Send response (never return password)
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const loginUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Validate request
    const result = loginSchema.safeParse(req.body);

    if(!result.success) {
      res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const {email, password} = result.data;

    //Find user
    const user = await User.findOne({email});

    if(!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if(!isMatch){
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      })
      return;
    }

    // Generate JWT
    const token = generateToken(
      user._id.toString(),
      user.role
    )

    // Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user:{
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}