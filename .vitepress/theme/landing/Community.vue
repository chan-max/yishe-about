<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Testimonial {
  name: string
  handle: string
  avatar: string
  comment: string[]
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Zhao',
    handle: '@AlexZhao_POD · 跨境电商 POD 亿级卖家 CEO',
    avatar:
      'https://pbs.twimg.com/profile_images/1810837163447308292/8Piov0f6_400x400.jpg',
    comment: [
      `衣设生态彻底颠覆了我们以前几十人的设计和上架团队。现在用 1s.design 配合 yishe-admin，从 AI 灵感生成到一键多平台发布 Temu 和 Shopify 只要几分钟！`,
    ],
  },
  {
    name: 'Elena Rostova',
    handle: '@ElenaDesign · 资深工业与平面设计师',
    avatar:
      'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg',
    comment: [
      `作为独立设计师，我最震撼的是 yishe-extensions 对 Photoshop 的原生融合，配合 1s 的高清矢量引擎，我的每一个灵感都能秒级变成真实的打样实物。`,
    ],
  },
  {
    name: '陈明远',
    handle: '@Chen_SmartFactory · 柔性智造与印花供应链主理人',
    avatar:
      'https://pbs.twimg.com/profile_images/1691627325794725888/voQFcYjY_400x400.jpg',
    comment: [
      '以前做小批量定制最大的痛点就是排版慢、工单乱。接入衣设 design-server 智算中枢后，系统自动智能拼版出图并分发给数码直喷机，生产效率直接提升 500%！',
    ],
  },
  {
    name: 'Marcus Vance',
    handle: '@Vance_Global · 北美潮流独立站主理人',
    avatar:
      'https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_400x400.jpg',
    comment: [
      `我们用 yishe-nuxt 搭建了 9 个不同品类的品牌矩阵，SSR 首屏加载快如闪电，配合实时 3D 渲染打样预览，用户的加购转化率提升了 3.2 倍。`,
      `整个生态的资源共享与多端协同太流畅了。`,
    ],
  },
  {
    name: '林岚',
    handle: '@Lan_AI_Artist · AIGC 创意总监',
    avatar:
      'https://pbs.twimg.com/profile_images/1374778373239681025/Sc9ehtAr_400x400.jpg',
    comment: [
      `1s 画布里的 AI Agent 是我用过最强大的设计助手，不仅能理解复杂的排版意图，更能直接生成工业级印刷标准的高清矢量图。`,
    ],
  },
  {
    name: 'David K.',
    handle: '@DavidK_SaaS · 跨境电商增长专家',
    avatar:
      'https://pbs.twimg.com/profile_images/1911613315765133312/HVkULegC_400x400.jpg',
    comment: ['衣设构建了真正闭环的 POD 商业操作系统：从桌面端批量渲染到云端算力调度，是下一代创作者经济的基础设施。'],
  },
  {
    name: 'Sarah Jenkins',
    handle: '@Sarah_Ecom · Etsy / Amazon 头部卖家',
    avatar:
      'https://pbs.twimg.com/profile_images/3380865881/f73b3687ff39b795db05fcaf35972270_400x400.jpeg',
    comment: [
      '用 yishe-client 的离线推理和一键视频生成功能，我每天能自动制作上百条高清带货视频，店铺曝光量增长了 10 倍！',
    ],
  },
  {
    name: '张一博',
    handle: '@Yibo_FullStack · 资深架构师',
    avatar:
      'https://pbs.twimg.com/profile_images/1910252462126313472/gXgT-jxL_400x400.jpg',
    comment: ['从前端 1s 的响应式画布、Nuxt 独立站群，到后端 design-server 的 LangGraph 编排与 MCP 协议调度，衣设架构堪称全栈典范。'],
  },
  {
    name: 'Michael Chang',
    handle: '@Chang_Creative · 国际文创品牌联合创始人',
    avatar: 'https://avatars.githubusercontent.com/u/13629190?v=4',
    comment: [
      '艺术来源于生活，又回归生活。衣设让我们看到了 AI 赋能实体柔性智造的终极形态，这就是未来的超级生产力！',
    ],
  },
]
</script>

<template>
  <div class="wrapper wrapper--ticks border-t pt-14 sm:pt-30 px-5 sm:px-10">
    <div
      class="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-20 text-center sm:text-left"
    >
      <div class="flex flex-col gap-3">
        <h3 class="text-white max-w-xl text-balance">设计理念与全球生态</h3>
        <p class="max-w-md text-white/70 text-balance">
          艺术来源于生活，又回归生活 · 赋能每一个创意个体成为超级智造中心
        </p>
      </div>
      <div
        class="flex gap-8 sm:gap-12 items-start justify-center sm:justify-start sm:pr-20"
      >
        <!-- 子系统数量 -->
        <div class="flex flex-col gap-3">
          <h2 class="text-white">6</h2>
          <p class="text-grey">核心子系统</p>
        </div>

        <!-- AI 工具 -->
        <div class="flex flex-col gap-3">
          <h2 class="text-white">150+</h2>
          <p class="text-grey">AI 智能工具</p>
        </div>

        <!-- 独立站矩阵 -->
        <div class="flex flex-col gap-3">
          <h2 class="text-white">9+</h2>
          <p class="text-grey">出海品类站</p>
        </div>
      </div>
    </div>
    <div
      class="pt-14 sm:pt-30 h-[50rem] overflow-clip [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
    >
      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-5">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="break-inside-avoid mb-5"
        >
          <div
            class="testimonial-card relative overflow-clip isolate rounded-lg p-6 sm:px-8 sm:py-10 flex flex-col gap-6 before:content-[''] before:absolute before:inset-0 before:opacity-0 before:z-0 before:pointer-events-none before:transition-opacity before:duration-100 before:ease-in-out after:content-[''] after:absolute after:inset-px after:z-[1] after:rounded-lg after:bg-slate after:border after:border-nickel after:transition-[border-color,background] after:duration-100 after:ease-in-out hover:before:opacity-100 hover:after:border-transparent"
          >
            <!-- Comment -->
            <div class="relative z-[2] flex flex-col gap-4">
              <p
                v-for="(paragraph, pIndex) in testimonial.comment"
                :key="pIndex"
                class="text-white/70 leading-relaxed text-sm sm:text-base"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Author -->
            <div class="relative z-[2] flex items-center gap-5 mt-auto">
              <!-- Avatar -->
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-sm object-cover flex-shrink-0"
                loading="lazy"
              />

              <!-- Author info -->
              <div class="flex flex-col">
                <span class="text-grey text-sm font-mono">{{
                  testimonial.name
                }}</span>
                <span class="text-biege text-sm font-mono">{{
                  testimonial.handle
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background image and animation for ::before pseudo-element */
.testimonial-card::before {
  background-image: url('@assets/vite/vite-featurepanel-4-background.jpg');
  background-size: 150% 150%;
  background-position: center;
  animation: move-background 16s ease-in-out infinite;
}

/* Randomize animation timing for organic feel */
.testimonial-card:nth-child(2)::before {
  animation-duration: 18s;
  animation-delay: -3s;
}

.testimonial-card:nth-child(3)::before {
  animation-duration: 14s;
  animation-delay: -7s;
}

.testimonial-card:nth-child(4)::before {
  animation-duration: 20s;
  animation-delay: -5s;
}

.testimonial-card:nth-child(5)::before {
  animation-duration: 15s;
  animation-delay: -9s;
}

.testimonial-card:nth-child(6)::before {
  animation-duration: 19s;
  animation-delay: -2s;
}

.testimonial-card:nth-child(7)::before {
  animation-duration: 17s;
  animation-delay: -11s;
}

.testimonial-card:nth-child(8)::before {
  animation-duration: 16s;
  animation-delay: -6s;
}
</style>
