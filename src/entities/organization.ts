export type Corp = {
  c_id: number;
  name: string;
  sub_teams: number[];
  is_active: boolean;
  is_master: boolean;
};

export type CorpDetail = {
  c_id: number;
  name: string;
  sub_teams: number[]; // t_id
  hr_team: number;
  is_active: boolean;
};

export type TeamDetail = {
  t_id: number;
  name: string;
  corporation: CorpDetail;
  sub_teams: SubTeam[];
  parent_teams: number[];
  team_leader: number;
  members: Member[];
  member_count: number;
  is_active: boolean;
  created_at: string;
  deleted_at: string | null;
};
export type SubTeam = {
  corporation: number; // c_id
  is_active: boolean;
  name: string;
  t_id: number;
};
export type Member = {
  p_id: number;
  name: string;
  emails: string[];
  phone_number: string;
  corporations: number[]; // c_id
  teams: number[]; // t_id
  roles: Role[];
};

export type Role = {
  t_id: number;
  r_id: number;
  role: string; // 부서장, 팀원
};

export type UnclassifiedPerson = {
  p_id: number;
  name: string;
  emails: string[];
  phone_number: string;
  corporations: number[]; // c_id
  teams: number[]; // t_id
  roles: Role[];
};

export type SearchTeam = {
  t_id: number;
  name: string;
  corporation: number; // c_id
  sub_teams: number[];
  is_active: boolean;
};
