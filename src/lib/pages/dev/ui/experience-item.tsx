import { differenceInMonths, parse } from 'date-fns';
import pluralize from 'pluralize';

type Props = {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  positionType: string;
};

const formatDuration = (start: string, end: string): string => {
  const startDate = parse(start, 'MMM yyyy', new Date());
  const endDate = parse(end, 'MMM yyyy', new Date());

  const totalMonths = differenceInMonths(endDate, startDate) + 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];

  if (years > 0) parts.push(`${years} ${pluralize('year', years)}`);
  if (months > 0 || years === 0) parts.push(`${months} ${pluralize('month', months)}`);

  return parts.join(' ');
};
export const ExperienceItem: React.FC<Props> = ({
  company,
  description,
  endDate,
  location,
  position,
  positionType,
  startDate,
}) => {
  const durationFormatted = formatDuration(startDate, endDate);

  return (
    <div className='space-y-2'>
      <div>
        <span className="font-bold">{position}</span>
        {company && ' at '}
        <span className="font-bold">{company}</span> - <span>{location}</span>
      </div>
      <div>
        <span>{startDate}</span> – <span>{endDate}</span> (
        <span>{durationFormatted}</span>, <span>{positionType}</span>)
      </div>
      <ul className='space-y-1 text-sm'>
        {description.map((item, index) => (
          <li key={index} className='list-disc ml-4'>{item}</li>
        ))}
      </ul>
    </div>
  );
};
