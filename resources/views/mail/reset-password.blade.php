@component('mail::message')
# Password Reset Link
Dear, {{$detail['user']}}

    You can reset your password using the following link.
    If you didn't request this, please ignore this email.

@component('mail::button', ['url' => $detail['url']])
Reset Password
@endcomponent

This link will expire within the next 3 hours, if not used.<br>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
