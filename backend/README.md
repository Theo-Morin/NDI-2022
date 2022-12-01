# Backend

## Routes

Les 3 premiers éléments indiqués dans le chemin sont transformés en paramètres du fichier `index.php`.

Par exemple :
```
/user/login
```
devient :
```
/index.php?uc1=user&uc2=login
```

Au-delà de 3 éléments, on redirige vers `/home`.
