import { useBlogs } from '../../../hooks/useBlogs';
import BlogCard from '../../../components/BlogCard/BlogCard';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
