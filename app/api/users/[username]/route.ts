import { NextResponse } from "next/server";
import { Octokit } from "octokit";

type Props = {
  params: { username: string };
};

export async function GET(request: Request, { params: { username } }: Props) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const user = await octokit.request(`/users/${username}`, {
    username: "USERNAME",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const userInfo = user.data;
  return NextResponse.json(userInfo);
}
