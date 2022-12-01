<?php

$orgs = HelpfulOrganization::getAll();

echo json_encode($orgs);
