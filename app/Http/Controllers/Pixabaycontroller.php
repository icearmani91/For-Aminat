<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PixabayController extends Controller
{
    const APIKey = '14205047-4d2872fff1b07094f35f807c2';
    const APIUrl = 'https://pixabay.com/api/';


    public function getImage()
    {
        if (!$_GET['postName']) return false;
        $string = $_GET['postName'];
        $url = self::APIUrl . '?key=' . self::APIKey . '&=' . $string . '&image_type=photo';
        $data = json_decode(file_get_contents($url));
        $i = random_int(0, 15);
        return json_encode($data->hits[$i]->webformatURL);
    }

}
