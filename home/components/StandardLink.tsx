import Link from 'next/link';

function StandardLink({href, title}) {
    return (
    <Link href={href ?? ''}>
        <a className="text-base text-med-gray hover:text-dark-orange dark:text-white dark:hover:text-dark-orange">
          {title ?? ''}
        </a>
    </Link>
    )
};

export default StandardLink;