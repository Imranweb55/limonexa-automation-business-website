import PageLayout from "../../components/PageLayout/PageLayout";
import AboutIntro from "../../components/Home/sections/AboutIntro";
import ApproachTimeline from "../../components/Home/sections/ApproachTimeline";

function About() {
  return (
    <PageLayout>
      <AboutIntro />
      <ApproachTimeline />
    </PageLayout>
  );
}

export default About;
