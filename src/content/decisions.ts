export type DecisionId = "compatibility" | "modularity" | "state" | "task-composition" | "execution";
export type Copy = { zh: string; en: string };
const copy = (zh: string, en: string): Copy => ({ zh, en });
export const decisions = [
  {
    id: "compatibility",
    index: "01",
    category: "COMPATIBILITY",
    label: "Compatible History",
    title: copy(
      "从追随最新，\n到保留兼容历史。",
      "From chasing the latest\nto preserving compatible history.",
    ),
    summary: copy(
      "即使更新资产，历史版本仍然保留可以正常渲染。已发布的动画缓存继续使用与它兼容的资产版本。",
      "Even after an asset update, historical shots can still render. Published animation caches keep using compatible asset versions.",
    ),
    from: "Global latest",
    to: "Compatibility-scoped resolution",
    symptom: copy(
      "历史成果随上游演进而失效。",
      "Historical results break as upstream work evolves.",
    ),
    cause: copy(
      "没有保留 Compatibility History，\n把 Global Latest 当成唯一合法输入。",
      "Compatibility history is not preserved;\nglobal latest becomes the only accepted input.",
    ),
    meaning: copy(
      "已发布 RigCache 保留自己的兼容范围，下游根据这个范围寻找对应 Surface，而不是强制跟随全局最新。",
      "Published RigCache retains its compatibility scope. Downstream resolution finds a Surface within that scope, rather than forcing the global latest.",
    ),
    cta: copy(
      "查看兼容关系如何在生产中工作",
      "See how compatibility works in production",
    ),
    indexLabel: copy("兼容历史", "Compatible history"),
    diagramNote: copy(
      "工作状态向前演进，发布状态保留历史依赖。",
      "Working state moves forward. Published state preserves compatibility.",
    ),
  },
  {
    id: "modularity",
    index: "02",
    category: "MODULARITY",
    label: "Composable Modules",
    title: copy(
      "从整体发布，\n到可组合的生产模块。",
      "From whole packages\nto composable production modules.",
    ),
    summary: copy(
      "镜头只改角色 A 的动画时，只发布 A 的动画结果；Camera、Set 和其他角色沿用各自的版本，再组合成工作场景。灯光、特效等下游环节也能按选定版本更自动地组装所需资源。",
      "If only Character A's animation changes, publish A's animation result. Camera, Set and the other characters keep their own versions and are assembled in the workspace. Downstream lighting and effects can also assemble the resources they need more automatically from the selected versions.",
    ),
    from: "Monolithic Package",
    to: "Composable Production Modules",
    symptom: copy(
      "局部修改会牵引整体重发。",
      "A local change forces the whole package to be republished.",
    ),
    cause: copy(
      "把独立 Production Products\n绑定在一个整体版本包中。",
      "Independent production products are bound\nto a single package version.",
    ),
    meaning: copy(
      "Shot Builder 将镜头理解为一组可以独立发现、选版和更新的 Production Modules。",
      "Shot Builder treats a shot as production modules that can be discovered, version-selected and updated independently.",
    ),
    cta: copy(
      "查看模块如何进入工作场景",
      "See how modules enter the workspace",
    ),
    indexLabel: copy("模块化工作场景", "Modular workspaces"),
    diagramNote: copy(
      "显式组合进入工作场景，各模块保留自己的身份、版本、依赖和状态。",
      "Explicit composition preserves each module’s identity, version, dependency and state.",
    ),
  },
  {
    id: "state",
    index: "03",
    category: "STATE",
    label: "Materialized Full State",
    title: copy(
      "减少动画的重新发布",
      "Reduce Animation Republishing",
    ),
    summary: copy(
      "只更新角色 A 时，本次发布只带 A 的变化。系统把变化合并进镜头当前的资源清单，未改动的 B 和 Camera 继续保留，无需重新发布。",
      "When only Character A changes, the publish contains only A's change. The system merges it into the shot's current resource list, keeping B and Camera without republishing them.",
    ),
    from: "Partial Change",
    to: "Materialized Full State",
    symptom: copy(
      "局部发布后，\n难以理解当前完整状态。",
      "After a partial publish,\nthe complete current state is unclear.",
    ),
    cause: copy(
      "把 Change 和 State 混成同一个概念。",
      "Change and state are treated as the same concept.",
    ),
    meaning: copy(
      "Publish 记录本次变化，同时维护累计的 Current Shot State。",
      "Publish records the current change while maintaining the accumulated current shot state.",
    ),
    cta: copy(
      "查看局部发布如何维护完整状态",
      "See how partial publishes maintain full state",
    ),
    indexLabel: copy("局部发布与完整状态", "Partial change, full state"),
    diagramNote: copy(
      "只更新发生变化的 A，B 和 Camera 的状态被保留。",
      "Update A; retain the state of B and Camera.",
    ),
  },
  {
    id: "task-composition",
    index: "04",
    category: "TASK COMPOSITION",
    label: "Independent Subtasks",
    title: copy(
      "细分动画任务，任务分配更加精准",
      "Break down animation tasks for more precise assignments",
    ),
    summary: copy(
      "一个镜头有 3 个主角、7 个配角时，可以把主角和配角分给不同任务。各任务分别制作和发布，结果汇入同一份镜头状态。",
      "For a shot with three main and seven supporting characters, assign the main and supporting characters to separate tasks. Each task is worked on and published separately; their results join the same shot state.",
    ),
    from: "Single Shot Ani Task",
    to: "Split Tasks + Shared Shot State",
    symptom: copy("多个角色集中在同一个 Ani Task 中，场景更重，交互与任务管理成本更高。", "Many characters in one animation task make the scene heavier and raise interaction and task-management costs."),
    cause: copy("Task ownership 与 Shot state 被混在同一个粒度里。", "Task ownership and shot state share a single granularity."),
    meaning: copy("每次子任务发布，只增量更新自己的状态和 Ani 主状态，不需要重新扫描所有任务再重建汇总。", "Each subtask publish incrementally updates its own state and the animation master state, without rescanning every task to rebuild the aggregate."),
    cta: copy("查看独立子任务如何汇总为共同状态", "See how subtasks contribute to shared state"),
    indexLabel: copy("独立子任务与共同状态", "Independent subtasks, shared state"),
    diagramNote: copy("任务可以独立，Shot State 不必割裂。", "Independent task ownership, shared shot state."),
  },
  {
    id: "execution",
    index: "05",
    category: "EXECUTION",
    label: "Executable Rules",
    title: copy(
      "规则管理，流畅交接",
      "Manage rules for smooth handoffs",
    ),
    summary: copy(
      "开始制作时，Builder 按所选镜头建立工作场景；交付时，Publish / QC 检查镜头信息与产物要求，发现问题就报告并停止发布。",
      "Builder sets up the workspace for the selected shot. At delivery, Publish / QC checks the shot context and output requirements, reporting problems and stopping the publish when checks fail.",
    ),
    from: "Written Rules",
    to: "Executable Workflow",
    symptom: copy(
      "交付规则依赖 Artist 记忆。",
      "Delivery rules depend on artists remembering them.",
    ),
    cause: copy(
      "把说明文档当成执行机制。",
      "Documentation is treated as an execution mechanism.",
    ),
    meaning: copy(
      "Production Rules 被放进 Builder 和 Publish / QC 的实际执行路径，而不是只存在于 Pipeline 文档。",
      "Production rules run inside Builder and Publish / QC, rather than living only in pipeline documentation.",
    ),
    cta: copy("查看规则如何进入执行流程", "See how rules enter execution"),
    indexLabel: copy("Builder / Publish / QC", "Builder / Publish / QC"),
    diagramNote: copy(
      "规则附着于执行点：建立正确起点、约束依赖，并检查交付边界。",
      "Rules attach to execution points: starting state, dependencies and delivery boundaries.",
    ),
  },
] satisfies Array<{
  id: DecisionId;
  index: string;
  category: string;
  label: string;
  title: Copy;
  summary: Copy;
  from: string;
  to: string;
  symptom: Copy;
  cause: Copy;
  meaning: Copy;
  cta: Copy;
  indexLabel: Copy;
  diagramNote: Copy;
}>;
