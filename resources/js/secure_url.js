    const urlTypes = [
        {'create_get': md5('create_get')},
        {'create_post': md5('create_post')},
        {'edit_get': md5('edit_get')},
        {'edit_post': md5('edit_post')},
        {'delete': md5('delete')},
        {'remove': md5('remove')},
        {'enable': md5('enable')},
        {'disable': md5('disable')},
        {'modify_get': md5('modify_get')},
        {'modify_post': md5('modify_post')},
        {'reset': md5('reset_post')},
        {'cms': md5('dashboard')},
    ];

    function formatMD5(url)
    {
        let hash = url.toUpperCase();
        let formatedMD5 =
            hash.substring(0, 8) + '-' +
            hash.substring(8, 4) + '-' +
            hash.substring(12, 4) + '-' +
            hash.substring(16, 4) + '-' +
            hash.substring(20);
        return formatedMD5;
    }
    function getSecureURL(action)
    {
        switch (action) {
            case 1://This means you can also use numbers instead of strings while calling the function, so that you can apply arrays.
            case 'create_get':
                return formatMD5('ddd');
            case 2:
            case 'create_post':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.create_post'));
            case 3:
            case 'read':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.read'));
            case 4:
            case 'manage':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.manage'));
            case 5:
            case 'list':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.list'));
            case 6:
            case 'edit_get':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.edit_get'));
            case 7:
            case 'edit_post':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.edit_post'));
            case 8:
            case 'delete':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.delete'));
            case 9:
            case 'publish':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.publish'));
            case 10:
            case 'unpublish':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.unpublish'));
            case 11:
            case 'archive':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.archive'));
            case 'restore':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.restore'));
            case 12:
            case 'upload':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.upload'));
            case 13:
            case 'laravel-file-manager':
            case 'lfm':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.lfm'));
            case 14:
            case 'auth-root-url':
            case 'auth':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.auth'));
            case 15:
            case 'stats':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.stats'));
            case 16:
            case 'upload_get':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.upload_get'));
            case 17:
            case 'upload_post':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.upload_post'));
            case 'remove':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.remove'));
            case 'open':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.enable'));
            case 'close':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.disable'));
            case 'modify_get':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.modify_get'));
            case 'modify_post':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.modify_post'));
            case 'reset':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.modify_reset'));
            case 'cms':
                return formatMD5(urlTypes);
            case 'submit':
                return formatMD5(Config::get('custom_config.crud_func_secure_url.submit'));
            default:
                return null;
        }
    }

