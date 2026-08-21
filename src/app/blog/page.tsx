"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ArrowUpRight, Calendar } from "lucide-react";
import Footer from "@/components/Footer";

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  href?: string;
};

const posts: BlogPost[] = [
  {
    title: "Competition season highlights",
    date: "2025",
    excerpt:
      "Reflections from Shell Eco-Marathon and how the team pushed efficiency and reliability on the track.",
  },
  {
    title: "Building Chicken Coupe",
    date: "2024–2025",
    excerpt:
      "From design reviews to manufacturing: how mechanical, electrical, and software came together for our urban concept vehicle.",
  },
  {
    title: "Behind the telemetry stack",
    date: "2025",
    excerpt:
      "How we capture, visualize, and learn from vehicle data during testing and competition.",
  },
];

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 text-red-400">
          <Calendar className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">{post.date}</span>
        </div>
        {post.href ? (
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-red-400 transition-colors shrink-0" />
        ) : null}
      </div>
      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {post.excerpt}
      </p>
      {!post.href ? (
        <p className="mt-4 text-sm font-medium text-gray-500">Full posts coming soon</p>
      ) : null}
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {post.href ? (
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full bg-gray-800 rounded-xl border border-gray-700 p-8 hover:border-red-600/50 hover:shadow-xl transition-all duration-300"
        >
          {inner}
        </a>
      ) : (
        <div className="h-full bg-gray-800 rounded-xl border border-gray-700 p-8 transition-all duration-300">
          {inner}
        </div>
      )}
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <BookOpen className="w-12 h-12 md:w-14 md:h-14" aria-hidden />
            <h1 className="text-5xl md:text-6xl font-bold">Blog</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Stories from the shop and the track—build updates, competition recaps,
            and deep dives into how we engineer electric vehicles at Cornell.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest updates
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We&apos;re growing this space with longer-form writeups. Until then,
              follow our journey on the site and reach out if you&apos;d like to
              collaborate or cover the team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <PostCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to feature CEV?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Press, sponsors, and collaborators can reach us for interviews,
              event coverage, and technical deep dives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:cornellev@cornell.edu?subject=CEV%20Blog%20%2F%20Press"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
              >
                Email the team
              </a>
              <Link
                href="/apply"
                className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                Join us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
