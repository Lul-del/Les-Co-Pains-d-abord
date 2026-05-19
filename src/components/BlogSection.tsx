import { blogPosts, type BlogPost } from "@/data/blog";

interface BlogSectionProps {
  branchId?: string;
  limit?: number;
}

export default function BlogSection({ branchId, limit = 2 }: BlogSectionProps) {
  let posts: BlogPost[];
  if (branchId) {
    posts = blogPosts.filter((p) => p.branch === branchId || !p.branch);
    // If not enough branch-specific posts, add generic ones
    if (posts.length < limit) {
      const generic = blogPosts.filter((p) => !p.branch);
      posts = [...posts, ...generic].slice(0, limit);
    }
  } else {
    posts = blogPosts.filter((p) => !p.branch).slice(0, limit);
    if (posts.length < limit) {
      posts = blogPosts.slice(0, limit);
    }
  }
  posts = posts.slice(0, limit);

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-dark-text mb-4">
          Du côté du fournil
        </h2>
        <p className="text-center text-gray-text mb-12 max-w-xl mx-auto">
          Actualités, recettes et histoires de notre boulangerie
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col sm:flex-row gap-6 bg-cream-bg rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <div className="sm:w-48 sm:min-w-[12rem] h-48 sm:h-auto overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-6 sm:pl-0 flex flex-col justify-center">
                <p className="text-xs text-gray-text uppercase tracking-wider mb-2">{post.date}</p>
                <h3 className="font-heading text-xl font-semibold text-dark-text mb-2 group-hover:text-orange-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="mt-4 text-sm font-medium text-orange-accent hover:text-[#d43d1a] transition-colors self-start">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
