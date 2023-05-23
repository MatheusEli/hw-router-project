import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostsRecomendados from 'componentes/PostsRecomendados';
import NaoEcontrada from 'paginas/NaoEcontrada';

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  if(!post){
    return <NaoEcontrada />
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
              </PostModelo>

              <PostsRecomendados currentPostId={post.id} />
            </>
          }
        />
      </Route>
    </Routes>
  );
}
