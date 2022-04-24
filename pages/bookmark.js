// import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { useEffect } from "react";
import { sdk } from "../utils/web-init";

export default function Bookmarks() {
  //deletes our bookmarks
  const handleDelete =  () => {
    let promise = sdk.database.deleteDocument("BigSamCollection", "BigsamDoc");

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("item have been deleted successfully");
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  const listBookmarks = () => {
    let promise = sdk.database.listDocuments("BigSamCollection");

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("bookmarks list");
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  useEffect(() => {
    listBookmarks();
  }, []);
  return (
    <>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        {/* <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt="" /> */}
        <div className="post-body">
          {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join("posts"));

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const markdownWithMeta = fs.readFileSync(
//     path.join("posts", slug + ".md"),
//     "utf-8"
//   );

//   const { data: frontmatter, content } = matter(markdownWithMeta);

//   return {
//     props: {
//       frontmatter,
//       slug,
//       content,
//     },
//   };
// }
