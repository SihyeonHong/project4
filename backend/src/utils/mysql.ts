import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false, // 콘솔에 SQL 로그를 표시하지 않음
});

export default sequelize;

export function isQueryError(error) {
  // Sequelize의 에러 유형을 검사하거나, 에러 코드를 확인하는 등의 로직 구현
  return error instanceof DatabaseError; // 예시로, Sequelize의 일반적인 데이터베이스 에러 클래스를 사용
}
