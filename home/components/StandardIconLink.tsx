import Link from 'next/link';

function StandardIconLink({item}) {
    return (
    <Link href={item?.href ?? ''}>
      <a href={item?.href ?? ''} className="hover:text-dark-orange text-med-gray dark:text-white dark:hover:text-dark-orange">
        <span className="sr-only">{item?.name ?? ''}</span>
        <item.icon className="h-6 w-6" aria-hidden="true" />
      </a>
    </Link>
    )
};

export default StandardIconLink;