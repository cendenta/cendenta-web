import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import Thumbnail from '../../components/Thumbnail';
import { IPost } from '../../types/post';
import { SITE_DESCRIPTION, SITE_NAME } from '../../utils/constants';
import { getAllPosts, getPost } from '../../utils/mdxUtils';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const components = {
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  //const ogImage = SITE_URL + frontMatter.thumbnail;

  return (
    <div className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900 items-start w-full max-w-2xl mx-auto mb-16">
      <NextSeo
        title={`${frontMatter.title} – ${SITE_NAME}`}
        description={SITE_DESCRIPTION}
      />
      <article className="w-full mt-4 prose dark:prose-light max-w-none">
        <div className="mb-4">
          <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
        </div>

        <h1>{frontMatter.title}</h1>

        <p>{frontMatter.description}</p>

        <MDXRemote {...source} components={components} />
      </article>
    </div>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
