function ExternalLink({href, title}) {
    return (
        <a className="          
          dark:text-white
          dark:decoration-solid
          dark:hover:text-dark-orange
          hover:text-dark-orange 
          text-base 
          text-med-gray 
          underline
          decoration-dotted
        "
        href={href ?? ''}
        rel="noreferrer"
        target="_blank"
        >
          {title ?? ''}
        </a>
    )
};

export default ExternalLink;