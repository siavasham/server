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
    public function Coin(Request $request){
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
        return response()->json(['success' =>['wallet'=>$wallet]]); 
    }
    public function Wallet(Request $request){
        $wallet = Wallet::where('user_id',$request->user->id)->get();
        try {
            $coins = Coin::where('status', true)->get();
            $obj = new CoinRemitter($request->coin);
            $res = $obj->get_coin_rate();
            if (isset($res['data'])){     
                foreach ($coins as $coin) {
                    $coin->price = $res['data'][$coin->name]['price'];
                    $coin->save();
                }
            }
        } catch (\Throwable $th) {
        }
        
        return response()->json(['success' =>['coins'=>$coins,'wallet'=>$wallet]]); 
    }
    public function Withdraw(Request $request){
        $validator = Validator::make($request->all(), [ 
            'coin' => 'required', 
            'amount' => 'required', 
            'address' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $wallet = Wallet::where('user_id',$request->user->id)->where('coin',$request->coin) ->first();
        if(!$wallet){
            return response()->json(['error' => 'no-wallet-found']); 
        }
        $obj = new CoinRemitter($request->coin);
        $res = $obj->validate_address(['address'=>$request->address]);
        if ($res['data']['valid'] === false){ 
            return response()->json(['error' =>['address'=>['validation.invalid']]] );
        }
        $withdrawable =  $wallet->balance + $wallet->profit + $wallet->referral -$wallet->freezed ;
        if($withdrawable < $request->amount){
            return response()->json(['error' =>['amount'=>['validation.moreBalance']]] );
        }
        return response()->json(['success' =>true]); 
    }
   
}
