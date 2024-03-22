import { DataTypes } from "sequelize";
import sequelize from "../utils/mysql";

export const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // 이메일 중복 방지
      validate: {
        isEmail: true, // 이메일 형식 검증
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // 생성 및 업데이트 타임스탬프 활성화
  }
);
