import moment from "moment";

export default function formatDate(){
    console.log(moment(Date.now()).format('MMM DD, YYYY'));
        return moment(new Date()).format('MMM DD, YYYY')
}
