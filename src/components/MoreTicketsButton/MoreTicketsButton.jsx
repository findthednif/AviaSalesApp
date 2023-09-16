import './MoreTicketsButton.scss';

export default function MoreTicketsButton({ onClick }) {
  return (
    <button type='button' className='moreTickets' onClick={onClick}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  );
}
