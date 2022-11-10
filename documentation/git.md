# Documentation GIT

**Pour commencer, sachez que nous utilisons le système de pull request proposé par GitHub pour travailler.**

## Normes
- Une branche par tache, votre pull request doit donc être liée au tag de la carte Trello désignée.
- Chaque branche doit commencer par "**frontend/**", "**backend/**" ou "**infra/**" selon la nature de votre tache.

## Récupérer le projet
**ssh :**
```sh
ssh git@github.com:Theo-Morin/NDI-2022.git
```
**git :**
```sh
git clone https://github.com/Theo-Morin/NDI-2022.git
```

## Mettre à jour le projet
Sur la branche que vous souhaitez mettre à jour :
```sh
git pull
```

## Changer de branche
```sh
git checkout [...]/mabranche
```

## Accéder à une branche distante
```sh
# Permet de récupérer les branches distantes
git fetch

# -t : permet de checkout une branche distante
git checkout -t origin/labranchedistante
```

## Créer une branche
```sh
git checkout -b mabranche
```

## Mettre un travail non "commited" de côté
Cette astuce peut être utile si vous avez besoin de retourner sur la branche master pour mettre le projet à jour mais que vous n'avez pas encore "commit" votre travail.
```
git stash
```

Pour retrouver votre travail 'stashed' il suffit de retaper :
```
git stash pop
```

## Ajouter un fichier au futur commit
```sh
# Directement sur vscode avec l'extension Git ou
git add monfichier
```

## Créer un commit
Les descriptions de commit doivent être préfixés de "**[Frontend]**" , "**[Backend]**" ou "**[Infra]**" selon la nature de la tache que vous effectuez.
```sh
# Directement sur vscode avec l'extension Git ou
git commit -m "[Frontend] description du commit"
```

## Publier un commit
```sh
git push -u origin [..]/mabranche
```

## Publier un commit après la résolution d'un conflit
```sh
git push --force-with-lease origin [..]/mabranche
```

## Régler un conflit
Installez l\'extension git....  

Allez sur les fichiers concernés, selectionnez la/es versions du code que vous souhaitez concervés.

Ajoutez seulement les fichiers qui étaient en conflit :
```sh
git add monfichier
```

Et ensuite continuez le rebase :
```sh
git rebase --continue
```

## Créer une pull request
Lorsque vous avez push votre branch, un message sur l'interface du projet github s'affichera et vous proposera de créer une pull request.

Cliquez dessus et ajoutez comme titre le nom de la tache en cour préfixé de **[Frontend]**, **[Backend]** ou **[Infra]** selon la nature de la tache.

### En cas de questions supplémentaires le jour de l'evenement, référez-vous à votre Lead.
