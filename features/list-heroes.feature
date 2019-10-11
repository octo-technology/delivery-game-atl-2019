Feature: Le responsable des héros accède à la liste des héros enrollés.

    Scenario: Affichage des héroes
        Given un héro déjà enrollé nommé "Burger Master"
        And un héro déjà enrollé nommé "Aquatank"
        When un responsable des héros affiche les héros
        Then la liste retournée est:
            | name          |
            | Burger Master |
            | Aquatank      |
