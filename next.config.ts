import type { NextConfig } from "next";

/** GitHub Pages 项目站：https://zzylanmengqingchuan.github.io/history-home/ */
const repo = "history-home";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  // 本地 dev 不加 basePath；Pages 构建时加上仓库名路径
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
