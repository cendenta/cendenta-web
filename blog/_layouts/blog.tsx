import Meta from '../components/Meta';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const BlogLayout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        {/* <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {pageTitle}
        </h1> */}
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
      <div className="self-center prose dark:prose-invert">
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  );
};

export default BlogLayout;
