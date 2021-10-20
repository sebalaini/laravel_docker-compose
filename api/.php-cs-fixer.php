<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude(['bootstrap'])
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
    ->ignoreDotFiles(true);

$config = new PhpCsFixer\Config();
return $config->setRules([
    '@PSR2' => true,
    'array_indentation' => true,
    'array_syntax' => ['syntax' => 'short'],
    'braces' => array(
        'allow_single_line_closure' => true,
    ),
    'class_attributes_separation' => false,
    'concat_space' => ['spacing' => 'one'],
    'elseif' => true,
    'class_attributes_separation' => false,
    'whitespace_after_comma_in_array' => true,
    'trim_array_spaces' => true,
    'switch_case_space' => true,
    'ternary_operator_spaces' => true,
    'single_quote' => true,
    'single_blank_line_at_eof' => true,
    'single_blank_line_before_namespace' => true,
    'no_unused_imports' => false,
    'multiline_whitespace_before_semicolons' => true,
    'no_multiline_whitespace_around_double_arrow' => true,
    'no_extra_blank_lines' => [
        'tokens' => [
            'curly_brace_block',
            'extra',
            'parenthesis_brace_block',
            'square_brace_block',
            'throw',
            'use',
        ]
    ],
    'no_spaces_around_offset' => true,
    'phpdoc_indent' => true,
    'yoda_style' => false,
    'increment_style' => ['style' => 'post'],
    'binary_operator_spaces' => [
        'operators' => [
            '=>' => 'align',
            '='  => 'align'
        ]
    ],
    'php_unit_method_casing' => false,
    'no_superfluous_phpdoc_tags' => false,
    'unary_operator_spaces' => true,
])
    ->setFinder($finder);
