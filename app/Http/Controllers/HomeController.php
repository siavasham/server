<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
// use Coinremitter\Coinremitter;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $btc_wallet = new Coinremitter('BTC');
        // $param = [
        //     'label'=>'ok'
        // ];
        // $address = $btc_wallet->get_new_address($param);
    }

    public function index(Request $request)
    {
        $lang = $request->input('lang','fa');
        app()->setlocale($lang);
        $user = (object) [ 'isRtl'=> in_array($lang,['fa','ar'])];
        return view('home',['user'=>$user]);
    }


    
}

