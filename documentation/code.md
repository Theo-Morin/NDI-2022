# Normes de code imposées

## Affichage du code
Toutes le code doit être affichable sur un écran 1920x1080 en plein écran Donc si votre ligne dépasse la page, vous devez faire un retour à la ligne.

## Les fonctions
**Les fonctions sans paramètres**
```java
public void maFonction() { /* Sur une ligne si possible */ } 
```
```java
public void maFonction() {
    // Sur
    // plusieurs
    // lignes
    // sinon
} 
```
**Les fonctions avec paramètre(s) :**
```java
public void maFonction(Param premierParametre) {/* contenu */}
```
```java
public void maFonction(Param premierParametre, Param secondParametre) {/* contenu */}
```
```java
public void maFonction(
    Param premierParametre,
    Param secondParametre,
    Param troisemeParametre,
    ...
) {/* contenu */}
```

## Les classes
**Les classes doivent contenir une majuscule !! Et le nom du fichier aussi !**
```java
/**
 * src/components/models/MaClasse.ext
 **/

public class MaClasse {}
```

## Les dossiers et fichiers (Hors classes)
**Ils doivent s'écrire uniquement en minuscule, avec des "-" en guise d'espace.**  
**Les fichiers doivent s'écrire au singulier.**  
**Les dossiers doivent s'écrire au pluriel.**

## DOCUMENTEZ VOS FONCTION OBLIGATOIREMENT ET VOTRE CODE QUAND C'EST NECESSAIRE
**Documenter sa fonction :**
```java
/**
 * Description de la fonction
 *
 * @Input param1 : ce que vous attendez
 * @Input param2 : ce que vous attendez
 *
 * @result : ce que retourne la fonction
 */
```
**Documenter son code :**
```java
public void maFonction() {
    // Algorithme de parcours en diagonal des utilisateurs
    // Lecture verticale
    for(...) {
        // Lecture horizontale
        for(...) {
            ...
        }
    }
}
```

### En cas de questions supplémentaires le jour de l'evenement, référez-vous à votre Lead.