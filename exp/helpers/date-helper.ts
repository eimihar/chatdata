import moment from "moment";

export class DateHelper {
    static get timestamp() {
        return moment().unix();
    }
}