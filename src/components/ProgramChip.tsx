import { useState } from 'react';
import type { ProgramLogo } from '../data/portfolio';

const ProgramChip = ({ program }: { program: ProgramLogo }) => {
  const [imgOk, setImgOk] = useState(true);
  const showImg = program.logo && imgOk;
  const className = `job-logo${program.dark && showImg ? ' dark' : ''}`;
  const content = showImg ? (
    <img src={program.logo} alt={program.name} loading="lazy" onError={() => setImgOk(false)} />
  ) : (
    <span>{program.name}</span>
  );
  return program.href ? (
    <a className={className} href={program.href} target="_blank" rel="noopener noreferrer" title={program.name}>
      {content}
    </a>
  ) : (
    <span className={className} title={program.name}>{content}</span>
  );
};

export default ProgramChip;
