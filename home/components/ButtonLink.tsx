import Link from 'next/link';

function ButtonLink({href, title}) {
  return (
    <Link href={href ?? ''}>
        <a className="
          bg-med-blue-gray 
          border 
          border-transparent 
          dark:bg-gray-400 
          dark:hover:bg-dark-orange
          font-bold 
          hover:bg-dark-orange 
          inline-block 
          px-4 
          py-2 
          rounded-md 
          text-white 
        ">
          {title ?? ''}
        </a>
    </Link>
  )
};

export default ButtonLink;