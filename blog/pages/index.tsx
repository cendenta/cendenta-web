import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import PostCard from '../components/PostCard';
import { IPost } from '../types/post';
import { getAllPosts } from '../utils/mdxUtils';

type Props = {
  posts: IPost[];
};

const Index: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      <NextSeo
        title="Blog &ndash; Cendenta"
        description="The Cendenta blog"
      />
      <div>
        <div className="container px-6 lg:px-0 w-full max-w-2xl mx-auto mt-8 md:mt-12 mb-16">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'date',
    'thumbnail',
    'title',
    'description',
  ]);

  return { props: { posts } };
};
