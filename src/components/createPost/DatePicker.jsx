import { DateRangePicker } from '@nextui-org/date-picker';
import { getLocalTimeZone, today } from '@internationalized/date';

const DatePicker = ({ date, setDate }) => {
  return (
    <DateRangePicker
      className='max-w-xs'
      maxValue={today(getLocalTimeZone())}
      value={date}
      onChange={setDate}
    />
  );
};

export default DatePicker;
