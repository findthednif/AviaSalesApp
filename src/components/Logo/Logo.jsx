import './Logo.scss';
import logoImg from './Logo.svg';

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logoImg} alt='AviaSalesLogo' />
    </div>
  );
}
