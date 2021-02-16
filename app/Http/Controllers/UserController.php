<?php

namespace App\Http\Controllers;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Facades\JWTFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller; 
use App\Models\User; 
use App\Models\TempUser; 
use App\Models\Login; 
use Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    public function Register(Request $request){
         $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $credentials = $request->only('name','email','password');
        $res = [];
        foreach(['email','name'] as $search){
            $temp = User::where($search, $credentials[$search])->count();
            if($temp> 0){
                $res[$search] = ['validation.exist'];
            }
        }
        if(count($res)){
            return response()->json(['error' =>$res]); 
        }

        TempUser::where('email',$credentials['email'])->delete();
        $user = TempUser::updateOrCreate($credentials);

        // try {
        //     app()->setlocale('fa');
        //     Mail::send('email.verify', ['code' => $user->code], function ($m) use ($user) {
        //         $m->to($user->email, $user->name)->subject(__('emailVerification'));
        //     });
        // }catch (Exception $e) {
        //     return response()->json(['success' =>$user->code]); 
        // }
        return response()->json(['success' =>$user->code]); 
    }
    public function Login(Request $request){
         $validator = Validator::make($request->all(), [ 
            'email' => 'required|email', 
            'password' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
      
        $user = User::where('email',$request->email)->where('password',md5($request->password)) ->first();
        if(!$user){
             return response()->json(['error' => 'wrong-user-pass']); 
        }
       
        return  $this->makeLogin($user,$request);
    }
    public function Active(Request $request){
         $validator = Validator::make($request->all(), [ 
            'code' => 'required|regex:/[0-9]{6}/', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $token = TempUser::where('email',$request->email)->orderByDesc('id') ->first();
        if($token){
            if($token->manyTrid()){
                return response()->json(['error' => 'to-many-try']); 
            }
            if($token->isVerified()){
                return response()->json(['error' => 'code-is-used']); 
            }
            if($token->code != $request->code){
                $token->increment('try');
                $token->save();
                 return response()->json(['error' => 'invalid-code']); 
            }
            $token->verified = true;
            $token->save();
            
            $credentials = ['name'=>$token->name,'email'=>$token->email,'password'=>$token->password];
            $user = User::updateOrCreate($credentials);   
                
            return  $this->makeLogin($user,$request);
             
        }
        return response()->json(['error' => 'invalid email']); 
    }
    public function Me(Request $request){
        
        return response()->json(['success' => $request->user]); 
    }

    function makeLogin($user,$request){
        $credentials = ['user_id'=>$user->id,'ip'=> $request->ip()];
        $insert = Login::create($credentials);
        $user_data = ['id'=>$user->id];
        $token = $this->generateToken($user_data);
        return response()->json(['success' =>['token'=>$token,'name'=>$user->name]]);
    }
    function generateToken($user_data){
        $factory = JWTFactory::customClaims([
            'sub'   => 'user',
            'ttl'   => env('JWT_TTL', null),
            'user'  => $user_data
        ]);
        $payload = $factory->make();
        return JWTAuth::encode($payload)->get();
    }
}
