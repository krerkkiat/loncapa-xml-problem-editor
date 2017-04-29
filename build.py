# -*- coding: utf-8 -*-

if __name__ == '__main__':
    out_filename = 'script.min.js'
    paths = [
        'lib/codemirror.min.js',
        'lib/mode/perl/perl.min.js',
        'lib/mode/xml/xml.min.js',
        'lib/mode/javascript/javascript.min.js',
        'lib/mode/css/css.min.js',
        'lib/mode/htmlmixed/htmlmixed.min.js',
        'script.js'
    ]

    out_text = ''

    # Load all lib and script code.
    for path in paths:
        with open(path, 'r') as f:
            out_text += f.read()

    with open(out_filename, 'w') as f:
        f.write(out_text)
