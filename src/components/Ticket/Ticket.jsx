import './Ticket.scss';
import { addMinutes, format, parseISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

export default function Ticket({ price, airline, to, back }) {
  const toDepartureTime = format(parseISO(to.date), 'HH:mm');
  const toArrivalTime = format(
    addMinutes(parseISO(to.date), to.duration),
    'HH:mm',
  );
  const backDepartureTime = format(parseISO(back.date), 'HH:mm');
  const backArrivalTime = format(
    addMinutes(parseISO(back.date), back.duration),
    'HH:mm',
  );
  const toFormattedTimeRange = `${toDepartureTime} - ${toArrivalTime}`;
  const backFormattedTimeRange = `${backDepartureTime} - ${backArrivalTime}`;
  const toDuration = [Math.floor(to.duration / 60), to.duration % 60];
  const backDuration = [Math.floor(back.duration / 60), back.duration % 60];
  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <span className='ticket__price'>{`${Math.floor(price / 1000)} ${
          price % 1000
        } Р`}</span>
        <img
          className='ticket__airline'
          src={`//pics.avs.io/99/36/${airline}.png`}
          alt='aviasales__logo'
        />
      </div>
      <ul className='ticket__to'>
        <li className='to__info'>
          <div className='info__head'>{`${to.origin} - ${to.destination}`}</div>
          <div>{toFormattedTimeRange}</div>
        </li>
        <li className='to__info'>
          <div className='info__head'>В ПУТИ</div>
          <div>{`${toDuration[0]}ч ${toDuration[1]}м`}</div>
        </li>
        <li className='to__info'>
          <div className='info__head'>
            {to.stops.length === 0
              ? 'Без пересадок'
              : `Пересадки: ${to.stops.length}`}
          </div>
          <div>
            {to.stops.map((stop) => (
              <span key={uuidv4()}>{`${stop} `}</span>
            ))}
          </div>
        </li>
      </ul>
      <ul className='ticket__back'>
        <li className='back__info'>
          <div className='info__head'>{`${back.origin} - ${back.destination}`}</div>
          <div>{backFormattedTimeRange}</div>
        </li>
        <li className='back__info'>
          <div className='info__head'>В ПУТИ</div>
          <div>{`${backDuration[0]}ч ${backDuration[1]}м`}</div>
        </li>
        <li className='back__info'>
          <div className='info__head'>
            {back.stops.length === 0
              ? 'Без пересадок'
              : `Пересадки: ${back.stops.length}`}
          </div>
          <div>
            {back.stops.map((stop) => (
              <span key={uuidv4()}>{`${stop} `}</span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}
