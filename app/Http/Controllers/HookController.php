<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use Log;

class HookController extends Controller
{
    public $successStatus = 200;

    public function index(Request $request){
        $log = [
                'URI' => $request->getUri(),
                'METHOD' => $request->getMethod(),
                'REQUEST_BODY' => $request->all(),
            ];

        Log::info(json_encode($log));
        return response()->json(['success' =>   true]); 
    }
   
}
