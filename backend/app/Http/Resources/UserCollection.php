<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'links' => [
                'self' => 'link-value',
            ],
        ];
    }

    public function store(Request $request)
    {
        $user = User::create([
            'id' => $request->user()->id,
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'image' => $request->image,
            'remember_token' => $request->remember_token,
            'created_at' => $request->created_at,
            'update_at' => $request->update_at,
        ]);
        return new UserResource($user);
    }
}
