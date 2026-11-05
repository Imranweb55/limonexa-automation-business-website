import PageLayout from "../../components/PageLayout/PageLayout";
import ServiceOverview from "../../components/Services/ServiceOverview";
import ServiceStats from "../../components/Services/ServiceStats";
import ServiceProcess from "../../components/Services/ServiceProcess";
import ServiceFeatures from "../../components/Services/ServiceFeatures";
import ServiceCompare from "../../components/Services/ServiceCompare";
import ServiceTools from "../../components/Services/ServiceTools";
import ServiceFaq from "../../components/Services/ServiceFaq";
import TrustedClients from "../../components/Services/TrustedClients";
import ServiceCTA from "../../components/Services/ServiceCTA";
import { SERVICE_TABS } from "../../components/Services/servicesData";

const BLOCKS = {
  hero: ServiceOverview,
  stats: ServiceStats,
  process: ServiceProcess,
  features: ServiceFeatures,
  compare: ServiceCompare,
  tools: ServiceTools,
  faq: ServiceFaq,
  clients: TrustedClients,
  cta: ServiceCTA,
};

// The sub-service is chosen from the navbar Services dropdown (#services/<key>).
// Plain #services shows the first one.
function Services({ sub }) {
  const tab = SERVICE_TABS.find((t) => t.key === sub) || SERVICE_TABS[0];

  return (
    <PageLayout>
      {/* key remounts the content so each sub-service starts fresh at the top */}
      <div key={tab.key}>
        {tab.blocks.map((name) => {
          const Block = BLOCKS[name];
          return <Block key={name} tab={tab} />;
        })}
      </div>
    </PageLayout>
  );
}

export default Services;
