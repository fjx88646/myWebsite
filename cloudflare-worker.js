// 轻序科技 LEVIO 官网 · Cloudflare Workers 单文件版
// 用法：Cloudflare Dashboard → Workers & Pages → Create Worker → Deploy →
//       Edit code → 全选删除 → 粘贴本文件 → Deploy
// 说明：HTML / CSS / JS 全部内嵌，无需 Assets 绑定、无需 CLI。
// 可选：绑定 KV 命名空间到变量 LEADS，表单线索会自动落库；未绑定时写入 console.log。

const HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>轻序科技 LEVIO ｜ AI 电商内容生产线</title>
<meta name="description" content="轻序科技（LEVIO）用 AI 把脚本、分镜、生成、精修串成一条稳定管线，为电商与品牌持续产出可投放的视频、图文与出海内容。" />
<meta name="theme-color" content="#0B0B0C" />
<meta property="og:title" content="轻序科技 LEVIO ｜ AI 电商内容生产线" />
<meta property="og:description" content="把一条爆款视频，变成可复制的生产线。" />
<meta property="og:type" content="website" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="stylesheet" href="/assets/styles.css" />
</head>
<body>
<a class="skip" href="#main">跳到主要内容</a>

<header class="nav" id="nav">
  <div class="nav-inner">
    <a class="brand" href="#top" aria-label="轻序科技 首页">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="13" height="14" rx="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M19.5 8.5v7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </span>
      <span class="brand-text">轻序科技<em>LEVIO</em></span>
    </a>
    <nav class="nav-links" aria-label="主导航">
      <a href="#capability">能力</a>
      <a href="#business">业务</a>
      <a href="#library">内容库</a>
      <a href="#process">流程</a>
    </nav>
    <a class="btn btn-sm nav-cta" href="#contact">预约沟通</a>
    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileMenu" aria-label="打开菜单">
      <span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="#capability">能力</a>
    <a href="#business">业务</a>
    <a href="#library">内容库</a>
    <a href="#process">流程</a>
    <a href="#contact">预约沟通</a>
  </div>
</header>

<main id="main">

  <!-- HERO -->
  <section class="hero" id="top">
    <svg class="tech-orn" viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ornLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#7FD0FF" stop-opacity=".6"/>
          <stop offset="1" stop-color="#2E7FC4" stop-opacity=".06"/>
        </linearGradient>
      </defs>
      <g stroke="url(#ornLine)" stroke-width="1">
        <circle cx="300" cy="300" r="288" stroke-dasharray="1 12"/>
        <circle cx="300" cy="300" r="246"/>
        <circle cx="300" cy="300" r="208" stroke-dasharray="2 10"/>
        <circle cx="300" cy="300" r="150" stroke-opacity=".5"/>
      </g>
      <g stroke="#5CB3F0" stroke-opacity=".3" stroke-width="1">
        <path d="M300 4v40M300 556v40M4 300h40M556 300h40"/>
        <path d="M96 96l28 28M504 504l-28-28M504 96l-28 28M96 504l28-28"/>
      </g>
      <rect x="194" y="194" width="212" height="212" rx="30" stroke="#7FD0FF" stroke-opacity=".45"/>
      <rect x="220" y="220" width="160" height="160" rx="20" stroke="#7FD0FF" stroke-opacity=".22"/>
      <text x="300" y="323" text-anchor="middle" font-family="system-ui,sans-serif" font-size="70" font-weight="700" fill="#8FD6FF" fill-opacity=".5">AI</text>
      <g fill="#7FD0FF" fill-opacity=".55">
        <circle cx="300" cy="12" r="3.5"/>
        <circle cx="588" cy="300" r="3.5"/>
        <circle cx="300" cy="588" r="3.5"/>
        <circle cx="12" cy="300" r="3.5"/>
        <circle cx="470" cy="118" r="2.5"/>
        <circle cx="118" cy="470" r="2.5"/>
      </g>
      <g stroke="#7FD0FF" stroke-opacity=".22">
        <path d="M406 300h96l40-42"/>
        <path d="M194 300h-96l-38 40"/>
      </g>
      <circle cx="542" cy="258" r="4" fill="#7FD0FF" fill-opacity=".7"/>
      <circle cx="60" cy="340" r="4" fill="#7FD0FF" fill-opacity=".45"/>
    </svg>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">AI COMMERCE CONTENT STUDIO · 广州</p>
        <h1>把一条爆款视频，<br />变成<span class="hl">可复制</span>的生产线。</h1>
        <p class="lede">用 AI 把脚本、分镜、生成、精修串成一条管线 —— 为电商与品牌持续产出可投放的视频与图文。</p>
        <div class="hero-actions">
          <a class="btn btn-accent" href="#contact">预约内容诊断</a>
          <a class="btn btn-ghost" href="#business">查看业务矩阵</a>
        </div>
        <ul class="hero-tags" aria-label="业务关键词">
          <li>AI 电商视频</li>
          <li>AI 图文大片</li>
          <li>短剧 · TVC</li>
          <li>海外社媒</li>
        </ul>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="frame frame-back">
          <div class="frame-art art-3"></div>
          <span class="frame-tag">宠物 · 场景</span>
        </div>
        <div class="frame frame-mid">
          <div class="frame-art art-2"></div>
          <span class="frame-tag">美妆 · 特写</span>
        </div>
        <div class="frame frame-front">
          <div class="frame-art art-1">
            <div class="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 6.5v11l9-5.5-9-5.5Z"/></svg></div>
            <span class="frame-progress"></span>
          </div>
          <span class="frame-tag">女装 · 通勤</span>
          <span class="frame-meta">00:12 · 4K · 9:16</span>
        </div>
        <div class="float-chip chip-a">脚本 → 分镜 → 成片</div>
        <div class="float-chip chip-b">商品一致性锁定</div>
      </div>
    </div>

    <div class="wrap">
      <ul class="stat-strip">
        <li><strong>7</strong><span>大品类内容矩阵</span></li>
        <li><strong>16</strong><span>细分场景分类</span></li>
        <li><strong>5</strong><span>步标准化交付</span></li>
        <li><strong>多语</strong><span>版本本地化输出</span></li>
      </ul>
    </div>
  </section>

  <!-- CAPABILITY -->
  <section class="section" id="capability">
    <div class="wrap">
      <div class="section-head">
        <p class="sec-index">01 / 能力</p>
        <h2>从一句卖点，到一条能投的片子。</h2>
        <p class="sec-lede">不是零散的 AI 工具堆砌，而是一套把创意、生产、复用连起来的内容基础设施。</p>
      </div>

      <div class="cap-grid">
        <article class="cap-card">
          <span class="cap-num">01</span>
          <h3>AI 视频生成</h3>
          <p>文生视频、图生视频、首尾帧控制，配合参考图锁定商品细节，减少「一眼假」的形变。</p>
        </article>
        <article class="cap-card">
          <span class="cap-num">02</span>
          <h3>AI 图像与大片图文</h3>
          <p>商品场景图、氛围大片、封面与配图批量生成，一套资产覆盖多个投放位。</p>
        </article>
        <article class="cap-card">
          <span class="cap-num">03</span>
          <h3>脚本 · 分镜 · 提示词</h3>
          <p>把卖点拆成镜头语言：钩子、节奏点、转场与字幕，形成可复用的提示词资产。</p>
        </article>
        <article class="cap-card">
          <span class="cap-num">04</span>
          <h3>数字人与多语配音</h3>
          <p>口播、字幕、配音一次生产，输出中英及多语版本，支撑出海内容需求。</p>
        </article>
        <article class="cap-card">
          <span class="cap-num">05</span>
          <h3>批量生产管线</h3>
          <p>模板化 + 参数化：换商品、换场景、换文案即可批量出片，保证系列内容风格统一。</p>
        </article>
        <article class="cap-card">
          <span class="cap-num">06</span>
          <h3>数据回流迭代</h3>
          <p>按完播、互动与转化反馈修正脚本结构与画面节奏，让下一条比上一条更好。</p>
        </article>
      </div>
    </div>
  </section>

  <!-- BUSINESS -->
  <section class="section section-dark" id="business">
    <div class="wrap">
      <div class="section-head">
        <p class="sec-index">02 / 业务</p>
        <h2>四条业务线，一条内容链路。</h2>
        <p class="sec-lede">内容做完只是开始，投放、出海与履约可以接在同一张桌上谈。</p>
      </div>

      <div class="biz-grid">
        <article class="biz-card biz-main">
          <div class="biz-top"><span>01</span><span class="biz-tag">核心</span></div>
          <h3>AI 电商视频</h3>
          <p>面向女装、男装、童装、鞋履、美妆、饰品、宠物等品类，产出信息流短视频、详情页视频、直播切片与达人素材。</p>
          <ul class="biz-list">
            <li>商品展示 · 场景穿搭 · 细节特写</li>
            <li>9:16 / 1:1 / 16:9 多版位输出</li>
            <li>系列化模板，支持长期更新</li>
          </ul>
          <div class="biz-chips">
            <ul class="chips chips-dark">
              <li>女装</li><li>男装</li><li>童装</li><li>鞋履</li><li>美妆</li><li>饰品</li><li>宠物</li>
            </ul>
          </div>
        </article>

        <article class="biz-card">
          <div class="biz-top"><span>02</span></div>
          <h3>短剧 · TVC · 工厂宣传片</h3>
          <p>品牌叙事、产品发布、产线实力展示，用 AI 完成分镜预演、场景补拍与动画表达。</p>
          <ul class="biz-list">
            <li>分镜预演 · 场景补拍</li>
            <li>品牌主题 · 镜头节奏</li>
            <li>产线实力可视化</li>
          </ul>
          <div class="biz-chips">
            <ul class="chips chips-dark">
              <li>品牌片</li><li>TVC</li><li>产线片</li><li>动画</li>
            </ul>
          </div>
        </article>

        <article class="biz-card">
          <div class="biz-top"><span>03</span></div>
          <h3>海外社媒内容</h3>
          <p>TikTok、Instagram、YouTube 内容本地化：脚本改写、字幕配音、素材适配与更新节奏规划。</p>
          <ul class="biz-list">
            <li>脚本改写 · 多语配音</li>
            <li>素材适配平台规格</li>
            <li>账号内容节奏规划</li>
          </ul>
          <div class="biz-chips">
            <ul class="chips chips-dark">
              <li>TikTok</li><li>Instagram</li><li>YouTube</li><li>独立站</li>
            </ul>
          </div>
        </article>

        <article class="biz-card">
          <div class="biz-top"><span>04</span></div>
          <h3>商品出口 · 云仓履约</h3>
          <p>国内与海外云仓协同，配合内容投放节奏安排备货与发货，让「看到」到「收到」不断档。</p>
          <ul class="biz-list">
            <li>国内仓 / 海外仓协同</li>
            <li>一件代发 · 跨境履约</li>
            <li>按投放节奏备货</li>
          </ul>
          <div class="biz-chips">
            <ul class="chips chips-dark">
              <li>国内云仓</li><li>海外仓</li><li>一件代发</li><li>跨境履约</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- LIBRARY -->
  <section class="section" id="library">
    <div class="wrap lib-grid">
      <div class="lib-copy">
        <p class="sec-index">03 / 内容库</p>
        <h2>按品类建档，按场景出片。</h2>
        <p class="sec-lede">内容不是每次从零想。我们维护一套分类清晰的内容库：主维度按品类，子维度按场景与形式，调用即生产。</p>
        <div class="lib-note">
          <span class="lib-note-num">7 × 16</span>
          <p>7 大品类 × 16 个细分场景，覆盖从日常种草到大促节点的内容需求。</p>
        </div>
      </div>

      <div class="lib-panel">
        <div class="lib-group">
          <p class="lib-label">品类</p>
          <ul class="chips">
            <li>女装</li><li>男装</li><li>童装</li><li>鞋履</li><li>化妆品</li><li>饰品</li><li>宠物</li>
          </ul>
        </div>
        <div class="lib-group">
          <p class="lib-label">场景</p>
          <ul class="chips chips-soft">
            <li>通勤</li><li>约会</li><li>度假</li><li>运动</li><li>家居</li><li>开箱</li><li>测评</li><li>种草</li><li>直播切片</li><li>节日大促</li><li>新品发布</li><li>品牌故事</li>
          </ul>
        </div>
        <div class="lib-group">
          <p class="lib-label">形式</p>
          <ul class="chips chips-line">
            <li>短视频</li><li>图文大片</li><li>TVC</li><li>动画</li><li>口播</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="section section-paper" id="process">
    <div class="wrap">
      <div class="section-head">
        <p class="sec-index">04 / 流程</p>
        <h2>五步交付，每一步都有产物。</h2>
        <p class="sec-lede">你只需要给出商品与目标，剩下的拆解、生成与打磨由我们推进。</p>
      </div>

      <ol class="steps">
        <li class="step">
          <span class="step-num">01</span>
          <h3>需求拆解</h3>
          <p>确认品类、平台、投放目标与预算结构，定内容形态与数量。</p>
          <span class="step-out">产出：内容方案</span>
        </li>
        <li class="step">
          <span class="step-num">02</span>
          <h3>脚本与分镜</h3>
          <p>写钩子、定节奏、拆分镜表，把卖点翻译成镜头语言。</p>
          <span class="step-out">产出：脚本 + 分镜</span>
        </li>
        <li class="step">
          <span class="step-num">03</span>
          <h3>AI 生成</h3>
          <p>图生视频与场景生成，控制商品形态、材质与光线一致性。</p>
          <span class="step-out">产出：素材初版</span>
        </li>
        <li class="step">
          <span class="step-num">04</span>
          <h3>精修合成</h3>
          <p>剪辑、调色、字幕、配音与音乐，按平台规格输出多版位文件。</p>
          <span class="step-out">产出：成片</span>
        </li>
        <li class="step">
          <span class="step-num">05</span>
          <h3>交付与迭代</h3>
          <p>按投放反馈复盘，抽出可复用模板，进入下一轮批量生产。</p>
          <span class="step-out">产出：模板资产</span>
        </li>
      </ol>
    </div>
  </section>

  <!-- WHY -->
  <section class="section" id="why">
    <div class="wrap">
      <div class="section-head">
        <p class="sec-index">05 / 为什么是轻序</p>
        <h2>稳定，比惊艳更难。</h2>
        <p class="sec-lede">单条爆款可以靠运气，长期供给只能靠流程。我们把不确定的创意，装进确定的管线里。</p>
      </div>

      <ul class="why-list">
        <li>
          <h3>一致性</h3>
          <p>同一商品在不同场景、不同版本里保持颜色、版型与材质统一，不牺牲品牌调性。</p>
        </li>
        <li>
          <h3>可持续</h3>
          <p>模板与提示词沉淀为资产，第二十条比第一条更快、更便宜。</p>
        </li>
        <li>
          <h3>一体化</h3>
          <p>内容、社媒投放、出口与云仓在同一条链路里协同，减少跨供应商损耗。</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section section-dark contact" id="contact">
    <svg class="tech-orn-sm" viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <g stroke="#7FD0FF" stroke-opacity=".18" stroke-width="1">
        <circle cx="300" cy="300" r="288" stroke-dasharray="1 12"/>
        <circle cx="300" cy="300" r="240"/>
        <circle cx="300" cy="300" r="186" stroke-dasharray="2 10"/>
      </g>
      <rect x="206" y="206" width="188" height="188" rx="28" stroke="#7FD0FF" stroke-opacity=".25"/>
      <text x="300" y="322" text-anchor="middle" font-family="system-ui,sans-serif" font-size="64" font-weight="700" fill="#8FD6FF" fill-opacity=".22">AI</text>
    </svg>
    <div class="wrap contact-grid">
      <div>
        <p class="sec-index">06 / 联系</p>
        <h2>说说你要卖的东西。</h2>
        <p class="sec-lede">留下品类与目标，我们会带着内容思路回复，而不是先发一份报价单。</p>
        <dl class="contact-meta">
          <div><dt>所在地</dt><dd>广州 · 中国</dd></div>
          <div><dt>业务范围</dt><dd>AI 内容生产 / 海外社媒 / 商品出口与云仓</dd></div>
          <div><dt>回复时间</dt><dd>工作日 1 个工作日内</dd></div>
        </dl>
      </div>

      <form class="form" id="contactForm" novalidate>
        <div class="field">
          <label for="name">称呼 <span aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" required autocomplete="name" placeholder="怎么称呼你" maxlength="40" />
        </div>
        <div class="field">
          <label for="company">公司 / 品牌</label>
          <input id="company" name="company" type="text" autocomplete="organization" placeholder="选填" maxlength="60" />
        </div>
        <div class="field">
          <label for="contact">联系方式 <span aria-hidden="true">*</span></label>
          <input id="contact" name="contact" type="text" required placeholder="手机号 / 微信 / 邮箱" maxlength="80" />
        </div>
        <div class="field">
          <label for="need">需求方向</label>
          <select id="need" name="need">
            <option value="电商短视频">电商短视频</option>
            <option value="图文大片">图文大片</option>
            <option value="短剧 / TVC / 宣传片">短剧 / TVC / 宣传片</option>
            <option value="海外社媒">海外社媒</option>
            <option value="出口与云仓">出口与云仓</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <div class="field field-full">
          <label for="message">想做什么内容</label>
          <textarea id="message" name="message" rows="4" placeholder="品类、平台、参考风格、期望数量与时间" maxlength="800"></textarea>
        </div>
        <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button class="btn btn-accent btn-submit" type="submit">提交需求</button>
        <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="wrap footer-inner">
    <div class="footer-brand">
      <span class="brand-text">轻序科技<em>LEVIO</em></span>
      <p>AI 电商内容生产线 · 让商品被看见。</p>
    </div>
    <nav class="footer-links" aria-label="页脚导航">
      <a href="#capability">能力</a>
      <a href="#business">业务</a>
      <a href="#library">内容库</a>
      <a href="#process">流程</a>
      <a href="#contact">联系</a>
    </nav>
    <p class="footer-copy">© <span id="year">2026</span> 广州轻序科技有限公司</p>
  </div>
</footer>

<script src="/assets/app.js" defer></script>
</body>
</html>
`;

const CSS = `/* ============================================================
   轻序科技 LEVIO — 视觉系统对齐《AI 视频宣传手册》
   深海军蓝 × 冰蓝 · 蓝图网格 · 白描边卡片 · 蓝色编号徽标
   ============================================================ */

:root{
  /* 深色（封面/封底） */
  --navy-0:#05101F;
  --navy-1:#08192C;
  --navy-2:#0D2B48;
  --navy-3:#123C61;

  /* 浅色 */
  --paper:#F4F8FE;
  --paper-2:#EAF2FC;
  --card:#FFFFFF;

  /* 文字 */
  --ink:#0E1E33;
  --body:#4B5D70;
  --muted:#7C93A8;
  --on-dark:#EAF4FD;
  --on-dark-2:#A9C3DA;

  /* 线与蓝 */
  --line:#D8E6F6;
  --line-soft:#E6F0FA;
  --line-dark:rgba(120,180,235,.22);
  --blue:#2E8FD8;
  --blue-deep:#1F6FAE;
  --blue-light:#8FB9DE;
  --blue-soft:#E7F2FD;
  --cyan:#5CB3F0;

  --radius:16px;
  --radius-sm:10px;
  --wrap:1200px;
  --ease:cubic-bezier(.22,.7,.28,1);
  --font:"PingFang SC","HarmonyOS Sans SC","Microsoft YaHei","Hiragino Sans GB",system-ui,-apple-system,"Segoe UI",sans-serif;
}

*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{
  margin:0;
  font-family:var(--font);
  font-size:16px;
  line-height:1.75;
  color:var(--ink);
  background:var(--paper);
  background-image:
    linear-gradient(rgba(46,143,216,.055) 1px,transparent 1px),
    linear-gradient(90deg,rgba(46,143,216,.055) 1px,transparent 1px),
    radial-gradient(1100px 600px at 85% -10%,#E9F4FF 0%,rgba(233,244,255,0) 60%),
    linear-gradient(180deg,#F8FBFF 0%,#F1F7FE 100%);
  background-size:72px 72px,72px 72px,100% 100%,100% 100%;
  background-attachment:fixed;
  -webkit-font-smoothing:antialiased;
}
img,svg{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul,ol,dl,dd,dt,p,h1,h2,h3,h4{margin:0;padding:0}
ul,ol{list-style:none}
button,input,select,textarea{font:inherit;color:inherit}
::selection{background:var(--blue);color:#fff}

.wrap{width:100%;max-width:var(--wrap);margin:0 auto;padding:0 clamp(20px,4.4vw,52px)}

.skip{position:absolute;left:-9999px;top:0;z-index:10001;background:#fff;color:var(--ink);padding:10px 16px;border-radius:0 0 10px 0;font-size:13px;box-shadow:0 8px 20px rgba(11,40,70,.2)}
.skip:focus{left:0}

/* ============ nav ============ */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  color:#fff;
  transition:background .35s var(--ease),color .35s var(--ease),box-shadow .35s,border-color .35s;
  border-bottom:1px solid transparent;
}
.nav-inner{
  max-width:var(--wrap);margin:0 auto;padding:0 clamp(20px,4.4vw,52px);
  height:72px;display:flex;align-items:center;gap:28px;
}
.brand{display:inline-flex;align-items:center;gap:11px;flex-shrink:0}
.brand-mark{
  width:28px;height:28px;display:grid;place-items:center;border-radius:7px;
  background:linear-gradient(150deg,#63B7F2,#2E7FC4);color:#fff;
  box-shadow:0 4px 12px rgba(46,143,216,.35);
}
.brand-mark svg{width:17px;height:17px}
.brand-text{font-size:16px;font-weight:700;letter-spacing:.04em;display:inline-flex;align-items:baseline;gap:9px}
.brand-text em{
  font-style:normal;font-size:9.5px;letter-spacing:.2em;font-weight:500;
  opacity:.62;transform:translateY(-1px);
}
.nav-links{display:flex;gap:30px;margin-left:auto;font-size:13.5px}
.nav-links a{position:relative;opacity:.8;transition:opacity .2s,color .2s}
.nav-links a::after{
  content:"";position:absolute;left:0;right:100%;bottom:-7px;height:1.5px;background:var(--cyan);
  transition:right .3s var(--ease);
}
.nav-links a:hover{opacity:1;color:var(--cyan)}
.nav-links a:hover::after{right:0}

.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:13px 24px;border-radius:var(--radius-sm);font-size:14px;font-weight:500;line-height:1;
  border:1px solid transparent;cursor:pointer;white-space:nowrap;
  transition:transform .22s var(--ease),background .22s,color .22s,border-color .22s,box-shadow .22s;
}
.btn:hover{transform:translateY(-1px)}
.btn:active{transform:translateY(0)}
.btn-sm{padding:10px 18px;font-size:13px}
.btn-accent{
  background:linear-gradient(135deg,#5CB3F0,#2E7FC4);color:#fff;
  box-shadow:0 8px 22px rgba(46,143,216,.3);
}
.btn-accent:hover{box-shadow:0 12px 28px rgba(46,143,216,.4);filter:brightness(1.04)}
.btn-ghost{border-color:rgba(150,195,235,.4);color:var(--on-dark);background:rgba(255,255,255,.03)}
.btn-ghost:hover{border-color:rgba(150,195,235,.75);background:rgba(92,179,240,.1)}
.nav-cta{background:linear-gradient(135deg,#5CB3F0,#2E7FC4);color:#fff;box-shadow:0 6px 18px rgba(46,143,216,.28)}

.nav.is-solid{
  background:rgba(248,251,255,.9);
  backdrop-filter:saturate(150%) blur(14px);
  -webkit-backdrop-filter:saturate(150%) blur(14px);
  color:var(--ink);
  border-bottom-color:var(--line-soft);
  box-shadow:0 6px 24px rgba(16,55,95,.06);
}
.nav.is-solid .nav-cta{background:linear-gradient(135deg,#2E8FD8,#1F6FAE);color:#fff}
.nav.is-solid .brand-text em{opacity:.5}

.nav-toggle{
  display:none;margin-left:auto;width:40px;height:40px;border:1px solid rgba(150,195,235,.4);
  border-radius:9px;background:transparent;position:relative;cursor:pointer;color:currentColor;
}
.nav.is-solid .nav-toggle{border-color:var(--line)}
.nav-toggle span{position:absolute;left:11px;right:11px;height:1.5px;background:currentColor;transition:transform .3s var(--ease)}
.nav-toggle span:first-child{top:16px}
.nav-toggle span:last-child{top:23px}
.nav-toggle[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}
.nav-toggle[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}

.mobile-menu{
  background:#F8FBFF;color:var(--ink);
  padding:6px clamp(20px,4.4vw,52px) 24px;
  border-bottom:1px solid var(--line);
  display:flex;flex-direction:column;
}
.mobile-menu[hidden]{display:none}
.mobile-menu a{padding:14px 0;border-bottom:1px solid var(--line-soft);font-size:15.5px}
.mobile-menu a:last-child{border-bottom:0;color:var(--blue);font-weight:600}

/* ============ hero ============ */
.hero{
  position:relative;overflow:hidden;
  background:
    radial-gradient(90% 80% at 78% -10%,#16496F 0%,#0C2A49 38%,#071A2E 70%,#05101F 100%);
  color:var(--on-dark);
  padding:clamp(116px,13vw,152px) 0 0;
}
.hero::before{
  content:"";position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(120,180,235,.07) 1px,transparent 1px),
    linear-gradient(90deg,rgba(120,180,235,.07) 1px,transparent 1px);
  background-size:64px 64px;
  mask-image:radial-gradient(90% 80% at 60% 20%,#000,transparent 80%);
  -webkit-mask-image:radial-gradient(90% 80% at 60% 20%,#000,transparent 80%);
}
.hero::after{
  content:"";position:absolute;inset:auto 0 0 0;height:180px;pointer-events:none;
  background:linear-gradient(180deg,rgba(5,16,31,0),rgba(5,16,31,.55));
}
.hero-grid{
  position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;
  gap:clamp(24px,3.4vw,48px);align-items:center;padding-bottom:clamp(36px,4.4vw,56px);
}
.eyebrow{
  display:flex;align-items:center;gap:10px;
  font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;color:#7FB6E4;
  margin-bottom:22px;
}
.eyebrow::before{
  content:"";width:7px;height:7px;border-radius:1px;background:var(--cyan);
  box-shadow:0 0 12px rgba(92,179,240,.8);
}
.hero h1{
  font-size:clamp(31px,3.9vw,56px);
  line-height:1.34;font-weight:800;letter-spacing:.01em;
  color:#fff;text-wrap:balance;
}
.hero h1 .hl{color:var(--cyan)}
.lede{
  margin-top:22px;font-size:clamp(14.5px,1.1vw,16px);line-height:1.95;
  color:var(--on-dark-2);max-width:32em;
}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.hero-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:32px}
.hero-tags li{
  font-size:12px;color:#B9D2E8;padding:6px 13px;border-radius:6px;
  border:1px solid rgba(140,190,235,.24);background:rgba(92,179,240,.06);
}

/* 技术装饰 SVG */
.tech-orn{position:absolute;top:-14%;right:-4%;width:64%;max-width:540px;opacity:.4;pointer-events:none}
.tech-orn-sm{position:absolute;top:-8%;right:-6%;width:46%;max-width:420px;opacity:.55;pointer-events:none}

/* hero art */
.hero-art{position:relative;aspect-ratio:1/.96;min-height:360px}
.frame{
  position:absolute;width:55%;aspect-ratio:9/13.4;border-radius:14px;overflow:hidden;
  border:1px solid rgba(140,190,235,.3);
  box-shadow:0 30px 60px rgba(0,8,18,.55),0 1px 0 rgba(255,255,255,.12) inset;
  background:var(--navy-2);
}
.frame-art{position:absolute;inset:0}
.frame-art::before{
  content:"";position:absolute;inset:0;z-index:1;
  background:linear-gradient(180deg,rgba(5,16,31,.05) 0%,rgba(5,16,31,0) 40%,rgba(5,16,31,.6) 100%);
}
.frame-art::after{
  content:"";position:absolute;inset:0;z-index:2;opacity:.18;
  background-image:
    linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px);
  background-size:26px 26px;
  mask-image:linear-gradient(180deg,#000,transparent 70%);
  -webkit-mask-image:linear-gradient(180deg,#000,transparent 70%);
}
.art-1{background:
  radial-gradient(38% 30% at 52% 46%,rgba(214,240,255,.5),transparent 70%),
  radial-gradient(62% 44% at 80% 12%,rgba(92,179,240,.6),transparent 62%),
  linear-gradient(168deg,#2B6E9E 0%,#164A72 34%,#0C2C46 68%,#05131F 100%)}
.art-2{background:
  radial-gradient(52% 38% at 18% 12%,rgba(126,212,255,.35),transparent 64%),
  radial-gradient(95% 72% at 76% 18%,#7FB4D8 0%,#37688F 30%,#173A58 64%,#081A2B 100%)}
.art-3{background:
  radial-gradient(50% 36% at 76% 10%,rgba(160,220,255,.4),transparent 62%),
  radial-gradient(92% 72% at 36% 22%,#D8EEFC 0%,#8FBEDC 28%,#3C6C8C 62%,#0A1F31 100%)}
.frame-progress{
  position:absolute;left:0;bottom:0;z-index:5;height:2px;width:44%;
  background:var(--cyan);box-shadow:0 0 12px rgba(92,179,240,.8);
}
.frame-back{right:0;top:2%;transform:rotate(7.5deg) scale(.86);opacity:.55}
.frame-mid{left:3%;top:8%;transform:rotate(-7deg) scale(.93);opacity:.85}
.frame-mid .frame-tag{display:none}
.frame-front{left:25%;top:12%;z-index:3;transform:rotate(-1deg)}
.frame-tag{
  position:absolute;bottom:12px;left:12px;z-index:4;
  font-size:11px;letter-spacing:.03em;padding:5px 10px;border-radius:5px;
  background:rgba(6,20,34,.62);color:#EAF4FD;backdrop-filter:blur(8px);
  border:1px solid rgba(140,190,235,.24);
}
.frame-meta{
  position:absolute;top:12px;right:12px;z-index:4;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
  font-size:9.5px;letter-spacing:.06em;color:rgba(255,255,255,.86);
  padding:4px 7px;border-radius:4px;background:rgba(6,20,34,.5);
}
.play{
  position:absolute;z-index:4;left:50%;top:50%;transform:translate(-50%,-50%);
  width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,.94);color:#0B2843;
  display:grid;place-items:center;box-shadow:0 12px 28px rgba(0,10,20,.35);
}
.play svg{width:20px;height:20px;margin-left:2px}
.float-chip{
  position:absolute;z-index:5;background:rgba(248,251,255,.96);color:#123A5F;
  font-size:11.5px;padding:8px 12px;border-radius:6px;border:1px solid rgba(140,190,235,.45);
  box-shadow:0 12px 30px rgba(0,10,20,.35);white-space:nowrap;
}
.chip-a{top:4%;left:0;transform:rotate(-2.5deg)}
.chip-b{bottom:6%;right:0;transform:rotate(2deg)}

.stat-strip{
  position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);
  border-top:1px solid rgba(120,180,235,.2);padding:26px 0 44px;
}
.stat-strip li + li{border-left:1px solid rgba(120,180,235,.16);padding-left:clamp(14px,2vw,28px)}
.stat-strip strong{display:block;font-size:clamp(25px,2.5vw,32px);font-weight:700;letter-spacing:.01em;line-height:1.15;color:#fff}
.stat-strip span{display:block;margin-top:7px;font-size:12px;color:#86A9C4;letter-spacing:.02em}

/* ============ section 基础 ============ */
.section{padding:clamp(64px,7.4vw,108px) 0;border-top:1px solid var(--line-soft);scroll-margin-top:80px;position:relative}
.section-dark{
  background:
    radial-gradient(80% 70% at 82% 0%,#123C61 0%,#0A2038 45%,#061423 100%);
  color:var(--on-dark);border-top:0;overflow:hidden;
}
.section-dark::before{
  content:"";position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(120,180,235,.06) 1px,transparent 1px),
    linear-gradient(90deg,rgba(120,180,235,.06) 1px,transparent 1px);
  background-size:72px 72px;
  mask-image:radial-gradient(80% 70% at 50% 0%,#000,transparent 78%);
  -webkit-mask-image:radial-gradient(80% 70% at 50% 0%,#000,transparent 78%);
}
.section-paper{background:rgba(234,242,252,.55);border-top-color:#DCE9F7}
.section-dark > .wrap{position:relative;z-index:1}

.sec-index{
  display:block;
  font-size:11px;letter-spacing:.17em;text-transform:uppercase;color:var(--muted);
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.section-dark .sec-index{color:#7FA8C8}
.section-head{max-width:840px;margin-bottom:clamp(30px,3.6vw,46px)}
.section-head .sec-index{margin-bottom:16px}
.section h2{
  font-size:clamp(22px,3vw,38px);line-height:1.4;font-weight:700;letter-spacing:.005em;color:var(--ink);
}
.sec-lede{margin-top:14px;color:var(--body);font-size:14.5px;line-height:1.95;max-width:660px}
.section-dark h2{color:#fff}
.section-dark .sec-lede{color:var(--on-dark-2)}

/* ============ 能力 ============ */
.cap-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.cap-card{
  background:var(--card);border:1px solid var(--line);border-radius:var(--radius);
  padding:clamp(22px,2.4vw,30px);
  box-shadow:0 6px 18px rgba(23,73,124,.045);
  transition:border-color .3s var(--ease),box-shadow .3s var(--ease),transform .3s var(--ease);
}
.cap-card:hover{border-color:#BBD9F3;box-shadow:0 14px 32px rgba(23,73,124,.09);transform:translateY(-2px)}
.cap-num{
  display:inline-grid;place-items:center;width:34px;height:34px;border-radius:9px;
  background:var(--blue-soft);color:var(--blue);font-size:12.5px;font-weight:600;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;margin-bottom:18px;
}
.cap-card h3{font-size:17px;font-weight:700;color:var(--ink)}
.cap-card p{margin-top:9px;font-size:13.8px;line-height:1.9;color:var(--body)}

/* ============ 业务（深色） ============ */
.biz-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;position:relative;z-index:1}
.biz-card{
  position:relative;background:rgba(255,255,255,.035);border:1px solid var(--line-dark);
  border-radius:var(--radius);padding:clamp(24px,2.6vw,32px);
  display:flex;flex-direction:column;overflow:hidden;
  transition:border-color .3s,background .3s,transform .3s var(--ease);
}
.biz-card::after{
  content:"";position:absolute;inset:0;pointer-events:none;opacity:0;
  background:radial-gradient(70% 60% at 80% 0%,rgba(92,179,240,.16),transparent 70%);
  transition:opacity .4s;
}
.biz-card:hover{border-color:rgba(140,190,235,.45);background:rgba(255,255,255,.055);transform:translateY(-2px)}
.biz-card:hover::after{opacity:1}
.biz-main{grid-row:auto;grid-column:auto}
.biz-top{
  display:flex;align-items:center;justify-content:space-between;gap:10px;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;font-size:11px;
  letter-spacing:.12em;color:#7FA8C8;margin-bottom:18px;
}
.biz-tag{
  font-family:var(--font);letter-spacing:.06em;font-size:10.5px;color:#9FD3F5;
  background:rgba(92,179,240,.14);border:1px solid rgba(92,179,240,.36);
  padding:3px 9px;border-radius:5px;
}
.biz-card h3{font-size:19px;font-weight:700;line-height:1.5;color:#fff}
.biz-main h3{font-size:clamp(21px,2vw,24px)}
.biz-card p{margin-top:10px;font-size:13.8px;line-height:1.9;color:var(--on-dark-2);max-width:48ch}
.biz-chips{margin-top:auto;padding-top:20px}
.biz-chips-label{
  display:block;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6E93B2;
  margin-bottom:10px;font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.chips-dark li{
  font-size:11.5px;padding:5px 11px;background:rgba(92,179,240,.05);
  border-color:rgba(140,190,235,.22);color:#B9D2E8;
}
.chips-dark li:hover{border-color:rgba(92,179,240,.55);color:#fff;transform:none}
.chips-dark li:nth-child(1){border-color:rgba(92,179,240,.6);color:#9FD3F5;background:rgba(92,179,240,.12)}
.biz-list{margin-top:16px;padding-top:16px;border-top:1px solid rgba(120,180,235,.16)}
.biz-list li{position:relative;padding-left:16px;font-size:13px;color:#B9D2E8;line-height:2.05}
.biz-list li::before{content:"";position:absolute;left:0;top:.9em;width:5px;height:5px;border-radius:1px;background:var(--cyan)}

/* ============ 内容库 ============ */
.lib-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:clamp(32px,4.6vw,64px);align-items:center}
.lib-copy .sec-index{margin-bottom:16px}
.lib-note{display:flex;gap:18px;margin-top:clamp(24px,3vw,34px);padding-top:22px;border-top:1px solid var(--line)}
.lib-note-num{
  display:inline-block;align-self:flex-start;position:relative;
  font-size:clamp(25px,2.5vw,31px);font-weight:700;line-height:1.15;color:var(--blue-deep);white-space:nowrap;
}
.lib-note p{font-size:13.5px;line-height:1.9;color:var(--body);max-width:34ch}
.lib-panel{
  background:var(--card);border:1px solid var(--line);border-radius:18px;
  padding:clamp(24px,2.8vw,36px);box-shadow:0 16px 40px rgba(23,73,124,.08);
}
.lib-group + .lib-group{margin-top:24px;padding-top:22px;border-top:1px solid var(--line-soft)}
.lib-label{
  font-size:10.5px;letter-spacing:.17em;text-transform:uppercase;color:var(--muted);
  margin-bottom:12px;font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chips li{
  font-size:13px;padding:7px 13px;border-radius:6px;
  border:1px solid #D5E7F8;background:#F1F8FF;color:#2F6C99;
  transition:border-color .2s,background .2s,color .2s;
}
.chips li:hover{border-color:var(--blue);color:var(--blue-deep)}
.chips li:nth-child(1){background:linear-gradient(135deg,#5CB3F0,#2E7FC4);border-color:transparent;color:#fff;font-weight:600}
.chips-soft li{background:var(--blue-soft);border-color:#D9EAF9}
.chips-line li{background:transparent;border-style:dashed;border-color:#C7DDF2;color:#5A7F9E}

/* ============ 流程 ============ */
.steps{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
.step{
  background:var(--card);border:1px solid var(--line);border-radius:14px;
  padding:20px 18px;display:flex;flex-direction:column;
  box-shadow:0 6px 16px rgba(23,73,124,.04);
  transition:border-color .3s,box-shadow .3s,transform .3s var(--ease);
}
.step:hover{border-color:#BBD9F3;box-shadow:0 12px 26px rgba(23,73,124,.08);transform:translateY(-2px)}
.step-num{
  display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;
  background:var(--blue-soft);color:var(--blue);font-size:12px;font-weight:600;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.step h3{font-size:15.5px;font-weight:700;margin-top:14px;color:var(--ink)}
.step p{font-size:13.2px;line-height:1.85;color:var(--body);margin-top:8px;margin-bottom:18px}
.step-out{
  display:inline-block;align-self:flex-start;margin-top:auto;
  font-size:11px;color:var(--blue-deep);letter-spacing:.02em;
  padding-top:12px;border-top:1px solid var(--line-soft);width:100%;
}

/* ============ 为什么 ============ */
.why-list{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.why-list li{
  background:var(--card);border:1px solid var(--line);border-radius:var(--radius);
  padding:clamp(22px,2.4vw,28px);box-shadow:0 6px 18px rgba(23,73,124,.045);
  transition:border-color .3s,box-shadow .3s,transform .3s var(--ease);
}
.why-list li:hover{border-color:#BBD9F3;box-shadow:0 14px 32px rgba(23,73,124,.09);transform:translateY(-2px)}
.why-list h3{font-size:16.5px;font-weight:700;color:var(--ink);display:flex;align-items:center;gap:9px}
.why-list h3::before{content:"";width:7px;height:7px;border-radius:1.5px;background:var(--blue)}
.why-list p{margin-top:10px;font-size:13.8px;line-height:1.95;color:var(--body)}

/* ============ 联系 ============ */
.contact{padding-bottom:clamp(66px,7.6vw,104px)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,4.6vw,60px);align-items:start;position:relative;z-index:1}
.contact .sec-index{margin-bottom:16px}
.contact .sec-lede{max-width:34ch}
.contact-meta{margin-top:clamp(26px,3.2vw,40px)}
.contact-meta > div{border-top:1px solid rgba(120,180,235,.18);padding:13px 0}
.contact-meta > div:last-child{border-bottom:1px solid rgba(120,180,235,.18)}
.contact-meta dt{font-size:10.5px;letter-spacing:.15em;text-transform:uppercase;color:#7FA8C8;margin-bottom:4px}
.contact-meta dd{font-size:13.5px;color:#D2E5F5}

.form{
  background:rgba(255,255,255,.045);border:1px solid var(--line-dark);border-radius:var(--radius);
  padding:clamp(22px,2.8vw,32px);display:grid;grid-template-columns:1fr 1fr;gap:14px;
  backdrop-filter:blur(4px);
}
.field{display:flex;flex-direction:column}
.field-full{grid-column:1/-1}
.field label{font-size:11.5px;color:#9FBBD2;margin-bottom:6px;letter-spacing:.03em}
.field label span{color:var(--cyan)}
.field input,.field select,.field textarea{
  width:100%;background:rgba(4,15,27,.55);border:1px solid rgba(140,190,235,.28);border-radius:8px;
  padding:11px 13px;font-size:14px;color:#EAF4FD;transition:border-color .2s,box-shadow .2s;
}
.field textarea{resize:vertical;min-height:92px;line-height:1.75}
.field input::placeholder,.field textarea::placeholder{color:#6B8AA6}
.field input:focus,.field select:focus,.field textarea:focus{
  outline:none;border-color:var(--cyan);box-shadow:0 0 0 3px rgba(92,179,240,.18);
}
.field select{
  appearance:none;-webkit-appearance:none;cursor:pointer;
  background-image:linear-gradient(45deg,transparent 50%,#8FB9DE 50%),linear-gradient(135deg,#8FB9DE 50%,transparent 50%);
  background-position:calc(100% - 18px) calc(50% + 1px),calc(100% - 13px) calc(50% + 1px);
  background-size:5px 5px,5px 5px;background-repeat:no-repeat;padding-right:36px;
}
.field select option{background:#0B2136;color:var(--on-dark)}
.hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none}
.btn-submit{grid-column:1/-1;margin-top:6px;width:100%}
.form-status{grid-column:1/-1;font-size:12.5px;line-height:1.6;min-height:18px;color:#9FD3F5}
.form-status.is-error{color:#FFB199}

/* ============ footer ============ */
.footer{background:var(--navy-0);color:var(--on-dark);padding:clamp(34px,4vw,50px) 0;border-top:1px solid rgba(120,180,235,.14)}
.footer-inner{display:flex;flex-wrap:wrap;align-items:flex-start;gap:22px 40px}
.footer-brand .brand-text{font-size:15px;color:#fff}
.footer-brand p{font-size:12.5px;color:#7FA0B9;margin-top:10px}
.footer-links{display:flex;flex-wrap:wrap;gap:22px;margin-left:auto;font-size:13px;color:#9FBBD2}
.footer-links a:hover{color:var(--cyan)}
.footer-copy{width:100%;font-size:11.5px;color:#5D7A93;padding-top:20px;border-top:1px solid rgba(120,180,235,.12);margin-top:10px}

/* ============ 动效 ============ */
.reveal{opacity:0;transform:translateY(14px);transition:opacity .65s var(--ease),transform .65s var(--ease)}
.reveal.in{opacity:1;transform:none}
.cap-card.reveal,.biz-card.reveal,.step.reveal{transition-delay:calc(var(--i,0) * 55ms)}

a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{
  outline:2px solid var(--cyan);outline-offset:3px;
}

/* ============ 响应式 ============ */
@media (max-width:1024px){
  .nav-links{display:none}
  .nav-toggle{display:block}
  .nav-cta{display:none}
  .hero-grid{grid-template-columns:1fr;gap:44px}
  .hero-art{max-width:500px;margin:0 auto;width:100%;aspect-ratio:1/.9;min-height:320px}
  .float-chip{display:none}
  .tech-orn{right:-28%;opacity:.5}
  .cap-grid{grid-template-columns:repeat(2,1fr)}
  .biz-grid{grid-template-columns:1fr}
  .biz-main{grid-row:auto;grid-column:auto}
  .biz-chips{margin-top:18px}
  .lib-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:repeat(3,1fr);gap:24px 14px}
  .contact-grid{grid-template-columns:1fr}
}
@media (max-width:720px){
  body{background-size:56px 56px,56px 56px,100% 100%,100% 100%}
  .section-head{margin-bottom:28px}
  .stat-strip{grid-template-columns:repeat(2,1fr);gap:18px 0;padding-bottom:34px}
  .stat-strip li:nth-child(3){border-left:0;padding-left:0}
  .stat-strip li:nth-child(3),.stat-strip li:nth-child(4){padding-top:16px;border-top:1px solid rgba(120,180,235,.16)}
  .cap-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:1fr;gap:10px}
  .form{grid-template-columns:1fr}
  .field-full,.btn-submit,.form-status{grid-column:1}
  .why-list{grid-template-columns:1fr}
  .footer-links{margin-left:0;order:3;width:100%}
  .hero-art{min-height:0;max-width:330px;aspect-ratio:1/1}
  .frame{width:48%}
  .frame-front{left:26%;top:12%}
  .frame-mid{left:2%;top:2%}
  .frame-back{right:0;top:0;opacity:.4}
  .tech-orn{display:none}
  .lib-note{flex-direction:column;gap:10px}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important}
  .reveal{opacity:1;transform:none}
}
`;

const APP_JS = `(() => {
  'use strict';

  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');

  /* nav background after leaving the dark hero */
  const onScroll = () => {
    nav.classList.toggle('is-solid', window.scrollY > 64);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  if (toggle && menu) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '打开菜单');
      menu.hidden = true;
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? '打开菜单' : '关闭菜单');
      menu.hidden = open;
    });
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) close();
    });
  }

  /* scroll reveal */
  const groups = [
    ['.section-head', 1],
    ['.cap-card', 6],
    ['.biz-card', 4],
    ['.step', 5],
    ['.why-list li', 3],
    ['.lib-panel', 1],
    ['.form', 1],
    ['.lib-note', 1]
  ];
  const targets = [];
  groups.forEach(([sel, step]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--i', String(i % step));
      targets.push(el);
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('in'));
  }

  /* contact form */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  const setStatus = (msg, isError = false) => {
    status.textContent = msg;
    status.classList.toggle('is-error', isError);
  };

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.contact) {
        setStatus('请填写称呼和联系方式。', true);
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      const label = btn.textContent;
      btn.disabled = true;
      btn.textContent = '提交中…';
      setStatus('');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('bad status ' + res.status);
        form.reset();
        setStatus('已收到，我们会在 1 个工作日内联系你。');
      } catch (err) {
        setStatus('提交失败，请稍后重试或直接邮件联系我们。', true);
      } finally {
        btn.disabled = false;
        btn.textContent = label;
      }
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
`;

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#63B7F2"/>
      <stop offset="1" stop-color="#2E7FC4"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="12" fill="url(#g)"/>
  <rect x="15" y="19" width="24" height="26" rx="5" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-opacity=".95"/>
  <path d="M48 25v14" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-opacity=".75"/>
</svg>
`;

const ROBOTS = 'User-agent: *\nAllow: /\n';

const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "base-uri 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "img-src 'self' data:",
    "style-src 'self'",
    "script-src 'self'",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'"
  ].join('; '),
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-Frame-Options': 'DENY'
};

const ROUTES = {
  '/': { body: HTML, type: 'text/html; charset=utf-8', cache: 'public, max-age=0, must-revalidate' },
  '/index.html': { body: HTML, type: 'text/html; charset=utf-8', cache: 'public, max-age=0, must-revalidate' },
  '/assets/styles.css': { body: CSS, type: 'text/css; charset=utf-8', cache: 'public, max-age=3600' },
  '/assets/app.js': { body: APP_JS, type: 'application/javascript; charset=utf-8', cache: 'public, max-age=3600' },
  '/favicon.svg': { body: FAVICON, type: 'image/svg+xml', cache: 'public, max-age=86400' },
  '/robots.txt': { body: ROBOTS, type: 'text/plain; charset=utf-8', cache: 'public, max-age=3600' }
};

const NOT_FOUND = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>404 · 轻序科技</title></head>'
  + '<body style="margin:0;display:grid;place-items:center;height:100vh;background:#0B0B0C;color:#F2F0EA;font-family:system-ui,sans-serif">'
  + '<div style="text-align:center"><p style="font-size:64px;margin:0;color:#C9F74D">404</p>'
  + '<p style="color:#A8A69E;margin:8px 0 24px">页面不存在</p>'
  + '<a href="/" style="color:#C9F74D;text-decoration:none;border:1px solid rgba(242,240,234,.25);padding:10px 18px;border-radius:999px">返回首页</a></div>';

// 404 页用内联样式，单独放宽 style-src
const NOT_FOUND_HEADERS = {
  ...SECURITY_HEADERS,
  'Content-Security-Policy': SECURITY_HEADERS['Content-Security-Policy']
    .replace("style-src 'self'", "style-src 'self' 'unsafe-inline'")
};

const RATE_LIMIT = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...SECURITY_HEADERS,
      ...extra
    }
  });
}

function text(body, status, type, cache, headers = SECURITY_HEADERS) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': type,
      'Cache-Control': cache,
      ...headers
    }
  });
}

function formatLead(lead) {
  const time = new Date(lead.at).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false });
  return [
    '新需求 · ' + lead.name,
    lead.company ? '公司：' + lead.company : '',
    '联系：' + lead.contact,
    lead.need ? '方向：' + lead.need : '',
    lead.message ? '需求：' + lead.message : '',
    '时间：' + time
  ].filter(Boolean).join('\n');
}

async function notifyLead(env, lead) {
  const hook = env && env.NOTIFY_WEBHOOK;
  if (!hook) return;
  const text = formatLead(lead);
  let body;
  if (hook.includes('qyapi.weixin.qq.com')) {
    body = { msgtype: 'text', text: { content: text } };
  } else if (hook.includes('feishu.cn') || hook.includes('larksuite.com')) {
    body = { msg_type: 'text', content: { text: text } };
  } else {
    body = { text: text, lead: lead };
  }
  try {
    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) console.error('notify_failed', res.status);
  } catch (err) {
    console.error('notify_error', err && err.message);
  }
}

async function handleContact(request, env, ctx) {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const now = Date.now();
  const hits = (RATE_LIMIT.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) {
    return json({ ok: false, error: 'too_many_requests' }, 429);
  }
  hits.push(now);
  RATE_LIMIT.set(ip, hits);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  if (payload.website) return json({ ok: true });

  const clean = (v, max) => String(v ?? '').trim().slice(0, max);
  const lead = {
    name: clean(payload.name, 40),
    company: clean(payload.company, 60),
    contact: clean(payload.contact, 80),
    need: clean(payload.need, 40),
    message: clean(payload.message, 800),
    at: new Date().toISOString(),
    country: request.headers.get('cf-ipcountry') || ''
  };

  if (!lead.name || !lead.contact) {
    return json({ ok: false, error: 'missing_fields' }, 422);
  }

  console.log('lead', JSON.stringify(lead));

  if (env && env.LEADS) {
    try {
      await env.LEADS.put('lead:' + lead.at + ':' + crypto.randomUUID(), JSON.stringify(lead));
    } catch (err) {
      console.error('kv_write_failed', err && err.message);
    }
  }

  const notify = notifyLead(env, lead);
  if (ctx && typeof ctx.waitUntil === 'function') ctx.waitUntil(notify);

  return json({ ok: true });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const method = request.method;

    if (url.pathname === '/api/health') {
      return json({ ok: true, service: 'levio-site', now: new Date().toISOString() });
    }

    if (url.pathname === '/api/contact') {
      if (method !== 'POST') {
        return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
      }
      try {
        return await handleContact(request, env, ctx);
      } catch (err) {
        console.error('contact_failed', err && err.stack);
        return json({ ok: false, error: 'server_error' }, 500);
      }
    }

    if (url.pathname.startsWith('/api/')) {
      return json({ ok: false, error: 'not_found' }, 404);
    }

    if (method !== 'GET' && method !== 'HEAD') {
      return text('Method Not Allowed', 405, 'text/plain; charset=utf-8', 'no-store');
    }

    const route = ROUTES[url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '')];
    if (!route) {
      return text(NOT_FOUND, 404, 'text/html; charset=utf-8', 'no-store', NOT_FOUND_HEADERS);
    }

    const body = method === 'HEAD' ? null : route.body;
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': route.type,
        'Cache-Control': route.cache,
        ...SECURITY_HEADERS
      }
    });
  }
};
