<?php

namespace App\Http\Controllers;

use app\Library\CoinRemitter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Models\User; 
use App\Models\Wallet; 
use App\Models\Coin; 
use Validator;

class WalletController extends Controller
{
    public $successStatus = 200;

    public function Address(Request $request){
         $validator = Validator::make($request->all(), [ 
            'coin' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $wallet = Wallet::where('user_id',$request->user->id)->where('coin',$request->coin) ->first();
        if(!$wallet){
            $obj = new CoinRemitter($request->coin);
            $res = $obj->get_new_address(['label'=>$request->user->id]);
            if (!isset($res['data'])){
               return response()->json(['error' => 'haveProblem']); 
            }
            $credentials = ['user_id'=>$request->user->id,'coin'=>$request->coin,'address'=>$res['data']['address']];
            $wallet = Wallet::updateOrCreate($credentials);   
        }
        return response()->json(['success' =>$wallet]); 
    }
    public function Wallet(Request $request){
        $wallet = Wallet::where('user_id',$request->user->id)->get();
        $coins = Coin::where('status', true)->get();
        return response()->json(['success' =>['coins'=>$coins,'wallet'=>$wallet]]); 
    }
   
}
