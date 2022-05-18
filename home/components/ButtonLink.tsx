import Link from 'next/link';

function ButtonLink({href, title}) {
  return (
    <Link href={href}>
        <a className="inline-block bg-med-blue-gray py-2 px-4 border border-transparent rounded-md text-base font-bold text-light-gray dark:text-dark-blue-gray hover:bg-opacity-75 hover:bg-dark-orange dark:bg-gray-200 dark:hover:bg-dark-orange">
          {title}
        </a>
    </Link>
  )
};

export default ButtonLink;