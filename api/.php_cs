<?php

$finder = PhpCsFixer\Finder::create()
    ->in([
        'app',
        'config',
        'database',
        'resources',
        'routes',
        'tests',
    ])
    ->name('*.php')
    ->notName('*.blade.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return PhpCsFixer\Config::create()
    ->setRules([
        'array_syntax' => ['syntax' => 'short'],
        'class_attributes_separation' => false,
        'concat_space' => [
            'spacing' => 'none'
        ],
        'method_separation' => false,
        'no_extra_blank_lines' => [
            'extra',
            'parenthesis_brace_block',
            'square_brace_block',
            'throw',
        ],
        'no_unused_imports' => false,
        'phpdoc_indent' => true,
        'yoda_style' => false,
        'increment_style' => ['style' => 'post'],
        'binary_operator_spaces' => [
            'align_double_arrow' => true,
            'align_equals' => true,
        ],
        'php_unit_method_casing' => false,
        'no_superfluous_phpdoc_tags' => false,
    ])
    ->setFinder($finder)
;
