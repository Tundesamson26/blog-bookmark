import Link from "next/link";
import { useEffect } from "react";
import {sdk, createAnonymousSession} from "../utils/web-init";

export default function Post({ post }) {

  useEffect(() => {
    createAnonymousSession();
  }, []); 

  const handleBookmarks = () => {
      let promise = sdk.database.createDocument(
        "BigSamCollection",
        "unique()",
        {
          title: post.frontmatter.title,
          excerpt: post.frontmatter.excerpt,
          coverImage: post.frontmatter.cover_image,
          date: post.frontmatter.date,
        }
      );

      promise.then(
        function (response) {
          console.log(response); // Success
          alert('bookmark has been successfully saved');
        },
        function (error) {
          console.log(error); // Failure
        }
      );
  }
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn" onClick={handleBookmarks}>Bookmark</a>
      </Link>
    </div>
  );
}
