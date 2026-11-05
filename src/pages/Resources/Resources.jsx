import PageLayout from "../../components/PageLayout/PageLayout";
import ResourceHeader from "../../components/Resources/ResourceHeader";
import BlogFeatured from "../../components/Resources/BlogFeatured";
import BlogGrid from "../../components/Resources/BlogGrid";
import Newsletter from "../../components/Resources/Newsletter";
import CaseCards from "../../components/Resources/CaseCards";
import CaseResults from "../../components/Resources/CaseResults";
import GuidesGrid from "../../components/Resources/GuidesGrid";
import GuideSteps from "../../components/Resources/GuideSteps";
import FaqCategories from "../../components/Resources/FaqCategories";
import ResourceCTA from "../../components/Resources/ResourceCTA";
import CaseStudy from "../../components/Home/sections/CaseStudy";
import { RESOURCE_TABS } from "../../components/Resources/resourcesData";

const BLOCKS = {
  header: ResourceHeader,
  blogFeatured: BlogFeatured,
  blogGrid: BlogGrid,
  newsletter: Newsletter,
  caseHighlight: CaseStudy,
  caseCards: CaseCards,
  caseResults: CaseResults,
  guidesGrid: GuidesGrid,
  guideSteps: GuideSteps,
  faqs: FaqCategories,
  cta: ResourceCTA,
};

// The sub-page is chosen from the navbar Resources dropdown (#resources/<key>).
// Plain #resources shows the first one (Blog).
function Resources({ sub }) {
  const tab = RESOURCE_TABS.find((t) => t.key === sub) || RESOURCE_TABS[0];

  return (
    <PageLayout>
      {/* key remounts the content so each sub-page starts fresh at the top */}
      <div key={tab.key}>
        {tab.blocks.map((name) => {
          const Block = BLOCKS[name];
          return <Block key={name} tab={tab} />;
        })}
      </div>
    </PageLayout>
  );
}

export default Resources;
