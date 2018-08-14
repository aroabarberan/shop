<?php

use Illuminate\Http\Request;
use App\User;
use App\Http\Resources\User as UserResource;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['prefix'=>'/'], function () {
    Route::get('/users', function () {
        return User::all();
    });

    Route::get('/user/{id}', function ($id) {
        return User::find($id);
    });

    Route::post('/users', function(Request $request) {
        $user = new User;
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->password = $request['password'];
        $user->save();
    });
    //TODO
    Route::put('/users/{id}', function(Request $request, $id) {

        $user = User::find($id);
        $user->update($request->all());
    });

    Route::delete('/user/{id}', function($id) {
        User::find($id)->delete();
        return 204;
    });

});

