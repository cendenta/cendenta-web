import { NextSeo } from 'next-seo';
import ExternalLink from "../components/ExternalLink";
import StandardLink from "../components/StandardLink";

const competencies = [
  { name: "React", link: "https://reactjs.org/"}, 
  { name: "Javascript", link: "https://www.javascript.com/"},
  { name: "Plaid", link: "https://plaid.com"}, 
  { name: "Stripe", link: "https://stripe.com"}, 
  { name: "MySQL", link: "https://www.mysql.com/"}, 
  { name: "AWS", link: "https://aws.amazon.com/"}, 
  { name: "SST", link: "https://serverless-stack.com/"}, 
  { name: "Aurora Serverless", link: "https://aws.amazon.com/rds/aurora/serverless/"}, 
  { name: "Lambda", link: "https://aws.amazon.com/lambda/"}, 
  { name: "Amplify", link: "https://aws.amazon.com/amplify/"}, 
  { name: "AppSync", link: "https://aws.amazon.com/appsync/"}, 
  { name: "Cognito", link: "https://aws.amazon.com/cognito/"}, 
  { name: "Glue", link: "https://aws.amazon.com/glue/"}, 
  { name: "NodeJS", link: "https://nodejs.org/"}, 
  { name: "GraphQL", link: "https://graphql.org/"}, 
  { name: "Material UI", link: "https://mui.com"}, 
  { name: "Sentry", link: "https://sentry.io"}, 
  { name: "NextJS", link: "https://nextjs.org/"}, 
  { name: "TailwindCSS", link: "https://tailwindcss.com/"}, 
  { name: "Typescript", link: "https://www.typescriptlang.org/"}, 
  { name: "PostgreSQL", link: "https://www.postgresql.org/"}, 
  { name: "Supabase", link: "https://supabase.com/"},
  { name: "Cypress", link: "https://www.cypress.io/" },
  { name: "Jest", link: "https://jestjs.io/" },
  { name: ".NET", link: "https://dotnet.microsoft.com" },
  { name: ".C#", link: "https://dotnet.microsoft.com/en-us/languages/csharp" },
  { name: "Solr", link: "https://solr.apache.org/" },
  { name: "SQL Server", link: "https://www.microsoft.com/en-us/sql-server/" },
  { name: "SSIS", link: "https://docs.microsoft.com/en-us/sql/integration-services/sql-server-integration-services" },
  { name: "SSRS", link: "https://docs.microsoft.com/en-us/sql/reporting-services/" },
  { name: "SSAS", link: "https://docs.microsoft.com/en-us/analysis-services/ssas-overview" },
  { name: "OLAP", link: "https://docs.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-analytical-processing" },
  { name: "Dapper", link: "https://www.learndapper.com/" },
  { name: "Azure", link: "https://azure.microsoft.com" },
  { name: "Bootstrap", link: "https://getbootstrap.com/" },
  { name: "Angular", link: "https://angular.io/" },
];

const tools = [
  { name: "Visual Studio Code", link: "https://code.visualstudio.com/" },
  { name: "Gitkraken", link: "https://www.gitkraken.com/" },
  { name: "Obsidian", link: "https://obsidian.md/" },
  { name: "DataGrip", link: "https://www.jetbrains.com/datagrip/" },
  { name: "Jira", link: "https://www.atlassian.com/software/jira" },
  { name: "Bitbucket", link: "https://www.atlassian.com/software/bitbucket" },
  { name: "Confluence", link: "https://www.atlassian.com/software/confluence" },
  { name: "Github", link: "https://github.com/" },
  { name: "Sublime Text", link: "https://www.sublimetext.com/" },
];

const TagLink = ({href, title}) => (
  <span key={title} className="
    bg-gray-300
    duration-200 
    dark:bg-gray-700
    dark:hover:bg-dark-orange
    dark:text-white
    dark:hover:text-white
    hover:bg-dark-orange
    hover:text-white
    mb-3
    mr-3 
    px-3 
    py-1 
    transition-colors 
    rounded-md 
    text-base
    text-dark-blue-gray
  ">
    <a
      href={href ?? ''}
      rel="noreferrer"
      target="_blank"
    >
      {title ?? ''}
    </a>
  </span>
);

const About = () => (
  <>
    <NextSeo
      title="About &ndash; Cendenta"
      description="Cendenta is a custom software development company."
    />
    <div className="max-w-4xl mx-auto px-6 py-6">
      <header className="mb-8">
        <h2 className="mb-5 text-xl font-bold">About Cendenta</h2>
        <div className="prose dark:prose-light">
          <p className="mb-2">My name is <ExternalLink href="https://www.linkedin.com/in/mharward1/" title="Matthew Harward" />.</p>
          <p className="mb-2">I have over 15 years of professional software and web development experience across a wide variety of industries and technology stacks. Cendenta was formed in 2018 to encapsulate my freelance and independent-contract work.</p>
          <p className="mb-2">The name originates with the concept of <ExternalLink href="https://en.wikipedia.org/wiki/Self-Reliance" title="self-reliance" /> from the philosophy of <ExternalLink href="https://en.wikipedia.org/wiki/Transcendentalism" title="transcendentalism" />.</p>
          <p className="mt-5">Please feel free to <StandardLink href="/contact" title="send me a message" underline={true}/> to discuss whether Cendenta would be a good fit for your project.</p>
        </div>  
      </header>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Competencies</h2>
        <div className="flex flex-wrap">
          {
            competencies.map(comp => 
              <TagLink 
                href={comp.link}
                key={comp.name}
                title={comp.name}
              />
            )
          }
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Tools</h2>
        <div className="flex flex-wrap">
          {
            tools.map(t => 
              <TagLink 
                href={t.link}
                key={t.name}
                title={t.name}
              />
            )
          }
        </div>
      </section>
    </div>
  </>
)

export default About
