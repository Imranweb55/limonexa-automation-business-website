import PageLayout from "../../components/PageLayout/PageLayout";
import SolutionOverview from "../../components/Solutions/SolutionOverview";
import SolutionSteps from "../../components/Solutions/SolutionSteps";
import SolutionOutcomes from "../../components/Solutions/SolutionOutcomes";
import SolutionCTA from "../../components/Solutions/SolutionCTA";
import WorkflowShowcase from "../../components/Home/sections/WorkflowShowcase";
import { SOLUTION_TABS } from "../../components/Solutions/solutionsData";

const BLOCKS = {
  overview: SolutionOverview,
  showcase: WorkflowShowcase,
  steps: SolutionSteps,
  outcomes: SolutionOutcomes,
  cta: SolutionCTA,
};

// The sub-solution is chosen from the navbar Solutions dropdown (#solutions/<key>).
// Plain #solutions shows the first one.
function Solutions({ sub }) {
  const tab = SOLUTION_TABS.find((t) => t.key === sub) || SOLUTION_TABS[0];

  return (
    <PageLayout>
      {/* key remounts the content so each sub-solution starts fresh at the top */}
      <div key={tab.key}>
        {tab.blocks.map((name) => {
          const Block = BLOCKS[name];
          return <Block key={name} tab={tab} />;
        })}
      </div>
    </PageLayout>
  );
}

export default Solutions;
