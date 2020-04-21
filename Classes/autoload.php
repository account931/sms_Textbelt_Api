<?php



//Causes crashes with namespaces
//uses autoload instead of manual includin each class
spl_autoload_register ('autoload');

function autoload($class)
{
    $parts = explode('\\', $class);
    require end($parts) . '.php';
}
/*
function autoload ($className) {
  $fileName = $className . '.php';
  include  $fileName;
  }
 */ 
  
  
  
  /*
  spl_autoload_register(function ($class) {
      require_once str_replace('\\', '/', $class). '.php'; 
      });
	  */
?>