import maxBy from './maxBy';
import toInt from './toInt';

export default arr => {
    return toInt(maxBy((obj) => toInt(obj.price), arr).price);
}
