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

      {/* {typeof workSample.img === 'string' && <img className='' src={workSample.img} />}
      {workSample.img instanceof Array && workSample.img.length > 0 && (
        <img src={workSample.img[0]} />
      )} */}
    </div>
  );
}

export default WorkSample;
