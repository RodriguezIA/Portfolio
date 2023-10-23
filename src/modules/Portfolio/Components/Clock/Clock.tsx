import { createSignal, onCleanup } from 'solid-js';
import moment from 'moment';

export function Clock() {
  const [currentTime, setCurrentTime] = createSignal(moment());

  const updateClock = () => {
    setCurrentTime(moment());
  };

  // Actualizar el reloj cada segundo
  const timerId = setInterval(updateClock, 1000);

  const getFormattedTime = () => {
    const time = currentTime();
    const hours = time.format('h'); // Formato de doce horas
    const minutes = time.format('mm');
    const ampm = time.format('A'); // AM o PM
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div>
      <h3>{getFormattedTime()}</h3>
    </div>
  );
}
