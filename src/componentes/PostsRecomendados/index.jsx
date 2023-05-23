import PostCard from "componentes/PostCard";
import posts from "json/posts.json";
import styles from "./PostsRecomendados.module.css";

export default function PostsRecomendados({ currentPostId }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.tituloOutrosPosts}>
        Outros posts que você pode gostar:
      </h2>

      <div className={styles.postsContainer}>
        {posts
          .filter((post) => post.id !== currentPostId)
          .sort((a, b) => b.id - a.id)
          .slice(0, 4)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
}
