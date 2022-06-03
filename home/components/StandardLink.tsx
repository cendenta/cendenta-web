import Link from 'next/link';

function StandardLink({href, title, underline}) {
    return (
    <Link href={href ?? ''}>
        <a className={`          
          dark:text-white
          dark:decoration-solid
          dark:hover:text-dark-orange
          hover:text-dark-orange 
          text-base 
          text-med-gray 
          ${underline ? 'underline decoration-dotted' : ''}`}>
          {title ?? ''}
        </a>
    </Link>
    )
};

export default StandardLink;