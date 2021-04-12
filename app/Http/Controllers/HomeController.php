<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Plan; 
use App\Models\Faq; 

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
        $plans = Plan::where('status', true)->get();
        $faq = Faq::get();
        return view('home',['user'=>$user,'plans'=>$plans,'faq'=>$faq]);
    }


    
}

