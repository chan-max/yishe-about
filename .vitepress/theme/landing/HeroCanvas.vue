<script setup>
import { ref, onMounted, onUnmounted } from "vue";

/*
 * 衣设 1s.design — 从灵感源点到设计产品的创意基础设施
 *
 * 这张图不是单纯的技术拓扑：第一行是用户看得见的创作入口，第二行是
 * design-server 提供 AI / 工作流基础设施，下面连接用户体验、商业运营
 * 与柔性制造，最终汇聚为“设计产品”。节点名称对应真实仓库，
 * 让产品叙事与 SaaS 架构保持一致。
 */
const WORKFLOW_BRAND = "#6900ff";
const WORKFLOW_HUE = 265; // #6900ff 的 HSL 色相

const nodes = [
  // 第一层：一个出发点。
  {
    id: "idea",
    x: 0.5,
    y: 0.08,
    size: 35,
    title: "灵感源点",
    subtitle: "ORIGIN",
    type: "idea",
    shape: "circle",
    level: "root",
    hue: WORKFLOW_HUE,
  },

  // 第二层：灵感被拆成创作路径。
  {
    id: "canvas",
    x: 0.37,
    y: 0.22,
    size: 31,
    title: "意念构形",
    subtitle: "CANVAS",
    type: "design",
    shape: "circle",
    parent: "idea",
    ring: true,
    hue: 260,
  },
  {
    id: "ai",
    x: 0.63,
    y: 0.22,
    size: 33,
    title: "智能创制",
    subtitle: "INTELLIGENCE",
    type: "ai",
    shape: "circle",
    parent: "idea",
    ring: true,
    hue: 300,
  },

  // 第三层：设计能力沉淀为素材、算力与可编排的工作流。
  {
    id: "library",
    x: 0.17,
    y: 0.38,
    size: 28,
    title: "视觉资产",
    subtitle: "200K+ ASSETS",
    type: "library",
    shape: "square",
    parent: "ai",
    hue: 326,
  },
  {
    id: "compute",
    x: 0.39,
    y: 0.38,
    size: 28,
    title: "计算基座",
    subtitle: "AI COMPUTE",
    type: "compute",
    shape: "square",
    parent: "ai",
    hue: 212,
  },
  {
    id: "vector",
    x: 0.61,
    y: 0.38,
    size: 28,
    title: "语义索引",
    subtitle: "QDRANT",
    type: "vector",
    shape: "square",
    parent: "ai",
    hue: 195,
  },
  {
    id: "workflow",
    x: 0.83,
    y: 0.38,
    size: 35,
    title: "智能编排",
    subtitle: "100+ NODES",
    type: "workflow",
    shape: "circle",
    parent: "ai",
    ring: true,
    hue: WORKFLOW_HUE,
  },

  // 第四层：design-server 通过 API 把能力交给各个产品端。
  {
    id: "gateway",
    x: 0.1,
    y: 0.55,
    size: 33,
    title: "能力中枢",
    subtitle: "design-server · CORE API",
    type: "gateway",
    shape: "circle",
    parent: "workflow",
    ring: true,
    hue: 248,
  },
  {
    id: "nuxt",
    x: 0.3,
    y: 0.55,
    size: 28,
    title: "体验前台",
    subtitle: "yishe-nuxt · EXPERIENCE",
    type: "nuxt",
    shape: "square",
    parent: "gateway",
    hue: 168,
  },
  {
    id: "admin",
    x: 0.5,
    y: 0.55,
    size: 33,
    title: "商业中枢",
    subtitle: "yishe-admin · COMMERCE OS",
    type: "platform",
    shape: "circle",
    parent: "gateway",
    ring: true,
    hue: 278,
  },
  {
    id: "client",
    x: 0.7,
    y: 0.55,
    size: 29,
    title: "创作终端",
    subtitle: "yishe-client · RUNTIME",
    type: "desktop",
    shape: "square",
    parent: "gateway",
    hue: 185,
  },
  {
    id: "extensions",
    x: 0.9,
    y: 0.55,
    size: 28,
    title: "生态扩展",
    subtitle: "yishe-extensions · ECOSYSTEM",
    type: "extensions",
    shape: "square",
    parent: "client",
    hue: 145,
  },

  // 第五层：产品、渠道和数据形成可增长的商业闭环。
  {
    id: "analytics",
    x: 0.1,
    y: 0.73,
    size: 28,
    title: "增长洞察",
    subtitle: "INSIGHTS",
    type: "analytics",
    shape: "square",
    parent: "admin",
    hue: 42,
  },
  {
    id: "shop",
    x: 0.3,
    y: 0.73,
    size: 29,
    title: "品牌矩阵",
    subtitle: "SITE MATRIX",
    type: "store",
    shape: "circle",
    parent: "nuxt",
    hue: 320,
  },
  {
    id: "platforms",
    x: 0.5,
    y: 0.73,
    size: 29,
    title: "渠道网络",
    subtitle: "17+ CHANNELS",
    type: "platforms",
    shape: "square",
    parent: "admin",
    hue: 340,
  },
  {
    id: "product",
    x: 0.7,
    y: 0.73,
    size: 32,
    title: "产品成形",
    subtitle: "POD PRODUCT",
    type: "product",
    shape: "circle",
    parent: "shop",
    hue: 132,
  },
  {
    id: "supply",
    x: 0.9,
    y: 0.73,
    size: 31,
    title: "柔性制造",
    subtitle: "SUPPLY NETWORK",
    type: "supply",
    shape: "square",
    parent: "product",
    hue: 104,
  },

  // 第六层：所有业务最终汇聚到目标。
  {
    id: "goal",
    x: 0.5,
    y: 0.92,
    size: 36,
    title: "设计产品",
    subtitle: "GOOD DESIGN, REALIZED",
    type: "goal",
    shape: "circle",
    parent: "supply",
    level: "goal",
    ring: true,
    hue: WORKFLOW_HUE,
  },
];

// 实线表示父子主链路，虚线表示跨模块复用能力，全部自上而下汇聚到目标。
const connections = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [1, 4],
  [2, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [5, 6],
  [6, 7],
  [6, 8],
  [6, 9],
  [6, 10],
  [6, 11],
  [7, 8],
  [8, 13],
  [9, 12],
  [9, 14],
  [10, 11],
  [10, 14],
  [11, 14],
  [12, 13],
  [13, 15],
  [14, 15],
  [15, 16],
  [15, 17],
  [16, 17],
];

const canvasRef = ref(null);
let instance = null;

class YishePyramidCanvas {
  constructor(canvas, nodes, connections) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.nodes = nodes;
    this.connections = connections;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = 0;
    this.h = 0;
    this.t = 0;
    this.pointer = { x: 0, y: 0 };
    this.hoveredId = null;
    this.particles = [];
    this.gridCached = false;
    this.gridCanvas = null;
    this.animationId = null;

    this._loop = this.loop.bind(this);
    this._resize = this.resize.bind(this);
    this._mouse = this.onMouse.bind(this);
    this._leave = () => {
      this.hoveredId = null;
      this.canvas.style.cursor = "crosshair";
    };

    window.addEventListener("resize", this._resize, { passive: true });
    canvas.addEventListener("mousemove", this._mouse, { passive: true });
    canvas.addEventListener("mouseleave", this._leave, { passive: true });

    this.resize();
    this.initParticles();
    this.animationId = requestAnimationFrame(this._loop);
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    this.w = Math.max(1, r.width);
    this.h = Math.max(1, r.height);
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.w * this.dpr);
    this.canvas.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.gridCached = false;
    this.gridCanvas = null;
  }

  onMouse(e) {
    const r = this.canvas.getBoundingClientRect();
    this.pointer.x = e.clientX - r.left;
    this.pointer.y = e.clientY - r.top;

    // Hover 只改变视觉层，不再推动所有节点的位置，彻底消除进入节点时的整体晃动。
    let nextId = null;
    let nearestDistance = Infinity;
    this.nodes.forEach((node) => {
      const point = this.pos(node);
      const scale = (node.size + 1.2) * Math.min(1, Math.max(0.72, this.w / 560));
      const distance = Math.hypot(this.pointer.x - point.x, this.pointer.y - point.y);
      const hitRadius = this.nodeExtent(node, scale) / 2 + 9;
      if (distance <= hitRadius && distance < nearestDistance) {
        nextId = node.id;
        nearestDistance = distance;
      }
    });
    this.hoveredId = nextId;
    this.canvas.style.cursor = nextId ? "pointer" : "crosshair";
  }

  initParticles() {
    // 24 个全局粒子，每条边最多一个，避免“粒子数 × 连接数”的隐性放大。
    this.particles = Array.from({ length: 24 }, () => ({
      t: Math.random(),
      speed: 0.00014 + Math.random() * 0.00018,
      size: 1 + Math.random() * 1.25,
      // 粒子使用品牌紫及相邻色相，保留层次但不制造杂乱彩虹。
      hue: WORKFLOW_HUE - 18 + Math.random() * 36,
    }));
  }

  pos(node) {
    return {
      // 节点使用稳定坐标；hover 不做全局位移，避免鼠标进入时产生跳动。
      x: node.x * this.w,
      y: node.y * this.h,
    };
  }

  isRelated(node) {
    if (!this.hoveredId) return false;
    return (
      node.id === this.hoveredId ||
      node.parent === this.hoveredId ||
      this.nodes.some((item) => item.id === this.hoveredId && item.parent === node.id)
    );
  }

  cacheGrid() {
    if (this.gridCached && this.gridCanvas) return;
    this.gridCanvas = document.createElement("canvas");
    this.gridCanvas.width = Math.round(this.w * this.dpr);
    this.gridCanvas.height = Math.round(this.h * this.dpr);
    const gctx = this.gridCanvas.getContext("2d");
    gctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    gctx.fillStyle = "#090a0f";
    gctx.fillRect(0, 0, this.w, this.h);

    // 网格只在尺寸变化时绘制；动画帧只负责 drawImage。
    gctx.strokeStyle = "rgba(118, 130, 180, 0.045)";
    gctx.lineWidth = 1;
    const gap = this.w < 560 ? 26 : 34;
    for (let x = 0; x <= this.w; x += gap) {
      gctx.beginPath();
      gctx.moveTo(x, 0);
      gctx.lineTo(x, this.h);
      gctx.stroke();
    }
    for (let y = 0; y <= this.h; y += gap) {
      gctx.beginPath();
      gctx.moveTo(0, y);
      gctx.lineTo(this.w, y);
      gctx.stroke();
    }
    this.gridCached = true;
  }

  curve(a, b, edgeIndex = 0) {
    const p1 = this.pos(this.nodes[a]);
    const p2 = this.pos(this.nodes[b]);
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const horizontal = Math.abs(dx) >= Math.abs(dy);
    // 同层连线轻轻拱起，跨层连线加入横向偏移，避免所有线都像直角电路。
    const bend = horizontal ? 0.34 : 0.22;
    const amplitude = horizontal
      ? Math.min(13, Math.max(7, Math.abs(dx) * 0.08))
      : Math.min(16, Math.max(8, Math.abs(dy) * 0.08));
    const direction = edgeIndex % 2 === 0 ? -1 : 1;
    return {
      p1,
      p2,
      c1: {
        x: p1.x + dx * bend + (horizontal ? 0 : amplitude * direction),
        y: p1.y + dy * 0.08 + (horizontal ? amplitude * direction : 0),
      },
      c2: {
        x: p2.x - dx * bend + (horizontal ? 0 : amplitude * direction),
        y: p2.y - dy * 0.08 + (horizontal ? amplitude * direction : 0),
      },
    };
  }

  pointOnCurve(c, progress) {
    const q = 1 - progress;
    return {
      x:
        q ** 3 * c.p1.x +
        3 * q ** 2 * progress * c.c1.x +
        3 * q * progress ** 2 * c.c2.x +
        progress ** 3 * c.p2.x,
      y:
        q ** 3 * c.p1.y +
        3 * q ** 2 * progress * c.c1.y +
        3 * q * progress ** 2 * c.c2.y +
        progress ** 3 * c.p2.y,
    };
  }

  drawArrow(c, progress, hue, alpha = 0.46) {
    const p = this.pointOnCurve(c, progress);
    const next = this.pointOnCurve(c, Math.min(1, progress + 0.025));
    const angle = Math.atan2(next.y - p.y, next.x - p.x);
    const size = 4;
    const { ctx } = this;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(size, 0);
    ctx.lineTo(-size * 0.7, size * 0.65);
    ctx.lineTo(-size * 0.7, -size * 0.65);
    ctx.closePath();
    ctx.fillStyle = `hsla(${hue}, 65%, 65%, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  drawConnections() {
    const { ctx, t } = this;
    this.connections.forEach(([a, b], edgeIndex) => {
      const parentLink = this.nodes[b].parent === this.nodes[a].id;
      const hoverLink =
        this.hoveredId === this.nodes[a].id || this.hoveredId === this.nodes[b].id;
      const c = this.curve(a, b, edgeIndex);
      ctx.beginPath();
      ctx.moveTo(c.p1.x, c.p1.y);
      ctx.bezierCurveTo(c.c1.x, c.c1.y, c.c2.x, c.c2.y, c.p2.x, c.p2.y);
      const grad = ctx.createLinearGradient(c.p1.x, c.p1.y, c.p2.x, c.p2.y);
      const alpha = hoverLink ? 0.72 : parentLink ? 0.34 : 0.14;
      grad.addColorStop(0, `hsla(${this.nodes[a].hue}, 55%, 60%, ${alpha})`);
      grad.addColorStop(1, `hsla(${this.nodes[b].hue}, 55%, 60%, ${alpha})`);
      ctx.strokeStyle = hoverLink ? WORKFLOW_BRAND : grad;
      ctx.setLineDash(parentLink ? [] : [2, 4]);
      ctx.lineWidth = hoverLink ? 2.25 : parentLink ? 1.7 : 1.05;
      ctx.stroke();
      ctx.setLineDash([]);
      this.drawArrow(c, 0.87, this.nodes[b].hue, hoverLink ? 0.8 : 0.46);

      // 只给前 24 条边配置粒子，直接按下标读取，避免每帧 find。
      const particle = this.particles[edgeIndex];
      if (particle) {
        const progress = (particle.t + t * particle.speed) % 1;
        const point = this.pointOnCurve(c, progress);
        ctx.beginPath();
        ctx.arc(point.x, point.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 75%, 68%, ${hoverLink ? 1 : 0.85})`;
        ctx.fill();
      }
    });
  }

  nodeExtent(node, s) {
    return node.shape === "circle" ? s * 2 : s * 1.65;
  }

  nodePath(node, p, s, multiplier = 1) {
    const { ctx } = this;
    const extent = this.nodeExtent(node, s) * multiplier;
    ctx.beginPath();
    if (node.shape === "circle") {
      ctx.arc(p.x, p.y, extent / 2, 0, Math.PI * 2);
    } else {
      ctx.rect(p.x - extent / 2, p.y - extent / 2, extent, extent);
    }
  }

  drawSquareAccents(node, p, extent) {
    if (node.shape !== "square") return;
    const { ctx } = this;
    const half = extent / 2;
    const inset = extent * 0.12;
    const corner = extent * 0.17;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.strokeStyle = `hsla(${node.hue}, 70%, 72%, 0.62)`;
    ctx.lineWidth = 1.15;
    ctx.beginPath();
    // 四角只强调结构，不改变正方形轮廓。
    ctx.moveTo(-half + inset, -half + inset + corner);
    ctx.lineTo(-half + inset, -half + inset);
    ctx.lineTo(-half + inset + corner, -half + inset);
    ctx.moveTo(half - inset - corner, -half + inset);
    ctx.lineTo(half - inset, -half + inset);
    ctx.lineTo(half - inset, -half + inset + corner);
    ctx.moveTo(-half + inset, half - inset - corner);
    ctx.lineTo(-half + inset, half - inset);
    ctx.lineTo(-half + inset + corner, half - inset);
    ctx.moveTo(half - inset - corner, half - inset);
    ctx.lineTo(half - inset, half - inset);
    ctx.lineTo(half - inset, half - inset - corner);
    ctx.stroke();
    ctx.restore();
  }

  drawNode(node) {
    const { ctx, t } = this;
    const p = this.pos(node);
    const pulse = Math.sin(t * 0.0008 + node.x * 5) * 1.2;
    // 5 列在窄屏中仍保持呼吸感；桌面端使用节点定义的重点层级尺寸。
    const densityScale = Math.min(1, Math.max(0.72, this.w / 560));
    const s = (node.size + pulse) * densityScale;
    const hue = node.hue;
    const extent = this.nodeExtent(node, s);
    const isParent = this.nodes.some((item) => item.parent === node.id);
    const prominent = Boolean(node.ring || isParent || node.level === "root");
    const hovered = node.id === this.hoveredId;
    const related = this.isRelated(node);

    // 用径向渐变模拟极轻的层次，避免高成本阴影。
    const glow = ctx.createRadialGradient(
      p.x,
      p.y,
      s * 0.35,
      p.x,
      p.y,
      s * 1.9,
    );
    glow.addColorStop(0, `hsla(${hue}, 55%, 55%, 0.10)`);
    glow.addColorStop(1, `hsla(${hue}, 55%, 55%, 0)`);
    this.nodePath(node, p, s, 1.8);
    ctx.fillStyle = glow;
    ctx.fill();

    if (node.ring) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(t * 0.0005);
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.98, -0.7, 1.8);
      ctx.strokeStyle = `hsla(${hue}, 60%, 62%, 0.42)`;
      ctx.lineWidth = 1.1;
      ctx.stroke();
      ctx.restore();
    }

    this.nodePath(node, p, s);
    const core = ctx.createLinearGradient(
      p.x - extent / 2,
      p.y - extent / 2,
      p.x + extent / 2,
      p.y + extent / 2,
    );
    core.addColorStop(0, `hsla(${hue}, 28%, 17%, 0.96)`);
    core.addColorStop(1, "rgba(12, 14, 22, 0.98)");
    ctx.fillStyle = core;
    ctx.fill();
    ctx.strokeStyle = `hsla(${hue}, 58%, 62%, 0.34)`;
    ctx.lineWidth = hovered ? 2.4 : prominent ? 1.7 : 1.2;
    ctx.stroke();
    this.drawSquareAccents(node, p, extent);

    // Hover 采用局部轮廓和径向渐变反馈，不缩放、不位移节点，避免画布整体跳动。
    if (hovered) {
      this.nodePath(node, p, s, 1.14);
      ctx.strokeStyle = WORKFLOW_BRAND;
      ctx.lineWidth = 1.55;
      ctx.stroke();
    }

    this.drawIcon(node, p, s, t, hovered || prominent);
    ctx.textAlign = "center";
    const fontScale = Math.min(1, Math.max(0.8, this.w / 600));
    ctx.font = `${hovered ? 850 : prominent ? 800 : 700} ${(prominent ? 10 : 9) * fontScale}px Inter, -apple-system, sans-serif`;
    ctx.fillStyle = hovered
      ? "rgba(255, 255, 255, 1)"
      : prominent
      ? "rgba(255, 255, 255, 0.92)"
      : "rgba(255, 255, 255, 0.82)";
    ctx.fillText(node.title, p.x, p.y + extent / 2 + 12);
    ctx.font = `${prominent ? 700 : 650} ${7.2 * fontScale}px Inter, -apple-system, sans-serif`;
    ctx.fillStyle = `hsla(${hue}, 52%, 72%, ${hovered ? 0.9 : prominent ? 0.72 : related ? 0.72 : 0.62})`;
    ctx.fillText(node.subtitle, p.x, p.y + extent / 2 + 22);
  }

  drawIcon(node, p, s, t, emphasized = false) {
    const { ctx } = this;
    const scale = s * 0.9; // 图标保持占节点约 90%，避免再次出现图标过小。
    const hue = node.hue;
    ctx.save();
    ctx.translate(p.x, p.y);
    // 图标使用更高的笔画权重，确保在深色背景和小尺寸节点中仍然清晰。
    ctx.strokeStyle = `hsla(${hue}, 64%, 74%, ${emphasized ? 1 : 0.96})`;
    ctx.fillStyle = `hsla(${hue}, 64%, 68%, ${emphasized ? 0.3 : 0.24})`;
    ctx.lineWidth = Math.max(2.2, s * (emphasized ? 0.1 : 0.09));
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    switch (node.type) {
      case "idea":
        ctx.beginPath();
        ctx.arc(0, -scale * 0.08, scale * 0.28, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-scale * 0.18, scale * 0.18);
        ctx.lineTo(scale * 0.18, scale * 0.18);
        ctx.moveTo(-scale * 0.12, scale * 0.31);
        ctx.lineTo(scale * 0.12, scale * 0.31);
        ctx.stroke();
        break;
      case "design":
        ctx.strokeRect(-scale * 0.42, -scale * 0.28, scale * 0.7, scale * 0.55);
        ctx.beginPath();
        ctx.moveTo(scale * 0.12, -scale * 0.42);
        ctx.lineTo(scale * 0.44, -scale * 0.1);
        ctx.stroke();
        ctx.fillStyle = `hsla(${hue}, 70%, 70%, 0.8)`;
        ctx.beginPath();
        ctx.arc(-scale * 0.2, -scale * 0.04, scale * 0.07, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "ai": {
        const r = scale * 0.1;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(
            -scale * 0.3,
            -scale * 0.25 + i * scale * 0.25,
            r,
            0,
            Math.PI * 2,
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(
            scale * 0.3,
            -scale * 0.25 + i * scale * 0.25,
            r,
            0,
            Math.PI * 2,
          );
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(-scale * 0.3, -scale * 0.25);
        ctx.lineTo(scale * 0.3, 0);
        ctx.moveTo(-scale * 0.3, 0);
        ctx.lineTo(scale * 0.3, -scale * 0.25);
        ctx.moveTo(-scale * 0.3, 0);
        ctx.lineTo(scale * 0.3, scale * 0.25);
        ctx.moveTo(-scale * 0.3, scale * 0.25);
        ctx.lineTo(scale * 0.3, 0);
        ctx.stroke();
        break;
      }
      case "library":
        ctx.strokeRect(
          -scale * 0.42,
          -scale * 0.34,
          scale * 0.84,
          scale * 0.68,
        );
        ctx.beginPath();
        ctx.arc(-scale * 0.19, -scale * 0.13, scale * 0.07, 0, Math.PI * 2);
        ctx.moveTo(-scale * 0.34, scale * 0.22);
        ctx.lineTo(-scale * 0.08, -scale * 0.02);
        ctx.lineTo(scale * 0.08, scale * 0.12);
        ctx.lineTo(scale * 0.3, -scale * 0.1);
        ctx.stroke();
        break;
      case "nuxt":
        ctx.beginPath();
        ctx.moveTo(0, -scale * 0.45);
        ctx.lineTo(scale * 0.4, -scale * 0.22);
        ctx.lineTo(scale * 0.4, scale * 0.25);
        ctx.lineTo(0, scale * 0.45);
        ctx.lineTo(-scale * 0.4, scale * 0.25);
        ctx.lineTo(-scale * 0.4, -scale * 0.22);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-scale * 0.2, scale * 0.22);
        ctx.lineTo(0, -scale * 0.22);
        ctx.lineTo(scale * 0.25, scale * 0.22);
        ctx.stroke();
        break;
      case "compute":
        ctx.strokeRect(-scale * 0.3, -scale * 0.3, scale * 0.6, scale * 0.6);
        ctx.beginPath();
        ctx.arc(0, 0, scale * 0.13, 0, Math.PI * 2);
        for (let i = 0; i < 4; i++) {
          const a = (i * Math.PI) / 2;
          ctx.moveTo(Math.cos(a) * scale * 0.34, Math.sin(a) * scale * 0.34);
          ctx.lineTo(Math.cos(a) * scale * 0.48, Math.sin(a) * scale * 0.48);
        }
        ctx.stroke();
        break;
      case "vector":
        ctx.beginPath();
        ctx.arc(-scale * 0.08, -scale * 0.07, scale * 0.27, 0, Math.PI * 2);
        ctx.moveTo(scale * 0.12, scale * 0.13);
        ctx.lineTo(scale * 0.4, scale * 0.4);
        ctx.stroke();
        ctx.fillStyle = `hsla(${hue}, 70%, 70%, 0.8)`;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(
            -scale * 0.2 + i * scale * 0.2,
            scale * 0.32,
            scale * 0.045,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
        break;
      case "workflow":
        ctx.fillStyle = `hsla(${hue}, 65%, 68%, 0.7)`;
        [
          [-0.3, -0.2],
          [0.3, -0.2],
          [0, 0.28],
        ].forEach(([x, y]) => {
          ctx.beginPath();
          ctx.arc(scale * x, scale * y, scale * 0.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
        ctx.beginPath();
        ctx.moveTo(-scale * 0.3, -scale * 0.2);
        ctx.lineTo(scale * 0.3, -scale * 0.2);
        ctx.moveTo(-scale * 0.3, -scale * 0.2);
        ctx.lineTo(0, scale * 0.28);
        ctx.moveTo(scale * 0.3, -scale * 0.2);
        ctx.lineTo(0, scale * 0.28);
        ctx.stroke();
        break;
      case "gateway":
        ctx.beginPath();
        ctx.moveTo(-scale * 0.36, -scale * 0.4);
        ctx.lineTo(-scale * 0.36, scale * 0.4);
        ctx.moveTo(scale * 0.36, -scale * 0.4);
        ctx.lineTo(scale * 0.36, scale * 0.4);
        ctx.moveTo(-scale * 0.22, 0);
        ctx.lineTo(scale * 0.27, 0);
        ctx.moveTo(scale * 0.08, -scale * 0.16);
        ctx.lineTo(scale * 0.27, 0);
        ctx.lineTo(scale * 0.08, scale * 0.16);
        ctx.stroke();
        break;
      case "platform": {
        const r = scale * 0.35;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const a = (i * Math.PI) / 4;
          const rr = i % 2 ? r * 0.78 : r;
          ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, scale * 0.12, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case "analytics":
        ctx.beginPath();
        ctx.moveTo(-scale * 0.42, scale * 0.4);
        ctx.lineTo(-scale * 0.42, -scale * 0.4);
        ctx.lineTo(scale * 0.44, -scale * 0.4);
        ctx.stroke();
        ctx.fillStyle = `hsla(${hue}, 72%, 68%, 0.65)`;
        [-0.26, -0.02, 0.22].forEach((x, i) => {
          ctx.fillRect(
            scale * x,
            scale * (0.25 - i * 0.2),
            scale * 0.13,
            scale * (-0.25 + i * 0.2),
          );
        });
        break;
      case "store":
        ctx.strokeRect(-scale * 0.39, -scale * 0.1, scale * 0.78, scale * 0.48);
        ctx.beginPath();
        ctx.moveTo(-scale * 0.46, -scale * 0.1);
        ctx.lineTo(-scale * 0.35, -scale * 0.35);
        ctx.lineTo(scale * 0.35, -scale * 0.35);
        ctx.lineTo(scale * 0.46, -scale * 0.1);
        ctx.moveTo(-scale * 0.13, scale * 0.38);
        ctx.lineTo(-scale * 0.13, scale * 0.08);
        ctx.lineTo(scale * 0.13, scale * 0.08);
        ctx.lineTo(scale * 0.13, scale * 0.38);
        ctx.stroke();
        break;
      case "platforms":
        for (let r = 0; r < 2; r++)
          for (let c = 0; c < 3; c++)
            ctx.strokeRect(
              -scale * 0.4 + c * scale * 0.28,
              -scale * 0.28 + r * scale * 0.28,
              scale * 0.18,
              scale * 0.18,
            );
        break;
      case "desktop":
        ctx.strokeRect(
          -scale * 0.43,
          -scale * 0.32,
          scale * 0.86,
          scale * 0.53,
        );
        ctx.beginPath();
        ctx.moveTo(-scale * 0.16, scale * 0.35);
        ctx.lineTo(scale * 0.16, scale * 0.35);
        ctx.moveTo(0, scale * 0.21);
        ctx.lineTo(0, scale * 0.35);
        ctx.stroke();
        break;
      case "extensions":
        ctx.strokeRect(-scale * 0.35, -scale * 0.35, scale * 0.7, scale * 0.7);
        ctx.beginPath();
        ctx.arc(0, -scale * 0.42, scale * 0.12, 0, Math.PI * 2);
        ctx.arc(scale * 0.42, 0, scale * 0.12, 0, Math.PI * 2);
        ctx.arc(0, scale * 0.42, scale * 0.12, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case "product":
        ctx.beginPath();
        ctx.moveTo(-scale * 0.3, -scale * 0.3);
        ctx.lineTo(-scale * 0.1, -scale * 0.42);
        ctx.lineTo(scale * 0.1, -scale * 0.42);
        ctx.lineTo(scale * 0.3, -scale * 0.3);
        ctx.lineTo(scale * 0.46, -scale * 0.08);
        ctx.lineTo(scale * 0.3, scale * 0.06);
        ctx.lineTo(scale * 0.2, -scale * 0.02);
        ctx.lineTo(scale * 0.2, scale * 0.42);
        ctx.lineTo(-scale * 0.2, scale * 0.42);
        ctx.lineTo(-scale * 0.2, -scale * 0.02);
        ctx.lineTo(-scale * 0.3, scale * 0.06);
        ctx.lineTo(-scale * 0.46, -scale * 0.08);
        ctx.closePath();
        ctx.stroke();
        break;
      case "supply":
        ctx.strokeRect(-scale * 0.42, -scale * 0.1, scale * 0.84, scale * 0.48);
        ctx.beginPath();
        ctx.moveTo(-scale * 0.5, -scale * 0.1);
        ctx.lineTo(0, -scale * 0.45);
        ctx.lineTo(scale * 0.5, -scale * 0.1);
        ctx.moveTo(0, -scale * 0.45);
        ctx.lineTo(0, scale * 0.38);
        ctx.stroke();
        ctx.fillRect(-scale * 0.1, scale * 0.12, scale * 0.2, scale * 0.26);
        break;
      case "goal": {
        // 星芒 + 勾选：表达“好的设计产品”是系统最终产出，而不是物流终点。
        const points = 8;
        ctx.beginPath();
        for (let i = 0; i < points; i++) {
          const angle = -Math.PI / 2 + (i * Math.PI) / 4;
          const radius = i % 2 === 0 ? scale * 0.4 : scale * 0.18;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-scale * 0.18, scale * 0.04);
        ctx.lineTo(-scale * 0.04, scale * 0.18);
        ctx.lineTo(scale * 0.24, -scale * 0.12);
        ctx.stroke();
        break;
      }
    }
    ctx.restore();
  }

  loop(ts) {
    this.t = ts;
    this.cacheGrid();
    this.ctx.drawImage(this.gridCanvas, 0, 0, this.w, this.h);
    this.drawConnections();
    this.nodes.forEach((node) => this.drawNode(node));
    this.animationId = requestAnimationFrame(this._loop);
  }

  destroy() {
    window.removeEventListener("resize", this._resize);
    this.canvas.removeEventListener("mousemove", this._mouse);
    this.canvas.removeEventListener("mouseleave", this._leave);
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.animationId = null;
  }
}

onMounted(() => {
  if (canvasRef.value)
    instance = new YishePyramidCanvas(canvasRef.value, nodes, connections);
});
onUnmounted(() => {
  instance?.destroy();
  instance = null;
});
</script>

<template>
  <div class="workflow-wrapper">
    <canvas ref="canvasRef" class="workflow-canvas" />
  </div>
</template>

<style scoped>
.workflow-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: #0a0a0a;
  border-radius: 12px;
}

.workflow-canvas {
  width: 100%;
  height: 100%;
  min-height: 30rem;
  cursor: crosshair;
  background: #0a0a0a;
  display: block;
}

@media (max-width: 768px) {
  .workflow-wrapper {
    padding: 0.8rem 1rem;
  }
  .workflow-canvas {
    min-height: 26rem;
  }
}
</style>
