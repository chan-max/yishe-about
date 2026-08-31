<script setup>
import { ref, onMounted, onUnmounted } from "vue";

/*
 * 衣设 1s.design - 从免费创作到个性化 POD 社区
 *
 * 从左到右表达产品思想：需求进入 → 免费创作 → 智能编排 → 商品化 →
 * 社区与全球履约。节点名称对应真实产品能力，既讲清架构，也讲清价值闭环。
 */
const WORKFLOW_BRAND = '#6900ff';
const WORKFLOW_HUE = 265;
const NEUTRAL_HUE = 220;
const ACCENT_NODES = new Set(['inspiration', 'free', 'middle', 'work', 'pod']);
const stages = [
  { x: 0.08, label: '创意灵感' },
  { x: 0.23, label: '免费创作' },
  { x: 0.40, label: '智能中台' },
  { x: 0.62, label: '作品 / POD' },
  { x: 0.76, label: '渠道发布' },
  { x: 0.90, label: '独立站 / 交付' },
];

/* ── 节点：用一条横向主链讲清“创意 → 作品 → 发布 → 交付”，能力节点作为树枝展开 ── */
const nodes = [
  // 1. 创意起点
  { id: 'inspiration', x: 0.08, y: 0.50, size: 29, title: '创意灵感', subtitle: 'IDEA', type: 'idea', shape: 'card', level: 'root', hue: WORKFLOW_HUE },

  // 2. 免费创作：降低门槛，让每个人都能开始。
  { id: 'free', x: 0.23, y: 0.50, size: 28, title: '免费创作', subtitle: 'FREE-FIRST', type: 'free', shape: 'card', parent: 'inspiration', ring: true, hue: WORKFLOW_HUE },
  { id: 'tool', x: 0.34, y: 0.20, size: 24, title: '设计工具', subtitle: 'yishe-tool', type: 'design', shape: 'card', parent: 'free', hue: NEUTRAL_HUE },
  { id: 'assistant', x: 0.34, y: 0.40, size: 24, title: 'AI 助手', subtitle: 'AIGC', type: 'ai', shape: 'card', parent: 'free', hue: NEUTRAL_HUE },
  { id: 'resources', x: 0.34, y: 0.60, size: 24, title: '免费素材', subtitle: 'ASSETS', type: 'library', shape: 'card', parent: 'free', hue: NEUTRAL_HUE },
  { id: 'plugins', x: 0.34, y: 0.80, size: 24, title: '桌面 / 扩展', subtitle: 'CLIENT + PS', type: 'extensions', shape: 'card', parent: 'free', hue: NEUTRAL_HUE },

  // 3. 智能中台：将创作能力变成可复用、可自动化的生产系统。
  { id: 'middle', x: 0.48, y: 0.50, size: 28, title: '智能中台', subtitle: 'SYSTEM CORE', type: 'platform', shape: 'card', parent: 'free', ring: true, hue: WORKFLOW_HUE },
  { id: 'server', x: 0.48, y: 0.18, size: 23, title: '算力中枢', subtitle: 'yishe-server', type: 'compute', shape: 'card', parent: 'middle', hue: NEUTRAL_HUE },
  { id: 'workflow', x: 0.48, y: 0.36, size: 25, title: '工作流', subtitle: '100+ NODES', type: 'workflow', shape: 'card', parent: 'middle', hue: NEUTRAL_HUE },
  { id: 'admin', x: 0.48, y: 0.64, size: 24, title: '运营中台', subtitle: 'yishe-admin', type: 'platform', shape: 'card', parent: 'middle', hue: NEUTRAL_HUE },
  { id: 'proof', x: 0.48, y: 0.82, size: 23, title: '智能打样', subtitle: 'MOCKUP', type: 'desktop', shape: 'card', parent: 'middle', hue: NEUTRAL_HUE },

  // 4. 作品结果
  { id: 'work', x: 0.62, y: 0.38, size: 29, title: '优秀作品', subtitle: 'DESIGN OUTPUT', type: 'product', shape: 'card', parent: 'middle', ring: true, hue: WORKFLOW_HUE },

  // 5. 多渠道发布：同一件作品可以被发布到不同场景。
  { id: 'site', x: 0.90, y: 0.18, size: 23, title: '独立站', subtitle: '1s.design', type: 'store', shape: 'card', parent: 'work', hue: NEUTRAL_HUE },
  { id: 'ecommerce', x: 0.76, y: 0.34, size: 23, title: '电商平台', subtitle: 'MULTI-CHANNEL', type: 'platforms', shape: 'card', parent: 'work', hue: NEUTRAL_HUE },
  { id: 'social', x: 0.76, y: 0.58, size: 23, title: '自媒体', subtitle: 'SOCIAL MEDIA', type: 'analytics', shape: 'card', parent: 'work', hue: NEUTRAL_HUE },
  { id: 'share', x: 0.76, y: 0.82, size: 23, title: '社区分享', subtitle: 'COMMUNITY', type: 'platform', shape: 'card', parent: 'work', hue: NEUTRAL_HUE },

  // 6. POD：按需生产，连接创意与真实商品。
  { id: 'pod', x: 0.62, y: 0.72, size: 28, title: 'POD 商品', subtitle: 'ON DEMAND', type: 'product', shape: 'card', parent: 'work', ring: true, hue: WORKFLOW_HUE },
  { id: 'delivery', x: 0.90, y: 0.72, size: 24, title: '全球交付', subtitle: 'FULFILLMENT', type: 'deliver', shape: 'card', parent: 'pod', hue: NEUTRAL_HUE },
];

/* ── 主链 + 分支 + 少量双向通信：复杂的是关系，不是装饰 ── */
const connections = [
  [0, 1],
  [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
  [6, 7], [6, 8], [6, 9], [6, 10], [6, 11],
  [11, 12], [11, 13], [11, 14], [11, 15],
  [12, 16], [13, 16], [14, 16], [15, 16],
  [16, 17],
  // 能力之间的沟通与反馈
  [2, 3, 'communication'], [2, 8, 'communication'],
  [3, 7, 'communication'], [4, 8, 'communication'],
  [5, 9, 'communication'], [8, 11, 'communication'],
  [12, 13, 'communication'], [13, 14, 'communication'],
  [14, 15, 'communication'], [15, 1, 'communication'],
  [16, 11, 'communication'], [17, 15, 'communication'],
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
    this.particles = Array.from({ length: 15 }, () => ({
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
    const hoveredIndex = this.nodes.findIndex((item) => item.id === this.hoveredId);
    const nodeIndex = this.nodes.findIndex((item) => item.id === node.id);
    return (
      node.id === this.hoveredId ||
      this.connections.some(
        ([from, to]) =>
          (from === hoveredIndex && to === nodeIndex) ||
          (to === hoveredIndex && from === nodeIndex),
      )
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

    // 参考工作流画布使用低对比点阵：提供对齐感，但不与节点争夺注意力。
    gctx.fillStyle = "rgba(156, 166, 205, 0.115)";
    const gap = this.w < 560 ? 26 : 34;
    for (let x = gap / 2; x < this.w; x += gap) {
      for (let y = gap / 2; y < this.h; y += gap) {
        gctx.beginPath();
        gctx.arc(x, y, 1.15, 0, Math.PI * 2);
        gctx.fill();
      }
    }

    // 阶段标题和淡淡的分隔线，让横向阅读顺序在第一眼就成立。
    gctx.textAlign = 'center';
    gctx.textBaseline = 'top';
    gctx.font = '600 8px Inter, -apple-system, sans-serif';
    stages.forEach(({ x, label }, index) => {
      const px = x * this.w;
      gctx.fillStyle = index === 2 ? 'rgba(184, 155, 255, 0.82)' : 'rgba(214, 219, 239, 0.46)';
      gctx.fillText(label, px, 9);
      if (index > 0) {
        gctx.strokeStyle = 'rgba(154, 163, 205, 0.10)';
        gctx.setLineDash([2, 5]);
        gctx.beginPath();
        gctx.moveTo(px - this.w * 0.095, 27);
        gctx.lineTo(px - this.w * 0.095, this.h - 18);
        gctx.stroke();
        gctx.setLineDash([]);
      }
    });
    this.gridCached = true;
  }

  nodeScale(node) {
    return (node.size + 1.2) * Math.min(1, Math.max(0.72, this.w / 560));
  }

  nodeHue(node) {
    // 保留每个模块很轻的色相差异；饱和度统一在绘制阶段控制，避免变成彩虹色。
    return node.hue ?? NEUTRAL_HUE;
  }

  curve(a, b) {
    const source = this.pos(this.nodes[a]);
    const target = this.pos(this.nodes[b]);
    const sourceExtent = this.nodeExtent(this.nodes[a], this.nodeScale(this.nodes[a]));
    const targetExtent = this.nodeExtent(this.nodes[b], this.nodeScale(this.nodes[b]));
    const direction = Math.sign(target.x - source.x) || 1;
    const sameColumn = Math.abs(target.x - source.x) < 1;
    if (sameColumn) {
      const sideX = source.x + sourceExtent / 2 + 18;
      const start = { x: source.x + sourceExtent / 2, y: source.y };
      const end = { x: target.x + targetExtent / 2, y: target.y };
      return {
        p1: start,
        p2: end,
        points: [start, { x: sideX, y: start.y }, { x: sideX, y: end.y }, end],
      };
    }
    const start = { x: source.x + direction * sourceExtent / 2, y: source.y };
    const end = { x: target.x - direction * targetExtent / 2, y: target.y };
    const elbowX = start.x + (end.x - start.x) * 0.5;
    // 正交连线更像真正的树：先从父节点横向出线，再沿共享竖干分叉，最后进入子节点。
    return {
      p1: start,
      p2: end,
      points: [start, { x: elbowX, y: start.y }, { x: elbowX, y: end.y }, end],
    };
  }

  pointOnPath(path, progress) {
    const lengths = [];
    let total = 0;
    for (let i = 1; i < path.points.length; i++) {
      const a = path.points[i - 1];
      const b = path.points[i];
      const length = Math.hypot(b.x - a.x, b.y - a.y);
      lengths.push(length);
      total += length;
    }
    let remaining = total * progress;
    for (let i = 1; i < path.points.length; i++) {
      const a = path.points[i - 1];
      const b = path.points[i];
      const length = lengths[i - 1];
      if (remaining <= length || i === path.points.length - 1) {
        const ratio = length ? Math.min(1, remaining / length) : 0;
        return { x: a.x + (b.x - a.x) * ratio, y: a.y + (b.y - a.y) * ratio };
      }
      remaining -= length;
    }
    return path.p2;
  }

  drawArrow(c, progress, hue, alpha = 0.46, reverse = false) {
    const p = this.pointOnPath(c, progress);
    const next = this.pointOnPath(c, Math.min(1, progress + 0.025));
    const angle = Math.atan2(next.y - p.y, next.x - p.x) + (reverse ? Math.PI : 0);
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
    this.connections.forEach(([a, b, kind], edgeIndex) => {
      const parentLink = this.nodes[b].parent === this.nodes[a].id;
      const communicationLink = kind === 'communication';
      const hoverLink =
        this.hoveredId === this.nodes[a].id || this.hoveredId === this.nodes[b].id;
      const c = this.curve(a, b);
      ctx.beginPath();
      ctx.moveTo(c.points[0].x, c.points[0].y);
      c.points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
      const alpha = hoverLink ? 0.72 : parentLink ? 0.34 : communicationLink ? 0.16 : 0.24;
      ctx.strokeStyle = hoverLink
        ? WORKFLOW_BRAND
        : communicationLink
        ? `rgba(153, 164, 190, ${alpha})`
        : `rgba(177, 185, 210, ${alpha})`;
      ctx.setLineDash(communicationLink ? [4, 5] : []);
      ctx.lineWidth = hoverLink ? 2.25 : communicationLink ? 1 : 1.45;
      ctx.stroke();
      ctx.setLineDash([]);
      if (communicationLink) {
        // 双向箭头表示节点间是持续通信，而非单向依赖。
        this.drawArrow(c, 0.17, NEUTRAL_HUE, hoverLink ? 0.8 : 0.38);
        this.drawArrow(c, 0.83, NEUTRAL_HUE, hoverLink ? 0.8 : 0.38, true);
      } else {
        this.drawArrow(c, 0.87, NEUTRAL_HUE, hoverLink ? 0.8 : 0.46);
      }

      const particle = this.particles[edgeIndex];
      if (particle) {
        const progress = (particle.t + t * particle.speed) % 1;
        const point = this.pointOnPath(c, progress);
        ctx.beginPath();
        ctx.arc(point.x, point.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = hoverLink
          ? `hsla(${WORKFLOW_HUE}, 70%, 72%, 1)`
          : `rgba(190, 198, 220, ${communicationLink ? 0.42 : 0.72})`;
        ctx.fill();
      }
    });
  }

  nodeExtent(node, s) {
    // 所有节点统一为带圆角的方形卡片，尺寸只通过层级大小区分。
    return s * 1.8;
  }

  nodeHeight(node, extent) {
    return extent;
  }

  nodePath(node, p, s, multiplier = 1) {
    const { ctx } = this;
    const extent = this.nodeExtent(node, s) * multiplier;
    ctx.beginPath();
    const radius = Math.max(5, extent * 0.2);
    ctx.roundRect(p.x - extent / 2, p.y - extent / 2, extent, extent, radius);
  }

  drawNode(node) {
    const { ctx, t } = this;
    const p = this.pos(node);
    const pulse = Math.sin(t * 0.0008 + node.x * 5) * 1.2;
    // 横向多阶段在窄屏中等比缩放；桌面端保留每个中枢节点的视觉权重。
    const densityScale = Math.min(1, Math.max(0.72, this.w / 560));
    const s = (node.size + pulse) * densityScale;
    const hue = this.nodeHue(node);
    const extent = this.nodeExtent(node, s);
    const height = this.nodeHeight(node, extent);
    const isParent = this.nodes.some((item) => item.parent === node.id);
    const prominent = Boolean(node.ring || isParent || node.level === "root");
    const hovered = node.id === this.hoveredId;
    const related = this.isRelated(node);

    this.nodePath(node, p, s);
    // 节点保持克制：用同一套深色底，只让各模块的色相在底色和边框中轻轻出现。
    const card = ctx.createLinearGradient(
      p.x - extent / 2,
      p.y - extent / 2,
      p.x + extent / 2,
      p.y + extent / 2,
    );
    card.addColorStop(0, `hsla(${hue}, ${prominent ? 32 : 22}%, ${prominent ? 19 : 15}%, 0.98)`);
    card.addColorStop(1, '#10151d');
    ctx.fillStyle = card;
    ctx.fill();
    ctx.strokeStyle = prominent
      ? `hsla(${hue}, 54%, 72%, 0.62)`
      : `hsla(${hue}, 34%, 72%, 0.42)`;
    ctx.lineWidth = hovered ? 2.4 : prominent ? 1.7 : 1.2;
    ctx.stroke();

    // Hover 只增强局部轮廓与文字，不缩放、不位移节点，避免画布整体跳动。
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
    ctx.fillText(node.title, p.x, p.y + height / 2 + 12);
    ctx.font = `${prominent ? 700 : 650} ${7.2 * fontScale}px Inter, -apple-system, sans-serif`;
    ctx.fillStyle = `hsla(${hue}, 52%, 72%, ${hovered ? 0.9 : prominent ? 0.72 : related ? 0.72 : 0.62})`;
    ctx.fillText(node.subtitle, p.x, p.y + height / 2 + 22);
  }

  drawIcon(node, p, s, t, emphasized = false) {
    const { ctx } = this;
    const scale = s * 1.08; // 图标是节点的视觉重点，尽量填满方形卡片内部。
    const hue = this.nodeHue(node);
    ctx.save();
    ctx.translate(p.x, p.y);
    // 图标使用更高的笔画权重，确保在深色背景和小尺寸节点中仍然清晰。
    const iconHue = this.nodeHue(node);
    ctx.strokeStyle = `hsla(${iconHue}, ${emphasized ? 68 : 48}%, ${emphasized ? 84 : 78}%, 1)`;
    ctx.fillStyle = `hsla(${iconHue}, ${emphasized ? 64 : 44}%, ${emphasized ? 72 : 70}%, ${emphasized ? 0.28 : 0.16})`;
    ctx.lineWidth = Math.max(2.2, s * (emphasized ? 0.1 : 0.09));
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    switch (node.type) {
      case "free":
        // 星芒与加号：表达“先免费创作”，不是把创作能力设成门槛。
        ctx.beginPath();
        ctx.moveTo(0, -scale * 0.42);
        ctx.lineTo(scale * 0.1, -scale * 0.1);
        ctx.lineTo(scale * 0.42, 0);
        ctx.lineTo(scale * 0.1, scale * 0.1);
        ctx.lineTo(0, scale * 0.42);
        ctx.lineTo(-scale * 0.1, scale * 0.1);
        ctx.lineTo(-scale * 0.42, 0);
        ctx.lineTo(-scale * 0.1, -scale * 0.1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(scale * 0.48, -scale * 0.32);
        ctx.lineTo(scale * 0.48, -scale * 0.08);
        ctx.moveTo(scale * 0.36, -scale * 0.2);
        ctx.lineTo(scale * 0.6, -scale * 0.2);
        ctx.stroke();
        break;
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
      case "personalize":
        // 用户画像 + 调整旋钮：表达根据偏好生成独特结果。
        ctx.beginPath();
        ctx.arc(0, -scale * 0.22, scale * 0.16, 0, Math.PI * 2);
        ctx.stroke();
        ctx.arc(0, scale * 0.2, scale * 0.29, Math.PI, Math.PI * 2);
        ctx.stroke();
        [-0.28, 0, 0.28].forEach((y, index) => {
          ctx.beginPath();
          ctx.moveTo(-scale * 0.42, scale * y);
          ctx.lineTo(scale * 0.42, scale * y);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(scale * (index === 1 ? 0.18 : -0.12), scale * y, scale * 0.07, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
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
      case "deliver":
        // 包裹 + 箭头（全球履约）
        ctx.strokeRect(-scale * 0.35, -scale * 0.2, scale * 0.7, scale * 0.45);
        ctx.beginPath();
        ctx.moveTo(0, -scale * 0.2);
        ctx.lineTo(0, scale * 0.25);
        ctx.moveTo(-scale * 0.2, scale * 0.05);
        ctx.lineTo(0, scale * 0.25);
        ctx.lineTo(scale * 0.2, scale * 0.05);
        ctx.stroke();
        // 飞行弧线
        ctx.beginPath();
        ctx.moveTo(scale * 0.15, -scale * 0.32);
        ctx.quadraticCurveTo(scale * 0.4, -scale * 0.5, scale * 0.5, -scale * 0.28);
        ctx.stroke();
        break;
      case "customer":
        // 人形轮廓：结果最终回到真实用户，而不是停留在技术链路中。
        ctx.beginPath();
        ctx.arc(0, -scale * 0.2, scale * 0.18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, scale * 0.28, scale * 0.34, Math.PI, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;
      case "goal": {
        // 星芒 + 勾选：表达'好的设计产品'是系统最终产出，而不是物流终点。
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
