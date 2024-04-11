import { JoinParams } from "@/apis/requestJoin";
import { JoinForm } from "@/components/JoinForm";

export interface JoinTemplateProps {
  onSubmit: (values: JoinParams) => void | Promise<void>;
}

export const JoinTemplate = ({ onSubmit }: JoinTemplateProps) => {
  return <JoinForm onSubmit={onSubmit} />;
};
