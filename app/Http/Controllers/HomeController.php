<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function index(Request $request)
    {
        $lang = $request->input('lang','fa');
        app()->setlocale($lang);
        $user = (object) [ 'isRtl'=> in_array($lang,['fa','ar'])];
        return view('home',['user'=>$user]);
    }


    
}

