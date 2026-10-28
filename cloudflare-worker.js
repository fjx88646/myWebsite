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
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="dot"></span>AI COMMERCE CONTENT STUDIO · 广州</p>
        <h1>把一条爆款视频，<br />变成<span class="hl">可复制</span>的<br />生产线。</h1>
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
          <div class="biz-chips">
            <span class="biz-chips-label">覆盖品类</span>
            <ul class="chips chips-dark">
              <li>女装</li><li>男装</li><li>童装</li><li>鞋履</li><li>美妆</li><li>饰品</li><li>宠物</li>
            </ul>
          </div>
          <ul class="biz-list">
            <li>商品展示 · 场景穿搭 · 细节特写</li>
            <li>9:16 / 1:1 / 16:9 多版位输出</li>
            <li>系列化模板，支持长期更新</li>
          </ul>
        </article>

        <article class="biz-card">
          <div class="biz-top"><span>02</span></div>
          <h3>短剧 · TVC · 工厂宣传片</h3>
          <p>品牌叙事、产品发布、产线实力展示，用 AI 完成分镜预演、场景补拍与动画表达。</p>
        </article>

        <article class="biz-card">
          <div class="biz-top"><span>03</span></div>
          <h3>海外社媒内容</h3>
          <p>TikTok、Instagram、YouTube 内容本地化：脚本改写、字幕配音、素材适配与更新节奏规划。</p>
        </article>

        <article class="biz-card">
          <div class="biz-top"><span>04</span></div>
          <h3>商品出口 · 云仓履约</h3>
          <p>国内与海外云仓协同，配合内容投放节奏安排备货与发货，让「看到」到「收到」不断档。</p>
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
    <div class="wrap why-grid">
      <div>
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

const CSS = `/* ============ tokens ============ */
:root{
  --ink:#0B0B0C;
  --ink-2:#121316;
  --ink-3:#191A1D;
  --paper:#F7F5F0;
  --paper-2:#EFEBE2;
  --card:#FFFFFF;
  --line:rgba(11,11,12,.12);
  --line-soft:rgba(11,11,12,.07);
  --muted:#6B6963;
  --muted-2:#8E8B83;
  --dark-text:#F2F0EA;
  --dark-muted:#A8A69E;
  --dark-line:rgba(242,240,234,.12);
  --accent:#C9F74D;
  --accent-hi:#D9FF74;
  --radius:20px;
  --wrap:1240px;
  --ease:cubic-bezier(.22,.7,.28,1);
  --font:"Inter","HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,-apple-system,"Segoe UI",sans-serif;
}

*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{
  margin:0;
  font-family:var(--font);
  background:var(--paper);
  color:var(--ink);
  font-size:16px;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
img,svg{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul,ol,dl,dd,dt,p,h1,h2,h3,h4{margin:0;padding:0}
ul,ol{list-style:none}
button,input,select,textarea{font:inherit;color:inherit}
::selection{background:var(--accent);color:var(--ink)}

.wrap{width:100%;max-width:var(--wrap);margin:0 auto;padding:0 clamp(20px,4.4vw,56px)}

/* film grain, very subtle */
body::after{
  content:"";position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.035;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
}

.skip{
  position:absolute;left:-9999px;top:0;z-index:10001;background:var(--accent);color:var(--ink);
  padding:10px 16px;border-radius:0 0 10px 0;font-size:13px;
}
.skip:focus{left:0}

/* ============ nav ============ */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  color:var(--dark-text);
  transition:background .35s var(--ease),color .35s var(--ease),border-color .35s var(--ease),backdrop-filter .35s;
  border-bottom:1px solid transparent;
}
.nav-inner{
  max-width:var(--wrap);margin:0 auto;padding:0 clamp(20px,4.4vw,56px);
  height:74px;display:flex;align-items:center;gap:28px;
}
.brand{display:inline-flex;align-items:center;gap:11px;flex-shrink:0}
.brand-mark{width:26px;height:26px;display:grid;place-items:center;color:var(--accent)}
.brand-mark svg{width:24px;height:24px}
.brand-text{font-size:16px;font-weight:600;letter-spacing:.01em;display:inline-flex;align-items:baseline;gap:8px}
.brand-text em{
  font-style:normal;font-size:10.5px;letter-spacing:.18em;font-weight:500;
  opacity:.55;transform:translateY(-1px);
}
.nav-links{display:flex;gap:30px;margin-left:auto;font-size:13.5px}
.nav-links a{position:relative;opacity:.78;transition:opacity .2s}
.nav-links a::after{
  content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1px;background:currentColor;
  transition:right .3s var(--ease);
}
.nav-links a:hover{opacity:1}
.nav-links a:hover::after{right:0}

.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:14px 24px;border-radius:999px;font-size:14px;font-weight:500;line-height:1;
  border:1px solid transparent;cursor:pointer;white-space:nowrap;
  transition:transform .25s var(--ease),background .25s,color .25s,border-color .25s,box-shadow .25s;
}
.btn:hover{transform:translateY(-1px)}
.btn:active{transform:translateY(0)}
.btn-sm{padding:11px 19px;font-size:13px}
.btn-accent{background:var(--accent);color:var(--ink);box-shadow:0 8px 24px rgba(201,247,77,.18)}
.btn-accent:hover{background:var(--accent-hi);box-shadow:0 12px 30px rgba(201,247,77,.26)}
.btn-ghost{border-color:rgba(242,240,234,.24);color:var(--dark-text)}
.btn-ghost:hover{border-color:rgba(242,240,234,.55);background:rgba(242,240,234,.05)}
.nav-cta{margin-left:8px;background:var(--accent);color:var(--ink);box-shadow:0 8px 22px rgba(201,247,77,.16)}
.nav-cta:hover{background:var(--accent-hi)}

.nav.is-solid{
  background:rgba(247,245,240,.86);
  backdrop-filter:saturate(160%) blur(14px);
  -webkit-backdrop-filter:saturate(160%) blur(14px);
  color:var(--ink);
  border-bottom-color:var(--line-soft);
}
.nav.is-solid .nav-cta{background:var(--ink);color:var(--paper);box-shadow:none}
.nav.is-solid .nav-cta:hover{background:#242528}
.nav.is-solid .brand-mark{color:var(--ink)}

.nav-toggle{
  display:none;margin-left:auto;width:40px;height:40px;border:1px solid rgba(242,240,234,.25);
  border-radius:10px;background:transparent;position:relative;cursor:pointer;
}
.nav.is-solid .nav-toggle{border-color:var(--line)}
.nav-toggle span{
  position:absolute;left:11px;right:11px;height:1.5px;background:currentColor;
  transition:transform .3s var(--ease),opacity .2s;
}
.nav-toggle span:first-child{top:16px}
.nav-toggle span:last-child{top:23px}
.nav-toggle[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)}
.nav-toggle[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)}

.mobile-menu{
  background:var(--paper);color:var(--ink);
  padding:8px clamp(20px,4.4vw,56px) 26px;
  border-bottom:1px solid var(--line);
  display:flex;flex-direction:column;
}
.mobile-menu[hidden]{display:none}
.mobile-menu a{padding:14px 0;border-bottom:1px solid var(--line-soft);font-size:16px}
.mobile-menu a:last-child{border-bottom:0;color:var(--ink);font-weight:600}

/* ============ hero ============ */
.hero{
  position:relative;background:var(--ink);color:var(--dark-text);
  padding:clamp(120px,15vw,168px) 0 0;overflow:hidden;
}
.hero-bg{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(52% 44% at 78% 14%,rgba(201,247,77,.14),transparent 62%),
    radial-gradient(46% 42% at 8% 72%,rgba(255,138,92,.10),transparent 66%),
    radial-gradient(60% 60% at 50% 120%,rgba(120,110,255,.12),transparent 70%);
}
.hero-bg::after{
  content:"";position:absolute;inset:0;
  background-image:linear-gradient(rgba(242,240,234,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(242,240,234,.05) 1px,transparent 1px);
  background-size:88px 88px;
  mask-image:radial-gradient(70% 60% at 50% 30%,#000,transparent 78%);
  -webkit-mask-image:radial-gradient(70% 60% at 50% 30%,#000,transparent 78%);
  opacity:.55;
}
.hero-grid{
  position:relative;display:grid;grid-template-columns:1.04fr .96fr;
  gap:clamp(28px,4vw,64px);align-items:center;padding-bottom:clamp(40px,5vw,64px);
}
.eyebrow{
  display:flex;align-items:center;gap:9px;
  font-size:11.5px;letter-spacing:.17em;text-transform:uppercase;color:#A5A39B;
  margin-bottom:26px;
}
.eyebrow .dot{
  width:6px;height:6px;border-radius:50%;background:var(--accent);
  box-shadow:0 0 0 0 rgba(201,247,77,.55);animation:pulse 2.6s infinite;
}
@keyframes pulse{
  0%{box-shadow:0 0 0 0 rgba(201,247,77,.5)}
  70%{box-shadow:0 0 0 7px rgba(201,247,77,0)}
  100%{box-shadow:0 0 0 0 rgba(201,247,77,0)}
}
.hero h1{
  font-size:clamp(33px,4.75vw,64px);
  line-height:1.14;font-weight:600;letter-spacing:-.02em;
}
.hero h1 .hl{color:var(--accent);position:relative;white-space:nowrap}
.lede{
  margin-top:clamp(20px,2.4vw,30px);
  font-size:clamp(14.5px,1.15vw,16.5px);
  line-height:1.85;color:#B4B2AA;max-width:31em;
}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(26px,3vw,38px)}
.hero-tags{display:flex;flex-wrap:wrap;gap:9px;margin-top:clamp(28px,3.4vw,42px)}
.hero-tags li{
  font-size:12px;color:#C2C0B8;padding:7px 14px;border-radius:999px;
  border:1px solid rgba(242,240,234,.16);
}

/* hero art */
.hero-art{position:relative;aspect-ratio:1/.98;min-height:380px}
.frame{
  position:absolute;width:56%;aspect-ratio:9/13.4;border-radius:16px;overflow:hidden;
  border:1px solid rgba(242,240,234,.14);
  box-shadow:0 40px 70px rgba(0,0,0,.55),0 2px 0 rgba(255,255,255,.06) inset;
  background:var(--ink-2);
}
.frame-art{position:absolute;inset:0}
.frame-art::before{content:"";position:absolute;inset:0;z-index:1;
  background:linear-gradient(180deg,rgba(0,0,0,.06) 0%,rgba(0,0,0,0) 42%,rgba(0,0,0,.55) 100%);}
.frame-art::after{content:"";position:absolute;inset:0;z-index:2;opacity:.16;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23g)'/%3E%3C/svg%3E");}
.art-1{background:
  radial-gradient(52% 38% at 82% 12%,rgba(201,247,77,.42),transparent 62%),
  radial-gradient(90% 62% at 22% 10%,#FFE2B8 0%,#F0A26C 24%,#C4644A 52%,#4B241D 80%,#1A0F0C 100%);}
.art-2{background:
  radial-gradient(46% 34% at 20% 8%,rgba(255,196,120,.35),transparent 60%),
  radial-gradient(84% 60% at 74% 14%,#FFD6E4 0%,#E887AE 24%,#8C4468 56%,#2A1620 86%,#120A0E 100%);}
.art-3{background:
  radial-gradient(44% 34% at 78% 10%,rgba(201,247,77,.28),transparent 62%),
  radial-gradient(82% 62% at 40% 18%,#DDEBC0 0%,#93B87A 26%,#4A6B4C 58%,#182318 88%,#0C110C 100%);}
.frame-progress{
  position:absolute;left:0;bottom:0;z-index:5;height:2px;width:44%;
  background:var(--accent);box-shadow:0 0 12px rgba(201,247,77,.6);
}
.frame-back{right:0;top:2%;transform:rotate(8deg) scale(.86);opacity:.5;filter:saturate(.75) blur(.2px)}
.frame-mid{left:4%;top:8%;transform:rotate(-7.5deg) scale(.93);opacity:.82}
.frame-front{left:26%;top:16%;z-index:3;transform:rotate(-1.2deg)}
.frame-tag{
  position:absolute;bottom:12px;left:12px;z-index:4;
  font-size:11px;letter-spacing:.03em;padding:6px 11px;border-radius:999px;
  background:rgba(11,11,12,.5);color:#F2F0EA;backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,.14);
}
.frame-meta{
  position:absolute;top:12px;right:12px;z-index:4;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
  font-size:10px;letter-spacing:.06em;color:rgba(255,255,255,.82);
  padding:5px 8px;border-radius:6px;background:rgba(11,11,12,.42);
}
.play{
  position:absolute;z-index:4;left:50%;top:50%;transform:translate(-50%,-50%);
  width:56px;height:56px;border-radius:50%;background:rgba(247,245,240,.92);color:var(--ink);
  display:grid;place-items:center;box-shadow:0 12px 30px rgba(0,0,0,.28);
}
.play svg{width:22px;height:22px;margin-left:2px}
.float-chip{
  position:absolute;z-index:5;background:var(--paper);color:var(--ink);
  font-size:11.5px;letter-spacing:.01em;padding:9px 13px;border-radius:9px;
  box-shadow:0 14px 34px rgba(0,0,0,.35);white-space:nowrap;
}
.chip-a{top:4%;left:0;transform:rotate(-3deg)}
.chip-b{bottom:6%;right:0;transform:rotate(2deg)}

.stat-strip{
  position:relative;display:grid;grid-template-columns:repeat(4,1fr);
  border-top:1px solid var(--dark-line);padding:26px 0 46px;
}
.stat-strip li + li{border-left:1px solid var(--dark-line);padding-left:clamp(14px,2vw,28px)}
.stat-strip strong{
  display:block;font-size:clamp(26px,2.6vw,34px);font-weight:500;letter-spacing:-.02em;line-height:1.1;
}
.stat-strip span{display:block;margin-top:7px;font-size:12px;color:#8E8C84;letter-spacing:.02em}

/* ============ sections ============ */
.section{padding:clamp(68px,8.4vw,118px) 0;border-top:1px solid var(--line);scroll-margin-top:80px}
.section-dark{background:var(--ink);color:var(--dark-text);border-top-color:rgba(242,240,234,.1)}
.section-paper{background:var(--paper-2);border-top-color:rgba(11,11,12,.09)}

.sec-index{
  font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2);
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.section-dark .sec-index{color:#807E77}
.section-head{
  display:grid;grid-template-columns:minmax(0,170px) minmax(0,1fr);
  gap:0 clamp(24px,4vw,56px);margin-bottom:clamp(36px,4.4vw,58px);
}
.section-head .sec-index{padding-top:10px}
.section-head h2{grid-column:2}
.section-head .sec-lede{grid-column:2}
.section h2{
  font-size:clamp(26px,3.3vw,43px);line-height:1.24;font-weight:600;letter-spacing:-.02em;
}
.sec-lede{
  margin-top:18px;color:var(--muted);font-size:clamp(14px,1.05vw,15.5px);
  line-height:1.85;max-width:54ch;
}
.section-dark .sec-lede{color:var(--dark-muted)}

/* capability */
.cap-grid{
  display:grid;grid-template-columns:repeat(3,1fr);
  border-top:1px solid var(--line);border-left:1px solid var(--line);
}
.cap-card{
  padding:clamp(24px,2.6vw,34px) clamp(20px,2.4vw,30px) clamp(28px,3vw,40px);
  border-right:1px solid var(--line);border-bottom:1px solid var(--line);
  transition:background .3s var(--ease);
}
.cap-card:hover{background:#FCFBF8}
.cap-num{
  display:block;font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
  font-size:11px;letter-spacing:.12em;color:#A9A69E;margin-bottom:clamp(20px,2.4vw,30px);
}
.cap-card h3{font-size:17.5px;font-weight:600;letter-spacing:-.005em}
.cap-card p{margin-top:10px;font-size:13.8px;line-height:1.85;color:var(--muted)}

/* business */
.biz-grid{display:grid;grid-template-columns:1.12fr .88fr;gap:14px}
.biz-card{
  position:relative;background:var(--ink-2);border:1px solid rgba(242,240,234,.09);
  border-radius:16px;padding:clamp(24px,2.8vw,34px);
  display:flex;flex-direction:column;
  transition:border-color .3s,transform .35s var(--ease),background .3s;
  overflow:hidden;
}
.biz-card::after{
  content:"";position:absolute;inset:0;pointer-events:none;opacity:0;
  background:radial-gradient(70% 50% at 80% 0%,rgba(201,247,77,.1),transparent 70%);
  transition:opacity .4s;
}
.biz-card:hover{border-color:rgba(201,247,77,.28);transform:translateY(-2px)}
.biz-card:hover::after{opacity:1}
.biz-main{grid-row:span 2;justify-content:flex-start}
.biz-top{
  display:flex;align-items:center;gap:10px;justify-content:space-between;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;font-size:11px;
  letter-spacing:.12em;color:#7E7C75;margin-bottom:20px;
}
.biz-tag{
  font-family:var(--font);letter-spacing:.04em;font-size:10.5px;color:var(--ink);
  background:var(--accent);padding:4px 9px;border-radius:999px;
}
.biz-card h3{font-size:19px;font-weight:600;letter-spacing:-.01em;line-height:1.35}
.biz-main h3{font-size:clamp(23px,2.4vw,29px);margin-top:4px}
.biz-card p{margin-top:12px;font-size:13.8px;line-height:1.85;color:var(--dark-muted);max-width:46ch}
.biz-main p{max-width:40ch}
.biz-chips{margin-top:22px}
.biz-chips-label{
  display:block;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#75736C;margin-bottom:10px;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.chips-dark li{
  font-size:11.5px;padding:6px 12px;background:transparent;border-color:rgba(242,240,234,.16);
  color:#C5C3BB;
}
.chips-dark li:hover{border-color:rgba(201,247,77,.4);color:#F2F0EA;transform:none}
.chips-dark li:nth-child(1){border-color:rgba(201,247,77,.45);color:var(--accent);font-weight:500}
.biz-list{margin-top:auto;padding-top:24px;border-top:1px solid rgba(242,240,234,.1)}
.biz-list li{
  position:relative;padding-left:16px;font-size:13px;color:#BDBBB3;line-height:2.05;
}
.biz-list li::before{
  content:"";position:absolute;left:0;top:.86em;width:5px;height:5px;border-radius:50%;background:var(--accent);
}

/* library */
.lib-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:clamp(32px,5vw,72px);align-items:center}
.lib-copy h2{margin-top:14px}
.lib-note{display:flex;gap:18px;margin-top:clamp(26px,3vw,36px);padding-top:24px;border-top:1px solid var(--line)}
.lib-note-num{
  display:inline-block;align-self:flex-start;
  font-size:clamp(26px,2.6vw,32px);font-weight:500;letter-spacing:-.02em;line-height:1.1;
  white-space:nowrap;position:relative;
}
.lib-note-num::after{
  content:"";position:absolute;left:0;right:0;bottom:3px;height:8px;background:var(--accent);
  z-index:-1;opacity:.85;
}
.lib-note p{font-size:13.5px;line-height:1.85;color:var(--muted);max-width:34ch}
.lib-panel{
  background:var(--card);border:1px solid var(--line);border-radius:var(--radius);
  padding:clamp(24px,3vw,38px);box-shadow:0 24px 60px rgba(11,11,12,.055);
}
.lib-group + .lib-group{margin-top:26px;padding-top:24px;border-top:1px solid var(--line-soft)}
.lib-label{
  font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#A9A69E;margin-bottom:13px;
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;
}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chips li{
  font-size:13px;padding:8px 14px;border-radius:999px;border:1px solid var(--line);
  background:#FBFAF7;transition:border-color .2s,background .2s,transform .25s var(--ease);
}
.chips li:hover{border-color:rgba(11,11,12,.3);transform:translateY(-1px)}
.chips-soft li{background:var(--paper-2);border-color:transparent}
.chips-line li{background:transparent;border-style:dashed;border-color:rgba(11,11,12,.2);color:var(--muted)}
.chips li:nth-child(1){border-color:rgba(11,11,12,.28);font-weight:600}

/* process */
.steps{display:grid;grid-template-columns:repeat(5,1fr);gap:clamp(16px,2vw,26px)}
.step{border-top:2px solid var(--ink);padding-top:20px;position:relative;display:flex;flex-direction:column}
.step::before{
  content:"";position:absolute;top:-5px;left:0;width:8px;height:8px;border-radius:50%;background:var(--ink);
}
.step-num{
  font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;font-size:11px;letter-spacing:.1em;color:#8E8B83;
}
.step h3{font-size:16.5px;font-weight:600;margin-top:12px}
.step p{font-size:13px;line-height:1.8;color:var(--muted);margin-top:9px}
.step-out{
  display:inline-block;align-self:flex-start;margin-top:auto;font-size:11px;color:var(--muted);letter-spacing:.02em;
  padding:5px 10px;border:1px dashed rgba(11,11,12,.2);border-radius:999px;
}
.step p{margin-bottom:18px}

/* why */
.why-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(32px,5vw,72px)}
.why-grid h2{margin-top:14px}
.why-list li{border-top:1px solid var(--line);padding:22px 0;display:grid;grid-template-columns:120px 1fr;gap:20px}
.why-list li:last-child{border-bottom:1px solid var(--line)}
.why-list h3{font-size:16.5px;font-weight:600}
.why-list p{font-size:13.8px;line-height:1.85;color:var(--muted)}

/* contact */
.contact{padding-bottom:clamp(72px,9vw,120px)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,72px);align-items:start}
.contact h2{margin-top:14px;max-width:12ch}
.contact-meta{margin-top:clamp(28px,3.4vw,44px)}
.contact-meta > div{border-top:1px solid rgba(242,240,234,.12);padding:13px 0}
.contact-meta > div:last-child{border-bottom:1px solid rgba(242,240,234,.12)}
.contact-meta dt{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#7E7C75;margin-bottom:5px}
.contact-meta dd{font-size:13.5px;color:#DDDBD3}

.form{
  background:var(--ink-2);border:1px solid rgba(242,240,234,.1);border-radius:var(--radius);
  padding:clamp(22px,3vw,36px);display:grid;grid-template-columns:1fr 1fr;gap:16px;
  position:relative;
}
.field{display:flex;flex-direction:column}
.field-full{grid-column:1/-1}
.field label{font-size:11.5px;color:#A9A79F;margin-bottom:7px;letter-spacing:.03em}
.field label span{color:var(--accent)}
.field input,.field select,.field textarea{
  width:100%;background:#0B0B0C;border:1px solid rgba(242,240,234,.15);border-radius:10px;
  padding:12px 14px;font-size:14px;color:var(--dark-text);transition:border-color .2s,box-shadow .2s;
}
.field textarea{resize:vertical;min-height:96px;line-height:1.7}
.field input::placeholder,.field textarea::placeholder{color:#5F5D57}
.field input:focus,.field select:focus,.field textarea:focus{
  outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(201,247,77,.14);
}
.field select{
  appearance:none;-webkit-appearance:none;cursor:pointer;
  background-image:linear-gradient(45deg,transparent 50%,#8F8D86 50%),linear-gradient(135deg,#8F8D86 50%,transparent 50%);
  background-position:calc(100% - 19px) calc(50% + 1px),calc(100% - 14px) calc(50% + 1px);
  background-size:5px 5px,5px 5px;background-repeat:no-repeat;
  padding-right:38px;
}
.field select option{background:#0F1012;color:var(--dark-text)}
.hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none}
.btn-submit{grid-column:1/-1;margin-top:6px;width:100%}
.form-status{
  grid-column:1/-1;font-size:12.5px;line-height:1.6;min-height:18px;color:var(--accent);
}
.form-status.is-error{color:#FF9E7A}

/* footer */
.footer{background:#070708;color:var(--dark-text);padding:clamp(38px,4.4vw,56px) 0;border-top:1px solid rgba(242,240,234,.08)}
.footer-inner{display:flex;flex-wrap:wrap;align-items:flex-start;gap:24px 40px}
.footer-brand .brand-text{font-size:15px}
.footer-brand .brand-mark{color:var(--accent)}
.footer-brand p{font-size:12.5px;color:#77756E;margin-top:10px}
.footer-links{display:flex;flex-wrap:wrap;gap:22px;margin-left:auto;font-size:13px;color:#A9A79F}
.footer-links a:hover{color:var(--accent)}
.footer-copy{width:100%;font-size:11.5px;color:#5C5A54;padding-top:22px;border-top:1px solid rgba(242,240,234,.07);margin-top:12px}

/* reveal */
.reveal{opacity:0;transform:translateY(16px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.reveal.in{opacity:1;transform:none}
.cap-card.reveal,.biz-card.reveal,.step.reveal{transition-delay:calc(var(--i,0) * 55ms)}

/* focus */
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{
  outline:2px solid var(--accent);outline-offset:3px;
}

/* ============ responsive ============ */
@media (max-width:1024px){
  .nav-links{display:none}
  .nav-toggle{display:block}
  .nav-cta{display:none}
  .hero-grid{grid-template-columns:1fr;gap:48px}
  .hero-art{max-width:520px;margin:0 auto;width:100%;aspect-ratio:1/.9;min-height:340px}
  .float-chip{display:none}
  .cap-grid{grid-template-columns:repeat(2,1fr)}
  .biz-grid{grid-template-columns:1fr}
  .biz-main{grid-row:auto}
  .lib-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:repeat(3,1fr);gap:28px 22px}
  .why-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .contact h2{max-width:18ch}
}
@media (max-width:720px){
  .section-head{grid-template-columns:1fr;gap:14px}
  .section-head h2,.section-head .sec-lede{grid-column:1}
  .section-head .sec-index{padding-top:0}
  .stat-strip{grid-template-columns:repeat(2,1fr);gap:20px 0;padding-bottom:36px}
  .stat-strip li:nth-child(3){border-left:0;padding-left:0}
  .stat-strip li:nth-child(3),.stat-strip li:nth-child(4){padding-top:18px;border-top:1px solid var(--dark-line)}
  .cap-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:1fr;gap:0}
  .step{border-top:1px solid var(--line);padding:20px 0 22px 0;padding-left:0}
  .step::before{display:none}
  .form{grid-template-columns:1fr}
  .field-full,.btn-submit,.form-status{grid-column:1}
  .why-list li{grid-template-columns:1fr;gap:6px}
  .footer-links{margin-left:0;order:3;width:100%}
  .hero-art{min-height:300px}
  .frame{width:60%}
  .frame-front{left:20%}
  .frame-mid{left:0}
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
  <rect width="64" height="64" rx="14" fill="#0B0B0C"/>
  <rect x="14" y="19" width="26" height="26" rx="5" fill="none" stroke="#C9F74D" stroke-width="3"/>
  <path d="M49 24v16" stroke="#C9F74D" stroke-width="3" stroke-linecap="round"/>
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

async function handleContact(request, env) {
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

  if (env && env.LEADS) {
    await env.LEADS.put('lead:' + lead.at + ':' + crypto.randomUUID(), JSON.stringify(lead));
  } else {
    console.log('lead', JSON.stringify(lead));
  }

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
        return await handleContact(request, env);
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
