import { WorkSamplesT } from '../../types';
import WorkSample from '../WorkSample/WorkSample';
import './Section.scss';

interface SectionProps {
  id: string;
  data: WorkSamplesT;
}

function Section({ id, data }: SectionProps) {
  const workSamples = data.workSamples.map((data, i) => {
    return <WorkSample key={i} workSample={data} />;
  });

  return <section id={id}>{workSamples}</section>;
}

export default Section;
