<?php
//variant of autoloader with namespaces. See details at {http://smhfanda.blogspot.com/2015/07/phpautoload.html}

//Fully working, in order to use:
			//1. Call necessary class (in index.php) like this {use MySmsTetxBelt\Check_Is_Curl_Installed;}, NOT {use MySmsTetxBelt\Classes\Check_Is_Curl_Installed;}
			//2. In class itself (in folder "Classes/") use namespace {namespace MySmsTetxBelt;} NOT  {namespace MySmsTetxBelt\Classes;}

class NamespaceAutoloader {
	


    protected $namespaceMap = array();

	//function to set namespace, creates an array from args
    public function addNamespace($namespace, $rootDir){
        if (is_dir($rootDir)){
            $this->namespaceMap[$namespace] = $rootDir;  //var_dump($namespaceMap); echo "OK";
            return true; 
        } else {
		    echo "crash";
            return false;
		}
    }
	
    //register  function autoload()
    public function register(){
        spl_autoload_register(array($this, 'autoload'));
    }

    protected function autoload($class){
        $pathParts = explode('\\', $class); //split passed class to array, ie {MySmsTetxBelt\Classes\Check_Is_Curl_Installed} to {array =['MySmsTetxBelt', 'Classes', 'Check_Is_Curl_Installed']
        if (is_array($pathParts)){
            $namespace = array_shift($pathParts); //gets the 1st elem of array, i.e "MySmsTetxBelt"
            if (!empty($this->namespaceMap[$namespace])){
                $filePath = $this->namespaceMap[$namespace].'/'.implode('/', $pathParts).'.php';
                require_once $filePath;
                return true;
            }
        }
        return false;
    }
}