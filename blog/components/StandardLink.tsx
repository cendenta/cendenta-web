import NextLink from "next/link";
import PropTypes from "prop-types";

export default function StandardLink({
  ariaLabel,
  children,
  href,
  newTab,
}) {
  const isInternal = /^\/(?!\/)/.test(href);

  const classes = "text-base text-med-gray hover:text-dark-orange dark:text-white dark:hover:text-dark-orange";
  // cn(
  //   {
  //     "text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-500":
  //       !subtle,
  //     "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-gray-400":
  //       subtle,
  //     "text-sm": size === "sm",
  //     "font-semibold": !bold && !subtle,
  //     "font-bold": bold,
  //   },
  //   className
  // );

  const newTabAttributes = newTab
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  if (isInternal) {
    return (
      <NextLink href={href ?? ''}>
        <a
          className={classes}
          onClick={undefined}
          aria-label={ariaLabel}
          {...newTabAttributes}
        >
          {children ?? ''}
        </a>
      </NextLink>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...newTabAttributes}
    >
      {children}
    </a>
  );
}

StandardLink.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  subtle: PropTypes.bool,
  size: PropTypes.oneOf(["sm"]),
};

StandardLink.defaultProps = {
  subtle: false,
};
