import moment from "moment";

export default function formatDate(){
        return moment(new Date()).format('MMM DD, YYYY')
}
