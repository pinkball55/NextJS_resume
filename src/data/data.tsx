import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import headerBackground from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Huong Nguyen',
  description: 'Experienced Full Stack Developer specializing in custom e-commerce solutions, Shopify development, React, Next.js, and scalable web applications. Explore my portfolio to see high-performance websites tailored to your needs.',
  keywords:"Huong Nguyen, Vietnam, Full Stack Developer, Custom E-commerce Solutions, Shopify Developer, React Developer, Next.js Developer, Web Application Developer, Full Stack Web Developer Portfolio, Shopify Store Development, Scalable Web Applications, Front-End Developer, Back-End Developer, Node.js, Express, PostgreSQL, API Integration Developer, SEO-Friendly Web Development, High-Performance Websites, Custom Web Solutions, JavaScript Frameworks Developer, UX Design, UI Design"
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: headerBackground,
  name: `I'm Huong Nguyen.`,
  description: (
    <>
      <p className="prose-sm text-white sm:prose-base lg:prose-lg">
        A skilled and passionate <strong className="text-stone-100">Full Stack Web Developer</strong> with a remarkable
        ability to adopt and master trendy web development technologies and tools while crafting innovative solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      target: '_blank',
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a senior full-stack web developer with over 9 years of experience. 
  A detail-oriented developer, I excel in creating pixel-perfect, fully responsive, and user-friendly web applications. 
  A fast learner, I quickly adopts and masters trendy web development technologies and tools to stay ahead in a fast-paced industry.
  A natural problem-solver, I enjoy finding innovative solutions to complex technical issues.
  
  Beyond technical expertise, I am a collaborative team player with clear communication and teamwork. I thrive in Agile/Scrum environments and I am highly regarded for your dedication to delivering high-quality, well-tested solutions. My adaptability, passion for continuous learning, and focus on functionality and aesthetics make me an invaluable asset to any team or project. 
  `,
  aboutItems: [
    {label: 'Location', text: 'Hung Yen, Vietnam', Icon: MapIcon},
    // {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Hanoi University of Science and Technology', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Vietnamese',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Chinese',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML5, CSS3, JavaScript, Typescript',
        level: 10,
      },
      {
        name: 'React, Next.js ',
        level: 10,
      },
      {
        name: 'Shopify',
        level: 10,
      },
      {
        name: 'Bootstrap, Tailwind CSS',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'PHP',
        level: 10,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'ReactNative',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 10,
      },
    ],
  },
  {
    name: 'Database development',
    skills: [
      {
        name: 'MongoDB',
        level: 10,
      },
      {
        name: 'MySQL',
        level: 10,
      },
      {
        name: 'PostreSQL',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Kinedu',
    description: 'Baby Brain Development Web App',
    url: 'https://app.kinedu.com',
    image: porfolioImage1,
  },
  {
    title: 'Healthcare',
    description: 'Fully responsive and cross-browser compatibility',
    url: 'https://app.kinedu.com',
    image: porfolioImage2,
  },
  {
    title: 'Kinedu',
    description: 'User friendly sign up',
    url: 'https://app.kinedu.com',
    image: porfolioImage3,
  },
  {
    title: 'Kinedu',
    description:
      'A streamlined calendar appointment system designed to simplify scheduling, improve time management, and enhance productivity',
    url: 'https://app.kinedu.com',
    image: porfolioImage6,
  },
  {
    title: 'Kinedu',
    description: 'User-friendly UX/UI',
    url: 'https://app.kinedu.com',
    image: porfolioImage4,
  },
  {
    title: 'Kinedu',
    description: 'An intuitive list management to help organize tasks and prioritize efficiently.',
    url: 'https://app.kinedu.com',
    image: porfolioImage5,
  },
  {
    title: 'Hoozing',
    description: 'Real-Estate Marketing Platform for Agents, Buyers, and Renters',
    url: 'https://hoozing.com/en',
    image: porfolioImage14,
  },
  {
    title: 'Hoozing',
    description: 'Powerful, extensive search solutions for better results and efficiency.',
    url: 'https://hoozing.com/en',
    image: porfolioImage15,
  },

  {
    title: 'Hoozing',
    description: 'Enabling quick, and seamless transactions for buyers and sellers.',
    url: 'https://hoozing.com/en',
    image: porfolioImage16,
  },
  {
    title: 'Worbler AI',
    description: 'AI-powered platform | Video/Audio Converter',
    url: 'https://worbler.ai',
    image: porfolioImage11,
  },
  {
    title: 'Elephantstock',
    description:
      'A user-friendly UI that allows customers to easily view and proceed with their purchases for a seamless shopping experience',
    url: 'https://www.elephantstock.com/',
    image: porfolioImage13,
  },
  {
    title: 'Escape Outdoors',
    description: 'Outdoor sports store | Fully responsive e-commerce website',
    url: 'https://www.escapeoutdoors.com',
    image: porfolioImage7,
  },
  {
    title: 'Escape Outdoors',
    description:
      'A dynamic product list page that allows easy browsing and filtering of items for a smooth shopping experience.',
    url: 'https://www.escapeoutdoors.com',
    image: porfolioImage8,
  },
  {
    title: 'Escape Outdoors',
    description:
      'A comprehensive product detail page that provides essential information, and easy navigation to help customers make informed purchasing decisions.',
    url: 'https://www.escapeoutdoors.com',
    image: porfolioImage9,
  },
  {
    title: 'Escape Outdoors',
    description: 'A clean, intuitive website with clear navigation and seamless checkout.',
    url: 'https://www.escapeoutdoors.com',
    image: porfolioImage10,
  },
  {
    title: 'Book Hotels Website',
    description:
      'Tripvillas is a website that allows travelers to book Holiday Homes and Homestays instead of Hotels and Resorts.',
    url: 'https://www.tripvillas.com/',
    image: porfolioImage12,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2014',
    location: 'Hanoi, Vietnam',
    title: 'Hanoi University of Science and Technology',
    content: <p>Computer Science</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2021 - September 2024',
    location: 'Pantheon Inc',
    title: 'Senior Full-Stack Web Developer',
    content: (
      <ul>
        <li>
          <p> - Worked on fully responsive web applications using React.js, Next.js, Node.js, AWS, and HighCharts.</p>
        </li>
        <li>
          <p>
            {' '}
            - Integrated third-party APIs to enhance web application functionality, resulting in a 50% increase in user
            satisfaction and engagement.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Debugged and resolved issues based on a priority system, leading to a 30% decrease in application downtime
            and improved reliability.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Optimized the database queries and data structures, reducing load times, which significantly enhanced user
            retention rates.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Analyzed user behavior patterns using Google Analytics and Adobe Analytics, resulting in a 10% increase in
            website conversion rates.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Maintained consistent and clear communication with team members and stakeholders, ensuring alignment and
            understanding throughout the project lifecycle.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Collaborated on project management efforts using Agile/Scrum methodologies, leading to on-time delivery of
            features that aligned with key business objectives and enhanced client relationships.
          </p>
        </li>
      </ul>
    ),
  },
  {
    date: 'March 2020 - October 2021',
    location: 'Jivox',
    title: 'Senior Full-Stack Developer',
    content: (
      <ul>
        <li>
          <p>
            {' '}
            - Delivered engaging and visually compelling web designs with a user-friendly UI that was cross-browser
            compatible and mobile responsive.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Migrated hosting servers with detailed plans spanning simulating, testing, and setting up complex
            configurations.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Streamlined a development process that improved efficiency and ensured high quality and easy-to-manage end
            products.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Engineered optimized RESTful APIs that improved data retrieval speeds by 20%, significantly reducing load
            times for clients and contributing to overall customer satisfaction.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Collaborated with cross-functional teams to integrate advanced analytics tools, empowering clients to
            leverage data insights, resulting in revenue growth of 30% for their campaigns.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Worked extensively with CMS platforms, including Sitefinity, WordPress, and Drupal, delivering customized,
            scalable solutions for diverse clients.
          </p>
        </li>
        <li>
          <p> - Integrated AWS services including AWS SES, CloudFront, S3, ACM, EC2, and etc.</p>
        </li>
      </ul>
    ),
  },
  {
    date: 'September 2018 - February 2019',
    location: 'Miles IT',
    title: 'Senior SQL/Backend Developer',
    content: (
      <ul>
        <li>
          <p> - Debugged errors and problems within databases and applications.</p>
        </li>
        <li>
          <p>
            {' '}
            - Developed and optimized SQL queries to process data sets, leading to a 25% increase in query performance
            and significantly improving reporting accuracy.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Utilized performance tuning techniques on SQL databases, achieving optimal resource utilization and
            boosting overall application performance metrics by 10% within three months.
          </p>
        </li>
      </ul>
    ),
  },
  {
    date: 'March 2017 - May 2019',
    location: 'Applancer',
    title: 'Remote Senior Full-Stack Developer',
    content: (
      <ul>
        <li>
          <p>
            {' '}
            - Spearheaded the development of a complex web application, reducing load time by 10% and enhancing user
            experience, which led to an increase in customer satisfaction ratings by 30%.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Engineered robust RESTful APIs that facilitated seamless integration with third-party services, resulting
            in more than 10% boost in operational efficiency.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Implemented advanced data security measures across all applications, which decreased vulnerabilities by
            20% and safeguarded customer information against potential threats.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Optimized front-end architecture using Next.js, improving app responsiveness by 30% and driving an
            increase in end-user engagement metrics by 40%.
          </p>
        </li>
        <li>
          <p> - Performed programming and content edits for existing web applications.</p>
        </li>
      </ul>
    ),
  },
  {
    date: 'October 2014 - November 2016',
    location: 'VNG Corporation',
    title: 'Frontend Web Developer',
    content: (
      <ul>
        <li>
          <p> - Developed responsive web applications using HTML, CSS, and JavaScript to improve user experience.</p>
        </li>
        <li>
          <p>
            {' '}
            - Applied responsive design principles to ensure consistency across different devices and screen sizes.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Collaborated with UX/UI designers to implement innovative solutions that increased customer satisfaction
            ratings by 25 %, directly contributing to the company's revenue growth.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Reduced page load times by 0.3seconds through effective optimization techniques, resulting in a 20 %
            decrease in bounce rates across multiple projects.
          </p>
        </li>
        <li>
          <p>
            {' '}
            - Led the initiative to migrate legacy web systems to modern frameworks, successfully completing the
            transition ahead of schedule and improving maintainability by 25 %.
          </p>
        </li>
        <li>
          <p> - Participated in sprint planning meetings to prioritize tasks and set project milestones.</p>
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Brian H.',
      text: 'Working with this individual has been an exceptional experience. Her ability to tackle challenges with innovative solutions and maintain a positive attitude is truly inspiring. Highly recommend!',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jeff D.',
      text: 'An excellent full-stack developer with strong expertise in front-end and back-end technologies, consistently delivering high-quality, efficient, and scalable solutions.',
    },
    {
      name: 'David S.',
      text: 'Perfect job, code completed fast and everything works perfectly. Highly recommended!',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact me.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'nguyengiatueman@gmail.com',
      href: 'nguyengiatueman@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Hung Yen, Vietnam',
    //   href: 'https://www.google.ca/maps/place/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'webappguru',
    //   href: 'https://github.com/webappguru',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
