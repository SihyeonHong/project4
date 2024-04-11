import { JoinParams, requestJoin } from "@/apis/requestJoin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

export const useJoin = () => {
  const queryClient = useQueryClient();

  const joinMutation = useMutation({
    mutationFn: async (params: JoinParams) => {
      try {
        const response = await requestJoin(params);
        return { result: "success" };
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 409) {
          return { result: "conflict" };
        }
        throw error;
      }
    },
    onSuccess: () => {
      // 성공적으로 회원가입이 완료된 후의 로직, 예를 들어 캐시된 쿼리를 무효화할 수 있음
      //   queryClient.invalidateQueries('someQueryKey');
    },
  });
  return { join: joinMutation.mutateAsync };
};
