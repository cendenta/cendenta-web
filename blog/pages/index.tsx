import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Thumbnail from '../components/Thumbnail';
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
        <div className="space-y-12">
          {posts.map((post) => (
            <div key={post.slug}>
              <div className="mb-4">
                <Thumbnail
                  slug={post.slug}
                  title={post.title}
                  src={post.thumbnail}
                />
              </div>

              <h2 className="text-2xl font-bold mb-4">
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>

              <p>{post.description}</p>
            </div>
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
