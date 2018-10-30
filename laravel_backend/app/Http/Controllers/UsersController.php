<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *as
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $url = array(
            'url' => 'https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1602409871&redirect_uri=http://192.168.13.101:8080/callback&state=peerapat123456789',
        );
        header('Access-Control-Allow-Origin: *');
        die(json_encode($url));
    }

    public function callback()
    {

        $parameter = array(
            'grant_type' => 'authorization_code',
            'code' => trim($_GET['code']),
            'redirect_uri' => 'http://192.168.13.101:8080/callback',
            'client_id' => '1602409871',
            'client_secret' => '37a7d9312db424eda44f68689373dd9e'
        );
        $accessToken = $this->getAccessToken($parameter);
        if($accessToken){
            $getUser = $this->getProfile($accessToken);
            if(!$getUser) {
                $output = array(
                    'status' => 401,
                    'msg' => 'error login'
                );
                header('Access-Control-Allow-Origin: *');
                die(json_encode($output));
            }

            #ถ้าเกิดเข้าสู้ระบบสำเร็จ
            $output = array(
                'status' => 200,
                'msg' => 'Success',
                'access_token' => $accessToken
            );
            header('Access-Control-Allow-Origin: *');
            die(json_encode($output));

        }else{
            $output = array(
                'status' => 403,
                'msg' => 'error token'
            );
            header('Access-Control-Allow-Origin: *');
            die(json_encode($output));
        }
    }

    private function getAccessToken($parameter=array()){
        $response = json_decode($this->curl('https://api.line.me/v2/oauth/accessToken',$parameter,'POST'));
        return isset($response->access_token) ? $response->access_token: FALSE;
    }

    private function getProfile($access_token=''){
        if($access_token == '') return FALSE;
        $response = json_decode($this->curl('https://api.line.me/v2/profile',array(),'GET',array('Authorization: Bearer '.$access_token)));
        return isset($response->userId) ? $response: FALSE;
    }

    private function curl($url=null,$parameter=array(),$method='GET',$header=array()){
        $options = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_CUSTOMREQUEST => $method
        );
        if(!empty($parameter)) $options[CURLOPT_POSTFIELDS] = http_build_query($parameter);
        if(!empty($header)) $options[CURLOPT_HTTPHEADER] = $header;
        $curl = curl_init();
        curl_setopt_array($curl, $options);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    // public function registerUser(Request $request){
    //     $tmp = json_decode(file_get_contents('php://input'));
    //     $user = $this->showUser($request,true);

    //     DB::table('users')
    //     ->where('id', $user->id)
    //     ->update(
    //         ['firstname' => $tmp->name],
    //         ['lastname' => $tmp->lname],
    //         ['tel' => $tmp->phone],
    //         ['sex' => $tmp->select]
    //         // ['OrgName' => $tmp->OrgName]
    //     );

    //     header('Access-Control-Allow-Origin: *');
    //     die();
    // }

    public function registerOrg(Request $request){
        $tmp = json_decode(file_get_contents('php://input'));
        $user = $this->showUser($request,true);

        DB::table('users')
        ->where('id', $user->id)
        ->update(
            ['firstname' => $tmp->name,
            'lastname' => $tmp->lname,
            'tel' => $tmp->phone,
            'sex' => $tmp->gender]
            // ['OrgName' => $tmp->OrgName]
        );

        header('Access-Control-Allow-Origin: *');
        die();
    }


    public function showUser(Request $request,$system=false)
    {
        $tmp = json_decode(file_get_contents('php://input'));
        $getUser = $this->getProfile($tmp->access_token);
        $db = DB::table('users')->where('line_id',$getUser->userId);
        $count = $db->count();
        $users = $db->get();
        if ($count == 0){
            // DB::table('users')->insert(
            //     [
            //         'line_id' => $getUser->userId,
            //         'firstname' => $getUser->displayName,
            //         'line_pic' => $getUser->pictureUrl,
            //         'line_token' => null
            //     ]
            // );
            $nerd = new User;
            $nerd->line_id       = $getUser->userId;
            $nerd->firstname      = $getUser->displayName;
            $nerd->line_pic = $getUser->pictureUrl;
            $nerd->save();
            $db = DB::table('users')->where('line_id',$getUser->userId);
            $users = $db->get();
        }
        $users[0]->status = 200;
        if($system) return $users[0];
        header('Access-Control-Allow-Origin: *');
        die(json_encode($users[0]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        $user =  User::find($id);
         $user->delete();
    }
}
