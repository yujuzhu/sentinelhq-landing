import React from "react";

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
      <div className="app-max-width flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-brand-500 to-cyan-300 shadow-soft flex items-center justify-center text-xs font-bold">
            SHQ
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">
              SentinelHQ
            </div>
            <div className="text-[11px] text-slate-400">
              Web3 Risk Intelligence Engine
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs text-slate-300">
          <a href="#home" className="hover:text-white transition">
            Overview
          </a>
          <a href="demo.html" className="hover:text-white transition">
            Live Demo
          </a>
          <a href="#products" className="hover:text-white transition">
            SaaS & API
          </a>
          <a href="#ilab" className="hover:text-white transition">
            i-Lab 2026
          </a>
        </nav>

        <a
          href="#contact"
          className="text-xs px-3 py-1.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium shadow-soft"
        >
          Talk with us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="app-max-width pt-10 pb-12 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center"
    >
      <div>
        <p className="inline-flex items-center gap-2 text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-200 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          DeepTech — Web3 风险智能引擎
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
          From trading tool to{" "}
          <span className="text-brand-400">Web3 Risk Intelligence</span> layer
          for institutions.
        </h1>

        <p className="text-sm text-slate-300 max-w-xl leading-relaxed mb-6">
          SentinelHQ 将原来的套利监听脚本升级为{" "}
          <span className="font-medium text-slate-100">
            AI 驱动的 Web3 风险分析引擎
          </span>
          ：实时监控链上异常资金流、CEX/DEX 事件和 VC 动向，为交易所、基金和监管提供
          Risk Score、Whale Alert、VC Intelligence 等能力。
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href="./demo.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            观看实时 Demo
          </a>
          <a
            href="#products"
            className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 text-xs font-medium text-slate-200"
          >
            查看 SaaS / API 产品线
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
          <span>・Whale Alert Pro</span>
          <span>・VC Insight Dashboard</span>
          <span>・Risk Score SaaS</span>
          <span>・Token Intelligence API</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft">
        <div className="text-xs text-slate-400 mb-2 font-medium">
          Live Signal Snapshot
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2">
            <div>
              <div className="font-semibold text-slate-50">SOON / ETH</div>
              <div className="text-[10px] text-slate-400">
                CEX Listing Alert ・High Risk
              </div>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 font-semibold">Score 85</div>
              <div className="text-[10px] text-emerald-300">
                VC-backed · Jump / Paradigm
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2">
            <div>
              <div className="font-semibold text-slate-50">TGT / BSC</div>
              <div className="text-[10px] text-slate-400">
                VC Move · Medium Risk
              </div>
            </div>
            <div className="text-right">
              <div className="text-amber-400 font-semibold">Score 62</div>
              <div className="text-[10px] text-amber-300">
                Whale inflow to Binance
              </div>
            </div>
          </div>

          <p className="text-[10px] text-slate-500 mt-3">
            * 当前 Demo 数据来自内部测试脚本（flash_alpha_monitoring），
            正式版会通过 API 对接交易所 / 基金风控系统。
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section
      id="products"
      className="app-max-width py-10 border-t border-slate-900"
    >
      <h2 className="text-xl font-semibold text-white mb-4">
        SentinelHQ 产品线（SaaS / API）
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-sm font-semibold text-white mb-2">
            Token Intelligence API
          </h3>
          <p className="text-[12px] text-slate-300 mb-2">
            为每一个 Token 输出实时的 Risk Score、链上事件摘要、VC
            支持度和流动性健康度，按调用计费，适合量化 / 交易所接入。
          </p>
          <p className="text-[11px] text-slate-400">
            典型客户：CEX 上币团队、做市商、合规供应商。
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-sm font-semibold text-white mb-2">
            VC Insight Dashboard
          </h3>
          <p className="text-[12px] text-slate-300 mb-2">
            将 RootData / 链上地址 / 新闻流整合在一个 VC 视角看板中，帮助基金追踪
            a16z、Paradigm、Jump 等机构的建仓与撤退行为。
          </p>
          <p className="text-[11px] text-slate-400">
            收费模式：按席位订阅（月付 / 年付）。
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-sm font-semibold text-white mb-2">
            Whale Alert Pro
          </h3>
          <p className="text-[12px] text-slate-300 mb-2">
            针对大额地址 / 交易所热钱包的智能告警系统，支持 Telegram / Email
            推送，提供情境化解释（Dump / Accumulate / Hedge）。
          </p>
          <p className="text-[11px] text-slate-400">
            收费模式：基础版免费，高级版按地址数量收费。
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-sm font-semibold text-white mb-2">
            Risk Score SaaS
          </h3>
          <p className="text-[12px] text-slate-300 mb-2">
            为交易平台、托管机构提供一套集中的 Risk Score 引擎，可本地部署或私有云
            SaaS，支持审计追踪和策略可视化。
          </p>
          <p className="text-[11px] text-slate-400">
            收费模式：企业年付 / 私有化部署一次性买断。
          </p>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section
      id="demo"
      className="app-max-width py-10 border-t border-slate-900"
    >
      <h2 className="text-xl font-semibold text-white mb-3">
        Live Demo — Alpha Monitoring Dashboard
      </h2>
      <p className="text-[12px] text-slate-300 mb-4 max-w-2xl">
        下方区域预留给 Retool / 自研前端的实时 Demo。当前版本可以嵌入你现在已经做好的
        Retool Dashboard 或者一张示意图，向评审展示：
        ① 实时信号流；② AI 解读；③ Risk Score 变化。
      </p>

      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-6 text-center text-[12px] text-slate-400">
        Demo Placeholder — 在正式提交 i-Lab 前，这里将嵌入 Retool /
        自研看板的实时画面。
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-900 mt-8 py-4 text-[11px] text-slate-500"
    >
      <div className="app-max-width flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} SentinelHQ.io — Web3 Risk Intelligence
          Engine
        </span>
        <span>Contact: founder@sentinelhq.io（for investors & partners）</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DemoSection />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
