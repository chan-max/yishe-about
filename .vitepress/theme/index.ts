import { h } from 'vue'
import 'virtual:group-icons.css'
import 'vitepress-plugin-graphviz/style.css'
import Theme from '@voidzero-dev/vitepress-theme/src/vite'
import { themeContextKey } from '@voidzero-dev/vitepress-theme/src'
import './styles.css'

// components
import SvgImage from './components/SvgImage.vue'
import WwAds from './components/WwAds.vue'
import './custom.css'
import YouTubeVideo from './components/YouTubeVideo.vue'
import NonInheritBadge from './components/NonInheritBadge.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import ScrimbaLink from './components/ScrimbaLink.vue'
import NavBarLogo from './components/NavBarLogo.vue'

// 自定义资源
import footerBg from './footer-bg.jpg'

export default {
  Layout() {
    return h((Theme as any).Layout, null, {
      'aside-ads-before': () => h(AsideSponsors),
      'nav-bar-title-before': () => h(NavBarLogo),
    })
  },
  enhanceApp(ctx: any) {
    const { app } = ctx

    app.component('SvgImage', SvgImage)
    app.component('YouTubeVideo', YouTubeVideo)
    app.component('NonInheritBadge', NonInheritBadge)
    app.component('ScrimbaLink', ScrimbaLink)

    Theme.enhanceApp(ctx)

    // 覆盖主题资源（必须在 Theme.enhanceApp 之后，否则会被覆盖）
    app.provide(themeContextKey, {
      footerBg,
    })

  },
}
