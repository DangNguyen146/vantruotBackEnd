const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    taiKhoan: {
      type: String,
      required: true,
      trim: true,
    },
    matKhau: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    soDt: {
      type: String,
      required: true,
      trim: true,
    },
    hoTen: {
      type: String,
      required: true,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
// generate token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "thisisme");

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
// get public profile of user
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
// login
userSchema.statics.findByCredentials = async (taiKhoan, password) => {
  const user = await User.findOne({ taiKhoan });
  if (!user) {
    throw new Error("Unable to login!");
  }
  const isMatch = await bcrypt.compare(password, user.matKhau);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

//find email
userSchema.statics.findByEmail = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to find email");
  }
  return true;
};
// hash password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("matKhau")) {
    user.matKhau = await bcrypt.hash(user.matKhau, 8);
  }
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
