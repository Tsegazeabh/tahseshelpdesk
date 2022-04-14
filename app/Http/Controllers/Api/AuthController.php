<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Mail\ResetPassword;
use App\Models\User;
use Carbon\Carbon;
use http\Env\Response;
use http\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $user = User::all();
        return response($user);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(AuthRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        $token = $user->createToken('authToken')->plainTextToken;

        return response(['token'=>$token]);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        $user = User::all()->where('id',1)->firstOrFail();
        Auth::guard('web')->logout();

        $user->tokens()->delete();
        return response(['message'=> 'logged out successfully']);
    }

    public function forgotPassword(Request $request){
        $user = User::where('email', $request->email)->first();

        if ( $user ) {
            Log::info('sent password reset link and ');
            $token = Str::random(64);
            $password_reset_token = Hash::make($token);

            $token_expiry = Config::get('custom_config.default_password_reset_token_expiration');
            DB::table('password_resets')->insert([
                'email' => $request->email,
                'token' => $token,
                'created_at' => Carbon::now()->addDays($token_expiry)
            ]);

            $url = Config('custom_config.base_url').'/reset-password/'.$token.'?email='.urlencode($user->email);
            $detail = ['url'=>$url,'user'=>$user->name];
//            send mail with this token $token and email
            Mail::to($request->email)->send(new ResetPassword($detail));

            return response(['message' => 'Password Reset Link Sent Successfully']);
        }

        return response(['message' => 'Password Reset Link Sent Successfully']);
    }

    public function resetPassword(Request $request){
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
            'token' => 'required' ]);


        $tokenData = DB::table('password_resets')
            ->where('email', $request->email)->first();


        if (!$tokenData){
            return response(['message'=>'Token is not valid!'],401);
        }

        if (Carbon::now() > $tokenData->created_at){
            DB::table('password_resets')->where('email', $request->email)
                ->delete();
            return response(['message'=>'Token is Expired!'],401);
        }

        $user = User::all()->where('email', $tokenData->email)->first();
        if (!$user){
            return response(['message'=>'Email Not Found!']);
        }

        $user->password = Hash::make($request->password);
        $user->update();
        DB::table('password_resets')->where('email', $user->email)
            ->delete();
        return response(['message'=>'Password Changed Successfully!']);
    }

    public function changePassword(Request $request){
        try {
            $request->validate([
                'current_password' => 'required | string',
                'new_password' => 'required | string'
            ]);

            $user = User::all()->first();
            if (!$user || !Hash::check($request->current_password,$user->password)){
                return response(['message'=>'Current Password Is Not Correct'],403);
            }


            $user->password = Hash::make($request->new_password);
            $user->update();
            return response(['message'=>'Password Changed successfully']);
        }catch (\Throwable $exception){
            Log::info($exception);
            return response($exception);
        }
    }
}
