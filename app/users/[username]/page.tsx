"use client";
import useSWR from "swr";
import styles from "@/styles/UserCard.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { username: string };
};

function UserPage({ params: { username } }: Props) {
  const fetchUser = () =>
    fetch(`/api/users/${username}`).then((res) => res.json());
  const { data, isLoading } = useSWR("user", fetchUser);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={styles.card_container}>
      <div>
        <Image
          src={data.avatar_url}
          alt="profile pic"
          width={90}
          height={90}
          className={styles.user_image}
        />
      </div>
      <div className={styles.user_details_container}>
        <div className={styles.user_info}>
          <div className={styles.user_name_info}>
            <h1>{data.name}</h1>
            <h2>@{data.login}</h2>
            <h3>{data.bio ? data.bio : "This profile has no bio"}</h3>
          </div>
          <h3>{data.created_at}</h3>
        </div>

        <div className={styles.stats_container}>
          <div>
            <h2>Reops</h2>
            <h1>{data.public_repos}</h1>
          </div>
          <div>
            <h2>Followers</h2>
            <h1>{data.followers}</h1>
          </div>
          <div>
            <h2>Following</h2>
            <h1>{data.following}</h1>
          </div>
        </div>

        <div className={styles.user_links}>
          <div className={styles.user_stat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>{data.location ? data.location : "Not Available"}</p>
          </div>

          <div className={styles.user_stat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <p>
              {data.twitter_username ? data.twitter_username : "Not Available"}
            </p>
          </div>
          <div className={styles.user_stat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>

            <Link href={data.html_url} className={styles.user_profile_link}>
              {data.html_url}
            </Link>
          </div>
          <div className={styles.user_stat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>

            <p>{data.company ? data.company : "Not Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
