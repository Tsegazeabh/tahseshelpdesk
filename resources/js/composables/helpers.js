import moment from "moment";

export default function helpers(){
    const constants =
        {
            'default_date_format': 'MMM Do, YYYY',
            'default_title_length': 14,
            'default_short_description_length': 39,
            'default_description_length': 99,
            'default_image': 'http://localhost:8000/MyImages/1648644470.png'
        };

    function getDate(date){
        return moment(date).format(constants.default_date_format);
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
            return title.substr(0,constants.default_title_length);
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
