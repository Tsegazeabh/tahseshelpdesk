<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="9y2yuYtlpk15h9pvi5SrZRvprBXchvcMVnzRKlio7DM" />
        <title>Laravel Vue</title>

        <!-- Fonts -->
        <style>
            *{
                box-sizing: border-box;
            }
            ::-webkit-scrollbar {
                width: 5px;
            }

            ::-webkit-scrollbar-track {
                background-color: #efefef;
            }

            ::-webkit-scrollbar-thumb {
                background-color: #56935D;
                border-radius: 100px;
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            body {
                /*font-family: 'Poppins', sans-serif;*/
                scroll-behavior: smooth;
            }
        </style>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased" id="body">
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
