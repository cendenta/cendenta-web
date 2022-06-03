import cn from "classnames";
import Link from 'next/link';

function StandardLink({className, href, title, underline}) {
  const classes = cn(
    {"underline decoration-dotted": underline},
    "dark:text-white dark:decoration-solid dark:hover:text-dark-orange hover:text-dark-orange text-base text-med-gray",
    className
  );

  return (
    <Link href={href ?? ''}>
        <a className={classes}>
          {title ?? ''}
        </a>
    </Link>
  )
};

export default StandardLink;