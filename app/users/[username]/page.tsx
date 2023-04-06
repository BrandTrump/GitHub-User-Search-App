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
          <div>
            <p>{data.location ? data.location : "Not Available"}</p>
          </div>
          <div>
            <p>
              {data.twitter_username ? data.twitter_username : "Not Available"}
            </p>
          </div>
          <div>
            <Link href={data.html_url} className={styles.user_profile_link}>
              {data.html_url}
            </Link>
          </div>
          <div>
            <p>{data.company ? data.company : "Not Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
