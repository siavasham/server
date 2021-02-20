<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Models\Ticket; 

class TicketController extends Controller
{
    public $successStatus = 200;

    public function tickets(Request $request){
        $tickets = Ticket::where('user_id', $request->user->id)->get();
        return response()->json(['success' =>$tickets]); 
    }
   
}
