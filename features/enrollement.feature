Feature: Le responsable des héros accède au formulaire
    d'enrollement d'un héro.
    Il peut saisir un nom.
    Il valide à la fin sa saisie.
    Le héro a bien été enregistré.

    Scenario: Enrollement d'un héro
        Given un héro s'appellant "Burger Master"
        When un responsable des héros enrolle ce héro
        Then ce héro est enrollé dans le comité des défenses de la Terre

#    Scenario: Enrollement d'un héro déjà enrollé
#        Given un héro déjà enrollé nommé "Burger Master"
#        When un responsable des héros enrolle ce héro
#        Then l'enrollement d'un héro déjà enrollé est impossible
#
#    Scenario: Enrollement d'un héro avec nom composé uniquement de caractères non visibles
#        Given un héro de classe S s'appellant " "
#        When un responsable des héros enrolle ce héro
#        Then l'enrollement du héro " " est impossible
#
#    Scenario: Enrollement d'un héro de classe S avec un nom possédant des caractères non visibles
#        Given un héro de classe S s'appellant " Burger Master  "
#        When un responsable des héros enrolle ce héro
#        Then "Burger Master" est enrollé en classe S dans le comité des défenses de la Terre
