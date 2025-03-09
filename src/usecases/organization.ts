import { Corp } from '@/entities/organization';
import { useGetRequest } from '@/utils/api';
import { useQueryClient } from '@tanstack/react-query';

export const useGetCorporateOptions = () => {
  const { data: corpList, isLoading } = useGetRequest<Corp[]>(
    ['corporation'],
    '/company/corp/list'
  );

  const corpOptions = (corpList ?? []).map((corp) => ({
    value: corp.c_id,
    label: corp.name,
  }));

  return { corpOptions, isLoading };
};
