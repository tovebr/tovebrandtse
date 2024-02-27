import './WorkSample.scss';
import { WorkSampleT } from '../../types';

interface WorkSampleProps {
  workSample: WorkSampleT;
}

function WorkSample({ workSample }: WorkSampleProps) {
  return (
    <div className='worksample'>
      <div>{workSample.title}</div>
      <div>{workSample.url}</div>
      {workSample.img.length > 1 && <img src={`../../${workSample.img[0]}`} />}
    </div>
  );
}

export default WorkSample;
