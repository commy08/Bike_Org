<?php

namespace App\Http\Controllers\API;

use App\Event;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $event = new Event();
        $event->fill($request->all());
        // $event->name = $request->name;
        // $event->detail = $request->detail;
        // $event->location = $request->location;
        // $event->dateClose = $request->dateClose;
        // $event->dateDeadline = $request->dateDeadline;
        // $event->dateRace = $request->dateRace;
        // $event->type = $request->type;
        // $event->user_id = $request->user_id;
        // $event->rule = $request->rule;
        // $event->status = $request->status;
        // $event->payment = $request->payment;
        // $event->reward = $request->reward;
        $event->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
