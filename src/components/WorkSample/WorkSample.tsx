import './WorkSample.scss';
import { WorkSampleT } from '../../types';
import { upperCasedFirstChar } from '../../helpers';

interface WorkSampleProps {
  workSample: WorkSampleT;
  buttonText: string;
}

function WorkSample({ workSample, buttonText }: WorkSampleProps) {
  const { img, video, title, description, url, tech } = workSample;
  return (
    <div className='worksample'>
      <h2 className='worksample-title'>{upperCasedFirstChar(title)}</h2>
      <div className='worksample-container'>
        {video && (
          <video autoPlay loop muted id='video'>
            <source src={video} type='video/mp4' />
          </video>
        )}
        {!video && <img className='worksample-img' src={img} />}
        <div className='worksample-info'>
          <p className='worksample-desc'>{description}</p>
          <button className='worksample-link'>
            <a href={url}>{buttonText}</a>
          </button>
        </div>
      </div>
      {tech && <small className='worksample-tech'>{tech.join(', ')}</small>}
    </div>
  );
}

export default WorkSample;
