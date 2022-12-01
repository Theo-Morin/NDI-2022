<?php

$definitions = GlossaryDefinition::getAll();

$defCats = [];

foreach ($definitions as $def) {
    $firstChar = IntlChar::toupper($def->word[0]);
    if (!isset($defCats[$firstChar])) {
        $defCats[$firstChar] = [];
    }
    $defCats[$firstChar][] = $def;
}

echo json_encode($defCats);
