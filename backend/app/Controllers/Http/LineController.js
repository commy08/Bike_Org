const axios = require('axios');
const qs = require('qs');
'use strict'
/**
 * Resourceful controller for interacting with lines
 */
class LineController {
  /**
   * Show a list of all lines.
   * GET lines
   */
  async index ({ request, response, view }) {
    // let oauth_authorize = {
    //     response_type: 'code',
    //     client_id: '1602409871',
    //     redirect_uri: 'http://localhost:3333/api/v1/callback',
    //     state: 'peerapat123456789'
    // };
    return response.json({url:'https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1602409871&redirect_uri=http://192.168.1.36:8080/callback&state=peerapat123456789'});
  }

  async callback ({ request, response, view }) {
    let data = {
      code: request.get().code,
      state: request.get().state
    }


    // let parameter = {
    //     grant_type: 'authorization_code',
    //     code: data.code,
    //     redirect_uri: 'http://localhost:3333/api/v1/lines/callback',
    //     client_id: '1602409871',
    //     client_secret: '37a7d9312db424eda44f68689373dd9e'
    // };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    let result = await axios.post('https://api.line.me/v2/oauth/accessToken?',
    'grant_type=authorization_code&code='+data.code+'&redirect_uri=http://192.168.1.36:8080/callback&client_id=1602409871&client_secret=37a7d9312db424eda44f68689373dd9e',
    config).then((r) => {

        return r.data;
    }).catch((err) => {
      return response.json(
        {
          error:err
        }
      );
    })

    let output = {
      status:200,
      access_token: result.access_token,
    }
    return response.json(output);


  }

  /**
   * Render a form to be used for creating a new line.
   * GET lines/create
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new line.
   * POST lines
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single line.
   * GET lines/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing line.
   * GET lines/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update line details.
   * PUT or PATCH lines/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a line with id.
   * DELETE lines/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LineController
