import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileCode2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const profileImage = "/images/my-profile-picture.jpg";

const resumeFile = {
  name: "Resume_Nuttanon_Pakawinyu_Software_Developer.pdf",
  path: "/documents/Resume_Nuttanon_Pakawinyu_Software_Developer.pdf",
};

const skillGroups = [
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Middleware",
      "MVC",
      "Service Layer",
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    items: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Prisma",
      "Schema Design",
      "Query Logic",
    ],
  },
  {
    title: "Frontend / Core Web",
    icon: <LayoutDashboard className="h-5 w-5" />,
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Axios"],
  },
  {
    title: "Tools & Workflow",
    icon: <ShieldCheck className="h-5 w-5" />,
    items: ["Git", "GitHub", "Postman", "Render", "Vercel", "REST Client"],
  },
];

const projects = [
  {
    id: "01",
    title: "Football Boots E-commerce System",
    type: "Personal Project",
    summary:
      "A backend-focused e-commerce system built to demonstrate practical business logic, inventory management, and maintainable project structure.",
    highlights: [
      "Designed backend architecture with routes, controllers, services, and models",
      "Implemented inventory logic including stock check, reserve stock, release stock, deduct stock, and return stock",
      "Built order flow around real business rules such as payment-dependent stock deduction",
      "Added JWT authentication and role-based access control for protected operations",
      "Focused on maintainable code structure and backend-heavy problem solving"
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    role: "Designed and implemented the core backend architecture and business logic, with strong focus on inventory and order flow.",
    githubUrl: "https://github.com/Tomzz11/football-boots-ecommerce-system-frontend",
    liveUrl: "https://football-boots-ecommerce-system-fro.vercel.app",
  },
  {
    id: "02",
    title: "Pet Shop Management System",
    type: "Group Project",
    summary:
    "A MERN stack group project where I focused mainly on backend development, API logic, Git workflow, and project integration.",
  highlights: [
    "Worked mainly on backend implementation and practical API flow",
    "Contributed to authentication, data modeling, and business logic",
    "Acted as a major backend contributor in a 5-person team",
    "Helped manage repository flow, pull requests, merge handling, and deployment coordination",
    "Balanced project scope to keep delivery realistic within team constraints"
  ],
  stack: ["MongoDB", "Express.js", "React", "Node.js"],
  role: "Backend-focused contributor and primary Git workflow maintainer for the group project.",
  githubUrl: "https://github.com/Tomzz11/pet-shop-react",
  liveUrl: "https://jsd-project-group-2.vercel.app",
  },
];

const bootcampCertificates = [
  {
    title: "Junior Software Developer Program",
    issuer: "Generation Thailand",
    description:
      "Bootcamp certificate covering software development fundamentals, collaborative project work, Git workflow, and hands-on MERN stack practice.",
    badge: "JSD",
    filePath: "/certificates/bootcamp/cert_jsd_25_nuttanon.pdf",
  },
];
  
const codecademyCertificates = [
  {
    title: "Fundamentals of Cybersecurity",
    issuer: "Codecademy",
    description:
      "Introduces core cybersecurity concepts such as common threats, security principles, and foundational defensive thinking for software systems.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-fundamentals-of-cybersecurity.pdf",
  },
  {
    title: "Learn to Prevent Cross-Site Scripting with Node.js",
    issuer: "Codecademy",
    description:
      "Focused on understanding XSS risks and applying safer practices in Node.js applications to reduce frontend and backend security vulnerabilities.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-prevent-xss-nodejs.pdf",
  },
  {
    title: "Defending Node Applications from SQL Injection, XSS, & CSRF Attacks",
    issuer: "Codecademy",
    description:
      "Covers practical defensive techniques for protecting Node.js applications from common web security attacks including SQL injection, XSS, and CSRF.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-defending-node-applications.pdf",
  },
  {
    title: "Learn to Prevent SQL Injections with Node.js",
    issuer: "Codecademy",
    description:
      "Focused on understanding SQL injection risks and applying safer backend coding practices to protect database-driven applications.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-prevent-sql-injections-nodejs.pdf",
  },
  {
    title: "How to Transform Tables with SQL",
    issuer: "Codecademy",
    description:
      "Covers practical SQL techniques for transforming, shaping, and working with table data in structured database workflows.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-transform-tables-with-sql.pdf",
  },
  {
    title: "Design Databases With PostgreSQL",
    issuer: "Codecademy",
    description:
      "Introduces database design concepts with PostgreSQL, including schema thinking, table relationships, and structured data modeling.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-design-databases-postgresql.pdf",
  },
  {
    title: "Analyze Data with SQL",
    issuer: "Codecademy",
    description:
      "Focused on querying, analyzing, and interpreting structured data with SQL to support practical backend and database-related tasks.",
    badge: "CC",
    filePath: "/certificates/codecademy/cert-analyze-data-with-sql.pdf",
  },
];


const contactInfo = {
  email: "Nuttanon_P@outlook.com",
  phone: "065-169-3945",
  githubLabel: "https://github.com/Tomzz11",
  githubUrl: "https://github.com/Tomzz11",
  linkedinLabel: "https://www.linkedin.com/in/nuttanon-pakawinyu-3b95b23bb/",
  linkedinUrl: "https://www.linkedin.com/in/nuttanon-pakawinyu-3b95b23bb/",  
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-5xl"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </motion.div>
  );
}

function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[18%] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[30%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
    </div>
  );
}

export default function PortfolioReactApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = useMemo(
    () => [
      { label: "Projects", value: "2 Featured" },
      { label: "Backend Focus", value: "Strong" },
      { label: "Bootcamp", value: "JSD" },
      { label: "Career Pivot", value: "Freight → Dev" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400/30 selection:text-white">
      <div className="relative isolate overflow-hidden">
        <GlowBackground />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
            <a
              href="#hero"
              className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300"
            >
              Nuttanon Pakawinyu (Tom)
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex rounded-2xl border border-white/10 p-2 text-slate-200 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <main>
          <section
            id="hero"
             className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-10 lg:px-8 lg:pt-12"
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                  Available for software developer opportunities
                </div>

                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-7xl lg:text-6xl">
                  Software Developer 
                  <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                    With Backend Focus
                  </span>
                </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Backend-focused developer transitioning from freight forwarding into software development.
                Interested in API design, database logic, backend workflows, and maintainable architecture.
              </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                  >
                    View Projects
                  </a>
                  <a
                    href={resumeFile.path}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                  >
                    View Resume
                  </a>
                   <a
                    href="#certificates"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                  >
                    View Certificates
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + index * 0.08,
                        duration: 0.45,
                      }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                    >
                      <div className="text-lg font-bold text-white whitespace-nowrap">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute-inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-emerald-400/10 blur-2xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="flex flex-col items-center border-b border-white/10 pb-6 text-center">
                    <div className="h-100 w-60 overflow-hidden rounded-full border-4 border-cyan-400/20 bg-slate-800 shadow-lg shadow-cyan-500/10">
                      <img
                        src={profileImage}
                        alt="my profile"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      Tom
                    </h3>
                    <p className="mt-2 text-sm text-cyan-200">
                      Software Developer
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        icon: <Server className="h-5 w-5" />,
                        title: "Backend Logic",
                        text: "Focused on APIs, business rules, order flow, and service architecture.",
                      },
                      {
                        icon: <Database className="h-5 w-5" />,
                        title: "Database Thinking",
                        text: "Interested in schema design, data consistency, and practical backend workflows.",
                      },
                      {
                        icon: <FileCode2 className="h-5 w-5" />,
                        title: "Maintainable Code",
                        text: "Prefer structured projects that are easier to read, extend, and explain.",
                      },
                      {
                        icon: <Award className="h-5 w-5" />,
                        title: "Consistent Learning",
                        text: "Strengthening fundamentals through projects, bootcamp work, self-study, and certificates.",
                      },
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -2 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-300">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              Scroll to explore
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </motion.a>
          </section>

          <section
            id="about"
            className="mx-auto max-w-7xl px-4 py-15 md:px-6 lg:px-8"
          >
            <SectionTitle
              eyebrow="About"
              title="A developer who prefers logic, structure, and real software flow"
              description="I am most motivated by understanding how systems work behind the scenes. I enjoy backend-heavy work such as API design, backend flows, authentication, database logic, testing flow, and code organization that stays maintainable over time."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <User className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Professional Summary
                  </h3>
                </div>

                <div className="mt-5 space-y-4 text-slate-300 leading-7">
                  <p>
                    I am a backend-focused developer transitioning into software development after 6+ years in logistics and freight forwarding. 
                    My portfolio highlights practical software thinking, not just screens or UI.
                  </p>
                  <p>
                    I especially like projects where I can explain the logic
                    clearly what happens when an order is created, when stock
                    should be reserved, when stock should be deducted after
                    payment, how protected routes work, and how code should be
                    structured so the next developer can understand it.
                  </p>
                  <p>
                    I completed the Junior Software Developer Program at
                    Generation Thailand and continue strengthening my
                    fundamentals through self-study, repetition, personal
                    projects, and Codecademy certificates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-4"
              >
                {[
                  [
                    "Preferred Direction",
                    "Software Developer / Backend Developer",
                  ],
                  [
                    "Core Interest",
                    "Backend systems, API flow, database logic, inventory workflow",
                  ],
                  [
                    "Learning Style",
                    "Hands-on practice, repetition, project-based learning",
                  ],
                  [
                    "Background",
                    "Career transition from freight forwarding to software development",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-base font-medium text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <section
            id="skills"
            className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8"
          >
            <SectionTitle
              eyebrow="Skills"
              title="Technical areas I want employers to notice"
              description="This section is intentionally organized to show backend-first strengths while still reflecting enough frontend and tooling knowledge to collaborate and deliver full projects."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8"
          >
            <SectionTitle
              eyebrow="Projects"
              title="Projects that show software thinking, not only UI"
              description="These projects are presented to highlight structure, responsibilities, business logic, and collaboration. That is the main message I want the portfolio to communicate."
            />

            <div className="mt-10 space-y-6">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ delay: index * 0.04 }}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                            Project {project.id}
                          </p>
                          <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-400">
                            {project.type}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300">
                          <Briefcase className="h-6 w-6" />
                        </div>
                      </div>

                      <p className="mt-6 leading-7 text-slate-300">
                        {project.summary}
                      </p>

                      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                        <p className="text-sm text-slate-400">My Role</p>
                        <p className="mt-2 text-sm leading-6 text-white">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <div className="p-7">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Key Contributions
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex gap-3 text-slate-300">
                              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                              <span className="leading-7">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white">
                          Tech Stack
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                          <GithubIcon className="h-4 w-4" />
                          GitHub
                        </a>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

        <section
            id="certificates"
            className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8"
          >
            <SectionTitle
              eyebrow="Certificates"
              title="Certificates that support the portfolio"
              description="These certificates support the project work by showing formal learning and continued self-development."
            />

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white">Bootcamp Certificate</h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {bootcampCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-3xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 px-4 py-3 text-sm font-bold tracking-[0.2em] text-cyan-100">
                      {certificate.badge}
                    </div>
                    <GraduationCap className="h-6 w-6 text-cyan-300" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-200">
                    {certificate.issuer}
                  </p>
                  <p className="mt-4 leading-7 text-slate-300">
                    {certificate.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={certificate.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      <Eye className="h-4 w-4" />
                      View Certificate PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white">Codecademy Certificates</h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {codecademyCertificates.map((certificate, index) => (
              <motion.div
              key={certificate.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 px-4 py-3 text-sm font-bold tracking-[0.2em] text-cyan-100">
              {certificate.badge}
            </div>
            <GraduationCap className="h-6 w-6 text-cyan-300" />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-white">
            {certificate.title}
          </h3>
          <p className="mt-2 text-sm text-cyan-200">{certificate.issuer}</p>
          <p className="mt-4 leading-7 text-slate-300">
            {certificate.description}
          </p>

          <div className="mt-6">
            <a
              href={certificate.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Eye className="h-4 w-4" />
              View Certificate PDF
            </a>
            </div>
            </motion.div>
            ))}
          </div>
        </div>
        </section>

          <section
            id="contact"
            className="mx-auto max-w-7xl px-4 py-5 md:px-6 lg:px-8"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10 p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.18),transparent_30%)]" />

              <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    Contact
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Let’s connect for software developer opportunities
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                    The contact information below is displayed as static text so
                    visitors can easily see it. GitHub and LinkedIn can also be
                    opened through the links.
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-sm md:text-base">{contactInfo.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="text-sm md:text-base">{contactInfo.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                        <GithubIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">GitHub</p>
                        <a
                          href={contactInfo.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-white underline decoration-white/30 underline-offset-4 transition hover:text-cyan-200 md:text-base"
                        >
                          {contactInfo.githubLabel}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">LinkedIn</p>
                        <a
                          href={contactInfo.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-white underline decoration-white/30 underline-offset-4 transition hover:text-cyan-200 md:text-base"
                        >
                          {contactInfo.linkedinLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
