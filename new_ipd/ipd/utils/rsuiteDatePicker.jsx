import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

const RsuiteDatePicker = ({
    style,
    placeholder,
    onChange,
    value,
    cleanable,
    ranges,
    format,
    renderValue,
    size,
}) => {
    return <DateRangePicker
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        cleanable={cleanable || false}
        ranges={ranges}
        format={format}
        renderValue={renderValue}
        size={size}
    />
}

export default RsuiteDatePicker;