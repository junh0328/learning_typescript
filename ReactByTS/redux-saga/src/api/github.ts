import axios from 'axios';

export async function getUserProfile(username: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`);
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}
/*
 1. 사용자에게 입력 받은 username를 바탕으로 깃허브에서 제공하는 user 검색 api를 통해 username에 해당하는 정보를 요청합니다
 2. 사전에 설정한 인터페이스인 GithubProfile을 제네릭으로 사용하여 응답받은 데이터의 타입을 지정해줍니다.
 3. 제네릭이기 때문에 GithubProfile 안에 타입이 설정된 데이터만 사용할 수 있으며, 선별적으로 사용할 수도 있습니다.
*/

export interface GithubProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

/*
1. 
사용자가 입력하는 정보를 아규먼트로 받는 함수 getUserProfile은 'username'이라는 파라미터를 통해 axios 요청을 보낼 것입니다. 
따라서 파라미터에 대한 속성 정의를 해줬습니다.

2.
axios 를 통해 깃허브에 포함되어 있는 사용자의 정보를 불러올 경우, 
API를 통해 응답된 데이터에 대한 타입도 준비해야 하므로 이를 GithubProfile이라는 인터페이스를 생성하여 담아줬습니다.

3. 
이를 제네릭으로 담아 어떤 타입이든 대응할 수 있도록 합니다.
*/
