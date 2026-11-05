import PageLayout from "../../components/PageLayout/PageLayout";
import IndustryHero from "../../components/Industries/IndustryHero";
import IndustryChallenges from "../../components/Industries/IndustryChallenges";
import IndustrySolutions from "../../components/Industries/IndustrySolutions";
import IndustryWorkflow from "../../components/Industries/IndustryWorkflow";
import IndustryResults from "../../components/Industries/IndustryResults";
import IndustryCTA from "../../components/Industries/IndustryCTA";
import { INDUSTRY_TABS } from "../../components/Industries/industriesData";

const BLOCKS = {
  hero: IndustryHero,
  challenges: IndustryChallenges,
  solutions: IndustrySolutions,
  workflow: IndustryWorkflow,
  results: IndustryResults,
  cta: IndustryCTA,
};

// The industry is chosen from the navbar Industries dropdown (#industries/<key>).
// Plain #industries shows the first one.
function Industries({ sub }) {
  const tab = INDUSTRY_TABS.find((t) => t.key === sub) || INDUSTRY_TABS[0];

  return (
    <PageLayout>
      {/* key remounts the content so each industry starts fresh at the top */}
      <div key={tab.key}>
        {tab.blocks.map((name) => {
          const Block = BLOCKS[name];
          return <Block key={name} tab={tab} />;
        })}
      </div>
    </PageLayout>
  );
}

export default Industries;
