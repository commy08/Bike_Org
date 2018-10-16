<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $url = array(
            'url' => 'https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1602409871&redirect_uri=http://192.168.1.36:8080/callback&state=peerapat123456789',
        );
        die(json_encode($url));
    }

    public function callback()
    {
        $parameter = array(
            'grant_type' => 'authorization_code',
            'code' => trim($_GET['code']),
            'redirect_uri' => 'http://192.168.1.107:8080/callback',
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
                die(json_encode($output));
            }

            #ถ้าเกิดเข้าสู้ระบบสำเร็จ
            $output = array(
                'status' => 200,
                'msg' => 'Success'
            );
            die(json_encode($output));

        }else{
            $output = array(
                'status' => 403,
                'msg' => 'error token'
            );
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

}
