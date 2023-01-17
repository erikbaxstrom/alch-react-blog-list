import { useBlogs } from '../../../hooks/useBlogs';

export default function Main() {
  const blogs = useBlogs();

  return <main>{blogs.map((blog) => console.log('blog', blog))}</main>;
}
