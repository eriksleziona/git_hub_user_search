import React from "react";

export interface UserGitHubApi {
  avatar_url: string;
  bio: null;
  blog: string;
  company: null;
  created_at: Date;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: Date;
  url: string;
}

export type AppContextType = {
  isDark: boolean;
  userName: string | null;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
