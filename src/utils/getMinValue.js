import minBy from './minBy';
import toInt from './toInt';

export default arr => {
    return toInt(minBy((obj) => toInt(obj.price), arr).price);
}
