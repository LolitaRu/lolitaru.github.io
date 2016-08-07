//echo $_SERVER['HTTP_USER_AGENT'];
if( $curl = curl_init() ) {
	curl_setopt($curl, CURLOPT_URL, 'http://classic.dzzzr.ru/moscow/?section=anons&&err=22');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, array (
		'action'=>'auth',
		'login'=>'sonic_win',
		'password'=>'Radostev83',
		'submit'=>'ok'
	));
	curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36");
//curl_setopt($curl, CURLOPT_REFERER, "http://classic.dzzzr.ru/moscow/");
//curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
//echo curl_redir_exec($curl);
   echo curl_exec($curl);
   curl_close($curl);
  }