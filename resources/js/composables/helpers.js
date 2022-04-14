import moment from "moment";

export default function helpers(){
    const constants =
        {
            'default_date_format': 'MMM Do, YYYY',
            'default_title_length': 14,
            'default_short_description_length': 39,
            'default_description_length': 99,
            'default_image': 'http://localhost:8000/MyImages/1648644470.png',
            'session_expiration_warning': 15 * 60 * 1000, //user will receive a warning after 15 minutes of idle time
            'session_expiration_time': 15 * 60 * 5000, //user will be logged out after 5 seconds of receiving warning
            'tiny_mce_api_key':'rtjncvw6lujg8x1sordmdwp5jnwcl3pyiztsoi216anokyu4',
            'social_media':{
                'facebook': 'https://www.facebook.com/thetahses',
                'telegram': 'https://www.telegram.com/thetahses',
                'twitter': 'https://www.twitter.com/thetahses',
                'instagram': 'https://www.instagram.com/thetahses',
            },
            'information':{
                'email': 'info@thetahses.com',
                'location': '22 Rewina building 4th floor',
                'phone': '+251-11-896-43-43',
                'help_desk_link': 'https://helpdesk.thetahses.com'
            }
        };

    function getDate(date){
        if (date){
            return moment(date).format(constants.default_date_format);
        }
        return 'Not Published';
    }

    function getDescriptionShort(content){
        const description = document.createElement('div');
        description.innerHTML = content;
        const shortDesc = description.innerText;
        if (shortDesc && shortDesc.length > constants.default_short_description_length){
            return shortDesc.substr(0,constants.default_short_description_length).concat('...');
        }
        return shortDesc;
    }

    function getTitleShortened(title){
        if (title && title.length > constants.default_title_length){
            return title.substr(0,constants.default_title_length).concat('...');
        }
        return title;
    }

    function getDescriptionShortened(content){
        const description = document.createElement('div');
        description.innerHTML = content;
        const shortDesc = description.innerText;
        if (shortDesc && shortDesc.length > constants.default_description_length){
            return shortDesc.substr(0,constants.default_description_length).concat('...');
        }
        return shortDesc;
    }

    function getFirstImage(content){
        const description = document.createElement('div');
        description.innerHTML = content;
        const desc = description.getElementsByTagName("img");
        if (desc && desc.length !== 0){
            let arr = [];
            for (let i = 0; i < desc.length; i++) {
                arr.push(desc[i].src);
            }
            return arr[0];
        }
        else{
            return constants.default_image;
        }

    }

    return {
        constants,
        getDate,
        getDescriptionShort,
        getTitleShortened,
        getDescriptionShortened,
        getFirstImage
    }
}
