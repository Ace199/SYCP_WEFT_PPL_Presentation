# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: design-deck.spec.ts >> decision deck stays synchronized through pointer, keyboard and rapid changes
- Location: tests\design-deck.spec.ts:4:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: getByRole('navigation', { name: '章节导航' }).getByRole('link', { name: '02 / 设计与创新' })
Expected: "page"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" getByRole('navigation', { name: '章节导航' }).getByRole('link', { name: '02 / 设计与创新' }) with timeout 5000ms
  - waiting for getByRole('navigation', { name: '章节导航' }).getByRole('link', { name: '02 / 设计与创新' })

```

```yaml
- link "跳到正文":
  - /url: "#design-main"
- banner:
  - link "WEFT / PPL":
    - /url: /
  - navigation "章节导航":
    - link "00 / 项目概览":
      - /url: /
    - link "01 / 系统思考":
      - /url: /systematic-thinking/
    - link "02 / 设计/创新":
      - /url: /design-innovation/
    - link "03 / 下一步":
      - /url: /next/
  - 'group "生产状态：PRODUCTION SYSTEM，STATUS: ACTIVE，2026"'
  - group "Language / 语言":
    - button "切换为中文" [pressed]: 中
    - button "Switch to English": En
- main:
  - region "重新审视生产的 默认假设。":
    - paragraph: 02 / DESIGN & INNOVATION
    - heading "重新审视生产的 默认假设。" [level=1]
    - paragraph: TRANSFORMING PRODUCTION ASSUMPTIONS
    - paragraph: 当版本、依赖与变化暴露出边界，WEFT / PPL 选择重新审视生产模型，而不是继续增加补丁。
  - group "设计决策索引":
    - button "01 / COMPATIBILITY Compatible History" [pressed]
    - button "02 / MODULARITY Composable Modules"
    - button "03 / STATE Full State"
    - button "04 / EXECUTION Executable Rules"
  - region "DESIGN DECISION VIEWER / 04":
    - heading "DESIGN DECISION VIEWER / 04" [level=2]
    - button "上一张决策卡": 04 / EXECUTION
    - region "设计决策卡片，左右方向键切换":
      - article "从追随最新， 到保留兼容历史。":
        - text: 01 / COMPATIBILITY FIG. 02.01
        - region "COMPATIBILITY — 可上下滚动 / Scroll for details":
          - paragraph: PART 01 / DECISION
          - heading "从追随最新， 到保留兼容历史。" [level=3]
          - paragraph: 工作继续向前， 已经成立的历史成果仍然有效。
          - paragraph: SYSTEM SHIFT Global latest Compatibility-scoped resolution
          - region "Before → WEFT / PPL":
            - heading "PART 02 / BEFORE → WEFT / PPL" [level=4]
            - figure "强制将不兼容的新 Surface 用于历史 RigCache 时，原本可用的发布结果失效。":
              - heading "BEFORE" [level=5]
              - 'img "Before: forcing an incompatible new Surface onto historical RigCache invalidates the historical publish."': TIME → HistoricalModel (G2) Surface (v1) White Model(Geometry) Animation RigCache(Historical) LatestModel (G3) New Surface(v2) 历史Rigcache完全失效 Not compatiblewith historical RigCache 为匹配最新资产， 被迫重新发布 RigCache
              - text: 强制将不兼容的新 Surface 用于历史 RigCache 时，原本可用的发布结果失效。
            - figure "历史 RigCache 保留兼容 Surface 的引用，新工作继续向前。Mint 表示合法兼容关系，而非最新版本。":
              - heading "WEFT / PPL" [level=5]
              - 'img "WEFT / PPL: historical RigCache preserves its compatible Surface reference and remains usable while new work moves forward."': TIME → HistoricalModel (G2) Surface (v1) Compatibility Reference White Model(Geometry) Animation RigCache(Historical Published) 历史发布仍然可用 LatestModel (G3) New Surface(v2) 按镜头视觉需求， 自主发布 RigCache
              - text: 历史 RigCache 保留兼容 Surface 的引用，新工作继续向前。Mint 表示合法兼容关系，而非最新版本。
            - paragraph: 概念示意 · 旋转仅用于表达动画与缓存，不代表真实播放记录。
          - region "Project example":
            - heading "PART 03 / PROJECT EXAMPLE" [level=4]
            - heading "RigCache USD / Compatibility Reference" [level=5]
            - figure "简化 USDA 示例 · 已发布 RigCache 包含本地动画几何与带兼容范围的 Surface 逻辑依赖；资产继续演进后，历史 RigCache 仍可按原兼容范围解析和渲染。":
              - text: RigCache.usda USDA
              - code:
                - text: "#usda 1.0 ( subLayers = [ @./Character__geo.usd@, @"
                - img "隐藏的路径前缀"
                - text: /ASSET/CHR/Character&
                - mark: av=av0003
                - text: "&"
                - mark: step=Srf
                - text: "@ ] )"
              - text: 简化 USDA 示例 · 已发布 RigCache 包含本地动画几何与带兼容范围的 Surface 逻辑依赖；资产继续演进后，历史 RigCache 仍可按原兼容范围解析和渲染。
            - link "查看兼容关系如何在生产中工作 ↗":
              - /url: /in-production/#compatibility
      - navigation "卡片切换":
        - button "← PREV"
        - button "01 / COMPATIBILITY" [pressed]: "01"
        - button "02 / MODULARITY": "02"
        - button "03 / STATE": "03"
        - button "04 / EXECUTION": "04"
        - button "NEXT →"
    - button "下一张决策卡": 02 / MODULARITY
    - status: 01 / COMPATIBILITY · 从追随最新， 到保留兼容历史。
  - region "不是更多工具， 而是更明确的系统。":
    - paragraph: SYNTHESIS
    - heading "不是更多工具， 而是更明确的系统。" [level=2]
    - text: COMPATIBILITY
    - paragraph: 如何保持历史有效
    - text: MODULE
    - paragraph: 如何独立组合
    - text: STATE
    - paragraph: 如何保持完整状态
    - text: RULE
    - paragraph: 如何进入执行
    - text: EXPLICIT PRODUCTION MODEL
    - paragraph: 明确的生产模型
  - region "从明确的模型，走向持续演进。":
    - heading "从明确的模型，走向持续演进。" [level=2]
    - paragraph: TRANSFORM IDEAS INTO A MORE RELIABLE PRODUCTION SYSTEM.
    - link "03 / WHAT COMES NEXT ↗":
      - /url: /next/
- contentinfo:
  - link "WEFT / PPL":
    - /url: /
  - link "BACK TO TOP ↑":
    - /url: "#top"
- alert
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import AxeBuilder from "@axe-core/playwright";
  3   | 
  4   | test("decision deck stays synchronized through pointer, keyboard and rapid changes", async ({
  5   |   page,
  6   | }) => {
  7   |   const errors: string[] = [];
  8   |   page.on("pageerror", (error) => errors.push(error.message));
  9   |   page.on("console", (message) => {
  10  |     if (
  11  |       message.type() === "error" &&
  12  |       !message.text().startsWith("Failed to load resource")
  13  |     )
  14  |       errors.push(message.text());
  15  |   });
  16  |   page.on("response", (response) => {
  17  |     if (response.status() >= 400)
  18  |       errors.push(`${response.status()} ${response.url()}`);
  19  |   });
  20  |   await page.setViewportSize({ width: 1440, height: 1000 });
  21  |   await page.goto("/design-innovation/");
  22  |   const deck = page.locator("[data-active-decision]");
  23  |   const indexes = page.getByRole("group", { name: "设计决策索引" });
  24  |   await expect(
  25  |     page
  26  |       .getByRole("navigation", { name: "章节导航" })
  27  |       .getByRole("link", { name: "02 / 设计与创新" }),
> 28  |   ).toHaveAttribute("aria-current", "page");
      |     ^ Error: expect(locator).toHaveAttribute(expected) failed
  29  |   await expect(deck).toHaveAttribute("data-active-decision", "compatibility");
  30  |   await expect(
  31  |     page.getByRole("navigation", { name: "In production", exact: true }),
  32  |   ).toHaveCount(0);
  33  |   await indexes.getByRole("button", { name: /02 \/ MODULARITY/ }).hover();
  34  |   await expect(deck).toHaveAttribute("data-active-decision", "compatibility");
  35  |   await indexes.getByRole("button", { name: /02 \/ MODULARITY/ }).click();
  36  |   await expect(deck).toHaveAttribute("data-active-decision", "modularity");
  37  |   await indexes
  38  |     .getByRole("button", { name: /02 \/ MODULARITY/ })
  39  |     .press("ArrowRight");
  40  |   await expect(deck).toHaveAttribute("data-active-decision", "state");
  41  |   await expect(
  42  |     indexes.getByRole("button", { name: /03 \/ STATE/ }),
  43  |   ).toBeFocused();
  44  |   await page.getByRole("button", { name: "NEXT →", exact: true }).click();
  45  |   await expect(deck).toHaveAttribute("data-active-decision", "execution");
  46  |   await expect(
  47  |     page.getByRole("button", { name: "NEXT →", exact: true }),
  48  |   ).toBeEnabled();
  49  |   await page.getByRole("button", { name: "NEXT →", exact: true }).click();
  50  |   await expect(deck).toHaveAttribute("data-active-decision", "compatibility");
  51  |   await page.getByRole("button", { name: "← PREV", exact: true }).click();
  52  |   await expect(deck).toHaveAttribute("data-active-decision", "execution");
  53  |   const navigation = page.getByRole("navigation", { name: "卡片切换" });
  54  |   for (const label of [
  55  |     "01 / COMPATIBILITY",
  56  |     "04 / EXECUTION",
  57  |     "02 / MODULARITY",
  58  |     "03 / STATE",
  59  |     "01 / COMPATIBILITY",
  60  |   ]) {
  61  |     await navigation.getByRole("button", { name: label, exact: true }).click();
  62  |   }
  63  |   await expect(deck).toHaveAttribute("data-active-decision", "compatibility");
  64  |   await expect(page.locator('[data-panel][data-active="true"]')).toHaveCSS(
  65  |     "opacity",
  66  |     "1",
  67  |   );
  68  |   await expect(
  69  |     page.locator('[data-panel][data-active="false"]:not([inert])'),
  70  |   ).toHaveCount(0);
  71  |   await expect(page.locator('[data-panel][data-active="true"]')).toHaveCSS(
  72  |     "transform",
  73  |     "matrix(1, 0, 0, 1, 0, 0)",
  74  |   );
  75  |   await page.evaluate(() => {
  76  |     (document.activeElement as HTMLElement)?.blur();
  77  |     window.scrollTo({ top: 0, behavior: "instant" });
  78  |   });
  79  |   await expect(page.locator("[data-site-header]")).toHaveAttribute(
  80  |     "data-in-hero",
  81  |     "true",
  82  |   );
  83  |   await page.screenshot({
  84  |     path: "artifacts/design-deck-desktop.png",
  85  |     fullPage: true,
  86  |   });
  87  |   await page
  88  |     .getByRole("navigation", { name: "章节导航" })
  89  |     .getByRole("link", { name: "01 / 系统思考" })
  90  |     .click();
  91  |   await expect(page).toHaveURL(/\/systematic-thinking\/?$/);
  92  |   await expect(page.getByRole("heading", { level: 1 })).toContainText(
  93  |     "动画生产",
  94  |   );
  95  |   expect(errors).toEqual([]);
  96  | });
  97  | 
  98  | test("tablet cards remain readable and expose only the active content to assistive technology", async ({
  99  |   page,
  100 | }) => {
  101 |   await page.setViewportSize({ width: 768, height: 1024 });
  102 |   await page.emulateMedia({ reducedMotion: "reduce" });
  103 |   await page.goto("/design-innovation/");
  104 |   for (let i = 0; i < 4; i++) {
  105 |     await page.locator("[data-index]").nth(i).click();
  106 |     await expect(page.getByRole("heading", { level: 3 })).toHaveCount(1);
  107 |     await page
  108 |       .locator("[data-panel][data-active=true] [data-card-scroll]")
  109 |       .evaluate((el) => (el.scrollTop = el.scrollHeight));
  110 |     const bounds = await page
  111 |       .locator("[data-panel][data-active=true]")
  112 |       .evaluate((panel) => {
  113 |         const link = panel.querySelector("a")!.getBoundingClientRect();
  114 |         const frame = panel.getBoundingClientRect();
  115 |         return { linkBottom: link.bottom, frameBottom: frame.bottom };
  116 |       });
  117 |     expect(bounds.linkBottom).toBeLessThanOrEqual(bounds.frameBottom + 1);
  118 |     expect(
  119 |       await page.evaluate(
  120 |         () => document.documentElement.scrollWidth <= innerWidth,
  121 |       ),
  122 |     ).toBe(true);
  123 |     const result = await new AxeBuilder({ page })
  124 |       .include("#design-main")
  125 |       .withTags(["wcag2a", "wcag2aa"])
  126 |       .analyze();
  127 |     expect(result.violations).toEqual([]);
  128 |     await page
```