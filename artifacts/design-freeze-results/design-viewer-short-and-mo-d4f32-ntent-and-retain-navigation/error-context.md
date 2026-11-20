# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: design-viewer.spec.ts >> short and mobile cards expose scrollable content and retain navigation
- Location: tests\design-viewer.spec.ts:163:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('[data-panel][data-active=true] pre') resolved to 2 elements:
    1) <pre>TIME →↵Asset   G2 ─────────→ G3↵↵Historical Shot …</pre> aka getByText('TIME → Asset G2 ─────────→ G3')
    2) <pre tabindex="0" aria-label="RigCache.usda">…</pre> aka getByLabel('RigCache.usda')

Call log:
  - waiting for locator('[data-panel][data-active=true] pre')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "跳到正文" [ref=e3] [cursor=pointer]:
      - /url: "#design-main"
    - banner [ref=e4]:
      - link "WEFT / PPL" [ref=e5] [cursor=pointer]:
        - /url: /
      - navigation "章节导航" [ref=e6]:
        - link "00 / 项目概览" [ref=e7] [cursor=pointer]:
          - /url: /
        - link "01 / 系统思考" [ref=e8] [cursor=pointer]:
          - /url: /systematic-thinking/
        - link "02 / 设计与创新" [ref=e9] [cursor=pointer]:
          - /url: /design-innovation/
        - link "03 / 下一步" [ref=e10] [cursor=pointer]:
          - /url: /next/
      - generic [ref=e11]:
        - generic [ref=e12]:
          - generic [ref=e13]: PRODUCTION SYSTEM
          - generic [ref=e14]: "STATUS: ACTIVE"
          - generic [ref=e15]: "2026"
        - group "Language / 语言" [ref=e16]:
          - button "切换为中文" [pressed] [ref=e17] [cursor=pointer]: 中
          - generic [aria-hidden] [ref=e18]: /
          - button "Switch to English" [ref=e19] [cursor=pointer]: En
    - main [ref=e20]:
      - region [ref=e21]:
        - paragraph [ref=e22]: 02 / DESIGN & INNOVATION
        - heading "重新审视生产的 默认假设。" [level=1] [ref=e23]
        - paragraph [ref=e24]: TRANSFORMING PRODUCTION ASSUMPTIONS
        - paragraph [ref=e25]: 当版本、依赖与变化暴露出边界，WEFT / PPL 选择重新审视生产模型，而不是继续增加补丁。
      - generic [ref=e26]:
        - group "设计决策索引" [ref=e27]:
          - button "01 / COMPATIBILITY Compatible History" [pressed] [ref=e28] [cursor=pointer]:
            - generic [ref=e29]: 01 / COMPATIBILITY
            - generic [ref=e30]: Compatible History
          - button "02 / MODULARITY Composable Modules" [ref=e32] [cursor=pointer]:
            - generic [ref=e33]: 02 / MODULARITY
            - generic [ref=e34]: Composable Modules
          - button "03 / STATE Full State" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]: 03 / STATE
            - generic [ref=e37]: Full State
          - button "04 / EXECUTION Executable Rules" [ref=e38] [cursor=pointer]:
            - generic [ref=e39]: 04 / EXECUTION
            - generic [ref=e40]: Executable Rules
        - region [ref=e41]:
          - heading "DESIGN DECISION VIEWER / 04" [level=2] [ref=e42]
          - generic [ref=e43]:
            - button "上一张决策卡" [ref=e44] [cursor=pointer]: 04 / EXECUTION
            - region "设计决策卡片，左右方向键切换" [ref=e45]:
              - article [ref=e48]:
                - generic [ref=e49]:
                  - generic [ref=e50]: 01 / COMPATIBILITY
                  - generic [ref=e51]: FIG. 02.01
                - region "COMPATIBILITY — 可上下滚动 / Scroll for details" [ref=e52]:
                  - generic [ref=e53]:
                    - paragraph [ref=e54]: PART 01 / DECISION
                    - heading "从追随最新， 到保留兼容历史。" [level=3] [ref=e55]
                    - paragraph [ref=e56]: 工作继续向前， 已经成立的历史成果仍然有效。
                    - paragraph [ref=e57]:
                      - generic [ref=e58]: SYSTEM SHIFT
                      - text: Global latest
                      - generic [aria-hidden] [ref=e59]: →
                      - text: Compatibility-scoped resolution
                  - region "Before → WEFT / PPL" [ref=e60]:
                    - heading "PART 02 / BEFORE → WEFT / PPL" [level=4] [ref=e61]
                    - generic [ref=e62]:
                      - generic [ref=e63]:
                        - heading "BEFORE" [level=5] [ref=e64]
                        - generic [ref=e65]: TIME → Asset G2 ─────────→ G3 Historical Shot A └─ forced to follow G3
                        - paragraph [ref=e66]: 把当前资产的最新版本当成所有历史结果的唯一输入，上游的小修改也可能迫使已发布、可正常渲染的 Animation / RigCache 失效。
                      - figure "历史成果保留兼容依赖，新工作继续向前。Mint 表示合法的兼容关系，而非最新版本。 概念示意" [ref=e67]:
                        - heading "WEFT / PPL" [level=5] [ref=e68]
                        - img "G2 remains valid for published Shot A; new Shot B uses G3." [ref=e70]:
                          - generic [ref=e71]: TIME →
                          - generic [ref=e74]:
                            - generic [ref=e75]: ASSET /
                            - generic [ref=e76]: RIG
                          - generic [ref=e101]:
                            - generic [ref=e102]: G2
                            - generic [ref=e103]: G3
                          - generic [ref=e224]:
                            - generic [ref=e225]: SHOT A /
                            - generic [ref=e226]: Published
                            - generic [ref=e227]: SHOT B /
                            - generic [ref=e228]: New work
                            - generic [ref=e229]: Keeps G2 dependency
                            - generic [ref=e230]: Uses G3
                        - generic [ref=e231]:
                          - text: 历史成果保留兼容依赖，新工作继续向前。Mint 表示合法的兼容关系，而非最新版本。
                          - generic [ref=e232]: 概念示意
                  - region "Project example" [ref=e233]:
                    - heading "PART 03 / PROJECT EXAMPLE" [level=4] [ref=e234]
                    - heading "RigCache USD / Compatibility Reference" [level=5] [ref=e235]
                    - figure "简化 USDA 示例 · 已发布 RigCache 包含本地动画几何与带兼容范围的 Surface 逻辑依赖；资产继续演进后，历史 RigCache 仍可按原兼容范围解析和渲染。" [ref=e236]:
                      - generic [ref=e237]:
                        - generic [ref=e238]:
                          - generic [ref=e239]: RigCache.usda
                          - generic [ref=e240]: USDA
                        - generic "RigCache.usda" [ref=e241]:
                          - code [ref=e242]:
                            - generic [ref=e243]:
                              - generic [aria-hidden] [ref=e244]: "01"
                              - generic [ref=e245]: "#usda 1.0"
                            - generic [ref=e246]:
                              - generic [aria-hidden] [ref=e247]: "02"
                              - generic [ref=e248]: (
                            - generic [ref=e249]:
                              - generic [aria-hidden] [ref=e250]: "03"
                              - generic [ref=e251]: subLayers = [
                            - generic [ref=e252]:
                              - generic [aria-hidden] [ref=e253]: "04"
                              - generic [ref=e254]: "@./Character__geo.usd@,"
                            - generic [ref=e255]:
                              - generic [aria-hidden] [ref=e256]: "05"
                              - generic [ref=e257]:
                                - text: "@SY_V1%USD/ASSET/CHR/Character&"
                                - mark [ref=e258]: av=av0003
                                - text: "&"
                                - mark [ref=e259]: step=Srf
                                - text: "@"
                            - generic [ref=e260]:
                              - generic [aria-hidden] [ref=e261]: "06"
                              - generic [ref=e262]: "]"
                            - generic [ref=e263]:
                              - generic [aria-hidden] [ref=e264]: "07"
                              - generic [ref=e265]: )
                    - link "查看兼容关系如何在生产中工作 ↗" [ref=e267] [cursor=pointer]:
                      - /url: /in-production/#compatibility
              - navigation "卡片切换" [ref=e268]:
                - button "← PREV" [ref=e269] [cursor=pointer]
                - generic [ref=e270]:
                  - button "01 / COMPATIBILITY" [pressed] [ref=e271] [cursor=pointer]: "01"
                  - button "02 / MODULARITY" [ref=e273] [cursor=pointer]: "02"
                  - button "03 / STATE" [ref=e275] [cursor=pointer]: "03"
                  - button "04 / EXECUTION" [ref=e277] [cursor=pointer]: "04"
                - button "NEXT →" [ref=e279] [cursor=pointer]
            - button "下一张决策卡" [ref=e280] [cursor=pointer]: 02 / MODULARITY
          - status [ref=e281]: 01 / COMPATIBILITY · 从追随最新， 到保留兼容历史。
      - region [ref=e282]:
        - generic [ref=e283]:
          - paragraph [ref=e284]: SYNTHESIS
          - heading "不是更多工具， 而是更明确的系统。" [level=2] [ref=e285]
        - generic [ref=e286]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - generic [ref=e289]: COMPATIBILITY
              - paragraph [ref=e290]: 如何保持历史有效
            - generic [ref=e292]:
              - generic [ref=e293]: MODULE
              - paragraph [ref=e294]: 如何独立组合
            - generic [ref=e296]:
              - generic [ref=e297]: STATE
              - paragraph [ref=e298]: 如何保持完整状态
            - generic [ref=e300]:
              - generic [ref=e301]: RULE
              - paragraph [ref=e302]: 如何进入执行
          - generic [ref=e304]:
            - text: EXPLICIT PRODUCTION MODEL
            - paragraph [ref=e305]: 明确的生产模型
      - region [ref=e306]:
        - generic [ref=e307]:
          - heading "从明确的模型，走向持续演进。" [level=2] [ref=e308]
          - paragraph [ref=e309]: TRANSFORM IDEAS INTO A MORE RELIABLE PRODUCTION SYSTEM.
        - link "03 / WHAT COMES NEXT ↗" [ref=e310] [cursor=pointer]:
          - /url: /next/
    - contentinfo [ref=e311]:
      - link "WEFT / PPL" [ref=e312] [cursor=pointer]:
        - /url: /
      - link "BACK TO TOP ↑" [ref=e313] [cursor=pointer]:
        - /url: "#top"
  - alert [ref=e314]
```

# Test source

```ts
  76  |         .getByRole("button", { name: "NEXT →", exact: true })
  77  |         .evaluate((el) => el.getBoundingClientRect().top);
  78  |       await body.hover();
  79  |       await page.mouse.wheel(0, 500);
  80  |       await expect
  81  |         .poll(() => body.evaluate((el) => el.scrollTop))
  82  |         .toBeGreaterThan(0);
  83  |       expect(await page.evaluate(() => scrollY)).toBe(pageY);
  84  |       await body.evaluate((el) => (el.scrollTop = el.scrollHeight));
  85  |       await expect(
  86  |         page.locator('[data-panel][data-active="true"] a'),
  87  |       ).toBeInViewport({ ratio: 1 });
  88  |       expect(
  89  |         await page
  90  |           .getByRole("button", { name: "NEXT →", exact: true })
  91  |           .evaluate((el) => el.getBoundingClientRect().top),
  92  |       ).toBe(navY);
  93  |       if (i === 0)
  94  |         await page.screenshot({
  95  |           path: `artifacts/design-viewer-${language}-scrolled.png`,
  96  |         });
  97  |     }
  98  |   });
  99  | }
  100 | 
  101 | test("record switch preserves decision and displays parseable delta and full state", async ({
  102 |   page,
  103 | }) => {
  104 |   await page.emulateMedia({ reducedMotion: "reduce" });
  105 |   await page.goto("/design-innovation/");
  106 |   await page.locator("[data-index]").nth(2).click();
  107 |   const read = (id: string) =>
  108 |     page
  109 |       .locator(`${id} code`)
  110 |       .evaluate((el) =>
  111 |         JSON.parse(
  112 |           [...el.querySelectorAll(":scope > span > span:last-child")]
  113 |             .map((line) => line.textContent)
  114 |             .join(""),
  115 |         ),
  116 |       );
  117 |   expect(await read("#record-delta")).toEqual({
  118 |     rigcache: { Character_A: { version: "v003" } },
  119 |   });
  120 |   await page
  121 |     .getByRole("button", { name: "CURRENT STATE", exact: true })
  122 |     .click();
  123 |   expect(await read("#record-current")).toEqual({
  124 |     rigcache: {
  125 |       Character_A: { version: "v003" },
  126 |       Character_B: { version: "v001" },
  127 |     },
  128 |     camera: { version: "v003" },
  129 |   });
  130 |   await page
  131 |     .getByRole("button", { name: "CURRENT STATE", exact: true })
  132 |     .press("ArrowRight");
  133 |   await expect(page.locator("#design-viewer")).toHaveAttribute(
  134 |     "data-active-decision",
  135 |     "state",
  136 |   );
  137 |   await expect(page.locator("#record-delta")).toBeHidden();
  138 |   await page.getByRole("button", { name: "DELTA", exact: true }).click();
  139 |   await expect(page.locator("#record-current")).toBeHidden();
  140 |   await page.locator("[data-index]").nth(0).press("End");
  141 |   await expect(page.locator("#design-viewer")).toHaveAttribute(
  142 |     "data-active-decision",
  143 |     "execution",
  144 |   );
  145 |   await page.locator("[data-index]").nth(3).press("Home");
  146 |   await expect(
  147 |     page.getByRole("button", { name: "← PREV", exact: true }),
  148 |   ).toBeEnabled();
  149 |   const previous = page.getByRole("button", { name: "上一张决策卡", exact: true });
  150 |   const next = page.getByRole("button", { name: "下一张决策卡", exact: true });
  151 |   await expect(previous).toHaveText("04 / EXECUTION");
  152 |   await previous.click();
  153 |   await expect(page.locator("#design-viewer")).toHaveAttribute("data-active-decision", "execution");
  154 |   await expect(next).toHaveText("01 / COMPATIBILITY");
  155 |   await next.click();
  156 |   await expect(page.locator("#design-viewer")).toHaveAttribute("data-active-decision", "compatibility");
  157 |   await page.locator("[data-index]").nth(0).press("ArrowLeft");
  158 |   await expect(page.locator("[data-index]").nth(3)).toBeFocused();
  159 |   await page.locator("[data-index]").nth(3).press("ArrowRight");
  160 |   await expect(page.locator("[data-index]").nth(0)).toBeFocused();
  161 | });
  162 | 
  163 | test("short and mobile cards expose scrollable content and retain navigation", async ({
  164 |   page,
  165 | }) => {
  166 |   await page.emulateMedia({ reducedMotion: "reduce" });
  167 |   for (const size of [
  168 |     { width: 1280, height: 600 },
  169 |     { width: 390, height: 844 },
  170 |   ]) {
  171 |     await page.setViewportSize(size);
  172 |     await page.goto("/design-innovation/");
  173 |     await page.evaluate(() => document.fonts.ready);
  174 |     await page
  175 |       .locator("[data-panel][data-active=true] pre")
> 176 |       .scrollIntoViewIfNeeded();
      |        ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('[data-panel][data-active=true] pre') resolved to 2 elements:
  177 |     await page
  178 |       .locator("#design-viewer")
  179 |       .evaluate((el) =>
  180 |         window.scrollTo({
  181 |           top:
  182 |             el.getBoundingClientRect().top +
  183 |             scrollY -
  184 |             document
  185 |               .querySelector("[data-site-header]")!
  186 |               .getBoundingClientRect().height,
  187 |           behavior: "instant",
  188 |         }),
  189 |       );
  190 |     await expect(
  191 |       page.getByRole("button", { name: "NEXT →", exact: true }),
  192 |     ).toBeInViewport({ ratio: 1 });
  193 |     expect(
  194 |       await page.evaluate(
  195 |         () => document.documentElement.scrollWidth <= innerWidth,
  196 |       ),
  197 |     ).toBe(true);
  198 |     const panel = page.locator("[data-panel][data-active=true]");
  199 |     const body = panel.locator("[data-card-scroll]");
  200 |     expect(
  201 |       await body.evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
  202 |     ).toBe(true);
  203 |     await body.evaluate((el) => (el.scrollTop = el.scrollHeight));
  204 |     await expect(panel.getByRole("link")).toBeInViewport({ ratio: 1 });
  205 |     expect(
  206 |       await panel.evaluate((el) => el.scrollHeight <= el.clientHeight + 1),
  207 |     ).toBe(true);
  208 |     await page.screenshot({
  209 |       path: `artifacts/design-viewer-scroll-${size.width}.png`,
  210 |     });
  211 |   }
  212 | });
  213 | 
```