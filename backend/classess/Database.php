<?php
class Database{
	protected $pdo;
	protected static $instance;
	protected function __construct(){
		$this->pdo = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PASS);
	}
	public static function instance(){ 
		if(self::$instance === Null){
			self::$instance = new self;  
		}
		
		return self::$instance;
				}
	public function __call($method,$args){
		return call_user_func_array(array($this->pdo,$method),$args); 
	}
}