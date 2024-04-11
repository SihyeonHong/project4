import { LoginForm } from "@/components/LoginForm";
import { useNavigate } from "react-router-dom";
import { JoinTemplateProps } from "@/pages/Join.template";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit: JoinTemplateProps["onSubmit"] = async ({
    email,
    password,
  }) => {
    // const { result } = await join({ email, password });
    // if (result === "conflict") {
    //   return alert("이미 가입된 이메일입니다.");
    // }
    // result satisfies "success"
    console.log(email, password);
    // alert("로그인 성공");
    // navigate("/notes");
  };

  return <LoginForm onSubmit={handleSubmit} />;
};
