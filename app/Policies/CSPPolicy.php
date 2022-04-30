<?php

namespace App\Policies;

use Spatie\Csp\Directive;
use Spatie\Csp\Keyword;
use Spatie\Csp\Policies\Policy;
use Illuminate\Auth\Access\HandlesAuthorization;

class CSPPolicy extends Policy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function configure()
    {
        $this
            ->addDirective(Directive::BASE, Keyword::SELF)
            ->addDirective(Directive::CONNECT, [Keyword::SELF, 'www.google-analytics.com'])
            ->addDirective(Directive::DEFAULT, Keyword::SELF)
            ->addDirective(Directive::FORM_ACTION, Keyword::SELF)
            ->addDirective(Directive::IMG, [Keyword::SELF, 'data:', 'http://localhost:8000/', 'www.google-analytics.com'])
            ->addDirective(Directive::MEDIA, Keyword::SELF)
            ->addDirective(Directive::OBJECT, Keyword::NONE)
            ->addDirective(Directive::SCRIPT, [Keyword::SELF, Keyword::UNSAFE_INLINE,Keyword::UNSAFE_EVAL, 'www.googletagmanager.com', 'www.google-analytics.com'])
            ->addDirective(Directive::STYLE, [Keyword::SELF, Keyword::UNSAFE_INLINE, 'fonts.googleapis.com'])
            ->addDirective(Directive::FONT, [Keyword::SELF, 'fonts.gstatic.com', 'data:'])
            ->addDirective(Directive::FRAME, [Keyword::SELF]);
//            ->addNonceForDirective(Directive::SCRIPT)
//            ->addNonceForDirective(Directive::STYLE);
    }
}
