import Post from "@/Post";
import "@/styles/styles.css";
import WLogo from "@/assets/webpack-logo.png";

const post = new Post("пост 2", WLogo);
console.log("hello", post, post.toString());
