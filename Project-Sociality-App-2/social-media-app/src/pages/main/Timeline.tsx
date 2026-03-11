import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  user: string;
  handle: string;
  content: string;
  time: string;
}

export default function Timeline() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  // Data awal dummy
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Admin Sociality",
      handle: "@admin",
      content:
        "Selamat datang di Sociality! Ayo mulai berbagi cerita hari ini.",
      time: "1h",
    },
    {
      id: 2,
      user: "Ria Murad",
      handle: "@riamurad",
      content:
        "Aplikasi ini keren banget, UI-nya dapet banget nuansa dark mode-nya.",
      time: "30m",
    },
  ]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handlePost = () => {
    if (!content.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      user: "User Ganteng", // Nanti bisa ambil dari data user login
      handle: "@user_test",
      content: content,
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
    setContent("");
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* --- SIDEBAR KIRI --- */}
      <aside className="w-64 border-r border-gray-800 p-6 hidden md:block sticky top-0 h-screen">
        <h2 className="text-3xl font-black mb-8 text-purple-500 italic">S.</h2>
        <nav className="space-y-6 text-lg">
          <div className="flex items-center gap-3 text-purple-400 font-bold cursor-pointer">
            <span>🏠</span> Home
          </div>
          <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer transition">
            <span>🔍</span> Explore
          </div>
          <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer transition">
            <span>👤</span> Profile
          </div>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-12 w-full py-3 border border-red-500/50 text-red-500 rounded-xl hover:bg-red-500/10 transition-all font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* --- FEED TENGAH --- */}
      <main className="flex-1 max-w-2xl border-r border-gray-800">
        <header className="sticky top-0 bg-black/60 backdrop-blur-xl p-4 border-b border-gray-800 z-10">
          <h1 className="text-xl font-bold">Home Feed</h1>
        </header>

        {/* Form Create Post */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-linear-tr from-purple-500 to-pink-500 shrink-0" />
            <div className="flex-1">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-xl placeholder-gray-600 resize-none py-2"
                placeholder="Apa yang kamu pikirkan?"
                rows={2}
              />
              <div className="flex justify-between items-center pt-3 border-t border-gray-900 mt-2">
                <div className="flex gap-4 text-purple-500 text-sm">
                  <span className="cursor-pointer">🖼️</span>
                  <span className="cursor-pointer">📊</span>
                  <span className="cursor-pointer">😀</span>
                </div>
                <button
                  onClick={handlePost}
                  disabled={!content.trim()}
                  className="bg-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-700 disabled:opacity-50 transition-all shadow-lg shadow-purple-500/20"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List Postingan */}
        <div className="divide-y divide-gray-800">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 hover:bg-white/2 transition cursor-pointer"
            >
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-full bg-gray-800 border border-gray-700 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold hover:underline">
                      {post.user}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.handle} · {post.time}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-200 leading-relaxed">
                    {post.content}
                  </p>
                  <div className="flex justify-between mt-4 text-gray-500 text-sm max-w-md">
                    <span className="hover:text-blue-400 flex items-center gap-1 transition">
                      💬 0
                    </span>
                    <span className="hover:text-green-400 flex items-center gap-1 transition">
                      🔄 0
                    </span>
                    <span className="hover:text-red-400 flex items-center gap-1 transition">
                      ❤️ 0
                    </span>
                    <span className="hover:text-purple-400 flex items-center gap-1 transition">
                      📊 0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- TRENDING KANAN --- */}
      <aside className="w-80 p-6 hidden lg:block sticky top-0 h-screen">
        <div className="bg-[#16181c] p-3 rounded-full mb-6 border border-transparent focus-within:border-purple-500 focus-within:bg-black transition-all">
          <input
            type="text"
            placeholder="Search Sociality"
            className="bg-transparent border-none focus:ring-0 w-full text-sm px-2"
          />
        </div>
        <div className="bg-[#16181c] rounded-2xl border border-gray-800 overflow-hidden">
          <h3 className="font-black text-xl p-4">Trends for you</h3>
          <div className="hover:bg-white/3 p-4 cursor-pointer transition">
            <p className="text-xs text-gray-500">Trending in Tech</p>
            <p className="font-bold">#ReactJS_2026</p>
            <p className="text-xs text-gray-500">12.5K Posts</p>
          </div>
          <div className="hover:bg-white/3 p-4 cursor-pointer transition">
            <p className="text-xs text-gray-500">Programming</p>
            <p className="font-bold">#TailwindV4</p>
            <p className="text-xs text-gray-500">8,234 Posts</p>
          </div>
          <p className="p-4 text-purple-400 text-sm hover:bg-white/3 cursor-pointer">
            Show more
          </p>
        </div>
      </aside>
    </div>
  );
}
