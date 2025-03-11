import {
  Corp,
  CorpDetail,
  SearchTeam,
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
      sub_team_count: team.data.sub_teams.length,
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

export const useSearchTeam = (searchText: string, selectedCorp: number) => {
  const { data, isLoading: isSearchLoading } = useGetRequest<SearchTeam[]>(
    ['team', 'search', searchText],
    `/search/team?q=${searchText}`
  );
  if (!data) {
    return { teamList: [], isSearchLoading };
  }
  const teamList = data
    .filter((team) => team.corporation === selectedCorp)
    .map((team) => ({
      tId: team.t_id,
      name: team.name,
      sub_teams: team.sub_teams,
      sub_team_count: team.sub_teams.length,
    }));

  return { teamList, isSearchLoading };
};
