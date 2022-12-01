<?php

$definitions = GlossaryDefinition::getAll();

echo json_encode($definitions);
