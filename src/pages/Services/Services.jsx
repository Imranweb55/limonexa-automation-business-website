import { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import ServiceTabs from "../../components/Services/ServiceTabs";
import ServiceOverview from "../../components/Services/ServiceOverview";
import ServiceFeatures from "../../components/Services/ServiceFeatures";
import TrustedClients from "../../components/Services/TrustedClients";
import ServiceCTA from "../../components/Services/ServiceCTA";
import { SERVICE_TABS } from "../../components/Services/servicesData";

function Services() {
  const [active, setActive] = useState(SERVICE_TABS[0].key);
  const tab = SERVICE_TABS.find((t) => t.key === active);

  return (
    <PageLayout>
      <ServiceTabs tabs={SERVICE_TABS} active={active} onChange={setActive} />
      {/* key remounts the content so each sub-tab starts fresh at the top */}
      <div key={tab.key} role="tabpanel">
        {tab.blocks.includes("overview") && <ServiceOverview tab={tab} />}
        {tab.blocks.includes("features") && <ServiceFeatures tab={tab} />}
        {tab.blocks.includes("clients") && <TrustedClients />}
        {tab.blocks.includes("cta") && <ServiceCTA tab={tab} />}
      </div>
    </PageLayout>
  );
}

export default Services;
