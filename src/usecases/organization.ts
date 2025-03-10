import {
  Corp,
  CorpDetail,
  TeamDetail,
  UnclassifiedPerson,
} from '@/entities/organization';
import { useGetRequest, useGetRequests } from '@/utils/api';

export const useGetCorporateOptions = () => {
  const { data: corpList, isLoading } = useGetRequest<Corp[]>(
    ['corporations'],
    '/company/corp/list'
  );

  const corpOptions = (corpList ?? []).map((corp) => ({
    value: corp.c_id,
    label: corp.name,
  }));

  return { corpOptions, isLoading };
};

export const useGetTeamListInCorp = (cId: number) => {
  const {
    data: corpDetail,
    isLoading: corpLoading,
    isError: corpError,
  } = useGetRequest<CorpDetail>(['corporation', cId], `/company/corp/${cId}`);
  const teamList = useGetRequests<TeamDetail>(
    corpDetail?.sub_teams.map((tId) => ({
      queryKey: ['team', tId],
      endpoint: `/company/team/${tId}`,
    })) ?? []
  );

  const isLoading = corpLoading || teamList.some((query) => query.isLoading);
  const isError = corpError || teamList.some((query) => query.isError);

  //id, name, sub_teams 식으로 가공
  const formattedTeamList = teamList
    .filter((team) => team.isSuccess)
    .map((team) => ({
      tId: team.data.t_id,
      name: team.data.name,
      sub_teams: team.data.sub_teams,
    }));

  return {
    teamList: formattedTeamList,
    isLoading,
    isError,
  };
};

export const useGetTeamDetail = (tId: number) => {
  const {
    data: teamDetail,
    isSuccess,
    isLoading: isTeamLoading,
    isError,
  } = useGetRequest<TeamDetail>(['team', tId], `/company/team/${tId}`);

  if (isSuccess) {
    return {
      teamDetail,
      isSuccess,
      isTeamLoading,
      isError,
    };
  }
  return {
    teamDetail,
    isSuccess,
    isTeamLoading,
    isError,
  };
};

export const useGetUnclassifiedGroup = () => {
  const { data, isLoading: isUnclassifiedLoading } = useGetRequest<
    UnclassifiedPerson[]
  >(['corporation', 'unclassified'], '/company/unclassified/list');

  return { unclassifiedGroup: data, isUnclassifiedLoading };
};
