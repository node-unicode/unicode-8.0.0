# Unicode v8.0.0 data [![@unicode/unicode-8.0.0 on npm](https://img.shields.io/npm/v/@unicode/unicode-8.0.0)](https://www.npmjs.com/package/@unicode/unicode-8.0.0)

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v8.0.0’s categories, scripts, script extensions, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](https://mths.be/node-unicode-data) project. **Please report any bugs or requests [in the appropriate issue tracker](https://github.com/node-unicode/node-unicode-data/issues).**

## Installation

```bash
npm install @unicode/unicode-8.0.0 --save-dev
```

**Note:** _@unicode/unicode-8.0.0_ is supposed to be used in build scripts (i.e. as a `devDependency`), and not at runtime (i.e. as a regular `dependency`).

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, script extensions, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](https://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
import regenerate from 'regenerate';
import arabic from '@unicode/unicode-6.3.0/Script_Extensions/Arabic/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
import greek from '@unicode/unicode-6.3.0/Script_Extensions/Greek/code-points.mjs'; // Or `…/symbols`, doesn’t matter.
const set = regenerate()
  .add(arabic)
  .add(greek);
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// const regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
import uppercaseLetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Uppercase_Letter/code-points.mjs';
// Get an array of symbols (strings) in a given Unicode category:
import uppercaseLetterSymbols from '@unicode/unicode-8.0.0/General_Category/Uppercase_Letter/symbols.mjs';
// Get a regular expression that matches any symbol in a given Unicode category:
import uppercaseLetterRegex from '@unicode/unicode-8.0.0/General_Category/Uppercase_Letter/regex.mjs';
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
import generalCategory from '@unicode/unicode-8.0.0/General_Category/index.mjs';
const category = generalCategory.get(0x41);
// Get an array of all code points with a given bidi class:
import otherNeutralCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Other_Neutral/code-points.mjs';
// Get a map from code points to bidi classes:
import bidiClassMap from '@unicode/unicode-8.0.0/Bidi_Class/index.mjs';
// Get the directionality of a given code point:
const directionality = bidiClassMap.get(0x41);

// What glyph is the mirror image of `«` (U+00AB)?
import bidiMirroringGlyph from '@unicode/unicode-8.0.0/Bidi_Mirroring_Glyph/index.mjs';
const mirrored = bidiMirroringGlyph.get(0xAB);

// Get a regular expression that matches all opening brackets:
import openingBrackets from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Open/regex.mjs';

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, scripts, and script extensions is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v8.0.0:

```js
// `Names`:

import names from '@unicode/unicode-8.0.0/Names/index.mjs'; // Array of canonical names.
import Abbreviation from '@unicode/unicode-8.0.0/Names/Abbreviation/index.mjs'; // Lookup map from code point to aliases.
import Alternate from '@unicode/unicode-8.0.0/Names/Alternate/index.mjs'; // Lookup map from code point to aliases.
import Control from '@unicode/unicode-8.0.0/Names/Control/index.mjs'; // Lookup map from code point to aliases.
import Correction from '@unicode/unicode-8.0.0/Names/Correction/index.mjs'; // Lookup map from code point to aliases.
import Figment from '@unicode/unicode-8.0.0/Names/Figment/index.mjs'; // Lookup map from code point to aliases.


// `General_Category`:

import General_Category from '@unicode/unicode-8.0.0/General_Category/index.mjs'; // Lookup map.

import Cased_LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Cased_Letter/code-points.mjs';
import Cased_LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Cased_Letter/symbols.mjs';
import Cased_LetterRegex from '@unicode/unicode-8.0.0/General_Category/Cased_Letter/regex.mjs';

import Close_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Close_Punctuation/code-points.mjs';
import Close_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Close_Punctuation/symbols.mjs';
import Close_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Close_Punctuation/regex.mjs';

import Connector_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Connector_Punctuation/code-points.mjs';
import Connector_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Connector_Punctuation/symbols.mjs';
import Connector_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Connector_Punctuation/regex.mjs';

import ControlCodePoints from '@unicode/unicode-8.0.0/General_Category/Control/code-points.mjs';
import ControlSymbols from '@unicode/unicode-8.0.0/General_Category/Control/symbols.mjs';
import ControlRegex from '@unicode/unicode-8.0.0/General_Category/Control/regex.mjs';

import Currency_SymbolCodePoints from '@unicode/unicode-8.0.0/General_Category/Currency_Symbol/code-points.mjs';
import Currency_SymbolSymbols from '@unicode/unicode-8.0.0/General_Category/Currency_Symbol/symbols.mjs';
import Currency_SymbolRegex from '@unicode/unicode-8.0.0/General_Category/Currency_Symbol/regex.mjs';

import Dash_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Dash_Punctuation/code-points.mjs';
import Dash_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Dash_Punctuation/symbols.mjs';
import Dash_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Dash_Punctuation/regex.mjs';

import Decimal_NumberCodePoints from '@unicode/unicode-8.0.0/General_Category/Decimal_Number/code-points.mjs';
import Decimal_NumberSymbols from '@unicode/unicode-8.0.0/General_Category/Decimal_Number/symbols.mjs';
import Decimal_NumberRegex from '@unicode/unicode-8.0.0/General_Category/Decimal_Number/regex.mjs';

import Enclosing_MarkCodePoints from '@unicode/unicode-8.0.0/General_Category/Enclosing_Mark/code-points.mjs';
import Enclosing_MarkSymbols from '@unicode/unicode-8.0.0/General_Category/Enclosing_Mark/symbols.mjs';
import Enclosing_MarkRegex from '@unicode/unicode-8.0.0/General_Category/Enclosing_Mark/regex.mjs';

import Final_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Final_Punctuation/code-points.mjs';
import Final_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Final_Punctuation/symbols.mjs';
import Final_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Final_Punctuation/regex.mjs';

import FormatCodePoints from '@unicode/unicode-8.0.0/General_Category/Format/code-points.mjs';
import FormatSymbols from '@unicode/unicode-8.0.0/General_Category/Format/symbols.mjs';
import FormatRegex from '@unicode/unicode-8.0.0/General_Category/Format/regex.mjs';

import Initial_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Initial_Punctuation/code-points.mjs';
import Initial_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Initial_Punctuation/symbols.mjs';
import Initial_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Initial_Punctuation/regex.mjs';

import LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Letter/code-points.mjs';
import LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Letter/symbols.mjs';
import LetterRegex from '@unicode/unicode-8.0.0/General_Category/Letter/regex.mjs';

import Letter_NumberCodePoints from '@unicode/unicode-8.0.0/General_Category/Letter_Number/code-points.mjs';
import Letter_NumberSymbols from '@unicode/unicode-8.0.0/General_Category/Letter_Number/symbols.mjs';
import Letter_NumberRegex from '@unicode/unicode-8.0.0/General_Category/Letter_Number/regex.mjs';

import Line_SeparatorCodePoints from '@unicode/unicode-8.0.0/General_Category/Line_Separator/code-points.mjs';
import Line_SeparatorSymbols from '@unicode/unicode-8.0.0/General_Category/Line_Separator/symbols.mjs';
import Line_SeparatorRegex from '@unicode/unicode-8.0.0/General_Category/Line_Separator/regex.mjs';

import Lowercase_LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Lowercase_Letter/code-points.mjs';
import Lowercase_LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Lowercase_Letter/symbols.mjs';
import Lowercase_LetterRegex from '@unicode/unicode-8.0.0/General_Category/Lowercase_Letter/regex.mjs';

import MarkCodePoints from '@unicode/unicode-8.0.0/General_Category/Mark/code-points.mjs';
import MarkSymbols from '@unicode/unicode-8.0.0/General_Category/Mark/symbols.mjs';
import MarkRegex from '@unicode/unicode-8.0.0/General_Category/Mark/regex.mjs';

import Math_SymbolCodePoints from '@unicode/unicode-8.0.0/General_Category/Math_Symbol/code-points.mjs';
import Math_SymbolSymbols from '@unicode/unicode-8.0.0/General_Category/Math_Symbol/symbols.mjs';
import Math_SymbolRegex from '@unicode/unicode-8.0.0/General_Category/Math_Symbol/regex.mjs';

import Modifier_LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Modifier_Letter/code-points.mjs';
import Modifier_LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Modifier_Letter/symbols.mjs';
import Modifier_LetterRegex from '@unicode/unicode-8.0.0/General_Category/Modifier_Letter/regex.mjs';

import Modifier_SymbolCodePoints from '@unicode/unicode-8.0.0/General_Category/Modifier_Symbol/code-points.mjs';
import Modifier_SymbolSymbols from '@unicode/unicode-8.0.0/General_Category/Modifier_Symbol/symbols.mjs';
import Modifier_SymbolRegex from '@unicode/unicode-8.0.0/General_Category/Modifier_Symbol/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-8.0.0/General_Category/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-8.0.0/General_Category/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-8.0.0/General_Category/Nonspacing_Mark/regex.mjs';

import NumberCodePoints from '@unicode/unicode-8.0.0/General_Category/Number/code-points.mjs';
import NumberSymbols from '@unicode/unicode-8.0.0/General_Category/Number/symbols.mjs';
import NumberRegex from '@unicode/unicode-8.0.0/General_Category/Number/regex.mjs';

import Open_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Open_Punctuation/code-points.mjs';
import Open_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Open_Punctuation/symbols.mjs';
import Open_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Open_Punctuation/regex.mjs';

import OtherCodePoints from '@unicode/unicode-8.0.0/General_Category/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-8.0.0/General_Category/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-8.0.0/General_Category/Other/regex.mjs';

import Other_LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Other_Letter/code-points.mjs';
import Other_LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Other_Letter/symbols.mjs';
import Other_LetterRegex from '@unicode/unicode-8.0.0/General_Category/Other_Letter/regex.mjs';

import Other_NumberCodePoints from '@unicode/unicode-8.0.0/General_Category/Other_Number/code-points.mjs';
import Other_NumberSymbols from '@unicode/unicode-8.0.0/General_Category/Other_Number/symbols.mjs';
import Other_NumberRegex from '@unicode/unicode-8.0.0/General_Category/Other_Number/regex.mjs';

import Other_PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Other_Punctuation/code-points.mjs';
import Other_PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Other_Punctuation/symbols.mjs';
import Other_PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Other_Punctuation/regex.mjs';

import Other_SymbolCodePoints from '@unicode/unicode-8.0.0/General_Category/Other_Symbol/code-points.mjs';
import Other_SymbolSymbols from '@unicode/unicode-8.0.0/General_Category/Other_Symbol/symbols.mjs';
import Other_SymbolRegex from '@unicode/unicode-8.0.0/General_Category/Other_Symbol/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-8.0.0/General_Category/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-8.0.0/General_Category/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-8.0.0/General_Category/Paragraph_Separator/regex.mjs';

import Private_UseCodePoints from '@unicode/unicode-8.0.0/General_Category/Private_Use/code-points.mjs';
import Private_UseSymbols from '@unicode/unicode-8.0.0/General_Category/Private_Use/symbols.mjs';
import Private_UseRegex from '@unicode/unicode-8.0.0/General_Category/Private_Use/regex.mjs';

import PunctuationCodePoints from '@unicode/unicode-8.0.0/General_Category/Punctuation/code-points.mjs';
import PunctuationSymbols from '@unicode/unicode-8.0.0/General_Category/Punctuation/symbols.mjs';
import PunctuationRegex from '@unicode/unicode-8.0.0/General_Category/Punctuation/regex.mjs';

import SeparatorCodePoints from '@unicode/unicode-8.0.0/General_Category/Separator/code-points.mjs';
import SeparatorSymbols from '@unicode/unicode-8.0.0/General_Category/Separator/symbols.mjs';
import SeparatorRegex from '@unicode/unicode-8.0.0/General_Category/Separator/regex.mjs';

import Space_SeparatorCodePoints from '@unicode/unicode-8.0.0/General_Category/Space_Separator/code-points.mjs';
import Space_SeparatorSymbols from '@unicode/unicode-8.0.0/General_Category/Space_Separator/symbols.mjs';
import Space_SeparatorRegex from '@unicode/unicode-8.0.0/General_Category/Space_Separator/regex.mjs';

import Spacing_MarkCodePoints from '@unicode/unicode-8.0.0/General_Category/Spacing_Mark/code-points.mjs';
import Spacing_MarkSymbols from '@unicode/unicode-8.0.0/General_Category/Spacing_Mark/symbols.mjs';
import Spacing_MarkRegex from '@unicode/unicode-8.0.0/General_Category/Spacing_Mark/regex.mjs';

import SurrogateCodePoints from '@unicode/unicode-8.0.0/General_Category/Surrogate/code-points.mjs';
import SurrogateSymbols from '@unicode/unicode-8.0.0/General_Category/Surrogate/symbols.mjs';
import SurrogateRegex from '@unicode/unicode-8.0.0/General_Category/Surrogate/regex.mjs';

import SymbolCodePoints from '@unicode/unicode-8.0.0/General_Category/Symbol/code-points.mjs';
import SymbolSymbols from '@unicode/unicode-8.0.0/General_Category/Symbol/symbols.mjs';
import SymbolRegex from '@unicode/unicode-8.0.0/General_Category/Symbol/regex.mjs';

import Titlecase_LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Titlecase_Letter/code-points.mjs';
import Titlecase_LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Titlecase_Letter/symbols.mjs';
import Titlecase_LetterRegex from '@unicode/unicode-8.0.0/General_Category/Titlecase_Letter/regex.mjs';

import UnassignedCodePoints from '@unicode/unicode-8.0.0/General_Category/Unassigned/code-points.mjs';
import UnassignedSymbols from '@unicode/unicode-8.0.0/General_Category/Unassigned/symbols.mjs';
import UnassignedRegex from '@unicode/unicode-8.0.0/General_Category/Unassigned/regex.mjs';

import Uppercase_LetterCodePoints from '@unicode/unicode-8.0.0/General_Category/Uppercase_Letter/code-points.mjs';
import Uppercase_LetterSymbols from '@unicode/unicode-8.0.0/General_Category/Uppercase_Letter/symbols.mjs';
import Uppercase_LetterRegex from '@unicode/unicode-8.0.0/General_Category/Uppercase_Letter/regex.mjs';

// `Binary_Property`:

import ASCIICodePoints from '@unicode/unicode-8.0.0/Binary_Property/ASCII/code-points.mjs';
import ASCIISymbols from '@unicode/unicode-8.0.0/Binary_Property/ASCII/symbols.mjs';
import ASCIIRegex from '@unicode/unicode-8.0.0/Binary_Property/ASCII/regex.mjs';

import ASCII_Hex_DigitCodePoints from '@unicode/unicode-8.0.0/Binary_Property/ASCII_Hex_Digit/code-points.mjs';
import ASCII_Hex_DigitSymbols from '@unicode/unicode-8.0.0/Binary_Property/ASCII_Hex_Digit/symbols.mjs';
import ASCII_Hex_DigitRegex from '@unicode/unicode-8.0.0/Binary_Property/ASCII_Hex_Digit/regex.mjs';

import AlphabeticCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Alphabetic/code-points.mjs';
import AlphabeticSymbols from '@unicode/unicode-8.0.0/Binary_Property/Alphabetic/symbols.mjs';
import AlphabeticRegex from '@unicode/unicode-8.0.0/Binary_Property/Alphabetic/regex.mjs';

import AnyCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Any/code-points.mjs';
import AnySymbols from '@unicode/unicode-8.0.0/Binary_Property/Any/symbols.mjs';
import AnyRegex from '@unicode/unicode-8.0.0/Binary_Property/Any/regex.mjs';

import AssignedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Assigned/code-points.mjs';
import AssignedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Assigned/symbols.mjs';
import AssignedRegex from '@unicode/unicode-8.0.0/Binary_Property/Assigned/regex.mjs';

import Bidi_ControlCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Bidi_Control/code-points.mjs';
import Bidi_ControlSymbols from '@unicode/unicode-8.0.0/Binary_Property/Bidi_Control/symbols.mjs';
import Bidi_ControlRegex from '@unicode/unicode-8.0.0/Binary_Property/Bidi_Control/regex.mjs';

import Bidi_MirroredCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Bidi_Mirrored/code-points.mjs';
import Bidi_MirroredSymbols from '@unicode/unicode-8.0.0/Binary_Property/Bidi_Mirrored/symbols.mjs';
import Bidi_MirroredRegex from '@unicode/unicode-8.0.0/Binary_Property/Bidi_Mirrored/regex.mjs';

import Case_IgnorableCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Case_Ignorable/code-points.mjs';
import Case_IgnorableSymbols from '@unicode/unicode-8.0.0/Binary_Property/Case_Ignorable/symbols.mjs';
import Case_IgnorableRegex from '@unicode/unicode-8.0.0/Binary_Property/Case_Ignorable/regex.mjs';

import CasedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Cased/code-points.mjs';
import CasedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Cased/symbols.mjs';
import CasedRegex from '@unicode/unicode-8.0.0/Binary_Property/Cased/regex.mjs';

import Changes_When_CasefoldedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Casefolded/code-points.mjs';
import Changes_When_CasefoldedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Casefolded/symbols.mjs';
import Changes_When_CasefoldedRegex from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Casefolded/regex.mjs';

import Changes_When_CasemappedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Casemapped/code-points.mjs';
import Changes_When_CasemappedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Casemapped/symbols.mjs';
import Changes_When_CasemappedRegex from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Casemapped/regex.mjs';

import Changes_When_LowercasedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Lowercased/code-points.mjs';
import Changes_When_LowercasedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Lowercased/symbols.mjs';
import Changes_When_LowercasedRegex from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Lowercased/regex.mjs';

import Changes_When_NFKC_CasefoldedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_NFKC_Casefolded/code-points.mjs';
import Changes_When_NFKC_CasefoldedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_NFKC_Casefolded/symbols.mjs';
import Changes_When_NFKC_CasefoldedRegex from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_NFKC_Casefolded/regex.mjs';

import Changes_When_TitlecasedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Titlecased/code-points.mjs';
import Changes_When_TitlecasedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Titlecased/symbols.mjs';
import Changes_When_TitlecasedRegex from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Titlecased/regex.mjs';

import Changes_When_UppercasedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Uppercased/code-points.mjs';
import Changes_When_UppercasedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Uppercased/symbols.mjs';
import Changes_When_UppercasedRegex from '@unicode/unicode-8.0.0/Binary_Property/Changes_When_Uppercased/regex.mjs';

import Composition_ExclusionCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Composition_Exclusion/code-points.mjs';
import Composition_ExclusionSymbols from '@unicode/unicode-8.0.0/Binary_Property/Composition_Exclusion/symbols.mjs';
import Composition_ExclusionRegex from '@unicode/unicode-8.0.0/Binary_Property/Composition_Exclusion/regex.mjs';

import DashCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Dash/code-points.mjs';
import DashSymbols from '@unicode/unicode-8.0.0/Binary_Property/Dash/symbols.mjs';
import DashRegex from '@unicode/unicode-8.0.0/Binary_Property/Dash/regex.mjs';

import Default_Ignorable_Code_PointCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Default_Ignorable_Code_Point/code-points.mjs';
import Default_Ignorable_Code_PointSymbols from '@unicode/unicode-8.0.0/Binary_Property/Default_Ignorable_Code_Point/symbols.mjs';
import Default_Ignorable_Code_PointRegex from '@unicode/unicode-8.0.0/Binary_Property/Default_Ignorable_Code_Point/regex.mjs';

import DeprecatedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Deprecated/code-points.mjs';
import DeprecatedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Deprecated/symbols.mjs';
import DeprecatedRegex from '@unicode/unicode-8.0.0/Binary_Property/Deprecated/regex.mjs';

import DiacriticCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Diacritic/code-points.mjs';
import DiacriticSymbols from '@unicode/unicode-8.0.0/Binary_Property/Diacritic/symbols.mjs';
import DiacriticRegex from '@unicode/unicode-8.0.0/Binary_Property/Diacritic/regex.mjs';

import Expands_On_NFCCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFC/code-points.mjs';
import Expands_On_NFCSymbols from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFC/symbols.mjs';
import Expands_On_NFCRegex from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFC/regex.mjs';

import Expands_On_NFDCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFD/code-points.mjs';
import Expands_On_NFDSymbols from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFD/symbols.mjs';
import Expands_On_NFDRegex from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFD/regex.mjs';

import Expands_On_NFKCCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFKC/code-points.mjs';
import Expands_On_NFKCSymbols from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFKC/symbols.mjs';
import Expands_On_NFKCRegex from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFKC/regex.mjs';

import Expands_On_NFKDCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFKD/code-points.mjs';
import Expands_On_NFKDSymbols from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFKD/symbols.mjs';
import Expands_On_NFKDRegex from '@unicode/unicode-8.0.0/Binary_Property/Expands_On_NFKD/regex.mjs';

import ExtenderCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Extender/code-points.mjs';
import ExtenderSymbols from '@unicode/unicode-8.0.0/Binary_Property/Extender/symbols.mjs';
import ExtenderRegex from '@unicode/unicode-8.0.0/Binary_Property/Extender/regex.mjs';

import Full_Composition_ExclusionCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Full_Composition_Exclusion/code-points.mjs';
import Full_Composition_ExclusionSymbols from '@unicode/unicode-8.0.0/Binary_Property/Full_Composition_Exclusion/symbols.mjs';
import Full_Composition_ExclusionRegex from '@unicode/unicode-8.0.0/Binary_Property/Full_Composition_Exclusion/regex.mjs';

import Grapheme_BaseCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Base/code-points.mjs';
import Grapheme_BaseSymbols from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Base/symbols.mjs';
import Grapheme_BaseRegex from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Base/regex.mjs';

import Grapheme_ExtendCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Extend/code-points.mjs';
import Grapheme_ExtendSymbols from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Extend/symbols.mjs';
import Grapheme_ExtendRegex from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Extend/regex.mjs';

import Grapheme_LinkCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Link/code-points.mjs';
import Grapheme_LinkSymbols from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Link/symbols.mjs';
import Grapheme_LinkRegex from '@unicode/unicode-8.0.0/Binary_Property/Grapheme_Link/regex.mjs';

import Hex_DigitCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Hex_Digit/code-points.mjs';
import Hex_DigitSymbols from '@unicode/unicode-8.0.0/Binary_Property/Hex_Digit/symbols.mjs';
import Hex_DigitRegex from '@unicode/unicode-8.0.0/Binary_Property/Hex_Digit/regex.mjs';

import HyphenCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Hyphen/code-points.mjs';
import HyphenSymbols from '@unicode/unicode-8.0.0/Binary_Property/Hyphen/symbols.mjs';
import HyphenRegex from '@unicode/unicode-8.0.0/Binary_Property/Hyphen/regex.mjs';

import IDS_Binary_OperatorCodePoints from '@unicode/unicode-8.0.0/Binary_Property/IDS_Binary_Operator/code-points.mjs';
import IDS_Binary_OperatorSymbols from '@unicode/unicode-8.0.0/Binary_Property/IDS_Binary_Operator/symbols.mjs';
import IDS_Binary_OperatorRegex from '@unicode/unicode-8.0.0/Binary_Property/IDS_Binary_Operator/regex.mjs';

import IDS_Trinary_OperatorCodePoints from '@unicode/unicode-8.0.0/Binary_Property/IDS_Trinary_Operator/code-points.mjs';
import IDS_Trinary_OperatorSymbols from '@unicode/unicode-8.0.0/Binary_Property/IDS_Trinary_Operator/symbols.mjs';
import IDS_Trinary_OperatorRegex from '@unicode/unicode-8.0.0/Binary_Property/IDS_Trinary_Operator/regex.mjs';

import ID_ContinueCodePoints from '@unicode/unicode-8.0.0/Binary_Property/ID_Continue/code-points.mjs';
import ID_ContinueSymbols from '@unicode/unicode-8.0.0/Binary_Property/ID_Continue/symbols.mjs';
import ID_ContinueRegex from '@unicode/unicode-8.0.0/Binary_Property/ID_Continue/regex.mjs';

import ID_StartCodePoints from '@unicode/unicode-8.0.0/Binary_Property/ID_Start/code-points.mjs';
import ID_StartSymbols from '@unicode/unicode-8.0.0/Binary_Property/ID_Start/symbols.mjs';
import ID_StartRegex from '@unicode/unicode-8.0.0/Binary_Property/ID_Start/regex.mjs';

import IdeographicCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Ideographic/code-points.mjs';
import IdeographicSymbols from '@unicode/unicode-8.0.0/Binary_Property/Ideographic/symbols.mjs';
import IdeographicRegex from '@unicode/unicode-8.0.0/Binary_Property/Ideographic/regex.mjs';

import Join_ControlCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Join_Control/code-points.mjs';
import Join_ControlSymbols from '@unicode/unicode-8.0.0/Binary_Property/Join_Control/symbols.mjs';
import Join_ControlRegex from '@unicode/unicode-8.0.0/Binary_Property/Join_Control/regex.mjs';

import Logical_Order_ExceptionCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Logical_Order_Exception/code-points.mjs';
import Logical_Order_ExceptionSymbols from '@unicode/unicode-8.0.0/Binary_Property/Logical_Order_Exception/symbols.mjs';
import Logical_Order_ExceptionRegex from '@unicode/unicode-8.0.0/Binary_Property/Logical_Order_Exception/regex.mjs';

import LowercaseCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Lowercase/code-points.mjs';
import LowercaseSymbols from '@unicode/unicode-8.0.0/Binary_Property/Lowercase/symbols.mjs';
import LowercaseRegex from '@unicode/unicode-8.0.0/Binary_Property/Lowercase/regex.mjs';

import MathCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Math/code-points.mjs';
import MathSymbols from '@unicode/unicode-8.0.0/Binary_Property/Math/symbols.mjs';
import MathRegex from '@unicode/unicode-8.0.0/Binary_Property/Math/regex.mjs';

import Noncharacter_Code_PointCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Noncharacter_Code_Point/code-points.mjs';
import Noncharacter_Code_PointSymbols from '@unicode/unicode-8.0.0/Binary_Property/Noncharacter_Code_Point/symbols.mjs';
import Noncharacter_Code_PointRegex from '@unicode/unicode-8.0.0/Binary_Property/Noncharacter_Code_Point/regex.mjs';

import Other_AlphabeticCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_Alphabetic/code-points.mjs';
import Other_AlphabeticSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_Alphabetic/symbols.mjs';
import Other_AlphabeticRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_Alphabetic/regex.mjs';

import Other_Default_Ignorable_Code_PointCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/code-points.mjs';
import Other_Default_Ignorable_Code_PointSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/symbols.mjs';
import Other_Default_Ignorable_Code_PointRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_Default_Ignorable_Code_Point/regex.mjs';

import Other_Grapheme_ExtendCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_Grapheme_Extend/code-points.mjs';
import Other_Grapheme_ExtendSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_Grapheme_Extend/symbols.mjs';
import Other_Grapheme_ExtendRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_Grapheme_Extend/regex.mjs';

import Other_ID_ContinueCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_ID_Continue/code-points.mjs';
import Other_ID_ContinueSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_ID_Continue/symbols.mjs';
import Other_ID_ContinueRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_ID_Continue/regex.mjs';

import Other_ID_StartCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_ID_Start/code-points.mjs';
import Other_ID_StartSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_ID_Start/symbols.mjs';
import Other_ID_StartRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_ID_Start/regex.mjs';

import Other_LowercaseCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_Lowercase/code-points.mjs';
import Other_LowercaseSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_Lowercase/symbols.mjs';
import Other_LowercaseRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_Lowercase/regex.mjs';

import Other_MathCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_Math/code-points.mjs';
import Other_MathSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_Math/symbols.mjs';
import Other_MathRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_Math/regex.mjs';

import Other_UppercaseCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Other_Uppercase/code-points.mjs';
import Other_UppercaseSymbols from '@unicode/unicode-8.0.0/Binary_Property/Other_Uppercase/symbols.mjs';
import Other_UppercaseRegex from '@unicode/unicode-8.0.0/Binary_Property/Other_Uppercase/regex.mjs';

import Pattern_SyntaxCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Pattern_Syntax/code-points.mjs';
import Pattern_SyntaxSymbols from '@unicode/unicode-8.0.0/Binary_Property/Pattern_Syntax/symbols.mjs';
import Pattern_SyntaxRegex from '@unicode/unicode-8.0.0/Binary_Property/Pattern_Syntax/regex.mjs';

import Pattern_White_SpaceCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Pattern_White_Space/code-points.mjs';
import Pattern_White_SpaceSymbols from '@unicode/unicode-8.0.0/Binary_Property/Pattern_White_Space/symbols.mjs';
import Pattern_White_SpaceRegex from '@unicode/unicode-8.0.0/Binary_Property/Pattern_White_Space/regex.mjs';

import Quotation_MarkCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Quotation_Mark/code-points.mjs';
import Quotation_MarkSymbols from '@unicode/unicode-8.0.0/Binary_Property/Quotation_Mark/symbols.mjs';
import Quotation_MarkRegex from '@unicode/unicode-8.0.0/Binary_Property/Quotation_Mark/regex.mjs';

import RadicalCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Radical/code-points.mjs';
import RadicalSymbols from '@unicode/unicode-8.0.0/Binary_Property/Radical/symbols.mjs';
import RadicalRegex from '@unicode/unicode-8.0.0/Binary_Property/Radical/regex.mjs';

import STermCodePoints from '@unicode/unicode-8.0.0/Binary_Property/STerm/code-points.mjs';
import STermSymbols from '@unicode/unicode-8.0.0/Binary_Property/STerm/symbols.mjs';
import STermRegex from '@unicode/unicode-8.0.0/Binary_Property/STerm/regex.mjs';

import Soft_DottedCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Soft_Dotted/code-points.mjs';
import Soft_DottedSymbols from '@unicode/unicode-8.0.0/Binary_Property/Soft_Dotted/symbols.mjs';
import Soft_DottedRegex from '@unicode/unicode-8.0.0/Binary_Property/Soft_Dotted/regex.mjs';

import Terminal_PunctuationCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Terminal_Punctuation/code-points.mjs';
import Terminal_PunctuationSymbols from '@unicode/unicode-8.0.0/Binary_Property/Terminal_Punctuation/symbols.mjs';
import Terminal_PunctuationRegex from '@unicode/unicode-8.0.0/Binary_Property/Terminal_Punctuation/regex.mjs';

import Unified_IdeographCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Unified_Ideograph/code-points.mjs';
import Unified_IdeographSymbols from '@unicode/unicode-8.0.0/Binary_Property/Unified_Ideograph/symbols.mjs';
import Unified_IdeographRegex from '@unicode/unicode-8.0.0/Binary_Property/Unified_Ideograph/regex.mjs';

import UppercaseCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Uppercase/code-points.mjs';
import UppercaseSymbols from '@unicode/unicode-8.0.0/Binary_Property/Uppercase/symbols.mjs';
import UppercaseRegex from '@unicode/unicode-8.0.0/Binary_Property/Uppercase/regex.mjs';

import Variation_SelectorCodePoints from '@unicode/unicode-8.0.0/Binary_Property/Variation_Selector/code-points.mjs';
import Variation_SelectorSymbols from '@unicode/unicode-8.0.0/Binary_Property/Variation_Selector/symbols.mjs';
import Variation_SelectorRegex from '@unicode/unicode-8.0.0/Binary_Property/Variation_Selector/regex.mjs';

import White_SpaceCodePoints from '@unicode/unicode-8.0.0/Binary_Property/White_Space/code-points.mjs';
import White_SpaceSymbols from '@unicode/unicode-8.0.0/Binary_Property/White_Space/symbols.mjs';
import White_SpaceRegex from '@unicode/unicode-8.0.0/Binary_Property/White_Space/regex.mjs';

import XID_ContinueCodePoints from '@unicode/unicode-8.0.0/Binary_Property/XID_Continue/code-points.mjs';
import XID_ContinueSymbols from '@unicode/unicode-8.0.0/Binary_Property/XID_Continue/symbols.mjs';
import XID_ContinueRegex from '@unicode/unicode-8.0.0/Binary_Property/XID_Continue/regex.mjs';

import XID_StartCodePoints from '@unicode/unicode-8.0.0/Binary_Property/XID_Start/code-points.mjs';
import XID_StartSymbols from '@unicode/unicode-8.0.0/Binary_Property/XID_Start/symbols.mjs';
import XID_StartRegex from '@unicode/unicode-8.0.0/Binary_Property/XID_Start/regex.mjs';

// `Bidi_Class`:

import Bidi_Class from '@unicode/unicode-8.0.0/Bidi_Class/index.mjs'; // Lookup map.

import Arabic_LetterCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Arabic_Letter/code-points.mjs';
import Arabic_LetterSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Arabic_Letter/symbols.mjs';
import Arabic_LetterRegex from '@unicode/unicode-8.0.0/Bidi_Class/Arabic_Letter/regex.mjs';

import Arabic_NumberCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Arabic_Number/code-points.mjs';
import Arabic_NumberSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Arabic_Number/symbols.mjs';
import Arabic_NumberRegex from '@unicode/unicode-8.0.0/Bidi_Class/Arabic_Number/regex.mjs';

import Boundary_NeutralCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Boundary_Neutral/code-points.mjs';
import Boundary_NeutralSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Boundary_Neutral/symbols.mjs';
import Boundary_NeutralRegex from '@unicode/unicode-8.0.0/Bidi_Class/Boundary_Neutral/regex.mjs';

import Common_SeparatorCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Common_Separator/code-points.mjs';
import Common_SeparatorSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Common_Separator/symbols.mjs';
import Common_SeparatorRegex from '@unicode/unicode-8.0.0/Bidi_Class/Common_Separator/regex.mjs';

import European_NumberCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/European_Number/code-points.mjs';
import European_NumberSymbols from '@unicode/unicode-8.0.0/Bidi_Class/European_Number/symbols.mjs';
import European_NumberRegex from '@unicode/unicode-8.0.0/Bidi_Class/European_Number/regex.mjs';

import European_SeparatorCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/European_Separator/code-points.mjs';
import European_SeparatorSymbols from '@unicode/unicode-8.0.0/Bidi_Class/European_Separator/symbols.mjs';
import European_SeparatorRegex from '@unicode/unicode-8.0.0/Bidi_Class/European_Separator/regex.mjs';

import European_TerminatorCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/European_Terminator/code-points.mjs';
import European_TerminatorSymbols from '@unicode/unicode-8.0.0/Bidi_Class/European_Terminator/symbols.mjs';
import European_TerminatorRegex from '@unicode/unicode-8.0.0/Bidi_Class/European_Terminator/regex.mjs';

import First_Strong_IsolateCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/First_Strong_Isolate/code-points.mjs';
import First_Strong_IsolateSymbols from '@unicode/unicode-8.0.0/Bidi_Class/First_Strong_Isolate/symbols.mjs';
import First_Strong_IsolateRegex from '@unicode/unicode-8.0.0/Bidi_Class/First_Strong_Isolate/regex.mjs';

import Left_To_RightCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right/code-points.mjs';
import Left_To_RightSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right/symbols.mjs';
import Left_To_RightRegex from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right/regex.mjs';

import Left_To_Right_EmbeddingCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Embedding/code-points.mjs';
import Left_To_Right_EmbeddingSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Embedding/symbols.mjs';
import Left_To_Right_EmbeddingRegex from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Embedding/regex.mjs';

import Left_To_Right_IsolateCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Isolate/code-points.mjs';
import Left_To_Right_IsolateSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Isolate/symbols.mjs';
import Left_To_Right_IsolateRegex from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Isolate/regex.mjs';

import Left_To_Right_OverrideCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Override/code-points.mjs';
import Left_To_Right_OverrideSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Override/symbols.mjs';
import Left_To_Right_OverrideRegex from '@unicode/unicode-8.0.0/Bidi_Class/Left_To_Right_Override/regex.mjs';

import Nonspacing_MarkCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Nonspacing_Mark/code-points.mjs';
import Nonspacing_MarkSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Nonspacing_Mark/symbols.mjs';
import Nonspacing_MarkRegex from '@unicode/unicode-8.0.0/Bidi_Class/Nonspacing_Mark/regex.mjs';

import Other_NeutralCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Other_Neutral/code-points.mjs';
import Other_NeutralSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Other_Neutral/symbols.mjs';
import Other_NeutralRegex from '@unicode/unicode-8.0.0/Bidi_Class/Other_Neutral/regex.mjs';

import Paragraph_SeparatorCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Paragraph_Separator/code-points.mjs';
import Paragraph_SeparatorSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Paragraph_Separator/symbols.mjs';
import Paragraph_SeparatorRegex from '@unicode/unicode-8.0.0/Bidi_Class/Paragraph_Separator/regex.mjs';

import Pop_Directional_FormatCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Pop_Directional_Format/code-points.mjs';
import Pop_Directional_FormatSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Pop_Directional_Format/symbols.mjs';
import Pop_Directional_FormatRegex from '@unicode/unicode-8.0.0/Bidi_Class/Pop_Directional_Format/regex.mjs';

import Pop_Directional_IsolateCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Pop_Directional_Isolate/code-points.mjs';
import Pop_Directional_IsolateSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Pop_Directional_Isolate/symbols.mjs';
import Pop_Directional_IsolateRegex from '@unicode/unicode-8.0.0/Bidi_Class/Pop_Directional_Isolate/regex.mjs';

import Right_To_LeftCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left/code-points.mjs';
import Right_To_LeftSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left/symbols.mjs';
import Right_To_LeftRegex from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left/regex.mjs';

import Right_To_Left_EmbeddingCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Embedding/code-points.mjs';
import Right_To_Left_EmbeddingSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Embedding/symbols.mjs';
import Right_To_Left_EmbeddingRegex from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Embedding/regex.mjs';

import Right_To_Left_IsolateCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Isolate/code-points.mjs';
import Right_To_Left_IsolateSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Isolate/symbols.mjs';
import Right_To_Left_IsolateRegex from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Isolate/regex.mjs';

import Right_To_Left_OverrideCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Override/code-points.mjs';
import Right_To_Left_OverrideSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Override/symbols.mjs';
import Right_To_Left_OverrideRegex from '@unicode/unicode-8.0.0/Bidi_Class/Right_To_Left_Override/regex.mjs';

import Segment_SeparatorCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/Segment_Separator/code-points.mjs';
import Segment_SeparatorSymbols from '@unicode/unicode-8.0.0/Bidi_Class/Segment_Separator/symbols.mjs';
import Segment_SeparatorRegex from '@unicode/unicode-8.0.0/Bidi_Class/Segment_Separator/regex.mjs';

import White_SpaceCodePoints from '@unicode/unicode-8.0.0/Bidi_Class/White_Space/code-points.mjs';
import White_SpaceSymbols from '@unicode/unicode-8.0.0/Bidi_Class/White_Space/symbols.mjs';
import White_SpaceRegex from '@unicode/unicode-8.0.0/Bidi_Class/White_Space/regex.mjs';

// `Script`:

import AhomCodePoints from '@unicode/unicode-8.0.0/Script/Ahom/code-points.mjs';
import AhomSymbols from '@unicode/unicode-8.0.0/Script/Ahom/symbols.mjs';
import AhomRegex from '@unicode/unicode-8.0.0/Script/Ahom/regex.mjs';

import Anatolian_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Script/Anatolian_Hieroglyphs/code-points.mjs';
import Anatolian_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Script/Anatolian_Hieroglyphs/symbols.mjs';
import Anatolian_HieroglyphsRegex from '@unicode/unicode-8.0.0/Script/Anatolian_Hieroglyphs/regex.mjs';

import ArabicCodePoints from '@unicode/unicode-8.0.0/Script/Arabic/code-points.mjs';
import ArabicSymbols from '@unicode/unicode-8.0.0/Script/Arabic/symbols.mjs';
import ArabicRegex from '@unicode/unicode-8.0.0/Script/Arabic/regex.mjs';

import ArmenianCodePoints from '@unicode/unicode-8.0.0/Script/Armenian/code-points.mjs';
import ArmenianSymbols from '@unicode/unicode-8.0.0/Script/Armenian/symbols.mjs';
import ArmenianRegex from '@unicode/unicode-8.0.0/Script/Armenian/regex.mjs';

import AvestanCodePoints from '@unicode/unicode-8.0.0/Script/Avestan/code-points.mjs';
import AvestanSymbols from '@unicode/unicode-8.0.0/Script/Avestan/symbols.mjs';
import AvestanRegex from '@unicode/unicode-8.0.0/Script/Avestan/regex.mjs';

import BalineseCodePoints from '@unicode/unicode-8.0.0/Script/Balinese/code-points.mjs';
import BalineseSymbols from '@unicode/unicode-8.0.0/Script/Balinese/symbols.mjs';
import BalineseRegex from '@unicode/unicode-8.0.0/Script/Balinese/regex.mjs';

import BamumCodePoints from '@unicode/unicode-8.0.0/Script/Bamum/code-points.mjs';
import BamumSymbols from '@unicode/unicode-8.0.0/Script/Bamum/symbols.mjs';
import BamumRegex from '@unicode/unicode-8.0.0/Script/Bamum/regex.mjs';

import Bassa_VahCodePoints from '@unicode/unicode-8.0.0/Script/Bassa_Vah/code-points.mjs';
import Bassa_VahSymbols from '@unicode/unicode-8.0.0/Script/Bassa_Vah/symbols.mjs';
import Bassa_VahRegex from '@unicode/unicode-8.0.0/Script/Bassa_Vah/regex.mjs';

import BatakCodePoints from '@unicode/unicode-8.0.0/Script/Batak/code-points.mjs';
import BatakSymbols from '@unicode/unicode-8.0.0/Script/Batak/symbols.mjs';
import BatakRegex from '@unicode/unicode-8.0.0/Script/Batak/regex.mjs';

import BengaliCodePoints from '@unicode/unicode-8.0.0/Script/Bengali/code-points.mjs';
import BengaliSymbols from '@unicode/unicode-8.0.0/Script/Bengali/symbols.mjs';
import BengaliRegex from '@unicode/unicode-8.0.0/Script/Bengali/regex.mjs';

import BopomofoCodePoints from '@unicode/unicode-8.0.0/Script/Bopomofo/code-points.mjs';
import BopomofoSymbols from '@unicode/unicode-8.0.0/Script/Bopomofo/symbols.mjs';
import BopomofoRegex from '@unicode/unicode-8.0.0/Script/Bopomofo/regex.mjs';

import BrahmiCodePoints from '@unicode/unicode-8.0.0/Script/Brahmi/code-points.mjs';
import BrahmiSymbols from '@unicode/unicode-8.0.0/Script/Brahmi/symbols.mjs';
import BrahmiRegex from '@unicode/unicode-8.0.0/Script/Brahmi/regex.mjs';

import BrailleCodePoints from '@unicode/unicode-8.0.0/Script/Braille/code-points.mjs';
import BrailleSymbols from '@unicode/unicode-8.0.0/Script/Braille/symbols.mjs';
import BrailleRegex from '@unicode/unicode-8.0.0/Script/Braille/regex.mjs';

import BugineseCodePoints from '@unicode/unicode-8.0.0/Script/Buginese/code-points.mjs';
import BugineseSymbols from '@unicode/unicode-8.0.0/Script/Buginese/symbols.mjs';
import BugineseRegex from '@unicode/unicode-8.0.0/Script/Buginese/regex.mjs';

import BuhidCodePoints from '@unicode/unicode-8.0.0/Script/Buhid/code-points.mjs';
import BuhidSymbols from '@unicode/unicode-8.0.0/Script/Buhid/symbols.mjs';
import BuhidRegex from '@unicode/unicode-8.0.0/Script/Buhid/regex.mjs';

import Canadian_AboriginalCodePoints from '@unicode/unicode-8.0.0/Script/Canadian_Aboriginal/code-points.mjs';
import Canadian_AboriginalSymbols from '@unicode/unicode-8.0.0/Script/Canadian_Aboriginal/symbols.mjs';
import Canadian_AboriginalRegex from '@unicode/unicode-8.0.0/Script/Canadian_Aboriginal/regex.mjs';

import CarianCodePoints from '@unicode/unicode-8.0.0/Script/Carian/code-points.mjs';
import CarianSymbols from '@unicode/unicode-8.0.0/Script/Carian/symbols.mjs';
import CarianRegex from '@unicode/unicode-8.0.0/Script/Carian/regex.mjs';

import Caucasian_AlbanianCodePoints from '@unicode/unicode-8.0.0/Script/Caucasian_Albanian/code-points.mjs';
import Caucasian_AlbanianSymbols from '@unicode/unicode-8.0.0/Script/Caucasian_Albanian/symbols.mjs';
import Caucasian_AlbanianRegex from '@unicode/unicode-8.0.0/Script/Caucasian_Albanian/regex.mjs';

import ChakmaCodePoints from '@unicode/unicode-8.0.0/Script/Chakma/code-points.mjs';
import ChakmaSymbols from '@unicode/unicode-8.0.0/Script/Chakma/symbols.mjs';
import ChakmaRegex from '@unicode/unicode-8.0.0/Script/Chakma/regex.mjs';

import ChamCodePoints from '@unicode/unicode-8.0.0/Script/Cham/code-points.mjs';
import ChamSymbols from '@unicode/unicode-8.0.0/Script/Cham/symbols.mjs';
import ChamRegex from '@unicode/unicode-8.0.0/Script/Cham/regex.mjs';

import CherokeeCodePoints from '@unicode/unicode-8.0.0/Script/Cherokee/code-points.mjs';
import CherokeeSymbols from '@unicode/unicode-8.0.0/Script/Cherokee/symbols.mjs';
import CherokeeRegex from '@unicode/unicode-8.0.0/Script/Cherokee/regex.mjs';

import CommonCodePoints from '@unicode/unicode-8.0.0/Script/Common/code-points.mjs';
import CommonSymbols from '@unicode/unicode-8.0.0/Script/Common/symbols.mjs';
import CommonRegex from '@unicode/unicode-8.0.0/Script/Common/regex.mjs';

import CopticCodePoints from '@unicode/unicode-8.0.0/Script/Coptic/code-points.mjs';
import CopticSymbols from '@unicode/unicode-8.0.0/Script/Coptic/symbols.mjs';
import CopticRegex from '@unicode/unicode-8.0.0/Script/Coptic/regex.mjs';

import CuneiformCodePoints from '@unicode/unicode-8.0.0/Script/Cuneiform/code-points.mjs';
import CuneiformSymbols from '@unicode/unicode-8.0.0/Script/Cuneiform/symbols.mjs';
import CuneiformRegex from '@unicode/unicode-8.0.0/Script/Cuneiform/regex.mjs';

import CypriotCodePoints from '@unicode/unicode-8.0.0/Script/Cypriot/code-points.mjs';
import CypriotSymbols from '@unicode/unicode-8.0.0/Script/Cypriot/symbols.mjs';
import CypriotRegex from '@unicode/unicode-8.0.0/Script/Cypriot/regex.mjs';

import CyrillicCodePoints from '@unicode/unicode-8.0.0/Script/Cyrillic/code-points.mjs';
import CyrillicSymbols from '@unicode/unicode-8.0.0/Script/Cyrillic/symbols.mjs';
import CyrillicRegex from '@unicode/unicode-8.0.0/Script/Cyrillic/regex.mjs';

import DeseretCodePoints from '@unicode/unicode-8.0.0/Script/Deseret/code-points.mjs';
import DeseretSymbols from '@unicode/unicode-8.0.0/Script/Deseret/symbols.mjs';
import DeseretRegex from '@unicode/unicode-8.0.0/Script/Deseret/regex.mjs';

import DevanagariCodePoints from '@unicode/unicode-8.0.0/Script/Devanagari/code-points.mjs';
import DevanagariSymbols from '@unicode/unicode-8.0.0/Script/Devanagari/symbols.mjs';
import DevanagariRegex from '@unicode/unicode-8.0.0/Script/Devanagari/regex.mjs';

import DuployanCodePoints from '@unicode/unicode-8.0.0/Script/Duployan/code-points.mjs';
import DuployanSymbols from '@unicode/unicode-8.0.0/Script/Duployan/symbols.mjs';
import DuployanRegex from '@unicode/unicode-8.0.0/Script/Duployan/regex.mjs';

import Egyptian_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Script/Egyptian_Hieroglyphs/code-points.mjs';
import Egyptian_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Script/Egyptian_Hieroglyphs/symbols.mjs';
import Egyptian_HieroglyphsRegex from '@unicode/unicode-8.0.0/Script/Egyptian_Hieroglyphs/regex.mjs';

import ElbasanCodePoints from '@unicode/unicode-8.0.0/Script/Elbasan/code-points.mjs';
import ElbasanSymbols from '@unicode/unicode-8.0.0/Script/Elbasan/symbols.mjs';
import ElbasanRegex from '@unicode/unicode-8.0.0/Script/Elbasan/regex.mjs';

import EthiopicCodePoints from '@unicode/unicode-8.0.0/Script/Ethiopic/code-points.mjs';
import EthiopicSymbols from '@unicode/unicode-8.0.0/Script/Ethiopic/symbols.mjs';
import EthiopicRegex from '@unicode/unicode-8.0.0/Script/Ethiopic/regex.mjs';

import GeorgianCodePoints from '@unicode/unicode-8.0.0/Script/Georgian/code-points.mjs';
import GeorgianSymbols from '@unicode/unicode-8.0.0/Script/Georgian/symbols.mjs';
import GeorgianRegex from '@unicode/unicode-8.0.0/Script/Georgian/regex.mjs';

import GlagoliticCodePoints from '@unicode/unicode-8.0.0/Script/Glagolitic/code-points.mjs';
import GlagoliticSymbols from '@unicode/unicode-8.0.0/Script/Glagolitic/symbols.mjs';
import GlagoliticRegex from '@unicode/unicode-8.0.0/Script/Glagolitic/regex.mjs';

import GothicCodePoints from '@unicode/unicode-8.0.0/Script/Gothic/code-points.mjs';
import GothicSymbols from '@unicode/unicode-8.0.0/Script/Gothic/symbols.mjs';
import GothicRegex from '@unicode/unicode-8.0.0/Script/Gothic/regex.mjs';

import GranthaCodePoints from '@unicode/unicode-8.0.0/Script/Grantha/code-points.mjs';
import GranthaSymbols from '@unicode/unicode-8.0.0/Script/Grantha/symbols.mjs';
import GranthaRegex from '@unicode/unicode-8.0.0/Script/Grantha/regex.mjs';

import GreekCodePoints from '@unicode/unicode-8.0.0/Script/Greek/code-points.mjs';
import GreekSymbols from '@unicode/unicode-8.0.0/Script/Greek/symbols.mjs';
import GreekRegex from '@unicode/unicode-8.0.0/Script/Greek/regex.mjs';

import GujaratiCodePoints from '@unicode/unicode-8.0.0/Script/Gujarati/code-points.mjs';
import GujaratiSymbols from '@unicode/unicode-8.0.0/Script/Gujarati/symbols.mjs';
import GujaratiRegex from '@unicode/unicode-8.0.0/Script/Gujarati/regex.mjs';

import GurmukhiCodePoints from '@unicode/unicode-8.0.0/Script/Gurmukhi/code-points.mjs';
import GurmukhiSymbols from '@unicode/unicode-8.0.0/Script/Gurmukhi/symbols.mjs';
import GurmukhiRegex from '@unicode/unicode-8.0.0/Script/Gurmukhi/regex.mjs';

import HanCodePoints from '@unicode/unicode-8.0.0/Script/Han/code-points.mjs';
import HanSymbols from '@unicode/unicode-8.0.0/Script/Han/symbols.mjs';
import HanRegex from '@unicode/unicode-8.0.0/Script/Han/regex.mjs';

import HangulCodePoints from '@unicode/unicode-8.0.0/Script/Hangul/code-points.mjs';
import HangulSymbols from '@unicode/unicode-8.0.0/Script/Hangul/symbols.mjs';
import HangulRegex from '@unicode/unicode-8.0.0/Script/Hangul/regex.mjs';

import HanunooCodePoints from '@unicode/unicode-8.0.0/Script/Hanunoo/code-points.mjs';
import HanunooSymbols from '@unicode/unicode-8.0.0/Script/Hanunoo/symbols.mjs';
import HanunooRegex from '@unicode/unicode-8.0.0/Script/Hanunoo/regex.mjs';

import HatranCodePoints from '@unicode/unicode-8.0.0/Script/Hatran/code-points.mjs';
import HatranSymbols from '@unicode/unicode-8.0.0/Script/Hatran/symbols.mjs';
import HatranRegex from '@unicode/unicode-8.0.0/Script/Hatran/regex.mjs';

import HebrewCodePoints from '@unicode/unicode-8.0.0/Script/Hebrew/code-points.mjs';
import HebrewSymbols from '@unicode/unicode-8.0.0/Script/Hebrew/symbols.mjs';
import HebrewRegex from '@unicode/unicode-8.0.0/Script/Hebrew/regex.mjs';

import HiraganaCodePoints from '@unicode/unicode-8.0.0/Script/Hiragana/code-points.mjs';
import HiraganaSymbols from '@unicode/unicode-8.0.0/Script/Hiragana/symbols.mjs';
import HiraganaRegex from '@unicode/unicode-8.0.0/Script/Hiragana/regex.mjs';

import Imperial_AramaicCodePoints from '@unicode/unicode-8.0.0/Script/Imperial_Aramaic/code-points.mjs';
import Imperial_AramaicSymbols from '@unicode/unicode-8.0.0/Script/Imperial_Aramaic/symbols.mjs';
import Imperial_AramaicRegex from '@unicode/unicode-8.0.0/Script/Imperial_Aramaic/regex.mjs';

import InheritedCodePoints from '@unicode/unicode-8.0.0/Script/Inherited/code-points.mjs';
import InheritedSymbols from '@unicode/unicode-8.0.0/Script/Inherited/symbols.mjs';
import InheritedRegex from '@unicode/unicode-8.0.0/Script/Inherited/regex.mjs';

import Inscriptional_PahlaviCodePoints from '@unicode/unicode-8.0.0/Script/Inscriptional_Pahlavi/code-points.mjs';
import Inscriptional_PahlaviSymbols from '@unicode/unicode-8.0.0/Script/Inscriptional_Pahlavi/symbols.mjs';
import Inscriptional_PahlaviRegex from '@unicode/unicode-8.0.0/Script/Inscriptional_Pahlavi/regex.mjs';

import Inscriptional_ParthianCodePoints from '@unicode/unicode-8.0.0/Script/Inscriptional_Parthian/code-points.mjs';
import Inscriptional_ParthianSymbols from '@unicode/unicode-8.0.0/Script/Inscriptional_Parthian/symbols.mjs';
import Inscriptional_ParthianRegex from '@unicode/unicode-8.0.0/Script/Inscriptional_Parthian/regex.mjs';

import JavaneseCodePoints from '@unicode/unicode-8.0.0/Script/Javanese/code-points.mjs';
import JavaneseSymbols from '@unicode/unicode-8.0.0/Script/Javanese/symbols.mjs';
import JavaneseRegex from '@unicode/unicode-8.0.0/Script/Javanese/regex.mjs';

import KaithiCodePoints from '@unicode/unicode-8.0.0/Script/Kaithi/code-points.mjs';
import KaithiSymbols from '@unicode/unicode-8.0.0/Script/Kaithi/symbols.mjs';
import KaithiRegex from '@unicode/unicode-8.0.0/Script/Kaithi/regex.mjs';

import KannadaCodePoints from '@unicode/unicode-8.0.0/Script/Kannada/code-points.mjs';
import KannadaSymbols from '@unicode/unicode-8.0.0/Script/Kannada/symbols.mjs';
import KannadaRegex from '@unicode/unicode-8.0.0/Script/Kannada/regex.mjs';

import KatakanaCodePoints from '@unicode/unicode-8.0.0/Script/Katakana/code-points.mjs';
import KatakanaSymbols from '@unicode/unicode-8.0.0/Script/Katakana/symbols.mjs';
import KatakanaRegex from '@unicode/unicode-8.0.0/Script/Katakana/regex.mjs';

import Kayah_LiCodePoints from '@unicode/unicode-8.0.0/Script/Kayah_Li/code-points.mjs';
import Kayah_LiSymbols from '@unicode/unicode-8.0.0/Script/Kayah_Li/symbols.mjs';
import Kayah_LiRegex from '@unicode/unicode-8.0.0/Script/Kayah_Li/regex.mjs';

import KharoshthiCodePoints from '@unicode/unicode-8.0.0/Script/Kharoshthi/code-points.mjs';
import KharoshthiSymbols from '@unicode/unicode-8.0.0/Script/Kharoshthi/symbols.mjs';
import KharoshthiRegex from '@unicode/unicode-8.0.0/Script/Kharoshthi/regex.mjs';

import KhmerCodePoints from '@unicode/unicode-8.0.0/Script/Khmer/code-points.mjs';
import KhmerSymbols from '@unicode/unicode-8.0.0/Script/Khmer/symbols.mjs';
import KhmerRegex from '@unicode/unicode-8.0.0/Script/Khmer/regex.mjs';

import KhojkiCodePoints from '@unicode/unicode-8.0.0/Script/Khojki/code-points.mjs';
import KhojkiSymbols from '@unicode/unicode-8.0.0/Script/Khojki/symbols.mjs';
import KhojkiRegex from '@unicode/unicode-8.0.0/Script/Khojki/regex.mjs';

import KhudawadiCodePoints from '@unicode/unicode-8.0.0/Script/Khudawadi/code-points.mjs';
import KhudawadiSymbols from '@unicode/unicode-8.0.0/Script/Khudawadi/symbols.mjs';
import KhudawadiRegex from '@unicode/unicode-8.0.0/Script/Khudawadi/regex.mjs';

import LaoCodePoints from '@unicode/unicode-8.0.0/Script/Lao/code-points.mjs';
import LaoSymbols from '@unicode/unicode-8.0.0/Script/Lao/symbols.mjs';
import LaoRegex from '@unicode/unicode-8.0.0/Script/Lao/regex.mjs';

import LatinCodePoints from '@unicode/unicode-8.0.0/Script/Latin/code-points.mjs';
import LatinSymbols from '@unicode/unicode-8.0.0/Script/Latin/symbols.mjs';
import LatinRegex from '@unicode/unicode-8.0.0/Script/Latin/regex.mjs';

import LepchaCodePoints from '@unicode/unicode-8.0.0/Script/Lepcha/code-points.mjs';
import LepchaSymbols from '@unicode/unicode-8.0.0/Script/Lepcha/symbols.mjs';
import LepchaRegex from '@unicode/unicode-8.0.0/Script/Lepcha/regex.mjs';

import LimbuCodePoints from '@unicode/unicode-8.0.0/Script/Limbu/code-points.mjs';
import LimbuSymbols from '@unicode/unicode-8.0.0/Script/Limbu/symbols.mjs';
import LimbuRegex from '@unicode/unicode-8.0.0/Script/Limbu/regex.mjs';

import Linear_ACodePoints from '@unicode/unicode-8.0.0/Script/Linear_A/code-points.mjs';
import Linear_ASymbols from '@unicode/unicode-8.0.0/Script/Linear_A/symbols.mjs';
import Linear_ARegex from '@unicode/unicode-8.0.0/Script/Linear_A/regex.mjs';

import Linear_BCodePoints from '@unicode/unicode-8.0.0/Script/Linear_B/code-points.mjs';
import Linear_BSymbols from '@unicode/unicode-8.0.0/Script/Linear_B/symbols.mjs';
import Linear_BRegex from '@unicode/unicode-8.0.0/Script/Linear_B/regex.mjs';

import LisuCodePoints from '@unicode/unicode-8.0.0/Script/Lisu/code-points.mjs';
import LisuSymbols from '@unicode/unicode-8.0.0/Script/Lisu/symbols.mjs';
import LisuRegex from '@unicode/unicode-8.0.0/Script/Lisu/regex.mjs';

import LycianCodePoints from '@unicode/unicode-8.0.0/Script/Lycian/code-points.mjs';
import LycianSymbols from '@unicode/unicode-8.0.0/Script/Lycian/symbols.mjs';
import LycianRegex from '@unicode/unicode-8.0.0/Script/Lycian/regex.mjs';

import LydianCodePoints from '@unicode/unicode-8.0.0/Script/Lydian/code-points.mjs';
import LydianSymbols from '@unicode/unicode-8.0.0/Script/Lydian/symbols.mjs';
import LydianRegex from '@unicode/unicode-8.0.0/Script/Lydian/regex.mjs';

import MahajaniCodePoints from '@unicode/unicode-8.0.0/Script/Mahajani/code-points.mjs';
import MahajaniSymbols from '@unicode/unicode-8.0.0/Script/Mahajani/symbols.mjs';
import MahajaniRegex from '@unicode/unicode-8.0.0/Script/Mahajani/regex.mjs';

import MalayalamCodePoints from '@unicode/unicode-8.0.0/Script/Malayalam/code-points.mjs';
import MalayalamSymbols from '@unicode/unicode-8.0.0/Script/Malayalam/symbols.mjs';
import MalayalamRegex from '@unicode/unicode-8.0.0/Script/Malayalam/regex.mjs';

import MandaicCodePoints from '@unicode/unicode-8.0.0/Script/Mandaic/code-points.mjs';
import MandaicSymbols from '@unicode/unicode-8.0.0/Script/Mandaic/symbols.mjs';
import MandaicRegex from '@unicode/unicode-8.0.0/Script/Mandaic/regex.mjs';

import ManichaeanCodePoints from '@unicode/unicode-8.0.0/Script/Manichaean/code-points.mjs';
import ManichaeanSymbols from '@unicode/unicode-8.0.0/Script/Manichaean/symbols.mjs';
import ManichaeanRegex from '@unicode/unicode-8.0.0/Script/Manichaean/regex.mjs';

import Meetei_MayekCodePoints from '@unicode/unicode-8.0.0/Script/Meetei_Mayek/code-points.mjs';
import Meetei_MayekSymbols from '@unicode/unicode-8.0.0/Script/Meetei_Mayek/symbols.mjs';
import Meetei_MayekRegex from '@unicode/unicode-8.0.0/Script/Meetei_Mayek/regex.mjs';

import Mende_KikakuiCodePoints from '@unicode/unicode-8.0.0/Script/Mende_Kikakui/code-points.mjs';
import Mende_KikakuiSymbols from '@unicode/unicode-8.0.0/Script/Mende_Kikakui/symbols.mjs';
import Mende_KikakuiRegex from '@unicode/unicode-8.0.0/Script/Mende_Kikakui/regex.mjs';

import Meroitic_CursiveCodePoints from '@unicode/unicode-8.0.0/Script/Meroitic_Cursive/code-points.mjs';
import Meroitic_CursiveSymbols from '@unicode/unicode-8.0.0/Script/Meroitic_Cursive/symbols.mjs';
import Meroitic_CursiveRegex from '@unicode/unicode-8.0.0/Script/Meroitic_Cursive/regex.mjs';

import Meroitic_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Script/Meroitic_Hieroglyphs/code-points.mjs';
import Meroitic_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Script/Meroitic_Hieroglyphs/symbols.mjs';
import Meroitic_HieroglyphsRegex from '@unicode/unicode-8.0.0/Script/Meroitic_Hieroglyphs/regex.mjs';

import MiaoCodePoints from '@unicode/unicode-8.0.0/Script/Miao/code-points.mjs';
import MiaoSymbols from '@unicode/unicode-8.0.0/Script/Miao/symbols.mjs';
import MiaoRegex from '@unicode/unicode-8.0.0/Script/Miao/regex.mjs';

import ModiCodePoints from '@unicode/unicode-8.0.0/Script/Modi/code-points.mjs';
import ModiSymbols from '@unicode/unicode-8.0.0/Script/Modi/symbols.mjs';
import ModiRegex from '@unicode/unicode-8.0.0/Script/Modi/regex.mjs';

import MongolianCodePoints from '@unicode/unicode-8.0.0/Script/Mongolian/code-points.mjs';
import MongolianSymbols from '@unicode/unicode-8.0.0/Script/Mongolian/symbols.mjs';
import MongolianRegex from '@unicode/unicode-8.0.0/Script/Mongolian/regex.mjs';

import MroCodePoints from '@unicode/unicode-8.0.0/Script/Mro/code-points.mjs';
import MroSymbols from '@unicode/unicode-8.0.0/Script/Mro/symbols.mjs';
import MroRegex from '@unicode/unicode-8.0.0/Script/Mro/regex.mjs';

import MultaniCodePoints from '@unicode/unicode-8.0.0/Script/Multani/code-points.mjs';
import MultaniSymbols from '@unicode/unicode-8.0.0/Script/Multani/symbols.mjs';
import MultaniRegex from '@unicode/unicode-8.0.0/Script/Multani/regex.mjs';

import MyanmarCodePoints from '@unicode/unicode-8.0.0/Script/Myanmar/code-points.mjs';
import MyanmarSymbols from '@unicode/unicode-8.0.0/Script/Myanmar/symbols.mjs';
import MyanmarRegex from '@unicode/unicode-8.0.0/Script/Myanmar/regex.mjs';

import NabataeanCodePoints from '@unicode/unicode-8.0.0/Script/Nabataean/code-points.mjs';
import NabataeanSymbols from '@unicode/unicode-8.0.0/Script/Nabataean/symbols.mjs';
import NabataeanRegex from '@unicode/unicode-8.0.0/Script/Nabataean/regex.mjs';

import New_Tai_LueCodePoints from '@unicode/unicode-8.0.0/Script/New_Tai_Lue/code-points.mjs';
import New_Tai_LueSymbols from '@unicode/unicode-8.0.0/Script/New_Tai_Lue/symbols.mjs';
import New_Tai_LueRegex from '@unicode/unicode-8.0.0/Script/New_Tai_Lue/regex.mjs';

import NkoCodePoints from '@unicode/unicode-8.0.0/Script/Nko/code-points.mjs';
import NkoSymbols from '@unicode/unicode-8.0.0/Script/Nko/symbols.mjs';
import NkoRegex from '@unicode/unicode-8.0.0/Script/Nko/regex.mjs';

import OghamCodePoints from '@unicode/unicode-8.0.0/Script/Ogham/code-points.mjs';
import OghamSymbols from '@unicode/unicode-8.0.0/Script/Ogham/symbols.mjs';
import OghamRegex from '@unicode/unicode-8.0.0/Script/Ogham/regex.mjs';

import Ol_ChikiCodePoints from '@unicode/unicode-8.0.0/Script/Ol_Chiki/code-points.mjs';
import Ol_ChikiSymbols from '@unicode/unicode-8.0.0/Script/Ol_Chiki/symbols.mjs';
import Ol_ChikiRegex from '@unicode/unicode-8.0.0/Script/Ol_Chiki/regex.mjs';

import Old_HungarianCodePoints from '@unicode/unicode-8.0.0/Script/Old_Hungarian/code-points.mjs';
import Old_HungarianSymbols from '@unicode/unicode-8.0.0/Script/Old_Hungarian/symbols.mjs';
import Old_HungarianRegex from '@unicode/unicode-8.0.0/Script/Old_Hungarian/regex.mjs';

import Old_ItalicCodePoints from '@unicode/unicode-8.0.0/Script/Old_Italic/code-points.mjs';
import Old_ItalicSymbols from '@unicode/unicode-8.0.0/Script/Old_Italic/symbols.mjs';
import Old_ItalicRegex from '@unicode/unicode-8.0.0/Script/Old_Italic/regex.mjs';

import Old_North_ArabianCodePoints from '@unicode/unicode-8.0.0/Script/Old_North_Arabian/code-points.mjs';
import Old_North_ArabianSymbols from '@unicode/unicode-8.0.0/Script/Old_North_Arabian/symbols.mjs';
import Old_North_ArabianRegex from '@unicode/unicode-8.0.0/Script/Old_North_Arabian/regex.mjs';

import Old_PermicCodePoints from '@unicode/unicode-8.0.0/Script/Old_Permic/code-points.mjs';
import Old_PermicSymbols from '@unicode/unicode-8.0.0/Script/Old_Permic/symbols.mjs';
import Old_PermicRegex from '@unicode/unicode-8.0.0/Script/Old_Permic/regex.mjs';

import Old_PersianCodePoints from '@unicode/unicode-8.0.0/Script/Old_Persian/code-points.mjs';
import Old_PersianSymbols from '@unicode/unicode-8.0.0/Script/Old_Persian/symbols.mjs';
import Old_PersianRegex from '@unicode/unicode-8.0.0/Script/Old_Persian/regex.mjs';

import Old_South_ArabianCodePoints from '@unicode/unicode-8.0.0/Script/Old_South_Arabian/code-points.mjs';
import Old_South_ArabianSymbols from '@unicode/unicode-8.0.0/Script/Old_South_Arabian/symbols.mjs';
import Old_South_ArabianRegex from '@unicode/unicode-8.0.0/Script/Old_South_Arabian/regex.mjs';

import Old_TurkicCodePoints from '@unicode/unicode-8.0.0/Script/Old_Turkic/code-points.mjs';
import Old_TurkicSymbols from '@unicode/unicode-8.0.0/Script/Old_Turkic/symbols.mjs';
import Old_TurkicRegex from '@unicode/unicode-8.0.0/Script/Old_Turkic/regex.mjs';

import OriyaCodePoints from '@unicode/unicode-8.0.0/Script/Oriya/code-points.mjs';
import OriyaSymbols from '@unicode/unicode-8.0.0/Script/Oriya/symbols.mjs';
import OriyaRegex from '@unicode/unicode-8.0.0/Script/Oriya/regex.mjs';

import OsmanyaCodePoints from '@unicode/unicode-8.0.0/Script/Osmanya/code-points.mjs';
import OsmanyaSymbols from '@unicode/unicode-8.0.0/Script/Osmanya/symbols.mjs';
import OsmanyaRegex from '@unicode/unicode-8.0.0/Script/Osmanya/regex.mjs';

import Pahawh_HmongCodePoints from '@unicode/unicode-8.0.0/Script/Pahawh_Hmong/code-points.mjs';
import Pahawh_HmongSymbols from '@unicode/unicode-8.0.0/Script/Pahawh_Hmong/symbols.mjs';
import Pahawh_HmongRegex from '@unicode/unicode-8.0.0/Script/Pahawh_Hmong/regex.mjs';

import PalmyreneCodePoints from '@unicode/unicode-8.0.0/Script/Palmyrene/code-points.mjs';
import PalmyreneSymbols from '@unicode/unicode-8.0.0/Script/Palmyrene/symbols.mjs';
import PalmyreneRegex from '@unicode/unicode-8.0.0/Script/Palmyrene/regex.mjs';

import Pau_Cin_HauCodePoints from '@unicode/unicode-8.0.0/Script/Pau_Cin_Hau/code-points.mjs';
import Pau_Cin_HauSymbols from '@unicode/unicode-8.0.0/Script/Pau_Cin_Hau/symbols.mjs';
import Pau_Cin_HauRegex from '@unicode/unicode-8.0.0/Script/Pau_Cin_Hau/regex.mjs';

import Phags_PaCodePoints from '@unicode/unicode-8.0.0/Script/Phags_Pa/code-points.mjs';
import Phags_PaSymbols from '@unicode/unicode-8.0.0/Script/Phags_Pa/symbols.mjs';
import Phags_PaRegex from '@unicode/unicode-8.0.0/Script/Phags_Pa/regex.mjs';

import PhoenicianCodePoints from '@unicode/unicode-8.0.0/Script/Phoenician/code-points.mjs';
import PhoenicianSymbols from '@unicode/unicode-8.0.0/Script/Phoenician/symbols.mjs';
import PhoenicianRegex from '@unicode/unicode-8.0.0/Script/Phoenician/regex.mjs';

import Psalter_PahlaviCodePoints from '@unicode/unicode-8.0.0/Script/Psalter_Pahlavi/code-points.mjs';
import Psalter_PahlaviSymbols from '@unicode/unicode-8.0.0/Script/Psalter_Pahlavi/symbols.mjs';
import Psalter_PahlaviRegex from '@unicode/unicode-8.0.0/Script/Psalter_Pahlavi/regex.mjs';

import RejangCodePoints from '@unicode/unicode-8.0.0/Script/Rejang/code-points.mjs';
import RejangSymbols from '@unicode/unicode-8.0.0/Script/Rejang/symbols.mjs';
import RejangRegex from '@unicode/unicode-8.0.0/Script/Rejang/regex.mjs';

import RunicCodePoints from '@unicode/unicode-8.0.0/Script/Runic/code-points.mjs';
import RunicSymbols from '@unicode/unicode-8.0.0/Script/Runic/symbols.mjs';
import RunicRegex from '@unicode/unicode-8.0.0/Script/Runic/regex.mjs';

import SamaritanCodePoints from '@unicode/unicode-8.0.0/Script/Samaritan/code-points.mjs';
import SamaritanSymbols from '@unicode/unicode-8.0.0/Script/Samaritan/symbols.mjs';
import SamaritanRegex from '@unicode/unicode-8.0.0/Script/Samaritan/regex.mjs';

import SaurashtraCodePoints from '@unicode/unicode-8.0.0/Script/Saurashtra/code-points.mjs';
import SaurashtraSymbols from '@unicode/unicode-8.0.0/Script/Saurashtra/symbols.mjs';
import SaurashtraRegex from '@unicode/unicode-8.0.0/Script/Saurashtra/regex.mjs';

import SharadaCodePoints from '@unicode/unicode-8.0.0/Script/Sharada/code-points.mjs';
import SharadaSymbols from '@unicode/unicode-8.0.0/Script/Sharada/symbols.mjs';
import SharadaRegex from '@unicode/unicode-8.0.0/Script/Sharada/regex.mjs';

import ShavianCodePoints from '@unicode/unicode-8.0.0/Script/Shavian/code-points.mjs';
import ShavianSymbols from '@unicode/unicode-8.0.0/Script/Shavian/symbols.mjs';
import ShavianRegex from '@unicode/unicode-8.0.0/Script/Shavian/regex.mjs';

import SiddhamCodePoints from '@unicode/unicode-8.0.0/Script/Siddham/code-points.mjs';
import SiddhamSymbols from '@unicode/unicode-8.0.0/Script/Siddham/symbols.mjs';
import SiddhamRegex from '@unicode/unicode-8.0.0/Script/Siddham/regex.mjs';

import SignWritingCodePoints from '@unicode/unicode-8.0.0/Script/SignWriting/code-points.mjs';
import SignWritingSymbols from '@unicode/unicode-8.0.0/Script/SignWriting/symbols.mjs';
import SignWritingRegex from '@unicode/unicode-8.0.0/Script/SignWriting/regex.mjs';

import SinhalaCodePoints from '@unicode/unicode-8.0.0/Script/Sinhala/code-points.mjs';
import SinhalaSymbols from '@unicode/unicode-8.0.0/Script/Sinhala/symbols.mjs';
import SinhalaRegex from '@unicode/unicode-8.0.0/Script/Sinhala/regex.mjs';

import Sora_SompengCodePoints from '@unicode/unicode-8.0.0/Script/Sora_Sompeng/code-points.mjs';
import Sora_SompengSymbols from '@unicode/unicode-8.0.0/Script/Sora_Sompeng/symbols.mjs';
import Sora_SompengRegex from '@unicode/unicode-8.0.0/Script/Sora_Sompeng/regex.mjs';

import SundaneseCodePoints from '@unicode/unicode-8.0.0/Script/Sundanese/code-points.mjs';
import SundaneseSymbols from '@unicode/unicode-8.0.0/Script/Sundanese/symbols.mjs';
import SundaneseRegex from '@unicode/unicode-8.0.0/Script/Sundanese/regex.mjs';

import Syloti_NagriCodePoints from '@unicode/unicode-8.0.0/Script/Syloti_Nagri/code-points.mjs';
import Syloti_NagriSymbols from '@unicode/unicode-8.0.0/Script/Syloti_Nagri/symbols.mjs';
import Syloti_NagriRegex from '@unicode/unicode-8.0.0/Script/Syloti_Nagri/regex.mjs';

import SyriacCodePoints from '@unicode/unicode-8.0.0/Script/Syriac/code-points.mjs';
import SyriacSymbols from '@unicode/unicode-8.0.0/Script/Syriac/symbols.mjs';
import SyriacRegex from '@unicode/unicode-8.0.0/Script/Syriac/regex.mjs';

import TagalogCodePoints from '@unicode/unicode-8.0.0/Script/Tagalog/code-points.mjs';
import TagalogSymbols from '@unicode/unicode-8.0.0/Script/Tagalog/symbols.mjs';
import TagalogRegex from '@unicode/unicode-8.0.0/Script/Tagalog/regex.mjs';

import TagbanwaCodePoints from '@unicode/unicode-8.0.0/Script/Tagbanwa/code-points.mjs';
import TagbanwaSymbols from '@unicode/unicode-8.0.0/Script/Tagbanwa/symbols.mjs';
import TagbanwaRegex from '@unicode/unicode-8.0.0/Script/Tagbanwa/regex.mjs';

import Tai_LeCodePoints from '@unicode/unicode-8.0.0/Script/Tai_Le/code-points.mjs';
import Tai_LeSymbols from '@unicode/unicode-8.0.0/Script/Tai_Le/symbols.mjs';
import Tai_LeRegex from '@unicode/unicode-8.0.0/Script/Tai_Le/regex.mjs';

import Tai_ThamCodePoints from '@unicode/unicode-8.0.0/Script/Tai_Tham/code-points.mjs';
import Tai_ThamSymbols from '@unicode/unicode-8.0.0/Script/Tai_Tham/symbols.mjs';
import Tai_ThamRegex from '@unicode/unicode-8.0.0/Script/Tai_Tham/regex.mjs';

import Tai_VietCodePoints from '@unicode/unicode-8.0.0/Script/Tai_Viet/code-points.mjs';
import Tai_VietSymbols from '@unicode/unicode-8.0.0/Script/Tai_Viet/symbols.mjs';
import Tai_VietRegex from '@unicode/unicode-8.0.0/Script/Tai_Viet/regex.mjs';

import TakriCodePoints from '@unicode/unicode-8.0.0/Script/Takri/code-points.mjs';
import TakriSymbols from '@unicode/unicode-8.0.0/Script/Takri/symbols.mjs';
import TakriRegex from '@unicode/unicode-8.0.0/Script/Takri/regex.mjs';

import TamilCodePoints from '@unicode/unicode-8.0.0/Script/Tamil/code-points.mjs';
import TamilSymbols from '@unicode/unicode-8.0.0/Script/Tamil/symbols.mjs';
import TamilRegex from '@unicode/unicode-8.0.0/Script/Tamil/regex.mjs';

import TeluguCodePoints from '@unicode/unicode-8.0.0/Script/Telugu/code-points.mjs';
import TeluguSymbols from '@unicode/unicode-8.0.0/Script/Telugu/symbols.mjs';
import TeluguRegex from '@unicode/unicode-8.0.0/Script/Telugu/regex.mjs';

import ThaanaCodePoints from '@unicode/unicode-8.0.0/Script/Thaana/code-points.mjs';
import ThaanaSymbols from '@unicode/unicode-8.0.0/Script/Thaana/symbols.mjs';
import ThaanaRegex from '@unicode/unicode-8.0.0/Script/Thaana/regex.mjs';

import ThaiCodePoints from '@unicode/unicode-8.0.0/Script/Thai/code-points.mjs';
import ThaiSymbols from '@unicode/unicode-8.0.0/Script/Thai/symbols.mjs';
import ThaiRegex from '@unicode/unicode-8.0.0/Script/Thai/regex.mjs';

import TibetanCodePoints from '@unicode/unicode-8.0.0/Script/Tibetan/code-points.mjs';
import TibetanSymbols from '@unicode/unicode-8.0.0/Script/Tibetan/symbols.mjs';
import TibetanRegex from '@unicode/unicode-8.0.0/Script/Tibetan/regex.mjs';

import TifinaghCodePoints from '@unicode/unicode-8.0.0/Script/Tifinagh/code-points.mjs';
import TifinaghSymbols from '@unicode/unicode-8.0.0/Script/Tifinagh/symbols.mjs';
import TifinaghRegex from '@unicode/unicode-8.0.0/Script/Tifinagh/regex.mjs';

import TirhutaCodePoints from '@unicode/unicode-8.0.0/Script/Tirhuta/code-points.mjs';
import TirhutaSymbols from '@unicode/unicode-8.0.0/Script/Tirhuta/symbols.mjs';
import TirhutaRegex from '@unicode/unicode-8.0.0/Script/Tirhuta/regex.mjs';

import UgariticCodePoints from '@unicode/unicode-8.0.0/Script/Ugaritic/code-points.mjs';
import UgariticSymbols from '@unicode/unicode-8.0.0/Script/Ugaritic/symbols.mjs';
import UgariticRegex from '@unicode/unicode-8.0.0/Script/Ugaritic/regex.mjs';

import UnknownCodePoints from '@unicode/unicode-8.0.0/Script/Unknown/code-points.mjs';
import UnknownSymbols from '@unicode/unicode-8.0.0/Script/Unknown/symbols.mjs';
import UnknownRegex from '@unicode/unicode-8.0.0/Script/Unknown/regex.mjs';

import VaiCodePoints from '@unicode/unicode-8.0.0/Script/Vai/code-points.mjs';
import VaiSymbols from '@unicode/unicode-8.0.0/Script/Vai/symbols.mjs';
import VaiRegex from '@unicode/unicode-8.0.0/Script/Vai/regex.mjs';

import Warang_CitiCodePoints from '@unicode/unicode-8.0.0/Script/Warang_Citi/code-points.mjs';
import Warang_CitiSymbols from '@unicode/unicode-8.0.0/Script/Warang_Citi/symbols.mjs';
import Warang_CitiRegex from '@unicode/unicode-8.0.0/Script/Warang_Citi/regex.mjs';

import YiCodePoints from '@unicode/unicode-8.0.0/Script/Yi/code-points.mjs';
import YiSymbols from '@unicode/unicode-8.0.0/Script/Yi/symbols.mjs';
import YiRegex from '@unicode/unicode-8.0.0/Script/Yi/regex.mjs';

// `Script_Extensions`:

import AhomCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Ahom/code-points.mjs';
import AhomSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Ahom/symbols.mjs';
import AhomRegex from '@unicode/unicode-8.0.0/Script_Extensions/Ahom/regex.mjs';

import Anatolian_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Anatolian_Hieroglyphs/code-points.mjs';
import Anatolian_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Anatolian_Hieroglyphs/symbols.mjs';
import Anatolian_HieroglyphsRegex from '@unicode/unicode-8.0.0/Script_Extensions/Anatolian_Hieroglyphs/regex.mjs';

import ArabicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Arabic/code-points.mjs';
import ArabicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Arabic/symbols.mjs';
import ArabicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Arabic/regex.mjs';

import ArmenianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Armenian/code-points.mjs';
import ArmenianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Armenian/symbols.mjs';
import ArmenianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Armenian/regex.mjs';

import AvestanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Avestan/code-points.mjs';
import AvestanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Avestan/symbols.mjs';
import AvestanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Avestan/regex.mjs';

import BalineseCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Balinese/code-points.mjs';
import BalineseSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Balinese/symbols.mjs';
import BalineseRegex from '@unicode/unicode-8.0.0/Script_Extensions/Balinese/regex.mjs';

import BamumCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Bamum/code-points.mjs';
import BamumSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Bamum/symbols.mjs';
import BamumRegex from '@unicode/unicode-8.0.0/Script_Extensions/Bamum/regex.mjs';

import Bassa_VahCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Bassa_Vah/code-points.mjs';
import Bassa_VahSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Bassa_Vah/symbols.mjs';
import Bassa_VahRegex from '@unicode/unicode-8.0.0/Script_Extensions/Bassa_Vah/regex.mjs';

import BatakCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Batak/code-points.mjs';
import BatakSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Batak/symbols.mjs';
import BatakRegex from '@unicode/unicode-8.0.0/Script_Extensions/Batak/regex.mjs';

import BengaliCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Bengali/code-points.mjs';
import BengaliSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Bengali/symbols.mjs';
import BengaliRegex from '@unicode/unicode-8.0.0/Script_Extensions/Bengali/regex.mjs';

import BopomofoCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Bopomofo/code-points.mjs';
import BopomofoSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Bopomofo/symbols.mjs';
import BopomofoRegex from '@unicode/unicode-8.0.0/Script_Extensions/Bopomofo/regex.mjs';

import BrahmiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Brahmi/code-points.mjs';
import BrahmiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Brahmi/symbols.mjs';
import BrahmiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Brahmi/regex.mjs';

import BrailleCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Braille/code-points.mjs';
import BrailleSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Braille/symbols.mjs';
import BrailleRegex from '@unicode/unicode-8.0.0/Script_Extensions/Braille/regex.mjs';

import BugineseCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Buginese/code-points.mjs';
import BugineseSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Buginese/symbols.mjs';
import BugineseRegex from '@unicode/unicode-8.0.0/Script_Extensions/Buginese/regex.mjs';

import BuhidCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Buhid/code-points.mjs';
import BuhidSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Buhid/symbols.mjs';
import BuhidRegex from '@unicode/unicode-8.0.0/Script_Extensions/Buhid/regex.mjs';

import Canadian_AboriginalCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Canadian_Aboriginal/code-points.mjs';
import Canadian_AboriginalSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Canadian_Aboriginal/symbols.mjs';
import Canadian_AboriginalRegex from '@unicode/unicode-8.0.0/Script_Extensions/Canadian_Aboriginal/regex.mjs';

import CarianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Carian/code-points.mjs';
import CarianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Carian/symbols.mjs';
import CarianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Carian/regex.mjs';

import Caucasian_AlbanianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Caucasian_Albanian/code-points.mjs';
import Caucasian_AlbanianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Caucasian_Albanian/symbols.mjs';
import Caucasian_AlbanianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Caucasian_Albanian/regex.mjs';

import ChakmaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Chakma/code-points.mjs';
import ChakmaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Chakma/symbols.mjs';
import ChakmaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Chakma/regex.mjs';

import ChamCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Cham/code-points.mjs';
import ChamSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Cham/symbols.mjs';
import ChamRegex from '@unicode/unicode-8.0.0/Script_Extensions/Cham/regex.mjs';

import CherokeeCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Cherokee/code-points.mjs';
import CherokeeSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Cherokee/symbols.mjs';
import CherokeeRegex from '@unicode/unicode-8.0.0/Script_Extensions/Cherokee/regex.mjs';

import CommonCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Common/code-points.mjs';
import CommonSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Common/symbols.mjs';
import CommonRegex from '@unicode/unicode-8.0.0/Script_Extensions/Common/regex.mjs';

import CopticCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Coptic/code-points.mjs';
import CopticSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Coptic/symbols.mjs';
import CopticRegex from '@unicode/unicode-8.0.0/Script_Extensions/Coptic/regex.mjs';

import CuneiformCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Cuneiform/code-points.mjs';
import CuneiformSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Cuneiform/symbols.mjs';
import CuneiformRegex from '@unicode/unicode-8.0.0/Script_Extensions/Cuneiform/regex.mjs';

import CypriotCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Cypriot/code-points.mjs';
import CypriotSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Cypriot/symbols.mjs';
import CypriotRegex from '@unicode/unicode-8.0.0/Script_Extensions/Cypriot/regex.mjs';

import CyrillicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Cyrillic/code-points.mjs';
import CyrillicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Cyrillic/symbols.mjs';
import CyrillicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Cyrillic/regex.mjs';

import DeseretCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Deseret/code-points.mjs';
import DeseretSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Deseret/symbols.mjs';
import DeseretRegex from '@unicode/unicode-8.0.0/Script_Extensions/Deseret/regex.mjs';

import DevanagariCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Devanagari/code-points.mjs';
import DevanagariSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Devanagari/symbols.mjs';
import DevanagariRegex from '@unicode/unicode-8.0.0/Script_Extensions/Devanagari/regex.mjs';

import DuployanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Duployan/code-points.mjs';
import DuployanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Duployan/symbols.mjs';
import DuployanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Duployan/regex.mjs';

import Egyptian_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Egyptian_Hieroglyphs/code-points.mjs';
import Egyptian_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Egyptian_Hieroglyphs/symbols.mjs';
import Egyptian_HieroglyphsRegex from '@unicode/unicode-8.0.0/Script_Extensions/Egyptian_Hieroglyphs/regex.mjs';

import ElbasanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Elbasan/code-points.mjs';
import ElbasanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Elbasan/symbols.mjs';
import ElbasanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Elbasan/regex.mjs';

import EthiopicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Ethiopic/code-points.mjs';
import EthiopicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Ethiopic/symbols.mjs';
import EthiopicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Ethiopic/regex.mjs';

import GeorgianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Georgian/code-points.mjs';
import GeorgianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Georgian/symbols.mjs';
import GeorgianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Georgian/regex.mjs';

import GlagoliticCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Glagolitic/code-points.mjs';
import GlagoliticSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Glagolitic/symbols.mjs';
import GlagoliticRegex from '@unicode/unicode-8.0.0/Script_Extensions/Glagolitic/regex.mjs';

import GothicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Gothic/code-points.mjs';
import GothicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Gothic/symbols.mjs';
import GothicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Gothic/regex.mjs';

import GranthaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Grantha/code-points.mjs';
import GranthaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Grantha/symbols.mjs';
import GranthaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Grantha/regex.mjs';

import GreekCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Greek/code-points.mjs';
import GreekSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Greek/symbols.mjs';
import GreekRegex from '@unicode/unicode-8.0.0/Script_Extensions/Greek/regex.mjs';

import GujaratiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Gujarati/code-points.mjs';
import GujaratiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Gujarati/symbols.mjs';
import GujaratiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Gujarati/regex.mjs';

import GurmukhiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Gurmukhi/code-points.mjs';
import GurmukhiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Gurmukhi/symbols.mjs';
import GurmukhiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Gurmukhi/regex.mjs';

import HanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Han/code-points.mjs';
import HanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Han/symbols.mjs';
import HanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Han/regex.mjs';

import HangulCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Hangul/code-points.mjs';
import HangulSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Hangul/symbols.mjs';
import HangulRegex from '@unicode/unicode-8.0.0/Script_Extensions/Hangul/regex.mjs';

import HanunooCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Hanunoo/code-points.mjs';
import HanunooSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Hanunoo/symbols.mjs';
import HanunooRegex from '@unicode/unicode-8.0.0/Script_Extensions/Hanunoo/regex.mjs';

import HatranCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Hatran/code-points.mjs';
import HatranSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Hatran/symbols.mjs';
import HatranRegex from '@unicode/unicode-8.0.0/Script_Extensions/Hatran/regex.mjs';

import HebrewCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Hebrew/code-points.mjs';
import HebrewSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Hebrew/symbols.mjs';
import HebrewRegex from '@unicode/unicode-8.0.0/Script_Extensions/Hebrew/regex.mjs';

import HiraganaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Hiragana/code-points.mjs';
import HiraganaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Hiragana/symbols.mjs';
import HiraganaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Hiragana/regex.mjs';

import Imperial_AramaicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Imperial_Aramaic/code-points.mjs';
import Imperial_AramaicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Imperial_Aramaic/symbols.mjs';
import Imperial_AramaicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Imperial_Aramaic/regex.mjs';

import InheritedCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Inherited/code-points.mjs';
import InheritedSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Inherited/symbols.mjs';
import InheritedRegex from '@unicode/unicode-8.0.0/Script_Extensions/Inherited/regex.mjs';

import Inscriptional_PahlaviCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Inscriptional_Pahlavi/code-points.mjs';
import Inscriptional_PahlaviSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Inscriptional_Pahlavi/symbols.mjs';
import Inscriptional_PahlaviRegex from '@unicode/unicode-8.0.0/Script_Extensions/Inscriptional_Pahlavi/regex.mjs';

import Inscriptional_ParthianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Inscriptional_Parthian/code-points.mjs';
import Inscriptional_ParthianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Inscriptional_Parthian/symbols.mjs';
import Inscriptional_ParthianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Inscriptional_Parthian/regex.mjs';

import JavaneseCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Javanese/code-points.mjs';
import JavaneseSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Javanese/symbols.mjs';
import JavaneseRegex from '@unicode/unicode-8.0.0/Script_Extensions/Javanese/regex.mjs';

import KaithiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Kaithi/code-points.mjs';
import KaithiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Kaithi/symbols.mjs';
import KaithiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Kaithi/regex.mjs';

import KannadaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Kannada/code-points.mjs';
import KannadaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Kannada/symbols.mjs';
import KannadaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Kannada/regex.mjs';

import KatakanaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Katakana/code-points.mjs';
import KatakanaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Katakana/symbols.mjs';
import KatakanaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Katakana/regex.mjs';

import Kayah_LiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Kayah_Li/code-points.mjs';
import Kayah_LiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Kayah_Li/symbols.mjs';
import Kayah_LiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Kayah_Li/regex.mjs';

import KharoshthiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Kharoshthi/code-points.mjs';
import KharoshthiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Kharoshthi/symbols.mjs';
import KharoshthiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Kharoshthi/regex.mjs';

import KhmerCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Khmer/code-points.mjs';
import KhmerSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Khmer/symbols.mjs';
import KhmerRegex from '@unicode/unicode-8.0.0/Script_Extensions/Khmer/regex.mjs';

import KhojkiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Khojki/code-points.mjs';
import KhojkiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Khojki/symbols.mjs';
import KhojkiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Khojki/regex.mjs';

import KhudawadiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Khudawadi/code-points.mjs';
import KhudawadiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Khudawadi/symbols.mjs';
import KhudawadiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Khudawadi/regex.mjs';

import LaoCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Lao/code-points.mjs';
import LaoSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Lao/symbols.mjs';
import LaoRegex from '@unicode/unicode-8.0.0/Script_Extensions/Lao/regex.mjs';

import LatinCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Latin/code-points.mjs';
import LatinSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Latin/symbols.mjs';
import LatinRegex from '@unicode/unicode-8.0.0/Script_Extensions/Latin/regex.mjs';

import LepchaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Lepcha/code-points.mjs';
import LepchaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Lepcha/symbols.mjs';
import LepchaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Lepcha/regex.mjs';

import LimbuCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Limbu/code-points.mjs';
import LimbuSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Limbu/symbols.mjs';
import LimbuRegex from '@unicode/unicode-8.0.0/Script_Extensions/Limbu/regex.mjs';

import Linear_ACodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Linear_A/code-points.mjs';
import Linear_ASymbols from '@unicode/unicode-8.0.0/Script_Extensions/Linear_A/symbols.mjs';
import Linear_ARegex from '@unicode/unicode-8.0.0/Script_Extensions/Linear_A/regex.mjs';

import Linear_BCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Linear_B/code-points.mjs';
import Linear_BSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Linear_B/symbols.mjs';
import Linear_BRegex from '@unicode/unicode-8.0.0/Script_Extensions/Linear_B/regex.mjs';

import LisuCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Lisu/code-points.mjs';
import LisuSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Lisu/symbols.mjs';
import LisuRegex from '@unicode/unicode-8.0.0/Script_Extensions/Lisu/regex.mjs';

import LycianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Lycian/code-points.mjs';
import LycianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Lycian/symbols.mjs';
import LycianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Lycian/regex.mjs';

import LydianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Lydian/code-points.mjs';
import LydianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Lydian/symbols.mjs';
import LydianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Lydian/regex.mjs';

import MahajaniCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Mahajani/code-points.mjs';
import MahajaniSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Mahajani/symbols.mjs';
import MahajaniRegex from '@unicode/unicode-8.0.0/Script_Extensions/Mahajani/regex.mjs';

import MalayalamCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Malayalam/code-points.mjs';
import MalayalamSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Malayalam/symbols.mjs';
import MalayalamRegex from '@unicode/unicode-8.0.0/Script_Extensions/Malayalam/regex.mjs';

import MandaicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Mandaic/code-points.mjs';
import MandaicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Mandaic/symbols.mjs';
import MandaicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Mandaic/regex.mjs';

import ManichaeanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Manichaean/code-points.mjs';
import ManichaeanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Manichaean/symbols.mjs';
import ManichaeanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Manichaean/regex.mjs';

import Meetei_MayekCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Meetei_Mayek/code-points.mjs';
import Meetei_MayekSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Meetei_Mayek/symbols.mjs';
import Meetei_MayekRegex from '@unicode/unicode-8.0.0/Script_Extensions/Meetei_Mayek/regex.mjs';

import Mende_KikakuiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Mende_Kikakui/code-points.mjs';
import Mende_KikakuiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Mende_Kikakui/symbols.mjs';
import Mende_KikakuiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Mende_Kikakui/regex.mjs';

import Meroitic_CursiveCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Meroitic_Cursive/code-points.mjs';
import Meroitic_CursiveSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Meroitic_Cursive/symbols.mjs';
import Meroitic_CursiveRegex from '@unicode/unicode-8.0.0/Script_Extensions/Meroitic_Cursive/regex.mjs';

import Meroitic_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Meroitic_Hieroglyphs/code-points.mjs';
import Meroitic_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Meroitic_Hieroglyphs/symbols.mjs';
import Meroitic_HieroglyphsRegex from '@unicode/unicode-8.0.0/Script_Extensions/Meroitic_Hieroglyphs/regex.mjs';

import MiaoCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Miao/code-points.mjs';
import MiaoSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Miao/symbols.mjs';
import MiaoRegex from '@unicode/unicode-8.0.0/Script_Extensions/Miao/regex.mjs';

import ModiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Modi/code-points.mjs';
import ModiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Modi/symbols.mjs';
import ModiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Modi/regex.mjs';

import MongolianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Mongolian/code-points.mjs';
import MongolianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Mongolian/symbols.mjs';
import MongolianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Mongolian/regex.mjs';

import MroCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Mro/code-points.mjs';
import MroSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Mro/symbols.mjs';
import MroRegex from '@unicode/unicode-8.0.0/Script_Extensions/Mro/regex.mjs';

import MultaniCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Multani/code-points.mjs';
import MultaniSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Multani/symbols.mjs';
import MultaniRegex from '@unicode/unicode-8.0.0/Script_Extensions/Multani/regex.mjs';

import MyanmarCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Myanmar/code-points.mjs';
import MyanmarSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Myanmar/symbols.mjs';
import MyanmarRegex from '@unicode/unicode-8.0.0/Script_Extensions/Myanmar/regex.mjs';

import NabataeanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Nabataean/code-points.mjs';
import NabataeanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Nabataean/symbols.mjs';
import NabataeanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Nabataean/regex.mjs';

import New_Tai_LueCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/New_Tai_Lue/code-points.mjs';
import New_Tai_LueSymbols from '@unicode/unicode-8.0.0/Script_Extensions/New_Tai_Lue/symbols.mjs';
import New_Tai_LueRegex from '@unicode/unicode-8.0.0/Script_Extensions/New_Tai_Lue/regex.mjs';

import NkoCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Nko/code-points.mjs';
import NkoSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Nko/symbols.mjs';
import NkoRegex from '@unicode/unicode-8.0.0/Script_Extensions/Nko/regex.mjs';

import OghamCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Ogham/code-points.mjs';
import OghamSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Ogham/symbols.mjs';
import OghamRegex from '@unicode/unicode-8.0.0/Script_Extensions/Ogham/regex.mjs';

import Ol_ChikiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Ol_Chiki/code-points.mjs';
import Ol_ChikiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Ol_Chiki/symbols.mjs';
import Ol_ChikiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Ol_Chiki/regex.mjs';

import Old_HungarianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_Hungarian/code-points.mjs';
import Old_HungarianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_Hungarian/symbols.mjs';
import Old_HungarianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_Hungarian/regex.mjs';

import Old_ItalicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_Italic/code-points.mjs';
import Old_ItalicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_Italic/symbols.mjs';
import Old_ItalicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_Italic/regex.mjs';

import Old_North_ArabianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_North_Arabian/code-points.mjs';
import Old_North_ArabianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_North_Arabian/symbols.mjs';
import Old_North_ArabianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_North_Arabian/regex.mjs';

import Old_PermicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_Permic/code-points.mjs';
import Old_PermicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_Permic/symbols.mjs';
import Old_PermicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_Permic/regex.mjs';

import Old_PersianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_Persian/code-points.mjs';
import Old_PersianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_Persian/symbols.mjs';
import Old_PersianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_Persian/regex.mjs';

import Old_South_ArabianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_South_Arabian/code-points.mjs';
import Old_South_ArabianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_South_Arabian/symbols.mjs';
import Old_South_ArabianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_South_Arabian/regex.mjs';

import Old_TurkicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Old_Turkic/code-points.mjs';
import Old_TurkicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Old_Turkic/symbols.mjs';
import Old_TurkicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Old_Turkic/regex.mjs';

import OriyaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Oriya/code-points.mjs';
import OriyaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Oriya/symbols.mjs';
import OriyaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Oriya/regex.mjs';

import OsmanyaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Osmanya/code-points.mjs';
import OsmanyaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Osmanya/symbols.mjs';
import OsmanyaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Osmanya/regex.mjs';

import Pahawh_HmongCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Pahawh_Hmong/code-points.mjs';
import Pahawh_HmongSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Pahawh_Hmong/symbols.mjs';
import Pahawh_HmongRegex from '@unicode/unicode-8.0.0/Script_Extensions/Pahawh_Hmong/regex.mjs';

import PalmyreneCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Palmyrene/code-points.mjs';
import PalmyreneSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Palmyrene/symbols.mjs';
import PalmyreneRegex from '@unicode/unicode-8.0.0/Script_Extensions/Palmyrene/regex.mjs';

import Pau_Cin_HauCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Pau_Cin_Hau/code-points.mjs';
import Pau_Cin_HauSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Pau_Cin_Hau/symbols.mjs';
import Pau_Cin_HauRegex from '@unicode/unicode-8.0.0/Script_Extensions/Pau_Cin_Hau/regex.mjs';

import Phags_PaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Phags_Pa/code-points.mjs';
import Phags_PaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Phags_Pa/symbols.mjs';
import Phags_PaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Phags_Pa/regex.mjs';

import PhoenicianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Phoenician/code-points.mjs';
import PhoenicianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Phoenician/symbols.mjs';
import PhoenicianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Phoenician/regex.mjs';

import Psalter_PahlaviCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Psalter_Pahlavi/code-points.mjs';
import Psalter_PahlaviSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Psalter_Pahlavi/symbols.mjs';
import Psalter_PahlaviRegex from '@unicode/unicode-8.0.0/Script_Extensions/Psalter_Pahlavi/regex.mjs';

import RejangCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Rejang/code-points.mjs';
import RejangSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Rejang/symbols.mjs';
import RejangRegex from '@unicode/unicode-8.0.0/Script_Extensions/Rejang/regex.mjs';

import RunicCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Runic/code-points.mjs';
import RunicSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Runic/symbols.mjs';
import RunicRegex from '@unicode/unicode-8.0.0/Script_Extensions/Runic/regex.mjs';

import SamaritanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Samaritan/code-points.mjs';
import SamaritanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Samaritan/symbols.mjs';
import SamaritanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Samaritan/regex.mjs';

import SaurashtraCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Saurashtra/code-points.mjs';
import SaurashtraSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Saurashtra/symbols.mjs';
import SaurashtraRegex from '@unicode/unicode-8.0.0/Script_Extensions/Saurashtra/regex.mjs';

import SharadaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Sharada/code-points.mjs';
import SharadaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Sharada/symbols.mjs';
import SharadaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Sharada/regex.mjs';

import ShavianCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Shavian/code-points.mjs';
import ShavianSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Shavian/symbols.mjs';
import ShavianRegex from '@unicode/unicode-8.0.0/Script_Extensions/Shavian/regex.mjs';

import SiddhamCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Siddham/code-points.mjs';
import SiddhamSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Siddham/symbols.mjs';
import SiddhamRegex from '@unicode/unicode-8.0.0/Script_Extensions/Siddham/regex.mjs';

import SignWritingCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/SignWriting/code-points.mjs';
import SignWritingSymbols from '@unicode/unicode-8.0.0/Script_Extensions/SignWriting/symbols.mjs';
import SignWritingRegex from '@unicode/unicode-8.0.0/Script_Extensions/SignWriting/regex.mjs';

import SinhalaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Sinhala/code-points.mjs';
import SinhalaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Sinhala/symbols.mjs';
import SinhalaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Sinhala/regex.mjs';

import Sora_SompengCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Sora_Sompeng/code-points.mjs';
import Sora_SompengSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Sora_Sompeng/symbols.mjs';
import Sora_SompengRegex from '@unicode/unicode-8.0.0/Script_Extensions/Sora_Sompeng/regex.mjs';

import SundaneseCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Sundanese/code-points.mjs';
import SundaneseSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Sundanese/symbols.mjs';
import SundaneseRegex from '@unicode/unicode-8.0.0/Script_Extensions/Sundanese/regex.mjs';

import Syloti_NagriCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Syloti_Nagri/code-points.mjs';
import Syloti_NagriSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Syloti_Nagri/symbols.mjs';
import Syloti_NagriRegex from '@unicode/unicode-8.0.0/Script_Extensions/Syloti_Nagri/regex.mjs';

import SyriacCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Syriac/code-points.mjs';
import SyriacSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Syriac/symbols.mjs';
import SyriacRegex from '@unicode/unicode-8.0.0/Script_Extensions/Syriac/regex.mjs';

import TagalogCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tagalog/code-points.mjs';
import TagalogSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tagalog/symbols.mjs';
import TagalogRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tagalog/regex.mjs';

import TagbanwaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tagbanwa/code-points.mjs';
import TagbanwaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tagbanwa/symbols.mjs';
import TagbanwaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tagbanwa/regex.mjs';

import Tai_LeCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Le/code-points.mjs';
import Tai_LeSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Le/symbols.mjs';
import Tai_LeRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Le/regex.mjs';

import Tai_ThamCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Tham/code-points.mjs';
import Tai_ThamSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Tham/symbols.mjs';
import Tai_ThamRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Tham/regex.mjs';

import Tai_VietCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Viet/code-points.mjs';
import Tai_VietSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Viet/symbols.mjs';
import Tai_VietRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tai_Viet/regex.mjs';

import TakriCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Takri/code-points.mjs';
import TakriSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Takri/symbols.mjs';
import TakriRegex from '@unicode/unicode-8.0.0/Script_Extensions/Takri/regex.mjs';

import TamilCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tamil/code-points.mjs';
import TamilSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tamil/symbols.mjs';
import TamilRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tamil/regex.mjs';

import TeluguCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Telugu/code-points.mjs';
import TeluguSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Telugu/symbols.mjs';
import TeluguRegex from '@unicode/unicode-8.0.0/Script_Extensions/Telugu/regex.mjs';

import ThaanaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Thaana/code-points.mjs';
import ThaanaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Thaana/symbols.mjs';
import ThaanaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Thaana/regex.mjs';

import ThaiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Thai/code-points.mjs';
import ThaiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Thai/symbols.mjs';
import ThaiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Thai/regex.mjs';

import TibetanCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tibetan/code-points.mjs';
import TibetanSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tibetan/symbols.mjs';
import TibetanRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tibetan/regex.mjs';

import TifinaghCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tifinagh/code-points.mjs';
import TifinaghSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tifinagh/symbols.mjs';
import TifinaghRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tifinagh/regex.mjs';

import TirhutaCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Tirhuta/code-points.mjs';
import TirhutaSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Tirhuta/symbols.mjs';
import TirhutaRegex from '@unicode/unicode-8.0.0/Script_Extensions/Tirhuta/regex.mjs';

import UgariticCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Ugaritic/code-points.mjs';
import UgariticSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Ugaritic/symbols.mjs';
import UgariticRegex from '@unicode/unicode-8.0.0/Script_Extensions/Ugaritic/regex.mjs';

import UnknownCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Unknown/code-points.mjs';
import UnknownSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Unknown/symbols.mjs';
import UnknownRegex from '@unicode/unicode-8.0.0/Script_Extensions/Unknown/regex.mjs';

import VaiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Vai/code-points.mjs';
import VaiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Vai/symbols.mjs';
import VaiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Vai/regex.mjs';

import Warang_CitiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Warang_Citi/code-points.mjs';
import Warang_CitiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Warang_Citi/symbols.mjs';
import Warang_CitiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Warang_Citi/regex.mjs';

import YiCodePoints from '@unicode/unicode-8.0.0/Script_Extensions/Yi/code-points.mjs';
import YiSymbols from '@unicode/unicode-8.0.0/Script_Extensions/Yi/symbols.mjs';
import YiRegex from '@unicode/unicode-8.0.0/Script_Extensions/Yi/regex.mjs';

// `Case_Folding`:

import CCodePoints from '@unicode/unicode-8.0.0/Case_Folding/C/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import CSymbols from '@unicode/unicode-8.0.0/Case_Folding/C/symbols.mjs'; // Lookup map from symbol to symbol(s).

import FCodePoints from '@unicode/unicode-8.0.0/Case_Folding/F/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import FSymbols from '@unicode/unicode-8.0.0/Case_Folding/F/symbols.mjs'; // Lookup map from symbol to symbol(s).

import SCodePoints from '@unicode/unicode-8.0.0/Case_Folding/S/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import SSymbols from '@unicode/unicode-8.0.0/Case_Folding/S/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TCodePoints from '@unicode/unicode-8.0.0/Case_Folding/T/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TSymbols from '@unicode/unicode-8.0.0/Case_Folding/T/symbols.mjs'; // Lookup map from symbol to symbol(s).

// `Block`:

import Aegean_NumbersCodePoints from '@unicode/unicode-8.0.0/Block/Aegean_Numbers/code-points.mjs';
import Aegean_NumbersSymbols from '@unicode/unicode-8.0.0/Block/Aegean_Numbers/symbols.mjs';
import Aegean_NumbersRegex from '@unicode/unicode-8.0.0/Block/Aegean_Numbers/regex.mjs';

import AhomCodePoints from '@unicode/unicode-8.0.0/Block/Ahom/code-points.mjs';
import AhomSymbols from '@unicode/unicode-8.0.0/Block/Ahom/symbols.mjs';
import AhomRegex from '@unicode/unicode-8.0.0/Block/Ahom/regex.mjs';

import Alchemical_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Alchemical_Symbols/code-points.mjs';
import Alchemical_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Alchemical_Symbols/symbols.mjs';
import Alchemical_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Alchemical_Symbols/regex.mjs';

import Alphabetic_Presentation_FormsCodePoints from '@unicode/unicode-8.0.0/Block/Alphabetic_Presentation_Forms/code-points.mjs';
import Alphabetic_Presentation_FormsSymbols from '@unicode/unicode-8.0.0/Block/Alphabetic_Presentation_Forms/symbols.mjs';
import Alphabetic_Presentation_FormsRegex from '@unicode/unicode-8.0.0/Block/Alphabetic_Presentation_Forms/regex.mjs';

import Anatolian_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Block/Anatolian_Hieroglyphs/code-points.mjs';
import Anatolian_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Block/Anatolian_Hieroglyphs/symbols.mjs';
import Anatolian_HieroglyphsRegex from '@unicode/unicode-8.0.0/Block/Anatolian_Hieroglyphs/regex.mjs';

import Ancient_Greek_Musical_NotationCodePoints from '@unicode/unicode-8.0.0/Block/Ancient_Greek_Musical_Notation/code-points.mjs';
import Ancient_Greek_Musical_NotationSymbols from '@unicode/unicode-8.0.0/Block/Ancient_Greek_Musical_Notation/symbols.mjs';
import Ancient_Greek_Musical_NotationRegex from '@unicode/unicode-8.0.0/Block/Ancient_Greek_Musical_Notation/regex.mjs';

import Ancient_Greek_NumbersCodePoints from '@unicode/unicode-8.0.0/Block/Ancient_Greek_Numbers/code-points.mjs';
import Ancient_Greek_NumbersSymbols from '@unicode/unicode-8.0.0/Block/Ancient_Greek_Numbers/symbols.mjs';
import Ancient_Greek_NumbersRegex from '@unicode/unicode-8.0.0/Block/Ancient_Greek_Numbers/regex.mjs';

import Ancient_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Ancient_Symbols/code-points.mjs';
import Ancient_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Ancient_Symbols/symbols.mjs';
import Ancient_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Ancient_Symbols/regex.mjs';

import ArabicCodePoints from '@unicode/unicode-8.0.0/Block/Arabic/code-points.mjs';
import ArabicSymbols from '@unicode/unicode-8.0.0/Block/Arabic/symbols.mjs';
import ArabicRegex from '@unicode/unicode-8.0.0/Block/Arabic/regex.mjs';

import Arabic_Extended_ACodePoints from '@unicode/unicode-8.0.0/Block/Arabic_Extended_A/code-points.mjs';
import Arabic_Extended_ASymbols from '@unicode/unicode-8.0.0/Block/Arabic_Extended_A/symbols.mjs';
import Arabic_Extended_ARegex from '@unicode/unicode-8.0.0/Block/Arabic_Extended_A/regex.mjs';

import Arabic_Mathematical_Alphabetic_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Arabic_Mathematical_Alphabetic_Symbols/code-points.mjs';
import Arabic_Mathematical_Alphabetic_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Arabic_Mathematical_Alphabetic_Symbols/symbols.mjs';
import Arabic_Mathematical_Alphabetic_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Arabic_Mathematical_Alphabetic_Symbols/regex.mjs';

import Arabic_Presentation_Forms_ACodePoints from '@unicode/unicode-8.0.0/Block/Arabic_Presentation_Forms_A/code-points.mjs';
import Arabic_Presentation_Forms_ASymbols from '@unicode/unicode-8.0.0/Block/Arabic_Presentation_Forms_A/symbols.mjs';
import Arabic_Presentation_Forms_ARegex from '@unicode/unicode-8.0.0/Block/Arabic_Presentation_Forms_A/regex.mjs';

import Arabic_Presentation_Forms_BCodePoints from '@unicode/unicode-8.0.0/Block/Arabic_Presentation_Forms_B/code-points.mjs';
import Arabic_Presentation_Forms_BSymbols from '@unicode/unicode-8.0.0/Block/Arabic_Presentation_Forms_B/symbols.mjs';
import Arabic_Presentation_Forms_BRegex from '@unicode/unicode-8.0.0/Block/Arabic_Presentation_Forms_B/regex.mjs';

import Arabic_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Arabic_Supplement/code-points.mjs';
import Arabic_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Arabic_Supplement/symbols.mjs';
import Arabic_SupplementRegex from '@unicode/unicode-8.0.0/Block/Arabic_Supplement/regex.mjs';

import ArmenianCodePoints from '@unicode/unicode-8.0.0/Block/Armenian/code-points.mjs';
import ArmenianSymbols from '@unicode/unicode-8.0.0/Block/Armenian/symbols.mjs';
import ArmenianRegex from '@unicode/unicode-8.0.0/Block/Armenian/regex.mjs';

import ArrowsCodePoints from '@unicode/unicode-8.0.0/Block/Arrows/code-points.mjs';
import ArrowsSymbols from '@unicode/unicode-8.0.0/Block/Arrows/symbols.mjs';
import ArrowsRegex from '@unicode/unicode-8.0.0/Block/Arrows/regex.mjs';

import AvestanCodePoints from '@unicode/unicode-8.0.0/Block/Avestan/code-points.mjs';
import AvestanSymbols from '@unicode/unicode-8.0.0/Block/Avestan/symbols.mjs';
import AvestanRegex from '@unicode/unicode-8.0.0/Block/Avestan/regex.mjs';

import BalineseCodePoints from '@unicode/unicode-8.0.0/Block/Balinese/code-points.mjs';
import BalineseSymbols from '@unicode/unicode-8.0.0/Block/Balinese/symbols.mjs';
import BalineseRegex from '@unicode/unicode-8.0.0/Block/Balinese/regex.mjs';

import BamumCodePoints from '@unicode/unicode-8.0.0/Block/Bamum/code-points.mjs';
import BamumSymbols from '@unicode/unicode-8.0.0/Block/Bamum/symbols.mjs';
import BamumRegex from '@unicode/unicode-8.0.0/Block/Bamum/regex.mjs';

import Bamum_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Bamum_Supplement/code-points.mjs';
import Bamum_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Bamum_Supplement/symbols.mjs';
import Bamum_SupplementRegex from '@unicode/unicode-8.0.0/Block/Bamum_Supplement/regex.mjs';

import Basic_LatinCodePoints from '@unicode/unicode-8.0.0/Block/Basic_Latin/code-points.mjs';
import Basic_LatinSymbols from '@unicode/unicode-8.0.0/Block/Basic_Latin/symbols.mjs';
import Basic_LatinRegex from '@unicode/unicode-8.0.0/Block/Basic_Latin/regex.mjs';

import Bassa_VahCodePoints from '@unicode/unicode-8.0.0/Block/Bassa_Vah/code-points.mjs';
import Bassa_VahSymbols from '@unicode/unicode-8.0.0/Block/Bassa_Vah/symbols.mjs';
import Bassa_VahRegex from '@unicode/unicode-8.0.0/Block/Bassa_Vah/regex.mjs';

import BatakCodePoints from '@unicode/unicode-8.0.0/Block/Batak/code-points.mjs';
import BatakSymbols from '@unicode/unicode-8.0.0/Block/Batak/symbols.mjs';
import BatakRegex from '@unicode/unicode-8.0.0/Block/Batak/regex.mjs';

import BengaliCodePoints from '@unicode/unicode-8.0.0/Block/Bengali/code-points.mjs';
import BengaliSymbols from '@unicode/unicode-8.0.0/Block/Bengali/symbols.mjs';
import BengaliRegex from '@unicode/unicode-8.0.0/Block/Bengali/regex.mjs';

import Block_ElementsCodePoints from '@unicode/unicode-8.0.0/Block/Block_Elements/code-points.mjs';
import Block_ElementsSymbols from '@unicode/unicode-8.0.0/Block/Block_Elements/symbols.mjs';
import Block_ElementsRegex from '@unicode/unicode-8.0.0/Block/Block_Elements/regex.mjs';

import BopomofoCodePoints from '@unicode/unicode-8.0.0/Block/Bopomofo/code-points.mjs';
import BopomofoSymbols from '@unicode/unicode-8.0.0/Block/Bopomofo/symbols.mjs';
import BopomofoRegex from '@unicode/unicode-8.0.0/Block/Bopomofo/regex.mjs';

import Bopomofo_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Bopomofo_Extended/code-points.mjs';
import Bopomofo_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Bopomofo_Extended/symbols.mjs';
import Bopomofo_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Bopomofo_Extended/regex.mjs';

import Box_DrawingCodePoints from '@unicode/unicode-8.0.0/Block/Box_Drawing/code-points.mjs';
import Box_DrawingSymbols from '@unicode/unicode-8.0.0/Block/Box_Drawing/symbols.mjs';
import Box_DrawingRegex from '@unicode/unicode-8.0.0/Block/Box_Drawing/regex.mjs';

import BrahmiCodePoints from '@unicode/unicode-8.0.0/Block/Brahmi/code-points.mjs';
import BrahmiSymbols from '@unicode/unicode-8.0.0/Block/Brahmi/symbols.mjs';
import BrahmiRegex from '@unicode/unicode-8.0.0/Block/Brahmi/regex.mjs';

import Braille_PatternsCodePoints from '@unicode/unicode-8.0.0/Block/Braille_Patterns/code-points.mjs';
import Braille_PatternsSymbols from '@unicode/unicode-8.0.0/Block/Braille_Patterns/symbols.mjs';
import Braille_PatternsRegex from '@unicode/unicode-8.0.0/Block/Braille_Patterns/regex.mjs';

import BugineseCodePoints from '@unicode/unicode-8.0.0/Block/Buginese/code-points.mjs';
import BugineseSymbols from '@unicode/unicode-8.0.0/Block/Buginese/symbols.mjs';
import BugineseRegex from '@unicode/unicode-8.0.0/Block/Buginese/regex.mjs';

import BuhidCodePoints from '@unicode/unicode-8.0.0/Block/Buhid/code-points.mjs';
import BuhidSymbols from '@unicode/unicode-8.0.0/Block/Buhid/symbols.mjs';
import BuhidRegex from '@unicode/unicode-8.0.0/Block/Buhid/regex.mjs';

import Byzantine_Musical_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Byzantine_Musical_Symbols/code-points.mjs';
import Byzantine_Musical_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Byzantine_Musical_Symbols/symbols.mjs';
import Byzantine_Musical_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Byzantine_Musical_Symbols/regex.mjs';

import CJK_CompatibilityCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Compatibility/code-points.mjs';
import CJK_CompatibilitySymbols from '@unicode/unicode-8.0.0/Block/CJK_Compatibility/symbols.mjs';
import CJK_CompatibilityRegex from '@unicode/unicode-8.0.0/Block/CJK_Compatibility/regex.mjs';

import CJK_Compatibility_FormsCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Forms/code-points.mjs';
import CJK_Compatibility_FormsSymbols from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Forms/symbols.mjs';
import CJK_Compatibility_FormsRegex from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Forms/regex.mjs';

import CJK_Compatibility_IdeographsCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Ideographs/code-points.mjs';
import CJK_Compatibility_IdeographsSymbols from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Ideographs/symbols.mjs';
import CJK_Compatibility_IdeographsRegex from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Ideographs/regex.mjs';

import CJK_Compatibility_Ideographs_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Ideographs_Supplement/code-points.mjs';
import CJK_Compatibility_Ideographs_SupplementSymbols from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Ideographs_Supplement/symbols.mjs';
import CJK_Compatibility_Ideographs_SupplementRegex from '@unicode/unicode-8.0.0/Block/CJK_Compatibility_Ideographs_Supplement/regex.mjs';

import CJK_Radicals_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Radicals_Supplement/code-points.mjs';
import CJK_Radicals_SupplementSymbols from '@unicode/unicode-8.0.0/Block/CJK_Radicals_Supplement/symbols.mjs';
import CJK_Radicals_SupplementRegex from '@unicode/unicode-8.0.0/Block/CJK_Radicals_Supplement/regex.mjs';

import CJK_StrokesCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Strokes/code-points.mjs';
import CJK_StrokesSymbols from '@unicode/unicode-8.0.0/Block/CJK_Strokes/symbols.mjs';
import CJK_StrokesRegex from '@unicode/unicode-8.0.0/Block/CJK_Strokes/regex.mjs';

import CJK_Symbols_And_PunctuationCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Symbols_And_Punctuation/code-points.mjs';
import CJK_Symbols_And_PunctuationSymbols from '@unicode/unicode-8.0.0/Block/CJK_Symbols_And_Punctuation/symbols.mjs';
import CJK_Symbols_And_PunctuationRegex from '@unicode/unicode-8.0.0/Block/CJK_Symbols_And_Punctuation/regex.mjs';

import CJK_Unified_IdeographsCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs/code-points.mjs';
import CJK_Unified_IdeographsSymbols from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs/symbols.mjs';
import CJK_Unified_IdeographsRegex from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs/regex.mjs';

import CJK_Unified_Ideographs_Extension_ACodePoints from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_A/code-points.mjs';
import CJK_Unified_Ideographs_Extension_ASymbols from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_A/symbols.mjs';
import CJK_Unified_Ideographs_Extension_ARegex from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_A/regex.mjs';

import CJK_Unified_Ideographs_Extension_BCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_B/code-points.mjs';
import CJK_Unified_Ideographs_Extension_BSymbols from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_B/symbols.mjs';
import CJK_Unified_Ideographs_Extension_BRegex from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_B/regex.mjs';

import CJK_Unified_Ideographs_Extension_CCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_C/code-points.mjs';
import CJK_Unified_Ideographs_Extension_CSymbols from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_C/symbols.mjs';
import CJK_Unified_Ideographs_Extension_CRegex from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_C/regex.mjs';

import CJK_Unified_Ideographs_Extension_DCodePoints from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_D/code-points.mjs';
import CJK_Unified_Ideographs_Extension_DSymbols from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_D/symbols.mjs';
import CJK_Unified_Ideographs_Extension_DRegex from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_D/regex.mjs';

import CJK_Unified_Ideographs_Extension_ECodePoints from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_E/code-points.mjs';
import CJK_Unified_Ideographs_Extension_ESymbols from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_E/symbols.mjs';
import CJK_Unified_Ideographs_Extension_ERegex from '@unicode/unicode-8.0.0/Block/CJK_Unified_Ideographs_Extension_E/regex.mjs';

import CarianCodePoints from '@unicode/unicode-8.0.0/Block/Carian/code-points.mjs';
import CarianSymbols from '@unicode/unicode-8.0.0/Block/Carian/symbols.mjs';
import CarianRegex from '@unicode/unicode-8.0.0/Block/Carian/regex.mjs';

import Caucasian_AlbanianCodePoints from '@unicode/unicode-8.0.0/Block/Caucasian_Albanian/code-points.mjs';
import Caucasian_AlbanianSymbols from '@unicode/unicode-8.0.0/Block/Caucasian_Albanian/symbols.mjs';
import Caucasian_AlbanianRegex from '@unicode/unicode-8.0.0/Block/Caucasian_Albanian/regex.mjs';

import ChakmaCodePoints from '@unicode/unicode-8.0.0/Block/Chakma/code-points.mjs';
import ChakmaSymbols from '@unicode/unicode-8.0.0/Block/Chakma/symbols.mjs';
import ChakmaRegex from '@unicode/unicode-8.0.0/Block/Chakma/regex.mjs';

import ChamCodePoints from '@unicode/unicode-8.0.0/Block/Cham/code-points.mjs';
import ChamSymbols from '@unicode/unicode-8.0.0/Block/Cham/symbols.mjs';
import ChamRegex from '@unicode/unicode-8.0.0/Block/Cham/regex.mjs';

import CherokeeCodePoints from '@unicode/unicode-8.0.0/Block/Cherokee/code-points.mjs';
import CherokeeSymbols from '@unicode/unicode-8.0.0/Block/Cherokee/symbols.mjs';
import CherokeeRegex from '@unicode/unicode-8.0.0/Block/Cherokee/regex.mjs';

import Cherokee_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Cherokee_Supplement/code-points.mjs';
import Cherokee_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Cherokee_Supplement/symbols.mjs';
import Cherokee_SupplementRegex from '@unicode/unicode-8.0.0/Block/Cherokee_Supplement/regex.mjs';

import Combining_Diacritical_MarksCodePoints from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks/code-points.mjs';
import Combining_Diacritical_MarksSymbols from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks/symbols.mjs';
import Combining_Diacritical_MarksRegex from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks/regex.mjs';

import Combining_Diacritical_Marks_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_Extended/code-points.mjs';
import Combining_Diacritical_Marks_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_Extended/symbols.mjs';
import Combining_Diacritical_Marks_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_Extended/regex.mjs';

import Combining_Diacritical_Marks_For_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_For_Symbols/code-points.mjs';
import Combining_Diacritical_Marks_For_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_For_Symbols/symbols.mjs';
import Combining_Diacritical_Marks_For_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_For_Symbols/regex.mjs';

import Combining_Diacritical_Marks_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_Supplement/code-points.mjs';
import Combining_Diacritical_Marks_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_Supplement/symbols.mjs';
import Combining_Diacritical_Marks_SupplementRegex from '@unicode/unicode-8.0.0/Block/Combining_Diacritical_Marks_Supplement/regex.mjs';

import Combining_Half_MarksCodePoints from '@unicode/unicode-8.0.0/Block/Combining_Half_Marks/code-points.mjs';
import Combining_Half_MarksSymbols from '@unicode/unicode-8.0.0/Block/Combining_Half_Marks/symbols.mjs';
import Combining_Half_MarksRegex from '@unicode/unicode-8.0.0/Block/Combining_Half_Marks/regex.mjs';

import Common_Indic_Number_FormsCodePoints from '@unicode/unicode-8.0.0/Block/Common_Indic_Number_Forms/code-points.mjs';
import Common_Indic_Number_FormsSymbols from '@unicode/unicode-8.0.0/Block/Common_Indic_Number_Forms/symbols.mjs';
import Common_Indic_Number_FormsRegex from '@unicode/unicode-8.0.0/Block/Common_Indic_Number_Forms/regex.mjs';

import Control_PicturesCodePoints from '@unicode/unicode-8.0.0/Block/Control_Pictures/code-points.mjs';
import Control_PicturesSymbols from '@unicode/unicode-8.0.0/Block/Control_Pictures/symbols.mjs';
import Control_PicturesRegex from '@unicode/unicode-8.0.0/Block/Control_Pictures/regex.mjs';

import CopticCodePoints from '@unicode/unicode-8.0.0/Block/Coptic/code-points.mjs';
import CopticSymbols from '@unicode/unicode-8.0.0/Block/Coptic/symbols.mjs';
import CopticRegex from '@unicode/unicode-8.0.0/Block/Coptic/regex.mjs';

import Coptic_Epact_NumbersCodePoints from '@unicode/unicode-8.0.0/Block/Coptic_Epact_Numbers/code-points.mjs';
import Coptic_Epact_NumbersSymbols from '@unicode/unicode-8.0.0/Block/Coptic_Epact_Numbers/symbols.mjs';
import Coptic_Epact_NumbersRegex from '@unicode/unicode-8.0.0/Block/Coptic_Epact_Numbers/regex.mjs';

import Counting_Rod_NumeralsCodePoints from '@unicode/unicode-8.0.0/Block/Counting_Rod_Numerals/code-points.mjs';
import Counting_Rod_NumeralsSymbols from '@unicode/unicode-8.0.0/Block/Counting_Rod_Numerals/symbols.mjs';
import Counting_Rod_NumeralsRegex from '@unicode/unicode-8.0.0/Block/Counting_Rod_Numerals/regex.mjs';

import CuneiformCodePoints from '@unicode/unicode-8.0.0/Block/Cuneiform/code-points.mjs';
import CuneiformSymbols from '@unicode/unicode-8.0.0/Block/Cuneiform/symbols.mjs';
import CuneiformRegex from '@unicode/unicode-8.0.0/Block/Cuneiform/regex.mjs';

import Cuneiform_Numbers_And_PunctuationCodePoints from '@unicode/unicode-8.0.0/Block/Cuneiform_Numbers_And_Punctuation/code-points.mjs';
import Cuneiform_Numbers_And_PunctuationSymbols from '@unicode/unicode-8.0.0/Block/Cuneiform_Numbers_And_Punctuation/symbols.mjs';
import Cuneiform_Numbers_And_PunctuationRegex from '@unicode/unicode-8.0.0/Block/Cuneiform_Numbers_And_Punctuation/regex.mjs';

import Currency_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Currency_Symbols/code-points.mjs';
import Currency_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Currency_Symbols/symbols.mjs';
import Currency_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Currency_Symbols/regex.mjs';

import Cypriot_SyllabaryCodePoints from '@unicode/unicode-8.0.0/Block/Cypriot_Syllabary/code-points.mjs';
import Cypriot_SyllabarySymbols from '@unicode/unicode-8.0.0/Block/Cypriot_Syllabary/symbols.mjs';
import Cypriot_SyllabaryRegex from '@unicode/unicode-8.0.0/Block/Cypriot_Syllabary/regex.mjs';

import CyrillicCodePoints from '@unicode/unicode-8.0.0/Block/Cyrillic/code-points.mjs';
import CyrillicSymbols from '@unicode/unicode-8.0.0/Block/Cyrillic/symbols.mjs';
import CyrillicRegex from '@unicode/unicode-8.0.0/Block/Cyrillic/regex.mjs';

import Cyrillic_Extended_ACodePoints from '@unicode/unicode-8.0.0/Block/Cyrillic_Extended_A/code-points.mjs';
import Cyrillic_Extended_ASymbols from '@unicode/unicode-8.0.0/Block/Cyrillic_Extended_A/symbols.mjs';
import Cyrillic_Extended_ARegex from '@unicode/unicode-8.0.0/Block/Cyrillic_Extended_A/regex.mjs';

import Cyrillic_Extended_BCodePoints from '@unicode/unicode-8.0.0/Block/Cyrillic_Extended_B/code-points.mjs';
import Cyrillic_Extended_BSymbols from '@unicode/unicode-8.0.0/Block/Cyrillic_Extended_B/symbols.mjs';
import Cyrillic_Extended_BRegex from '@unicode/unicode-8.0.0/Block/Cyrillic_Extended_B/regex.mjs';

import Cyrillic_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Cyrillic_Supplement/code-points.mjs';
import Cyrillic_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Cyrillic_Supplement/symbols.mjs';
import Cyrillic_SupplementRegex from '@unicode/unicode-8.0.0/Block/Cyrillic_Supplement/regex.mjs';

import DeseretCodePoints from '@unicode/unicode-8.0.0/Block/Deseret/code-points.mjs';
import DeseretSymbols from '@unicode/unicode-8.0.0/Block/Deseret/symbols.mjs';
import DeseretRegex from '@unicode/unicode-8.0.0/Block/Deseret/regex.mjs';

import DevanagariCodePoints from '@unicode/unicode-8.0.0/Block/Devanagari/code-points.mjs';
import DevanagariSymbols from '@unicode/unicode-8.0.0/Block/Devanagari/symbols.mjs';
import DevanagariRegex from '@unicode/unicode-8.0.0/Block/Devanagari/regex.mjs';

import Devanagari_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Devanagari_Extended/code-points.mjs';
import Devanagari_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Devanagari_Extended/symbols.mjs';
import Devanagari_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Devanagari_Extended/regex.mjs';

import DingbatsCodePoints from '@unicode/unicode-8.0.0/Block/Dingbats/code-points.mjs';
import DingbatsSymbols from '@unicode/unicode-8.0.0/Block/Dingbats/symbols.mjs';
import DingbatsRegex from '@unicode/unicode-8.0.0/Block/Dingbats/regex.mjs';

import Domino_TilesCodePoints from '@unicode/unicode-8.0.0/Block/Domino_Tiles/code-points.mjs';
import Domino_TilesSymbols from '@unicode/unicode-8.0.0/Block/Domino_Tiles/symbols.mjs';
import Domino_TilesRegex from '@unicode/unicode-8.0.0/Block/Domino_Tiles/regex.mjs';

import DuployanCodePoints from '@unicode/unicode-8.0.0/Block/Duployan/code-points.mjs';
import DuployanSymbols from '@unicode/unicode-8.0.0/Block/Duployan/symbols.mjs';
import DuployanRegex from '@unicode/unicode-8.0.0/Block/Duployan/regex.mjs';

import Early_Dynastic_CuneiformCodePoints from '@unicode/unicode-8.0.0/Block/Early_Dynastic_Cuneiform/code-points.mjs';
import Early_Dynastic_CuneiformSymbols from '@unicode/unicode-8.0.0/Block/Early_Dynastic_Cuneiform/symbols.mjs';
import Early_Dynastic_CuneiformRegex from '@unicode/unicode-8.0.0/Block/Early_Dynastic_Cuneiform/regex.mjs';

import Egyptian_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Block/Egyptian_Hieroglyphs/code-points.mjs';
import Egyptian_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Block/Egyptian_Hieroglyphs/symbols.mjs';
import Egyptian_HieroglyphsRegex from '@unicode/unicode-8.0.0/Block/Egyptian_Hieroglyphs/regex.mjs';

import ElbasanCodePoints from '@unicode/unicode-8.0.0/Block/Elbasan/code-points.mjs';
import ElbasanSymbols from '@unicode/unicode-8.0.0/Block/Elbasan/symbols.mjs';
import ElbasanRegex from '@unicode/unicode-8.0.0/Block/Elbasan/regex.mjs';

import EmoticonsCodePoints from '@unicode/unicode-8.0.0/Block/Emoticons/code-points.mjs';
import EmoticonsSymbols from '@unicode/unicode-8.0.0/Block/Emoticons/symbols.mjs';
import EmoticonsRegex from '@unicode/unicode-8.0.0/Block/Emoticons/regex.mjs';

import Enclosed_Alphanumeric_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Enclosed_Alphanumeric_Supplement/code-points.mjs';
import Enclosed_Alphanumeric_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Enclosed_Alphanumeric_Supplement/symbols.mjs';
import Enclosed_Alphanumeric_SupplementRegex from '@unicode/unicode-8.0.0/Block/Enclosed_Alphanumeric_Supplement/regex.mjs';

import Enclosed_AlphanumericsCodePoints from '@unicode/unicode-8.0.0/Block/Enclosed_Alphanumerics/code-points.mjs';
import Enclosed_AlphanumericsSymbols from '@unicode/unicode-8.0.0/Block/Enclosed_Alphanumerics/symbols.mjs';
import Enclosed_AlphanumericsRegex from '@unicode/unicode-8.0.0/Block/Enclosed_Alphanumerics/regex.mjs';

import Enclosed_CJK_Letters_And_MonthsCodePoints from '@unicode/unicode-8.0.0/Block/Enclosed_CJK_Letters_And_Months/code-points.mjs';
import Enclosed_CJK_Letters_And_MonthsSymbols from '@unicode/unicode-8.0.0/Block/Enclosed_CJK_Letters_And_Months/symbols.mjs';
import Enclosed_CJK_Letters_And_MonthsRegex from '@unicode/unicode-8.0.0/Block/Enclosed_CJK_Letters_And_Months/regex.mjs';

import Enclosed_Ideographic_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Enclosed_Ideographic_Supplement/code-points.mjs';
import Enclosed_Ideographic_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Enclosed_Ideographic_Supplement/symbols.mjs';
import Enclosed_Ideographic_SupplementRegex from '@unicode/unicode-8.0.0/Block/Enclosed_Ideographic_Supplement/regex.mjs';

import EthiopicCodePoints from '@unicode/unicode-8.0.0/Block/Ethiopic/code-points.mjs';
import EthiopicSymbols from '@unicode/unicode-8.0.0/Block/Ethiopic/symbols.mjs';
import EthiopicRegex from '@unicode/unicode-8.0.0/Block/Ethiopic/regex.mjs';

import Ethiopic_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Ethiopic_Extended/code-points.mjs';
import Ethiopic_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Ethiopic_Extended/symbols.mjs';
import Ethiopic_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Ethiopic_Extended/regex.mjs';

import Ethiopic_Extended_ACodePoints from '@unicode/unicode-8.0.0/Block/Ethiopic_Extended_A/code-points.mjs';
import Ethiopic_Extended_ASymbols from '@unicode/unicode-8.0.0/Block/Ethiopic_Extended_A/symbols.mjs';
import Ethiopic_Extended_ARegex from '@unicode/unicode-8.0.0/Block/Ethiopic_Extended_A/regex.mjs';

import Ethiopic_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Ethiopic_Supplement/code-points.mjs';
import Ethiopic_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Ethiopic_Supplement/symbols.mjs';
import Ethiopic_SupplementRegex from '@unicode/unicode-8.0.0/Block/Ethiopic_Supplement/regex.mjs';

import General_PunctuationCodePoints from '@unicode/unicode-8.0.0/Block/General_Punctuation/code-points.mjs';
import General_PunctuationSymbols from '@unicode/unicode-8.0.0/Block/General_Punctuation/symbols.mjs';
import General_PunctuationRegex from '@unicode/unicode-8.0.0/Block/General_Punctuation/regex.mjs';

import Geometric_ShapesCodePoints from '@unicode/unicode-8.0.0/Block/Geometric_Shapes/code-points.mjs';
import Geometric_ShapesSymbols from '@unicode/unicode-8.0.0/Block/Geometric_Shapes/symbols.mjs';
import Geometric_ShapesRegex from '@unicode/unicode-8.0.0/Block/Geometric_Shapes/regex.mjs';

import Geometric_Shapes_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Geometric_Shapes_Extended/code-points.mjs';
import Geometric_Shapes_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Geometric_Shapes_Extended/symbols.mjs';
import Geometric_Shapes_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Geometric_Shapes_Extended/regex.mjs';

import GeorgianCodePoints from '@unicode/unicode-8.0.0/Block/Georgian/code-points.mjs';
import GeorgianSymbols from '@unicode/unicode-8.0.0/Block/Georgian/symbols.mjs';
import GeorgianRegex from '@unicode/unicode-8.0.0/Block/Georgian/regex.mjs';

import Georgian_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Georgian_Supplement/code-points.mjs';
import Georgian_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Georgian_Supplement/symbols.mjs';
import Georgian_SupplementRegex from '@unicode/unicode-8.0.0/Block/Georgian_Supplement/regex.mjs';

import GlagoliticCodePoints from '@unicode/unicode-8.0.0/Block/Glagolitic/code-points.mjs';
import GlagoliticSymbols from '@unicode/unicode-8.0.0/Block/Glagolitic/symbols.mjs';
import GlagoliticRegex from '@unicode/unicode-8.0.0/Block/Glagolitic/regex.mjs';

import GothicCodePoints from '@unicode/unicode-8.0.0/Block/Gothic/code-points.mjs';
import GothicSymbols from '@unicode/unicode-8.0.0/Block/Gothic/symbols.mjs';
import GothicRegex from '@unicode/unicode-8.0.0/Block/Gothic/regex.mjs';

import GranthaCodePoints from '@unicode/unicode-8.0.0/Block/Grantha/code-points.mjs';
import GranthaSymbols from '@unicode/unicode-8.0.0/Block/Grantha/symbols.mjs';
import GranthaRegex from '@unicode/unicode-8.0.0/Block/Grantha/regex.mjs';

import Greek_And_CopticCodePoints from '@unicode/unicode-8.0.0/Block/Greek_And_Coptic/code-points.mjs';
import Greek_And_CopticSymbols from '@unicode/unicode-8.0.0/Block/Greek_And_Coptic/symbols.mjs';
import Greek_And_CopticRegex from '@unicode/unicode-8.0.0/Block/Greek_And_Coptic/regex.mjs';

import Greek_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Greek_Extended/code-points.mjs';
import Greek_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Greek_Extended/symbols.mjs';
import Greek_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Greek_Extended/regex.mjs';

import GujaratiCodePoints from '@unicode/unicode-8.0.0/Block/Gujarati/code-points.mjs';
import GujaratiSymbols from '@unicode/unicode-8.0.0/Block/Gujarati/symbols.mjs';
import GujaratiRegex from '@unicode/unicode-8.0.0/Block/Gujarati/regex.mjs';

import GurmukhiCodePoints from '@unicode/unicode-8.0.0/Block/Gurmukhi/code-points.mjs';
import GurmukhiSymbols from '@unicode/unicode-8.0.0/Block/Gurmukhi/symbols.mjs';
import GurmukhiRegex from '@unicode/unicode-8.0.0/Block/Gurmukhi/regex.mjs';

import Halfwidth_And_Fullwidth_FormsCodePoints from '@unicode/unicode-8.0.0/Block/Halfwidth_And_Fullwidth_Forms/code-points.mjs';
import Halfwidth_And_Fullwidth_FormsSymbols from '@unicode/unicode-8.0.0/Block/Halfwidth_And_Fullwidth_Forms/symbols.mjs';
import Halfwidth_And_Fullwidth_FormsRegex from '@unicode/unicode-8.0.0/Block/Halfwidth_And_Fullwidth_Forms/regex.mjs';

import Hangul_Compatibility_JamoCodePoints from '@unicode/unicode-8.0.0/Block/Hangul_Compatibility_Jamo/code-points.mjs';
import Hangul_Compatibility_JamoSymbols from '@unicode/unicode-8.0.0/Block/Hangul_Compatibility_Jamo/symbols.mjs';
import Hangul_Compatibility_JamoRegex from '@unicode/unicode-8.0.0/Block/Hangul_Compatibility_Jamo/regex.mjs';

import Hangul_JamoCodePoints from '@unicode/unicode-8.0.0/Block/Hangul_Jamo/code-points.mjs';
import Hangul_JamoSymbols from '@unicode/unicode-8.0.0/Block/Hangul_Jamo/symbols.mjs';
import Hangul_JamoRegex from '@unicode/unicode-8.0.0/Block/Hangul_Jamo/regex.mjs';

import Hangul_Jamo_Extended_ACodePoints from '@unicode/unicode-8.0.0/Block/Hangul_Jamo_Extended_A/code-points.mjs';
import Hangul_Jamo_Extended_ASymbols from '@unicode/unicode-8.0.0/Block/Hangul_Jamo_Extended_A/symbols.mjs';
import Hangul_Jamo_Extended_ARegex from '@unicode/unicode-8.0.0/Block/Hangul_Jamo_Extended_A/regex.mjs';

import Hangul_Jamo_Extended_BCodePoints from '@unicode/unicode-8.0.0/Block/Hangul_Jamo_Extended_B/code-points.mjs';
import Hangul_Jamo_Extended_BSymbols from '@unicode/unicode-8.0.0/Block/Hangul_Jamo_Extended_B/symbols.mjs';
import Hangul_Jamo_Extended_BRegex from '@unicode/unicode-8.0.0/Block/Hangul_Jamo_Extended_B/regex.mjs';

import Hangul_SyllablesCodePoints from '@unicode/unicode-8.0.0/Block/Hangul_Syllables/code-points.mjs';
import Hangul_SyllablesSymbols from '@unicode/unicode-8.0.0/Block/Hangul_Syllables/symbols.mjs';
import Hangul_SyllablesRegex from '@unicode/unicode-8.0.0/Block/Hangul_Syllables/regex.mjs';

import HanunooCodePoints from '@unicode/unicode-8.0.0/Block/Hanunoo/code-points.mjs';
import HanunooSymbols from '@unicode/unicode-8.0.0/Block/Hanunoo/symbols.mjs';
import HanunooRegex from '@unicode/unicode-8.0.0/Block/Hanunoo/regex.mjs';

import HatranCodePoints from '@unicode/unicode-8.0.0/Block/Hatran/code-points.mjs';
import HatranSymbols from '@unicode/unicode-8.0.0/Block/Hatran/symbols.mjs';
import HatranRegex from '@unicode/unicode-8.0.0/Block/Hatran/regex.mjs';

import HebrewCodePoints from '@unicode/unicode-8.0.0/Block/Hebrew/code-points.mjs';
import HebrewSymbols from '@unicode/unicode-8.0.0/Block/Hebrew/symbols.mjs';
import HebrewRegex from '@unicode/unicode-8.0.0/Block/Hebrew/regex.mjs';

import High_Private_Use_SurrogatesCodePoints from '@unicode/unicode-8.0.0/Block/High_Private_Use_Surrogates/code-points.mjs';
import High_Private_Use_SurrogatesSymbols from '@unicode/unicode-8.0.0/Block/High_Private_Use_Surrogates/symbols.mjs';
import High_Private_Use_SurrogatesRegex from '@unicode/unicode-8.0.0/Block/High_Private_Use_Surrogates/regex.mjs';

import High_SurrogatesCodePoints from '@unicode/unicode-8.0.0/Block/High_Surrogates/code-points.mjs';
import High_SurrogatesSymbols from '@unicode/unicode-8.0.0/Block/High_Surrogates/symbols.mjs';
import High_SurrogatesRegex from '@unicode/unicode-8.0.0/Block/High_Surrogates/regex.mjs';

import HiraganaCodePoints from '@unicode/unicode-8.0.0/Block/Hiragana/code-points.mjs';
import HiraganaSymbols from '@unicode/unicode-8.0.0/Block/Hiragana/symbols.mjs';
import HiraganaRegex from '@unicode/unicode-8.0.0/Block/Hiragana/regex.mjs';

import IPA_ExtensionsCodePoints from '@unicode/unicode-8.0.0/Block/IPA_Extensions/code-points.mjs';
import IPA_ExtensionsSymbols from '@unicode/unicode-8.0.0/Block/IPA_Extensions/symbols.mjs';
import IPA_ExtensionsRegex from '@unicode/unicode-8.0.0/Block/IPA_Extensions/regex.mjs';

import Ideographic_Description_CharactersCodePoints from '@unicode/unicode-8.0.0/Block/Ideographic_Description_Characters/code-points.mjs';
import Ideographic_Description_CharactersSymbols from '@unicode/unicode-8.0.0/Block/Ideographic_Description_Characters/symbols.mjs';
import Ideographic_Description_CharactersRegex from '@unicode/unicode-8.0.0/Block/Ideographic_Description_Characters/regex.mjs';

import Imperial_AramaicCodePoints from '@unicode/unicode-8.0.0/Block/Imperial_Aramaic/code-points.mjs';
import Imperial_AramaicSymbols from '@unicode/unicode-8.0.0/Block/Imperial_Aramaic/symbols.mjs';
import Imperial_AramaicRegex from '@unicode/unicode-8.0.0/Block/Imperial_Aramaic/regex.mjs';

import Inscriptional_PahlaviCodePoints from '@unicode/unicode-8.0.0/Block/Inscriptional_Pahlavi/code-points.mjs';
import Inscriptional_PahlaviSymbols from '@unicode/unicode-8.0.0/Block/Inscriptional_Pahlavi/symbols.mjs';
import Inscriptional_PahlaviRegex from '@unicode/unicode-8.0.0/Block/Inscriptional_Pahlavi/regex.mjs';

import Inscriptional_ParthianCodePoints from '@unicode/unicode-8.0.0/Block/Inscriptional_Parthian/code-points.mjs';
import Inscriptional_ParthianSymbols from '@unicode/unicode-8.0.0/Block/Inscriptional_Parthian/symbols.mjs';
import Inscriptional_ParthianRegex from '@unicode/unicode-8.0.0/Block/Inscriptional_Parthian/regex.mjs';

import JavaneseCodePoints from '@unicode/unicode-8.0.0/Block/Javanese/code-points.mjs';
import JavaneseSymbols from '@unicode/unicode-8.0.0/Block/Javanese/symbols.mjs';
import JavaneseRegex from '@unicode/unicode-8.0.0/Block/Javanese/regex.mjs';

import KaithiCodePoints from '@unicode/unicode-8.0.0/Block/Kaithi/code-points.mjs';
import KaithiSymbols from '@unicode/unicode-8.0.0/Block/Kaithi/symbols.mjs';
import KaithiRegex from '@unicode/unicode-8.0.0/Block/Kaithi/regex.mjs';

import Kana_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Kana_Supplement/code-points.mjs';
import Kana_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Kana_Supplement/symbols.mjs';
import Kana_SupplementRegex from '@unicode/unicode-8.0.0/Block/Kana_Supplement/regex.mjs';

import KanbunCodePoints from '@unicode/unicode-8.0.0/Block/Kanbun/code-points.mjs';
import KanbunSymbols from '@unicode/unicode-8.0.0/Block/Kanbun/symbols.mjs';
import KanbunRegex from '@unicode/unicode-8.0.0/Block/Kanbun/regex.mjs';

import Kangxi_RadicalsCodePoints from '@unicode/unicode-8.0.0/Block/Kangxi_Radicals/code-points.mjs';
import Kangxi_RadicalsSymbols from '@unicode/unicode-8.0.0/Block/Kangxi_Radicals/symbols.mjs';
import Kangxi_RadicalsRegex from '@unicode/unicode-8.0.0/Block/Kangxi_Radicals/regex.mjs';

import KannadaCodePoints from '@unicode/unicode-8.0.0/Block/Kannada/code-points.mjs';
import KannadaSymbols from '@unicode/unicode-8.0.0/Block/Kannada/symbols.mjs';
import KannadaRegex from '@unicode/unicode-8.0.0/Block/Kannada/regex.mjs';

import KatakanaCodePoints from '@unicode/unicode-8.0.0/Block/Katakana/code-points.mjs';
import KatakanaSymbols from '@unicode/unicode-8.0.0/Block/Katakana/symbols.mjs';
import KatakanaRegex from '@unicode/unicode-8.0.0/Block/Katakana/regex.mjs';

import Katakana_Phonetic_ExtensionsCodePoints from '@unicode/unicode-8.0.0/Block/Katakana_Phonetic_Extensions/code-points.mjs';
import Katakana_Phonetic_ExtensionsSymbols from '@unicode/unicode-8.0.0/Block/Katakana_Phonetic_Extensions/symbols.mjs';
import Katakana_Phonetic_ExtensionsRegex from '@unicode/unicode-8.0.0/Block/Katakana_Phonetic_Extensions/regex.mjs';

import Kayah_LiCodePoints from '@unicode/unicode-8.0.0/Block/Kayah_Li/code-points.mjs';
import Kayah_LiSymbols from '@unicode/unicode-8.0.0/Block/Kayah_Li/symbols.mjs';
import Kayah_LiRegex from '@unicode/unicode-8.0.0/Block/Kayah_Li/regex.mjs';

import KharoshthiCodePoints from '@unicode/unicode-8.0.0/Block/Kharoshthi/code-points.mjs';
import KharoshthiSymbols from '@unicode/unicode-8.0.0/Block/Kharoshthi/symbols.mjs';
import KharoshthiRegex from '@unicode/unicode-8.0.0/Block/Kharoshthi/regex.mjs';

import KhmerCodePoints from '@unicode/unicode-8.0.0/Block/Khmer/code-points.mjs';
import KhmerSymbols from '@unicode/unicode-8.0.0/Block/Khmer/symbols.mjs';
import KhmerRegex from '@unicode/unicode-8.0.0/Block/Khmer/regex.mjs';

import Khmer_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Khmer_Symbols/code-points.mjs';
import Khmer_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Khmer_Symbols/symbols.mjs';
import Khmer_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Khmer_Symbols/regex.mjs';

import KhojkiCodePoints from '@unicode/unicode-8.0.0/Block/Khojki/code-points.mjs';
import KhojkiSymbols from '@unicode/unicode-8.0.0/Block/Khojki/symbols.mjs';
import KhojkiRegex from '@unicode/unicode-8.0.0/Block/Khojki/regex.mjs';

import KhudawadiCodePoints from '@unicode/unicode-8.0.0/Block/Khudawadi/code-points.mjs';
import KhudawadiSymbols from '@unicode/unicode-8.0.0/Block/Khudawadi/symbols.mjs';
import KhudawadiRegex from '@unicode/unicode-8.0.0/Block/Khudawadi/regex.mjs';

import LaoCodePoints from '@unicode/unicode-8.0.0/Block/Lao/code-points.mjs';
import LaoSymbols from '@unicode/unicode-8.0.0/Block/Lao/symbols.mjs';
import LaoRegex from '@unicode/unicode-8.0.0/Block/Lao/regex.mjs';

import Latin_1_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Latin_1_Supplement/code-points.mjs';
import Latin_1_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Latin_1_Supplement/symbols.mjs';
import Latin_1_SupplementRegex from '@unicode/unicode-8.0.0/Block/Latin_1_Supplement/regex.mjs';

import Latin_Extended_ACodePoints from '@unicode/unicode-8.0.0/Block/Latin_Extended_A/code-points.mjs';
import Latin_Extended_ASymbols from '@unicode/unicode-8.0.0/Block/Latin_Extended_A/symbols.mjs';
import Latin_Extended_ARegex from '@unicode/unicode-8.0.0/Block/Latin_Extended_A/regex.mjs';

import Latin_Extended_AdditionalCodePoints from '@unicode/unicode-8.0.0/Block/Latin_Extended_Additional/code-points.mjs';
import Latin_Extended_AdditionalSymbols from '@unicode/unicode-8.0.0/Block/Latin_Extended_Additional/symbols.mjs';
import Latin_Extended_AdditionalRegex from '@unicode/unicode-8.0.0/Block/Latin_Extended_Additional/regex.mjs';

import Latin_Extended_BCodePoints from '@unicode/unicode-8.0.0/Block/Latin_Extended_B/code-points.mjs';
import Latin_Extended_BSymbols from '@unicode/unicode-8.0.0/Block/Latin_Extended_B/symbols.mjs';
import Latin_Extended_BRegex from '@unicode/unicode-8.0.0/Block/Latin_Extended_B/regex.mjs';

import Latin_Extended_CCodePoints from '@unicode/unicode-8.0.0/Block/Latin_Extended_C/code-points.mjs';
import Latin_Extended_CSymbols from '@unicode/unicode-8.0.0/Block/Latin_Extended_C/symbols.mjs';
import Latin_Extended_CRegex from '@unicode/unicode-8.0.0/Block/Latin_Extended_C/regex.mjs';

import Latin_Extended_DCodePoints from '@unicode/unicode-8.0.0/Block/Latin_Extended_D/code-points.mjs';
import Latin_Extended_DSymbols from '@unicode/unicode-8.0.0/Block/Latin_Extended_D/symbols.mjs';
import Latin_Extended_DRegex from '@unicode/unicode-8.0.0/Block/Latin_Extended_D/regex.mjs';

import Latin_Extended_ECodePoints from '@unicode/unicode-8.0.0/Block/Latin_Extended_E/code-points.mjs';
import Latin_Extended_ESymbols from '@unicode/unicode-8.0.0/Block/Latin_Extended_E/symbols.mjs';
import Latin_Extended_ERegex from '@unicode/unicode-8.0.0/Block/Latin_Extended_E/regex.mjs';

import LepchaCodePoints from '@unicode/unicode-8.0.0/Block/Lepcha/code-points.mjs';
import LepchaSymbols from '@unicode/unicode-8.0.0/Block/Lepcha/symbols.mjs';
import LepchaRegex from '@unicode/unicode-8.0.0/Block/Lepcha/regex.mjs';

import Letterlike_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Letterlike_Symbols/code-points.mjs';
import Letterlike_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Letterlike_Symbols/symbols.mjs';
import Letterlike_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Letterlike_Symbols/regex.mjs';

import LimbuCodePoints from '@unicode/unicode-8.0.0/Block/Limbu/code-points.mjs';
import LimbuSymbols from '@unicode/unicode-8.0.0/Block/Limbu/symbols.mjs';
import LimbuRegex from '@unicode/unicode-8.0.0/Block/Limbu/regex.mjs';

import Linear_ACodePoints from '@unicode/unicode-8.0.0/Block/Linear_A/code-points.mjs';
import Linear_ASymbols from '@unicode/unicode-8.0.0/Block/Linear_A/symbols.mjs';
import Linear_ARegex from '@unicode/unicode-8.0.0/Block/Linear_A/regex.mjs';

import Linear_B_IdeogramsCodePoints from '@unicode/unicode-8.0.0/Block/Linear_B_Ideograms/code-points.mjs';
import Linear_B_IdeogramsSymbols from '@unicode/unicode-8.0.0/Block/Linear_B_Ideograms/symbols.mjs';
import Linear_B_IdeogramsRegex from '@unicode/unicode-8.0.0/Block/Linear_B_Ideograms/regex.mjs';

import Linear_B_SyllabaryCodePoints from '@unicode/unicode-8.0.0/Block/Linear_B_Syllabary/code-points.mjs';
import Linear_B_SyllabarySymbols from '@unicode/unicode-8.0.0/Block/Linear_B_Syllabary/symbols.mjs';
import Linear_B_SyllabaryRegex from '@unicode/unicode-8.0.0/Block/Linear_B_Syllabary/regex.mjs';

import LisuCodePoints from '@unicode/unicode-8.0.0/Block/Lisu/code-points.mjs';
import LisuSymbols from '@unicode/unicode-8.0.0/Block/Lisu/symbols.mjs';
import LisuRegex from '@unicode/unicode-8.0.0/Block/Lisu/regex.mjs';

import Low_SurrogatesCodePoints from '@unicode/unicode-8.0.0/Block/Low_Surrogates/code-points.mjs';
import Low_SurrogatesSymbols from '@unicode/unicode-8.0.0/Block/Low_Surrogates/symbols.mjs';
import Low_SurrogatesRegex from '@unicode/unicode-8.0.0/Block/Low_Surrogates/regex.mjs';

import LycianCodePoints from '@unicode/unicode-8.0.0/Block/Lycian/code-points.mjs';
import LycianSymbols from '@unicode/unicode-8.0.0/Block/Lycian/symbols.mjs';
import LycianRegex from '@unicode/unicode-8.0.0/Block/Lycian/regex.mjs';

import LydianCodePoints from '@unicode/unicode-8.0.0/Block/Lydian/code-points.mjs';
import LydianSymbols from '@unicode/unicode-8.0.0/Block/Lydian/symbols.mjs';
import LydianRegex from '@unicode/unicode-8.0.0/Block/Lydian/regex.mjs';

import MahajaniCodePoints from '@unicode/unicode-8.0.0/Block/Mahajani/code-points.mjs';
import MahajaniSymbols from '@unicode/unicode-8.0.0/Block/Mahajani/symbols.mjs';
import MahajaniRegex from '@unicode/unicode-8.0.0/Block/Mahajani/regex.mjs';

import Mahjong_TilesCodePoints from '@unicode/unicode-8.0.0/Block/Mahjong_Tiles/code-points.mjs';
import Mahjong_TilesSymbols from '@unicode/unicode-8.0.0/Block/Mahjong_Tiles/symbols.mjs';
import Mahjong_TilesRegex from '@unicode/unicode-8.0.0/Block/Mahjong_Tiles/regex.mjs';

import MalayalamCodePoints from '@unicode/unicode-8.0.0/Block/Malayalam/code-points.mjs';
import MalayalamSymbols from '@unicode/unicode-8.0.0/Block/Malayalam/symbols.mjs';
import MalayalamRegex from '@unicode/unicode-8.0.0/Block/Malayalam/regex.mjs';

import MandaicCodePoints from '@unicode/unicode-8.0.0/Block/Mandaic/code-points.mjs';
import MandaicSymbols from '@unicode/unicode-8.0.0/Block/Mandaic/symbols.mjs';
import MandaicRegex from '@unicode/unicode-8.0.0/Block/Mandaic/regex.mjs';

import ManichaeanCodePoints from '@unicode/unicode-8.0.0/Block/Manichaean/code-points.mjs';
import ManichaeanSymbols from '@unicode/unicode-8.0.0/Block/Manichaean/symbols.mjs';
import ManichaeanRegex from '@unicode/unicode-8.0.0/Block/Manichaean/regex.mjs';

import Mathematical_Alphanumeric_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Mathematical_Alphanumeric_Symbols/code-points.mjs';
import Mathematical_Alphanumeric_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Mathematical_Alphanumeric_Symbols/symbols.mjs';
import Mathematical_Alphanumeric_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Mathematical_Alphanumeric_Symbols/regex.mjs';

import Mathematical_OperatorsCodePoints from '@unicode/unicode-8.0.0/Block/Mathematical_Operators/code-points.mjs';
import Mathematical_OperatorsSymbols from '@unicode/unicode-8.0.0/Block/Mathematical_Operators/symbols.mjs';
import Mathematical_OperatorsRegex from '@unicode/unicode-8.0.0/Block/Mathematical_Operators/regex.mjs';

import Meetei_MayekCodePoints from '@unicode/unicode-8.0.0/Block/Meetei_Mayek/code-points.mjs';
import Meetei_MayekSymbols from '@unicode/unicode-8.0.0/Block/Meetei_Mayek/symbols.mjs';
import Meetei_MayekRegex from '@unicode/unicode-8.0.0/Block/Meetei_Mayek/regex.mjs';

import Meetei_Mayek_ExtensionsCodePoints from '@unicode/unicode-8.0.0/Block/Meetei_Mayek_Extensions/code-points.mjs';
import Meetei_Mayek_ExtensionsSymbols from '@unicode/unicode-8.0.0/Block/Meetei_Mayek_Extensions/symbols.mjs';
import Meetei_Mayek_ExtensionsRegex from '@unicode/unicode-8.0.0/Block/Meetei_Mayek_Extensions/regex.mjs';

import Mende_KikakuiCodePoints from '@unicode/unicode-8.0.0/Block/Mende_Kikakui/code-points.mjs';
import Mende_KikakuiSymbols from '@unicode/unicode-8.0.0/Block/Mende_Kikakui/symbols.mjs';
import Mende_KikakuiRegex from '@unicode/unicode-8.0.0/Block/Mende_Kikakui/regex.mjs';

import Meroitic_CursiveCodePoints from '@unicode/unicode-8.0.0/Block/Meroitic_Cursive/code-points.mjs';
import Meroitic_CursiveSymbols from '@unicode/unicode-8.0.0/Block/Meroitic_Cursive/symbols.mjs';
import Meroitic_CursiveRegex from '@unicode/unicode-8.0.0/Block/Meroitic_Cursive/regex.mjs';

import Meroitic_HieroglyphsCodePoints from '@unicode/unicode-8.0.0/Block/Meroitic_Hieroglyphs/code-points.mjs';
import Meroitic_HieroglyphsSymbols from '@unicode/unicode-8.0.0/Block/Meroitic_Hieroglyphs/symbols.mjs';
import Meroitic_HieroglyphsRegex from '@unicode/unicode-8.0.0/Block/Meroitic_Hieroglyphs/regex.mjs';

import MiaoCodePoints from '@unicode/unicode-8.0.0/Block/Miao/code-points.mjs';
import MiaoSymbols from '@unicode/unicode-8.0.0/Block/Miao/symbols.mjs';
import MiaoRegex from '@unicode/unicode-8.0.0/Block/Miao/regex.mjs';

import Miscellaneous_Mathematical_Symbols_ACodePoints from '@unicode/unicode-8.0.0/Block/Miscellaneous_Mathematical_Symbols_A/code-points.mjs';
import Miscellaneous_Mathematical_Symbols_ASymbols from '@unicode/unicode-8.0.0/Block/Miscellaneous_Mathematical_Symbols_A/symbols.mjs';
import Miscellaneous_Mathematical_Symbols_ARegex from '@unicode/unicode-8.0.0/Block/Miscellaneous_Mathematical_Symbols_A/regex.mjs';

import Miscellaneous_Mathematical_Symbols_BCodePoints from '@unicode/unicode-8.0.0/Block/Miscellaneous_Mathematical_Symbols_B/code-points.mjs';
import Miscellaneous_Mathematical_Symbols_BSymbols from '@unicode/unicode-8.0.0/Block/Miscellaneous_Mathematical_Symbols_B/symbols.mjs';
import Miscellaneous_Mathematical_Symbols_BRegex from '@unicode/unicode-8.0.0/Block/Miscellaneous_Mathematical_Symbols_B/regex.mjs';

import Miscellaneous_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols/code-points.mjs';
import Miscellaneous_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols/symbols.mjs';
import Miscellaneous_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols/regex.mjs';

import Miscellaneous_Symbols_And_ArrowsCodePoints from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols_And_Arrows/code-points.mjs';
import Miscellaneous_Symbols_And_ArrowsSymbols from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols_And_Arrows/symbols.mjs';
import Miscellaneous_Symbols_And_ArrowsRegex from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols_And_Arrows/regex.mjs';

import Miscellaneous_Symbols_And_PictographsCodePoints from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols_And_Pictographs/code-points.mjs';
import Miscellaneous_Symbols_And_PictographsSymbols from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols_And_Pictographs/symbols.mjs';
import Miscellaneous_Symbols_And_PictographsRegex from '@unicode/unicode-8.0.0/Block/Miscellaneous_Symbols_And_Pictographs/regex.mjs';

import Miscellaneous_TechnicalCodePoints from '@unicode/unicode-8.0.0/Block/Miscellaneous_Technical/code-points.mjs';
import Miscellaneous_TechnicalSymbols from '@unicode/unicode-8.0.0/Block/Miscellaneous_Technical/symbols.mjs';
import Miscellaneous_TechnicalRegex from '@unicode/unicode-8.0.0/Block/Miscellaneous_Technical/regex.mjs';

import ModiCodePoints from '@unicode/unicode-8.0.0/Block/Modi/code-points.mjs';
import ModiSymbols from '@unicode/unicode-8.0.0/Block/Modi/symbols.mjs';
import ModiRegex from '@unicode/unicode-8.0.0/Block/Modi/regex.mjs';

import Modifier_Tone_LettersCodePoints from '@unicode/unicode-8.0.0/Block/Modifier_Tone_Letters/code-points.mjs';
import Modifier_Tone_LettersSymbols from '@unicode/unicode-8.0.0/Block/Modifier_Tone_Letters/symbols.mjs';
import Modifier_Tone_LettersRegex from '@unicode/unicode-8.0.0/Block/Modifier_Tone_Letters/regex.mjs';

import MongolianCodePoints from '@unicode/unicode-8.0.0/Block/Mongolian/code-points.mjs';
import MongolianSymbols from '@unicode/unicode-8.0.0/Block/Mongolian/symbols.mjs';
import MongolianRegex from '@unicode/unicode-8.0.0/Block/Mongolian/regex.mjs';

import MroCodePoints from '@unicode/unicode-8.0.0/Block/Mro/code-points.mjs';
import MroSymbols from '@unicode/unicode-8.0.0/Block/Mro/symbols.mjs';
import MroRegex from '@unicode/unicode-8.0.0/Block/Mro/regex.mjs';

import MultaniCodePoints from '@unicode/unicode-8.0.0/Block/Multani/code-points.mjs';
import MultaniSymbols from '@unicode/unicode-8.0.0/Block/Multani/symbols.mjs';
import MultaniRegex from '@unicode/unicode-8.0.0/Block/Multani/regex.mjs';

import Musical_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Musical_Symbols/code-points.mjs';
import Musical_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Musical_Symbols/symbols.mjs';
import Musical_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Musical_Symbols/regex.mjs';

import MyanmarCodePoints from '@unicode/unicode-8.0.0/Block/Myanmar/code-points.mjs';
import MyanmarSymbols from '@unicode/unicode-8.0.0/Block/Myanmar/symbols.mjs';
import MyanmarRegex from '@unicode/unicode-8.0.0/Block/Myanmar/regex.mjs';

import Myanmar_Extended_ACodePoints from '@unicode/unicode-8.0.0/Block/Myanmar_Extended_A/code-points.mjs';
import Myanmar_Extended_ASymbols from '@unicode/unicode-8.0.0/Block/Myanmar_Extended_A/symbols.mjs';
import Myanmar_Extended_ARegex from '@unicode/unicode-8.0.0/Block/Myanmar_Extended_A/regex.mjs';

import Myanmar_Extended_BCodePoints from '@unicode/unicode-8.0.0/Block/Myanmar_Extended_B/code-points.mjs';
import Myanmar_Extended_BSymbols from '@unicode/unicode-8.0.0/Block/Myanmar_Extended_B/symbols.mjs';
import Myanmar_Extended_BRegex from '@unicode/unicode-8.0.0/Block/Myanmar_Extended_B/regex.mjs';

import NKoCodePoints from '@unicode/unicode-8.0.0/Block/NKo/code-points.mjs';
import NKoSymbols from '@unicode/unicode-8.0.0/Block/NKo/symbols.mjs';
import NKoRegex from '@unicode/unicode-8.0.0/Block/NKo/regex.mjs';

import NabataeanCodePoints from '@unicode/unicode-8.0.0/Block/Nabataean/code-points.mjs';
import NabataeanSymbols from '@unicode/unicode-8.0.0/Block/Nabataean/symbols.mjs';
import NabataeanRegex from '@unicode/unicode-8.0.0/Block/Nabataean/regex.mjs';

import New_Tai_LueCodePoints from '@unicode/unicode-8.0.0/Block/New_Tai_Lue/code-points.mjs';
import New_Tai_LueSymbols from '@unicode/unicode-8.0.0/Block/New_Tai_Lue/symbols.mjs';
import New_Tai_LueRegex from '@unicode/unicode-8.0.0/Block/New_Tai_Lue/regex.mjs';

import Number_FormsCodePoints from '@unicode/unicode-8.0.0/Block/Number_Forms/code-points.mjs';
import Number_FormsSymbols from '@unicode/unicode-8.0.0/Block/Number_Forms/symbols.mjs';
import Number_FormsRegex from '@unicode/unicode-8.0.0/Block/Number_Forms/regex.mjs';

import OghamCodePoints from '@unicode/unicode-8.0.0/Block/Ogham/code-points.mjs';
import OghamSymbols from '@unicode/unicode-8.0.0/Block/Ogham/symbols.mjs';
import OghamRegex from '@unicode/unicode-8.0.0/Block/Ogham/regex.mjs';

import Ol_ChikiCodePoints from '@unicode/unicode-8.0.0/Block/Ol_Chiki/code-points.mjs';
import Ol_ChikiSymbols from '@unicode/unicode-8.0.0/Block/Ol_Chiki/symbols.mjs';
import Ol_ChikiRegex from '@unicode/unicode-8.0.0/Block/Ol_Chiki/regex.mjs';

import Old_HungarianCodePoints from '@unicode/unicode-8.0.0/Block/Old_Hungarian/code-points.mjs';
import Old_HungarianSymbols from '@unicode/unicode-8.0.0/Block/Old_Hungarian/symbols.mjs';
import Old_HungarianRegex from '@unicode/unicode-8.0.0/Block/Old_Hungarian/regex.mjs';

import Old_ItalicCodePoints from '@unicode/unicode-8.0.0/Block/Old_Italic/code-points.mjs';
import Old_ItalicSymbols from '@unicode/unicode-8.0.0/Block/Old_Italic/symbols.mjs';
import Old_ItalicRegex from '@unicode/unicode-8.0.0/Block/Old_Italic/regex.mjs';

import Old_North_ArabianCodePoints from '@unicode/unicode-8.0.0/Block/Old_North_Arabian/code-points.mjs';
import Old_North_ArabianSymbols from '@unicode/unicode-8.0.0/Block/Old_North_Arabian/symbols.mjs';
import Old_North_ArabianRegex from '@unicode/unicode-8.0.0/Block/Old_North_Arabian/regex.mjs';

import Old_PermicCodePoints from '@unicode/unicode-8.0.0/Block/Old_Permic/code-points.mjs';
import Old_PermicSymbols from '@unicode/unicode-8.0.0/Block/Old_Permic/symbols.mjs';
import Old_PermicRegex from '@unicode/unicode-8.0.0/Block/Old_Permic/regex.mjs';

import Old_PersianCodePoints from '@unicode/unicode-8.0.0/Block/Old_Persian/code-points.mjs';
import Old_PersianSymbols from '@unicode/unicode-8.0.0/Block/Old_Persian/symbols.mjs';
import Old_PersianRegex from '@unicode/unicode-8.0.0/Block/Old_Persian/regex.mjs';

import Old_South_ArabianCodePoints from '@unicode/unicode-8.0.0/Block/Old_South_Arabian/code-points.mjs';
import Old_South_ArabianSymbols from '@unicode/unicode-8.0.0/Block/Old_South_Arabian/symbols.mjs';
import Old_South_ArabianRegex from '@unicode/unicode-8.0.0/Block/Old_South_Arabian/regex.mjs';

import Old_TurkicCodePoints from '@unicode/unicode-8.0.0/Block/Old_Turkic/code-points.mjs';
import Old_TurkicSymbols from '@unicode/unicode-8.0.0/Block/Old_Turkic/symbols.mjs';
import Old_TurkicRegex from '@unicode/unicode-8.0.0/Block/Old_Turkic/regex.mjs';

import Optical_Character_RecognitionCodePoints from '@unicode/unicode-8.0.0/Block/Optical_Character_Recognition/code-points.mjs';
import Optical_Character_RecognitionSymbols from '@unicode/unicode-8.0.0/Block/Optical_Character_Recognition/symbols.mjs';
import Optical_Character_RecognitionRegex from '@unicode/unicode-8.0.0/Block/Optical_Character_Recognition/regex.mjs';

import OriyaCodePoints from '@unicode/unicode-8.0.0/Block/Oriya/code-points.mjs';
import OriyaSymbols from '@unicode/unicode-8.0.0/Block/Oriya/symbols.mjs';
import OriyaRegex from '@unicode/unicode-8.0.0/Block/Oriya/regex.mjs';

import Ornamental_DingbatsCodePoints from '@unicode/unicode-8.0.0/Block/Ornamental_Dingbats/code-points.mjs';
import Ornamental_DingbatsSymbols from '@unicode/unicode-8.0.0/Block/Ornamental_Dingbats/symbols.mjs';
import Ornamental_DingbatsRegex from '@unicode/unicode-8.0.0/Block/Ornamental_Dingbats/regex.mjs';

import OsmanyaCodePoints from '@unicode/unicode-8.0.0/Block/Osmanya/code-points.mjs';
import OsmanyaSymbols from '@unicode/unicode-8.0.0/Block/Osmanya/symbols.mjs';
import OsmanyaRegex from '@unicode/unicode-8.0.0/Block/Osmanya/regex.mjs';

import Pahawh_HmongCodePoints from '@unicode/unicode-8.0.0/Block/Pahawh_Hmong/code-points.mjs';
import Pahawh_HmongSymbols from '@unicode/unicode-8.0.0/Block/Pahawh_Hmong/symbols.mjs';
import Pahawh_HmongRegex from '@unicode/unicode-8.0.0/Block/Pahawh_Hmong/regex.mjs';

import PalmyreneCodePoints from '@unicode/unicode-8.0.0/Block/Palmyrene/code-points.mjs';
import PalmyreneSymbols from '@unicode/unicode-8.0.0/Block/Palmyrene/symbols.mjs';
import PalmyreneRegex from '@unicode/unicode-8.0.0/Block/Palmyrene/regex.mjs';

import Pau_Cin_HauCodePoints from '@unicode/unicode-8.0.0/Block/Pau_Cin_Hau/code-points.mjs';
import Pau_Cin_HauSymbols from '@unicode/unicode-8.0.0/Block/Pau_Cin_Hau/symbols.mjs';
import Pau_Cin_HauRegex from '@unicode/unicode-8.0.0/Block/Pau_Cin_Hau/regex.mjs';

import Phags_PaCodePoints from '@unicode/unicode-8.0.0/Block/Phags_Pa/code-points.mjs';
import Phags_PaSymbols from '@unicode/unicode-8.0.0/Block/Phags_Pa/symbols.mjs';
import Phags_PaRegex from '@unicode/unicode-8.0.0/Block/Phags_Pa/regex.mjs';

import Phaistos_DiscCodePoints from '@unicode/unicode-8.0.0/Block/Phaistos_Disc/code-points.mjs';
import Phaistos_DiscSymbols from '@unicode/unicode-8.0.0/Block/Phaistos_Disc/symbols.mjs';
import Phaistos_DiscRegex from '@unicode/unicode-8.0.0/Block/Phaistos_Disc/regex.mjs';

import PhoenicianCodePoints from '@unicode/unicode-8.0.0/Block/Phoenician/code-points.mjs';
import PhoenicianSymbols from '@unicode/unicode-8.0.0/Block/Phoenician/symbols.mjs';
import PhoenicianRegex from '@unicode/unicode-8.0.0/Block/Phoenician/regex.mjs';

import Phonetic_ExtensionsCodePoints from '@unicode/unicode-8.0.0/Block/Phonetic_Extensions/code-points.mjs';
import Phonetic_ExtensionsSymbols from '@unicode/unicode-8.0.0/Block/Phonetic_Extensions/symbols.mjs';
import Phonetic_ExtensionsRegex from '@unicode/unicode-8.0.0/Block/Phonetic_Extensions/regex.mjs';

import Phonetic_Extensions_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Phonetic_Extensions_Supplement/code-points.mjs';
import Phonetic_Extensions_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Phonetic_Extensions_Supplement/symbols.mjs';
import Phonetic_Extensions_SupplementRegex from '@unicode/unicode-8.0.0/Block/Phonetic_Extensions_Supplement/regex.mjs';

import Playing_CardsCodePoints from '@unicode/unicode-8.0.0/Block/Playing_Cards/code-points.mjs';
import Playing_CardsSymbols from '@unicode/unicode-8.0.0/Block/Playing_Cards/symbols.mjs';
import Playing_CardsRegex from '@unicode/unicode-8.0.0/Block/Playing_Cards/regex.mjs';

import Private_Use_AreaCodePoints from '@unicode/unicode-8.0.0/Block/Private_Use_Area/code-points.mjs';
import Private_Use_AreaSymbols from '@unicode/unicode-8.0.0/Block/Private_Use_Area/symbols.mjs';
import Private_Use_AreaRegex from '@unicode/unicode-8.0.0/Block/Private_Use_Area/regex.mjs';

import Psalter_PahlaviCodePoints from '@unicode/unicode-8.0.0/Block/Psalter_Pahlavi/code-points.mjs';
import Psalter_PahlaviSymbols from '@unicode/unicode-8.0.0/Block/Psalter_Pahlavi/symbols.mjs';
import Psalter_PahlaviRegex from '@unicode/unicode-8.0.0/Block/Psalter_Pahlavi/regex.mjs';

import RejangCodePoints from '@unicode/unicode-8.0.0/Block/Rejang/code-points.mjs';
import RejangSymbols from '@unicode/unicode-8.0.0/Block/Rejang/symbols.mjs';
import RejangRegex from '@unicode/unicode-8.0.0/Block/Rejang/regex.mjs';

import Rumi_Numeral_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Rumi_Numeral_Symbols/code-points.mjs';
import Rumi_Numeral_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Rumi_Numeral_Symbols/symbols.mjs';
import Rumi_Numeral_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Rumi_Numeral_Symbols/regex.mjs';

import RunicCodePoints from '@unicode/unicode-8.0.0/Block/Runic/code-points.mjs';
import RunicSymbols from '@unicode/unicode-8.0.0/Block/Runic/symbols.mjs';
import RunicRegex from '@unicode/unicode-8.0.0/Block/Runic/regex.mjs';

import SamaritanCodePoints from '@unicode/unicode-8.0.0/Block/Samaritan/code-points.mjs';
import SamaritanSymbols from '@unicode/unicode-8.0.0/Block/Samaritan/symbols.mjs';
import SamaritanRegex from '@unicode/unicode-8.0.0/Block/Samaritan/regex.mjs';

import SaurashtraCodePoints from '@unicode/unicode-8.0.0/Block/Saurashtra/code-points.mjs';
import SaurashtraSymbols from '@unicode/unicode-8.0.0/Block/Saurashtra/symbols.mjs';
import SaurashtraRegex from '@unicode/unicode-8.0.0/Block/Saurashtra/regex.mjs';

import SharadaCodePoints from '@unicode/unicode-8.0.0/Block/Sharada/code-points.mjs';
import SharadaSymbols from '@unicode/unicode-8.0.0/Block/Sharada/symbols.mjs';
import SharadaRegex from '@unicode/unicode-8.0.0/Block/Sharada/regex.mjs';

import ShavianCodePoints from '@unicode/unicode-8.0.0/Block/Shavian/code-points.mjs';
import ShavianSymbols from '@unicode/unicode-8.0.0/Block/Shavian/symbols.mjs';
import ShavianRegex from '@unicode/unicode-8.0.0/Block/Shavian/regex.mjs';

import Shorthand_Format_ControlsCodePoints from '@unicode/unicode-8.0.0/Block/Shorthand_Format_Controls/code-points.mjs';
import Shorthand_Format_ControlsSymbols from '@unicode/unicode-8.0.0/Block/Shorthand_Format_Controls/symbols.mjs';
import Shorthand_Format_ControlsRegex from '@unicode/unicode-8.0.0/Block/Shorthand_Format_Controls/regex.mjs';

import SiddhamCodePoints from '@unicode/unicode-8.0.0/Block/Siddham/code-points.mjs';
import SiddhamSymbols from '@unicode/unicode-8.0.0/Block/Siddham/symbols.mjs';
import SiddhamRegex from '@unicode/unicode-8.0.0/Block/Siddham/regex.mjs';

import SinhalaCodePoints from '@unicode/unicode-8.0.0/Block/Sinhala/code-points.mjs';
import SinhalaSymbols from '@unicode/unicode-8.0.0/Block/Sinhala/symbols.mjs';
import SinhalaRegex from '@unicode/unicode-8.0.0/Block/Sinhala/regex.mjs';

import Sinhala_Archaic_NumbersCodePoints from '@unicode/unicode-8.0.0/Block/Sinhala_Archaic_Numbers/code-points.mjs';
import Sinhala_Archaic_NumbersSymbols from '@unicode/unicode-8.0.0/Block/Sinhala_Archaic_Numbers/symbols.mjs';
import Sinhala_Archaic_NumbersRegex from '@unicode/unicode-8.0.0/Block/Sinhala_Archaic_Numbers/regex.mjs';

import Small_Form_VariantsCodePoints from '@unicode/unicode-8.0.0/Block/Small_Form_Variants/code-points.mjs';
import Small_Form_VariantsSymbols from '@unicode/unicode-8.0.0/Block/Small_Form_Variants/symbols.mjs';
import Small_Form_VariantsRegex from '@unicode/unicode-8.0.0/Block/Small_Form_Variants/regex.mjs';

import Sora_SompengCodePoints from '@unicode/unicode-8.0.0/Block/Sora_Sompeng/code-points.mjs';
import Sora_SompengSymbols from '@unicode/unicode-8.0.0/Block/Sora_Sompeng/symbols.mjs';
import Sora_SompengRegex from '@unicode/unicode-8.0.0/Block/Sora_Sompeng/regex.mjs';

import Spacing_Modifier_LettersCodePoints from '@unicode/unicode-8.0.0/Block/Spacing_Modifier_Letters/code-points.mjs';
import Spacing_Modifier_LettersSymbols from '@unicode/unicode-8.0.0/Block/Spacing_Modifier_Letters/symbols.mjs';
import Spacing_Modifier_LettersRegex from '@unicode/unicode-8.0.0/Block/Spacing_Modifier_Letters/regex.mjs';

import SpecialsCodePoints from '@unicode/unicode-8.0.0/Block/Specials/code-points.mjs';
import SpecialsSymbols from '@unicode/unicode-8.0.0/Block/Specials/symbols.mjs';
import SpecialsRegex from '@unicode/unicode-8.0.0/Block/Specials/regex.mjs';

import SundaneseCodePoints from '@unicode/unicode-8.0.0/Block/Sundanese/code-points.mjs';
import SundaneseSymbols from '@unicode/unicode-8.0.0/Block/Sundanese/symbols.mjs';
import SundaneseRegex from '@unicode/unicode-8.0.0/Block/Sundanese/regex.mjs';

import Sundanese_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Sundanese_Supplement/code-points.mjs';
import Sundanese_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Sundanese_Supplement/symbols.mjs';
import Sundanese_SupplementRegex from '@unicode/unicode-8.0.0/Block/Sundanese_Supplement/regex.mjs';

import Superscripts_And_SubscriptsCodePoints from '@unicode/unicode-8.0.0/Block/Superscripts_And_Subscripts/code-points.mjs';
import Superscripts_And_SubscriptsSymbols from '@unicode/unicode-8.0.0/Block/Superscripts_And_Subscripts/symbols.mjs';
import Superscripts_And_SubscriptsRegex from '@unicode/unicode-8.0.0/Block/Superscripts_And_Subscripts/regex.mjs';

import Supplemental_Arrows_ACodePoints from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_A/code-points.mjs';
import Supplemental_Arrows_ASymbols from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_A/symbols.mjs';
import Supplemental_Arrows_ARegex from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_A/regex.mjs';

import Supplemental_Arrows_BCodePoints from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_B/code-points.mjs';
import Supplemental_Arrows_BSymbols from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_B/symbols.mjs';
import Supplemental_Arrows_BRegex from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_B/regex.mjs';

import Supplemental_Arrows_CCodePoints from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_C/code-points.mjs';
import Supplemental_Arrows_CSymbols from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_C/symbols.mjs';
import Supplemental_Arrows_CRegex from '@unicode/unicode-8.0.0/Block/Supplemental_Arrows_C/regex.mjs';

import Supplemental_Mathematical_OperatorsCodePoints from '@unicode/unicode-8.0.0/Block/Supplemental_Mathematical_Operators/code-points.mjs';
import Supplemental_Mathematical_OperatorsSymbols from '@unicode/unicode-8.0.0/Block/Supplemental_Mathematical_Operators/symbols.mjs';
import Supplemental_Mathematical_OperatorsRegex from '@unicode/unicode-8.0.0/Block/Supplemental_Mathematical_Operators/regex.mjs';

import Supplemental_PunctuationCodePoints from '@unicode/unicode-8.0.0/Block/Supplemental_Punctuation/code-points.mjs';
import Supplemental_PunctuationSymbols from '@unicode/unicode-8.0.0/Block/Supplemental_Punctuation/symbols.mjs';
import Supplemental_PunctuationRegex from '@unicode/unicode-8.0.0/Block/Supplemental_Punctuation/regex.mjs';

import Supplemental_Symbols_And_PictographsCodePoints from '@unicode/unicode-8.0.0/Block/Supplemental_Symbols_And_Pictographs/code-points.mjs';
import Supplemental_Symbols_And_PictographsSymbols from '@unicode/unicode-8.0.0/Block/Supplemental_Symbols_And_Pictographs/symbols.mjs';
import Supplemental_Symbols_And_PictographsRegex from '@unicode/unicode-8.0.0/Block/Supplemental_Symbols_And_Pictographs/regex.mjs';

import Supplementary_Private_Use_Area_ACodePoints from '@unicode/unicode-8.0.0/Block/Supplementary_Private_Use_Area_A/code-points.mjs';
import Supplementary_Private_Use_Area_ASymbols from '@unicode/unicode-8.0.0/Block/Supplementary_Private_Use_Area_A/symbols.mjs';
import Supplementary_Private_Use_Area_ARegex from '@unicode/unicode-8.0.0/Block/Supplementary_Private_Use_Area_A/regex.mjs';

import Supplementary_Private_Use_Area_BCodePoints from '@unicode/unicode-8.0.0/Block/Supplementary_Private_Use_Area_B/code-points.mjs';
import Supplementary_Private_Use_Area_BSymbols from '@unicode/unicode-8.0.0/Block/Supplementary_Private_Use_Area_B/symbols.mjs';
import Supplementary_Private_Use_Area_BRegex from '@unicode/unicode-8.0.0/Block/Supplementary_Private_Use_Area_B/regex.mjs';

import Sutton_SignWritingCodePoints from '@unicode/unicode-8.0.0/Block/Sutton_SignWriting/code-points.mjs';
import Sutton_SignWritingSymbols from '@unicode/unicode-8.0.0/Block/Sutton_SignWriting/symbols.mjs';
import Sutton_SignWritingRegex from '@unicode/unicode-8.0.0/Block/Sutton_SignWriting/regex.mjs';

import Syloti_NagriCodePoints from '@unicode/unicode-8.0.0/Block/Syloti_Nagri/code-points.mjs';
import Syloti_NagriSymbols from '@unicode/unicode-8.0.0/Block/Syloti_Nagri/symbols.mjs';
import Syloti_NagriRegex from '@unicode/unicode-8.0.0/Block/Syloti_Nagri/regex.mjs';

import SyriacCodePoints from '@unicode/unicode-8.0.0/Block/Syriac/code-points.mjs';
import SyriacSymbols from '@unicode/unicode-8.0.0/Block/Syriac/symbols.mjs';
import SyriacRegex from '@unicode/unicode-8.0.0/Block/Syriac/regex.mjs';

import TagalogCodePoints from '@unicode/unicode-8.0.0/Block/Tagalog/code-points.mjs';
import TagalogSymbols from '@unicode/unicode-8.0.0/Block/Tagalog/symbols.mjs';
import TagalogRegex from '@unicode/unicode-8.0.0/Block/Tagalog/regex.mjs';

import TagbanwaCodePoints from '@unicode/unicode-8.0.0/Block/Tagbanwa/code-points.mjs';
import TagbanwaSymbols from '@unicode/unicode-8.0.0/Block/Tagbanwa/symbols.mjs';
import TagbanwaRegex from '@unicode/unicode-8.0.0/Block/Tagbanwa/regex.mjs';

import TagsCodePoints from '@unicode/unicode-8.0.0/Block/Tags/code-points.mjs';
import TagsSymbols from '@unicode/unicode-8.0.0/Block/Tags/symbols.mjs';
import TagsRegex from '@unicode/unicode-8.0.0/Block/Tags/regex.mjs';

import Tai_LeCodePoints from '@unicode/unicode-8.0.0/Block/Tai_Le/code-points.mjs';
import Tai_LeSymbols from '@unicode/unicode-8.0.0/Block/Tai_Le/symbols.mjs';
import Tai_LeRegex from '@unicode/unicode-8.0.0/Block/Tai_Le/regex.mjs';

import Tai_ThamCodePoints from '@unicode/unicode-8.0.0/Block/Tai_Tham/code-points.mjs';
import Tai_ThamSymbols from '@unicode/unicode-8.0.0/Block/Tai_Tham/symbols.mjs';
import Tai_ThamRegex from '@unicode/unicode-8.0.0/Block/Tai_Tham/regex.mjs';

import Tai_VietCodePoints from '@unicode/unicode-8.0.0/Block/Tai_Viet/code-points.mjs';
import Tai_VietSymbols from '@unicode/unicode-8.0.0/Block/Tai_Viet/symbols.mjs';
import Tai_VietRegex from '@unicode/unicode-8.0.0/Block/Tai_Viet/regex.mjs';

import Tai_Xuan_Jing_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Tai_Xuan_Jing_Symbols/code-points.mjs';
import Tai_Xuan_Jing_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Tai_Xuan_Jing_Symbols/symbols.mjs';
import Tai_Xuan_Jing_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Tai_Xuan_Jing_Symbols/regex.mjs';

import TakriCodePoints from '@unicode/unicode-8.0.0/Block/Takri/code-points.mjs';
import TakriSymbols from '@unicode/unicode-8.0.0/Block/Takri/symbols.mjs';
import TakriRegex from '@unicode/unicode-8.0.0/Block/Takri/regex.mjs';

import TamilCodePoints from '@unicode/unicode-8.0.0/Block/Tamil/code-points.mjs';
import TamilSymbols from '@unicode/unicode-8.0.0/Block/Tamil/symbols.mjs';
import TamilRegex from '@unicode/unicode-8.0.0/Block/Tamil/regex.mjs';

import TeluguCodePoints from '@unicode/unicode-8.0.0/Block/Telugu/code-points.mjs';
import TeluguSymbols from '@unicode/unicode-8.0.0/Block/Telugu/symbols.mjs';
import TeluguRegex from '@unicode/unicode-8.0.0/Block/Telugu/regex.mjs';

import ThaanaCodePoints from '@unicode/unicode-8.0.0/Block/Thaana/code-points.mjs';
import ThaanaSymbols from '@unicode/unicode-8.0.0/Block/Thaana/symbols.mjs';
import ThaanaRegex from '@unicode/unicode-8.0.0/Block/Thaana/regex.mjs';

import ThaiCodePoints from '@unicode/unicode-8.0.0/Block/Thai/code-points.mjs';
import ThaiSymbols from '@unicode/unicode-8.0.0/Block/Thai/symbols.mjs';
import ThaiRegex from '@unicode/unicode-8.0.0/Block/Thai/regex.mjs';

import TibetanCodePoints from '@unicode/unicode-8.0.0/Block/Tibetan/code-points.mjs';
import TibetanSymbols from '@unicode/unicode-8.0.0/Block/Tibetan/symbols.mjs';
import TibetanRegex from '@unicode/unicode-8.0.0/Block/Tibetan/regex.mjs';

import TifinaghCodePoints from '@unicode/unicode-8.0.0/Block/Tifinagh/code-points.mjs';
import TifinaghSymbols from '@unicode/unicode-8.0.0/Block/Tifinagh/symbols.mjs';
import TifinaghRegex from '@unicode/unicode-8.0.0/Block/Tifinagh/regex.mjs';

import TirhutaCodePoints from '@unicode/unicode-8.0.0/Block/Tirhuta/code-points.mjs';
import TirhutaSymbols from '@unicode/unicode-8.0.0/Block/Tirhuta/symbols.mjs';
import TirhutaRegex from '@unicode/unicode-8.0.0/Block/Tirhuta/regex.mjs';

import Transport_And_Map_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Transport_And_Map_Symbols/code-points.mjs';
import Transport_And_Map_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Transport_And_Map_Symbols/symbols.mjs';
import Transport_And_Map_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Transport_And_Map_Symbols/regex.mjs';

import UgariticCodePoints from '@unicode/unicode-8.0.0/Block/Ugaritic/code-points.mjs';
import UgariticSymbols from '@unicode/unicode-8.0.0/Block/Ugaritic/symbols.mjs';
import UgariticRegex from '@unicode/unicode-8.0.0/Block/Ugaritic/regex.mjs';

import Unified_Canadian_Aboriginal_SyllabicsCodePoints from '@unicode/unicode-8.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/code-points.mjs';
import Unified_Canadian_Aboriginal_SyllabicsSymbols from '@unicode/unicode-8.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/symbols.mjs';
import Unified_Canadian_Aboriginal_SyllabicsRegex from '@unicode/unicode-8.0.0/Block/Unified_Canadian_Aboriginal_Syllabics/regex.mjs';

import Unified_Canadian_Aboriginal_Syllabics_ExtendedCodePoints from '@unicode/unicode-8.0.0/Block/Unified_Canadian_Aboriginal_Syllabics_Extended/code-points.mjs';
import Unified_Canadian_Aboriginal_Syllabics_ExtendedSymbols from '@unicode/unicode-8.0.0/Block/Unified_Canadian_Aboriginal_Syllabics_Extended/symbols.mjs';
import Unified_Canadian_Aboriginal_Syllabics_ExtendedRegex from '@unicode/unicode-8.0.0/Block/Unified_Canadian_Aboriginal_Syllabics_Extended/regex.mjs';

import VaiCodePoints from '@unicode/unicode-8.0.0/Block/Vai/code-points.mjs';
import VaiSymbols from '@unicode/unicode-8.0.0/Block/Vai/symbols.mjs';
import VaiRegex from '@unicode/unicode-8.0.0/Block/Vai/regex.mjs';

import Variation_SelectorsCodePoints from '@unicode/unicode-8.0.0/Block/Variation_Selectors/code-points.mjs';
import Variation_SelectorsSymbols from '@unicode/unicode-8.0.0/Block/Variation_Selectors/symbols.mjs';
import Variation_SelectorsRegex from '@unicode/unicode-8.0.0/Block/Variation_Selectors/regex.mjs';

import Variation_Selectors_SupplementCodePoints from '@unicode/unicode-8.0.0/Block/Variation_Selectors_Supplement/code-points.mjs';
import Variation_Selectors_SupplementSymbols from '@unicode/unicode-8.0.0/Block/Variation_Selectors_Supplement/symbols.mjs';
import Variation_Selectors_SupplementRegex from '@unicode/unicode-8.0.0/Block/Variation_Selectors_Supplement/regex.mjs';

import Vedic_ExtensionsCodePoints from '@unicode/unicode-8.0.0/Block/Vedic_Extensions/code-points.mjs';
import Vedic_ExtensionsSymbols from '@unicode/unicode-8.0.0/Block/Vedic_Extensions/symbols.mjs';
import Vedic_ExtensionsRegex from '@unicode/unicode-8.0.0/Block/Vedic_Extensions/regex.mjs';

import Vertical_FormsCodePoints from '@unicode/unicode-8.0.0/Block/Vertical_Forms/code-points.mjs';
import Vertical_FormsSymbols from '@unicode/unicode-8.0.0/Block/Vertical_Forms/symbols.mjs';
import Vertical_FormsRegex from '@unicode/unicode-8.0.0/Block/Vertical_Forms/regex.mjs';

import Warang_CitiCodePoints from '@unicode/unicode-8.0.0/Block/Warang_Citi/code-points.mjs';
import Warang_CitiSymbols from '@unicode/unicode-8.0.0/Block/Warang_Citi/symbols.mjs';
import Warang_CitiRegex from '@unicode/unicode-8.0.0/Block/Warang_Citi/regex.mjs';

import Yi_RadicalsCodePoints from '@unicode/unicode-8.0.0/Block/Yi_Radicals/code-points.mjs';
import Yi_RadicalsSymbols from '@unicode/unicode-8.0.0/Block/Yi_Radicals/symbols.mjs';
import Yi_RadicalsRegex from '@unicode/unicode-8.0.0/Block/Yi_Radicals/regex.mjs';

import Yi_SyllablesCodePoints from '@unicode/unicode-8.0.0/Block/Yi_Syllables/code-points.mjs';
import Yi_SyllablesSymbols from '@unicode/unicode-8.0.0/Block/Yi_Syllables/symbols.mjs';
import Yi_SyllablesRegex from '@unicode/unicode-8.0.0/Block/Yi_Syllables/regex.mjs';

import Yijing_Hexagram_SymbolsCodePoints from '@unicode/unicode-8.0.0/Block/Yijing_Hexagram_Symbols/code-points.mjs';
import Yijing_Hexagram_SymbolsSymbols from '@unicode/unicode-8.0.0/Block/Yijing_Hexagram_Symbols/symbols.mjs';
import Yijing_Hexagram_SymbolsRegex from '@unicode/unicode-8.0.0/Block/Yijing_Hexagram_Symbols/regex.mjs';

// `Bidi_Mirroring_Glyph`:

import Bidi_Mirroring_Glyph from '@unicode/unicode-8.0.0/Bidi_Mirroring_Glyph/index.mjs'; // Lookup map.

// `Bidi_Paired_Bracket_Type`:

import Bidi_Paired_Bracket_Type from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/index.mjs'; // Lookup map.

import CloseCodePoints from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Close/code-points.mjs';
import CloseSymbols from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Close/symbols.mjs';
import CloseRegex from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Close/regex.mjs';

import NoneCodePoints from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/None/code-points.mjs';
import NoneSymbols from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/None/symbols.mjs';
import NoneRegex from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/None/regex.mjs';

import OpenCodePoints from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Open/code-points.mjs';
import OpenSymbols from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Open/symbols.mjs';
import OpenRegex from '@unicode/unicode-8.0.0/Bidi_Paired_Bracket_Type/Open/regex.mjs';

// `Indic_Positional_Category`:

import BottomCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Bottom/code-points.mjs';
import BottomSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Bottom/symbols.mjs';
import BottomRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Bottom/regex.mjs';

import Bottom_And_RightCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Bottom_And_Right/code-points.mjs';
import Bottom_And_RightSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Bottom_And_Right/symbols.mjs';
import Bottom_And_RightRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Bottom_And_Right/regex.mjs';

import LeftCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Left/code-points.mjs';
import LeftSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Left/symbols.mjs';
import LeftRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Left/regex.mjs';

import Left_And_RightCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Left_And_Right/code-points.mjs';
import Left_And_RightSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Left_And_Right/symbols.mjs';
import Left_And_RightRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Left_And_Right/regex.mjs';

import NACodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/NA/code-points.mjs';
import NASymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/NA/symbols.mjs';
import NARegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/NA/regex.mjs';

import OverstruckCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Overstruck/code-points.mjs';
import OverstruckSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Overstruck/symbols.mjs';
import OverstruckRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Overstruck/regex.mjs';

import RightCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Right/code-points.mjs';
import RightSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Right/symbols.mjs';
import RightRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Right/regex.mjs';

import TopCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top/code-points.mjs';
import TopSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top/symbols.mjs';
import TopRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top/regex.mjs';

import Top_And_BottomCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Bottom/code-points.mjs';
import Top_And_BottomSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Bottom/symbols.mjs';
import Top_And_BottomRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Bottom/regex.mjs';

import Top_And_Bottom_And_RightCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Bottom_And_Right/code-points.mjs';
import Top_And_Bottom_And_RightSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Bottom_And_Right/symbols.mjs';
import Top_And_Bottom_And_RightRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Bottom_And_Right/regex.mjs';

import Top_And_LeftCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Left/code-points.mjs';
import Top_And_LeftSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Left/symbols.mjs';
import Top_And_LeftRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Left/regex.mjs';

import Top_And_Left_And_RightCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Left_And_Right/code-points.mjs';
import Top_And_Left_And_RightSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Left_And_Right/symbols.mjs';
import Top_And_Left_And_RightRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Left_And_Right/regex.mjs';

import Top_And_RightCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Right/code-points.mjs';
import Top_And_RightSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Right/symbols.mjs';
import Top_And_RightRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Top_And_Right/regex.mjs';

import Visual_Order_LeftCodePoints from '@unicode/unicode-8.0.0/Indic_Positional_Category/Visual_Order_Left/code-points.mjs';
import Visual_Order_LeftSymbols from '@unicode/unicode-8.0.0/Indic_Positional_Category/Visual_Order_Left/symbols.mjs';
import Visual_Order_LeftRegex from '@unicode/unicode-8.0.0/Indic_Positional_Category/Visual_Order_Left/regex.mjs';

// `Indic_Syllabic_Category`:

import AvagrahaCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Avagraha/code-points.mjs';
import AvagrahaSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Avagraha/symbols.mjs';
import AvagrahaRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Avagraha/regex.mjs';

import BinduCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Bindu/code-points.mjs';
import BinduSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Bindu/symbols.mjs';
import BinduRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Bindu/regex.mjs';

import Brahmi_Joining_NumberCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Brahmi_Joining_Number/code-points.mjs';
import Brahmi_Joining_NumberSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Brahmi_Joining_Number/symbols.mjs';
import Brahmi_Joining_NumberRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Brahmi_Joining_Number/regex.mjs';

import Cantillation_MarkCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Cantillation_Mark/code-points.mjs';
import Cantillation_MarkSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Cantillation_Mark/symbols.mjs';
import Cantillation_MarkRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Cantillation_Mark/regex.mjs';

import ConsonantCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant/code-points.mjs';
import ConsonantSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant/symbols.mjs';
import ConsonantRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant/regex.mjs';

import Consonant_DeadCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Dead/code-points.mjs';
import Consonant_DeadSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Dead/symbols.mjs';
import Consonant_DeadRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Dead/regex.mjs';

import Consonant_FinalCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Final/code-points.mjs';
import Consonant_FinalSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Final/symbols.mjs';
import Consonant_FinalRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Final/regex.mjs';

import Consonant_Head_LetterCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Head_Letter/code-points.mjs';
import Consonant_Head_LetterSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Head_Letter/symbols.mjs';
import Consonant_Head_LetterRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Head_Letter/regex.mjs';

import Consonant_KillerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Killer/code-points.mjs';
import Consonant_KillerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Killer/symbols.mjs';
import Consonant_KillerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Killer/regex.mjs';

import Consonant_MedialCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Medial/code-points.mjs';
import Consonant_MedialSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Medial/symbols.mjs';
import Consonant_MedialRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Medial/regex.mjs';

import Consonant_PlaceholderCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Placeholder/code-points.mjs';
import Consonant_PlaceholderSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Placeholder/symbols.mjs';
import Consonant_PlaceholderRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Placeholder/regex.mjs';

import Consonant_Preceding_RephaCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Preceding_Repha/code-points.mjs';
import Consonant_Preceding_RephaSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Preceding_Repha/symbols.mjs';
import Consonant_Preceding_RephaRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Preceding_Repha/regex.mjs';

import Consonant_PrefixedCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Prefixed/code-points.mjs';
import Consonant_PrefixedSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Prefixed/symbols.mjs';
import Consonant_PrefixedRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Prefixed/regex.mjs';

import Consonant_SubjoinedCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Subjoined/code-points.mjs';
import Consonant_SubjoinedSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Subjoined/symbols.mjs';
import Consonant_SubjoinedRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Subjoined/regex.mjs';

import Consonant_Succeeding_RephaCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Succeeding_Repha/code-points.mjs';
import Consonant_Succeeding_RephaSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Succeeding_Repha/symbols.mjs';
import Consonant_Succeeding_RephaRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_Succeeding_Repha/regex.mjs';

import Consonant_With_StackerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_With_Stacker/code-points.mjs';
import Consonant_With_StackerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_With_Stacker/symbols.mjs';
import Consonant_With_StackerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Consonant_With_Stacker/regex.mjs';

import Gemination_MarkCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Gemination_Mark/code-points.mjs';
import Gemination_MarkSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Gemination_Mark/symbols.mjs';
import Gemination_MarkRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Gemination_Mark/regex.mjs';

import Invisible_StackerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Invisible_Stacker/code-points.mjs';
import Invisible_StackerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Invisible_Stacker/symbols.mjs';
import Invisible_StackerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Invisible_Stacker/regex.mjs';

import JoinerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Joiner/code-points.mjs';
import JoinerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Joiner/symbols.mjs';
import JoinerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Joiner/regex.mjs';

import Modifying_LetterCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Modifying_Letter/code-points.mjs';
import Modifying_LetterSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Modifying_Letter/symbols.mjs';
import Modifying_LetterRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Modifying_Letter/regex.mjs';

import Non_JoinerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Non_Joiner/code-points.mjs';
import Non_JoinerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Non_Joiner/symbols.mjs';
import Non_JoinerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Non_Joiner/regex.mjs';

import NuktaCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Nukta/code-points.mjs';
import NuktaSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Nukta/symbols.mjs';
import NuktaRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Nukta/regex.mjs';

import NumberCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Number/code-points.mjs';
import NumberSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Number/symbols.mjs';
import NumberRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Number/regex.mjs';

import Number_JoinerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Number_Joiner/code-points.mjs';
import Number_JoinerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Number_Joiner/symbols.mjs';
import Number_JoinerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Number_Joiner/regex.mjs';

import OtherCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Other/regex.mjs';

import Pure_KillerCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Pure_Killer/code-points.mjs';
import Pure_KillerSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Pure_Killer/symbols.mjs';
import Pure_KillerRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Pure_Killer/regex.mjs';

import Register_ShifterCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Register_Shifter/code-points.mjs';
import Register_ShifterSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Register_Shifter/symbols.mjs';
import Register_ShifterRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Register_Shifter/regex.mjs';

import Syllable_ModifierCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Syllable_Modifier/code-points.mjs';
import Syllable_ModifierSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Syllable_Modifier/symbols.mjs';
import Syllable_ModifierRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Syllable_Modifier/regex.mjs';

import Tone_LetterCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Tone_Letter/code-points.mjs';
import Tone_LetterSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Tone_Letter/symbols.mjs';
import Tone_LetterRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Tone_Letter/regex.mjs';

import Tone_MarkCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Tone_Mark/code-points.mjs';
import Tone_MarkSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Tone_Mark/symbols.mjs';
import Tone_MarkRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Tone_Mark/regex.mjs';

import ViramaCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Virama/code-points.mjs';
import ViramaSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Virama/symbols.mjs';
import ViramaRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Virama/regex.mjs';

import VisargaCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Visarga/code-points.mjs';
import VisargaSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Visarga/symbols.mjs';
import VisargaRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Visarga/regex.mjs';

import VowelCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel/code-points.mjs';
import VowelSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel/symbols.mjs';
import VowelRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel/regex.mjs';

import Vowel_DependentCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel_Dependent/code-points.mjs';
import Vowel_DependentSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel_Dependent/symbols.mjs';
import Vowel_DependentRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel_Dependent/regex.mjs';

import Vowel_IndependentCodePoints from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel_Independent/code-points.mjs';
import Vowel_IndependentSymbols from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel_Independent/symbols.mjs';
import Vowel_IndependentRegex from '@unicode/unicode-8.0.0/Indic_Syllabic_Category/Vowel_Independent/regex.mjs';

// `Line_Break`:

import AlphabeticCodePoints from '@unicode/unicode-8.0.0/Line_Break/Alphabetic/code-points.mjs';
import AlphabeticSymbols from '@unicode/unicode-8.0.0/Line_Break/Alphabetic/symbols.mjs';
import AlphabeticRegex from '@unicode/unicode-8.0.0/Line_Break/Alphabetic/regex.mjs';

import AmbiguousCodePoints from '@unicode/unicode-8.0.0/Line_Break/Ambiguous/code-points.mjs';
import AmbiguousSymbols from '@unicode/unicode-8.0.0/Line_Break/Ambiguous/symbols.mjs';
import AmbiguousRegex from '@unicode/unicode-8.0.0/Line_Break/Ambiguous/regex.mjs';

import Break_AfterCodePoints from '@unicode/unicode-8.0.0/Line_Break/Break_After/code-points.mjs';
import Break_AfterSymbols from '@unicode/unicode-8.0.0/Line_Break/Break_After/symbols.mjs';
import Break_AfterRegex from '@unicode/unicode-8.0.0/Line_Break/Break_After/regex.mjs';

import Break_BeforeCodePoints from '@unicode/unicode-8.0.0/Line_Break/Break_Before/code-points.mjs';
import Break_BeforeSymbols from '@unicode/unicode-8.0.0/Line_Break/Break_Before/symbols.mjs';
import Break_BeforeRegex from '@unicode/unicode-8.0.0/Line_Break/Break_Before/regex.mjs';

import Break_BothCodePoints from '@unicode/unicode-8.0.0/Line_Break/Break_Both/code-points.mjs';
import Break_BothSymbols from '@unicode/unicode-8.0.0/Line_Break/Break_Both/symbols.mjs';
import Break_BothRegex from '@unicode/unicode-8.0.0/Line_Break/Break_Both/regex.mjs';

import Break_SymbolsCodePoints from '@unicode/unicode-8.0.0/Line_Break/Break_Symbols/code-points.mjs';
import Break_SymbolsSymbols from '@unicode/unicode-8.0.0/Line_Break/Break_Symbols/symbols.mjs';
import Break_SymbolsRegex from '@unicode/unicode-8.0.0/Line_Break/Break_Symbols/regex.mjs';

import Carriage_ReturnCodePoints from '@unicode/unicode-8.0.0/Line_Break/Carriage_Return/code-points.mjs';
import Carriage_ReturnSymbols from '@unicode/unicode-8.0.0/Line_Break/Carriage_Return/symbols.mjs';
import Carriage_ReturnRegex from '@unicode/unicode-8.0.0/Line_Break/Carriage_Return/regex.mjs';

import Close_ParenthesisCodePoints from '@unicode/unicode-8.0.0/Line_Break/Close_Parenthesis/code-points.mjs';
import Close_ParenthesisSymbols from '@unicode/unicode-8.0.0/Line_Break/Close_Parenthesis/symbols.mjs';
import Close_ParenthesisRegex from '@unicode/unicode-8.0.0/Line_Break/Close_Parenthesis/regex.mjs';

import Close_PunctuationCodePoints from '@unicode/unicode-8.0.0/Line_Break/Close_Punctuation/code-points.mjs';
import Close_PunctuationSymbols from '@unicode/unicode-8.0.0/Line_Break/Close_Punctuation/symbols.mjs';
import Close_PunctuationRegex from '@unicode/unicode-8.0.0/Line_Break/Close_Punctuation/regex.mjs';

import Combining_MarkCodePoints from '@unicode/unicode-8.0.0/Line_Break/Combining_Mark/code-points.mjs';
import Combining_MarkSymbols from '@unicode/unicode-8.0.0/Line_Break/Combining_Mark/symbols.mjs';
import Combining_MarkRegex from '@unicode/unicode-8.0.0/Line_Break/Combining_Mark/regex.mjs';

import Complex_ContextCodePoints from '@unicode/unicode-8.0.0/Line_Break/Complex_Context/code-points.mjs';
import Complex_ContextSymbols from '@unicode/unicode-8.0.0/Line_Break/Complex_Context/symbols.mjs';
import Complex_ContextRegex from '@unicode/unicode-8.0.0/Line_Break/Complex_Context/regex.mjs';

import Conditional_Japanese_StarterCodePoints from '@unicode/unicode-8.0.0/Line_Break/Conditional_Japanese_Starter/code-points.mjs';
import Conditional_Japanese_StarterSymbols from '@unicode/unicode-8.0.0/Line_Break/Conditional_Japanese_Starter/symbols.mjs';
import Conditional_Japanese_StarterRegex from '@unicode/unicode-8.0.0/Line_Break/Conditional_Japanese_Starter/regex.mjs';

import Contingent_BreakCodePoints from '@unicode/unicode-8.0.0/Line_Break/Contingent_Break/code-points.mjs';
import Contingent_BreakSymbols from '@unicode/unicode-8.0.0/Line_Break/Contingent_Break/symbols.mjs';
import Contingent_BreakRegex from '@unicode/unicode-8.0.0/Line_Break/Contingent_Break/regex.mjs';

import ExclamationCodePoints from '@unicode/unicode-8.0.0/Line_Break/Exclamation/code-points.mjs';
import ExclamationSymbols from '@unicode/unicode-8.0.0/Line_Break/Exclamation/symbols.mjs';
import ExclamationRegex from '@unicode/unicode-8.0.0/Line_Break/Exclamation/regex.mjs';

import GlueCodePoints from '@unicode/unicode-8.0.0/Line_Break/Glue/code-points.mjs';
import GlueSymbols from '@unicode/unicode-8.0.0/Line_Break/Glue/symbols.mjs';
import GlueRegex from '@unicode/unicode-8.0.0/Line_Break/Glue/regex.mjs';

import H2CodePoints from '@unicode/unicode-8.0.0/Line_Break/H2/code-points.mjs';
import H2Symbols from '@unicode/unicode-8.0.0/Line_Break/H2/symbols.mjs';
import H2Regex from '@unicode/unicode-8.0.0/Line_Break/H2/regex.mjs';

import H3CodePoints from '@unicode/unicode-8.0.0/Line_Break/H3/code-points.mjs';
import H3Symbols from '@unicode/unicode-8.0.0/Line_Break/H3/symbols.mjs';
import H3Regex from '@unicode/unicode-8.0.0/Line_Break/H3/regex.mjs';

import Hebrew_LetterCodePoints from '@unicode/unicode-8.0.0/Line_Break/Hebrew_Letter/code-points.mjs';
import Hebrew_LetterSymbols from '@unicode/unicode-8.0.0/Line_Break/Hebrew_Letter/symbols.mjs';
import Hebrew_LetterRegex from '@unicode/unicode-8.0.0/Line_Break/Hebrew_Letter/regex.mjs';

import HyphenCodePoints from '@unicode/unicode-8.0.0/Line_Break/Hyphen/code-points.mjs';
import HyphenSymbols from '@unicode/unicode-8.0.0/Line_Break/Hyphen/symbols.mjs';
import HyphenRegex from '@unicode/unicode-8.0.0/Line_Break/Hyphen/regex.mjs';

import IdeographicCodePoints from '@unicode/unicode-8.0.0/Line_Break/Ideographic/code-points.mjs';
import IdeographicSymbols from '@unicode/unicode-8.0.0/Line_Break/Ideographic/symbols.mjs';
import IdeographicRegex from '@unicode/unicode-8.0.0/Line_Break/Ideographic/regex.mjs';

import Infix_NumericCodePoints from '@unicode/unicode-8.0.0/Line_Break/Infix_Numeric/code-points.mjs';
import Infix_NumericSymbols from '@unicode/unicode-8.0.0/Line_Break/Infix_Numeric/symbols.mjs';
import Infix_NumericRegex from '@unicode/unicode-8.0.0/Line_Break/Infix_Numeric/regex.mjs';

import InseparableCodePoints from '@unicode/unicode-8.0.0/Line_Break/Inseparable/code-points.mjs';
import InseparableSymbols from '@unicode/unicode-8.0.0/Line_Break/Inseparable/symbols.mjs';
import InseparableRegex from '@unicode/unicode-8.0.0/Line_Break/Inseparable/regex.mjs';

import JLCodePoints from '@unicode/unicode-8.0.0/Line_Break/JL/code-points.mjs';
import JLSymbols from '@unicode/unicode-8.0.0/Line_Break/JL/symbols.mjs';
import JLRegex from '@unicode/unicode-8.0.0/Line_Break/JL/regex.mjs';

import JTCodePoints from '@unicode/unicode-8.0.0/Line_Break/JT/code-points.mjs';
import JTSymbols from '@unicode/unicode-8.0.0/Line_Break/JT/symbols.mjs';
import JTRegex from '@unicode/unicode-8.0.0/Line_Break/JT/regex.mjs';

import JVCodePoints from '@unicode/unicode-8.0.0/Line_Break/JV/code-points.mjs';
import JVSymbols from '@unicode/unicode-8.0.0/Line_Break/JV/symbols.mjs';
import JVRegex from '@unicode/unicode-8.0.0/Line_Break/JV/regex.mjs';

import Line_FeedCodePoints from '@unicode/unicode-8.0.0/Line_Break/Line_Feed/code-points.mjs';
import Line_FeedSymbols from '@unicode/unicode-8.0.0/Line_Break/Line_Feed/symbols.mjs';
import Line_FeedRegex from '@unicode/unicode-8.0.0/Line_Break/Line_Feed/regex.mjs';

import Mandatory_BreakCodePoints from '@unicode/unicode-8.0.0/Line_Break/Mandatory_Break/code-points.mjs';
import Mandatory_BreakSymbols from '@unicode/unicode-8.0.0/Line_Break/Mandatory_Break/symbols.mjs';
import Mandatory_BreakRegex from '@unicode/unicode-8.0.0/Line_Break/Mandatory_Break/regex.mjs';

import Next_LineCodePoints from '@unicode/unicode-8.0.0/Line_Break/Next_Line/code-points.mjs';
import Next_LineSymbols from '@unicode/unicode-8.0.0/Line_Break/Next_Line/symbols.mjs';
import Next_LineRegex from '@unicode/unicode-8.0.0/Line_Break/Next_Line/regex.mjs';

import NonstarterCodePoints from '@unicode/unicode-8.0.0/Line_Break/Nonstarter/code-points.mjs';
import NonstarterSymbols from '@unicode/unicode-8.0.0/Line_Break/Nonstarter/symbols.mjs';
import NonstarterRegex from '@unicode/unicode-8.0.0/Line_Break/Nonstarter/regex.mjs';

import NumericCodePoints from '@unicode/unicode-8.0.0/Line_Break/Numeric/code-points.mjs';
import NumericSymbols from '@unicode/unicode-8.0.0/Line_Break/Numeric/symbols.mjs';
import NumericRegex from '@unicode/unicode-8.0.0/Line_Break/Numeric/regex.mjs';

import Open_PunctuationCodePoints from '@unicode/unicode-8.0.0/Line_Break/Open_Punctuation/code-points.mjs';
import Open_PunctuationSymbols from '@unicode/unicode-8.0.0/Line_Break/Open_Punctuation/symbols.mjs';
import Open_PunctuationRegex from '@unicode/unicode-8.0.0/Line_Break/Open_Punctuation/regex.mjs';

import Postfix_NumericCodePoints from '@unicode/unicode-8.0.0/Line_Break/Postfix_Numeric/code-points.mjs';
import Postfix_NumericSymbols from '@unicode/unicode-8.0.0/Line_Break/Postfix_Numeric/symbols.mjs';
import Postfix_NumericRegex from '@unicode/unicode-8.0.0/Line_Break/Postfix_Numeric/regex.mjs';

import Prefix_NumericCodePoints from '@unicode/unicode-8.0.0/Line_Break/Prefix_Numeric/code-points.mjs';
import Prefix_NumericSymbols from '@unicode/unicode-8.0.0/Line_Break/Prefix_Numeric/symbols.mjs';
import Prefix_NumericRegex from '@unicode/unicode-8.0.0/Line_Break/Prefix_Numeric/regex.mjs';

import QuotationCodePoints from '@unicode/unicode-8.0.0/Line_Break/Quotation/code-points.mjs';
import QuotationSymbols from '@unicode/unicode-8.0.0/Line_Break/Quotation/symbols.mjs';
import QuotationRegex from '@unicode/unicode-8.0.0/Line_Break/Quotation/regex.mjs';

import Regional_IndicatorCodePoints from '@unicode/unicode-8.0.0/Line_Break/Regional_Indicator/code-points.mjs';
import Regional_IndicatorSymbols from '@unicode/unicode-8.0.0/Line_Break/Regional_Indicator/symbols.mjs';
import Regional_IndicatorRegex from '@unicode/unicode-8.0.0/Line_Break/Regional_Indicator/regex.mjs';

import SpaceCodePoints from '@unicode/unicode-8.0.0/Line_Break/Space/code-points.mjs';
import SpaceSymbols from '@unicode/unicode-8.0.0/Line_Break/Space/symbols.mjs';
import SpaceRegex from '@unicode/unicode-8.0.0/Line_Break/Space/regex.mjs';

import SurrogateCodePoints from '@unicode/unicode-8.0.0/Line_Break/Surrogate/code-points.mjs';
import SurrogateSymbols from '@unicode/unicode-8.0.0/Line_Break/Surrogate/symbols.mjs';
import SurrogateRegex from '@unicode/unicode-8.0.0/Line_Break/Surrogate/regex.mjs';

import UnknownCodePoints from '@unicode/unicode-8.0.0/Line_Break/Unknown/code-points.mjs';
import UnknownSymbols from '@unicode/unicode-8.0.0/Line_Break/Unknown/symbols.mjs';
import UnknownRegex from '@unicode/unicode-8.0.0/Line_Break/Unknown/regex.mjs';

import Word_JoinerCodePoints from '@unicode/unicode-8.0.0/Line_Break/Word_Joiner/code-points.mjs';
import Word_JoinerSymbols from '@unicode/unicode-8.0.0/Line_Break/Word_Joiner/symbols.mjs';
import Word_JoinerRegex from '@unicode/unicode-8.0.0/Line_Break/Word_Joiner/regex.mjs';

import ZWSpaceCodePoints from '@unicode/unicode-8.0.0/Line_Break/ZWSpace/code-points.mjs';
import ZWSpaceSymbols from '@unicode/unicode-8.0.0/Line_Break/ZWSpace/symbols.mjs';
import ZWSpaceRegex from '@unicode/unicode-8.0.0/Line_Break/ZWSpace/regex.mjs';

// `Grapheme_Cluster_Break`:

import CRCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/CR/code-points.mjs';
import CRSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/CR/symbols.mjs';
import CRRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/CR/regex.mjs';

import ControlCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Control/code-points.mjs';
import ControlSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Control/symbols.mjs';
import ControlRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Control/regex.mjs';

import ExtendCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Extend/code-points.mjs';
import ExtendSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Extend/symbols.mjs';
import ExtendRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Extend/regex.mjs';

import LCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/L/code-points.mjs';
import LSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/L/symbols.mjs';
import LRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/L/regex.mjs';

import LFCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LF/code-points.mjs';
import LFSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LF/symbols.mjs';
import LFRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LF/regex.mjs';

import LVCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LV/code-points.mjs';
import LVSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LV/symbols.mjs';
import LVRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LV/regex.mjs';

import LVTCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LVT/code-points.mjs';
import LVTSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LVT/symbols.mjs';
import LVTRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/LVT/regex.mjs';

import OtherCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Other/regex.mjs';

import Regional_IndicatorCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Regional_Indicator/code-points.mjs';
import Regional_IndicatorSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Regional_Indicator/symbols.mjs';
import Regional_IndicatorRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/Regional_Indicator/regex.mjs';

import SpacingMarkCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/SpacingMark/code-points.mjs';
import SpacingMarkSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/SpacingMark/symbols.mjs';
import SpacingMarkRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/SpacingMark/regex.mjs';

import TCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/T/code-points.mjs';
import TSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/T/symbols.mjs';
import TRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/T/regex.mjs';

import VCodePoints from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/V/code-points.mjs';
import VSymbols from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/V/symbols.mjs';
import VRegex from '@unicode/unicode-8.0.0/Grapheme_Cluster_Break/V/regex.mjs';

// `Word_Break`:

import ALetterCodePoints from '@unicode/unicode-8.0.0/Word_Break/ALetter/code-points.mjs';
import ALetterSymbols from '@unicode/unicode-8.0.0/Word_Break/ALetter/symbols.mjs';
import ALetterRegex from '@unicode/unicode-8.0.0/Word_Break/ALetter/regex.mjs';

import CRCodePoints from '@unicode/unicode-8.0.0/Word_Break/CR/code-points.mjs';
import CRSymbols from '@unicode/unicode-8.0.0/Word_Break/CR/symbols.mjs';
import CRRegex from '@unicode/unicode-8.0.0/Word_Break/CR/regex.mjs';

import Double_QuoteCodePoints from '@unicode/unicode-8.0.0/Word_Break/Double_Quote/code-points.mjs';
import Double_QuoteSymbols from '@unicode/unicode-8.0.0/Word_Break/Double_Quote/symbols.mjs';
import Double_QuoteRegex from '@unicode/unicode-8.0.0/Word_Break/Double_Quote/regex.mjs';

import ExtendCodePoints from '@unicode/unicode-8.0.0/Word_Break/Extend/code-points.mjs';
import ExtendSymbols from '@unicode/unicode-8.0.0/Word_Break/Extend/symbols.mjs';
import ExtendRegex from '@unicode/unicode-8.0.0/Word_Break/Extend/regex.mjs';

import ExtendNumLetCodePoints from '@unicode/unicode-8.0.0/Word_Break/ExtendNumLet/code-points.mjs';
import ExtendNumLetSymbols from '@unicode/unicode-8.0.0/Word_Break/ExtendNumLet/symbols.mjs';
import ExtendNumLetRegex from '@unicode/unicode-8.0.0/Word_Break/ExtendNumLet/regex.mjs';

import FormatCodePoints from '@unicode/unicode-8.0.0/Word_Break/Format/code-points.mjs';
import FormatSymbols from '@unicode/unicode-8.0.0/Word_Break/Format/symbols.mjs';
import FormatRegex from '@unicode/unicode-8.0.0/Word_Break/Format/regex.mjs';

import Hebrew_LetterCodePoints from '@unicode/unicode-8.0.0/Word_Break/Hebrew_Letter/code-points.mjs';
import Hebrew_LetterSymbols from '@unicode/unicode-8.0.0/Word_Break/Hebrew_Letter/symbols.mjs';
import Hebrew_LetterRegex from '@unicode/unicode-8.0.0/Word_Break/Hebrew_Letter/regex.mjs';

import KatakanaCodePoints from '@unicode/unicode-8.0.0/Word_Break/Katakana/code-points.mjs';
import KatakanaSymbols from '@unicode/unicode-8.0.0/Word_Break/Katakana/symbols.mjs';
import KatakanaRegex from '@unicode/unicode-8.0.0/Word_Break/Katakana/regex.mjs';

import LFCodePoints from '@unicode/unicode-8.0.0/Word_Break/LF/code-points.mjs';
import LFSymbols from '@unicode/unicode-8.0.0/Word_Break/LF/symbols.mjs';
import LFRegex from '@unicode/unicode-8.0.0/Word_Break/LF/regex.mjs';

import MidLetterCodePoints from '@unicode/unicode-8.0.0/Word_Break/MidLetter/code-points.mjs';
import MidLetterSymbols from '@unicode/unicode-8.0.0/Word_Break/MidLetter/symbols.mjs';
import MidLetterRegex from '@unicode/unicode-8.0.0/Word_Break/MidLetter/regex.mjs';

import MidNumCodePoints from '@unicode/unicode-8.0.0/Word_Break/MidNum/code-points.mjs';
import MidNumSymbols from '@unicode/unicode-8.0.0/Word_Break/MidNum/symbols.mjs';
import MidNumRegex from '@unicode/unicode-8.0.0/Word_Break/MidNum/regex.mjs';

import MidNumLetCodePoints from '@unicode/unicode-8.0.0/Word_Break/MidNumLet/code-points.mjs';
import MidNumLetSymbols from '@unicode/unicode-8.0.0/Word_Break/MidNumLet/symbols.mjs';
import MidNumLetRegex from '@unicode/unicode-8.0.0/Word_Break/MidNumLet/regex.mjs';

import NewlineCodePoints from '@unicode/unicode-8.0.0/Word_Break/Newline/code-points.mjs';
import NewlineSymbols from '@unicode/unicode-8.0.0/Word_Break/Newline/symbols.mjs';
import NewlineRegex from '@unicode/unicode-8.0.0/Word_Break/Newline/regex.mjs';

import NumericCodePoints from '@unicode/unicode-8.0.0/Word_Break/Numeric/code-points.mjs';
import NumericSymbols from '@unicode/unicode-8.0.0/Word_Break/Numeric/symbols.mjs';
import NumericRegex from '@unicode/unicode-8.0.0/Word_Break/Numeric/regex.mjs';

import OtherCodePoints from '@unicode/unicode-8.0.0/Word_Break/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-8.0.0/Word_Break/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-8.0.0/Word_Break/Other/regex.mjs';

import Regional_IndicatorCodePoints from '@unicode/unicode-8.0.0/Word_Break/Regional_Indicator/code-points.mjs';
import Regional_IndicatorSymbols from '@unicode/unicode-8.0.0/Word_Break/Regional_Indicator/symbols.mjs';
import Regional_IndicatorRegex from '@unicode/unicode-8.0.0/Word_Break/Regional_Indicator/regex.mjs';

import Single_QuoteCodePoints from '@unicode/unicode-8.0.0/Word_Break/Single_Quote/code-points.mjs';
import Single_QuoteSymbols from '@unicode/unicode-8.0.0/Word_Break/Single_Quote/symbols.mjs';
import Single_QuoteRegex from '@unicode/unicode-8.0.0/Word_Break/Single_Quote/regex.mjs';

// `Sentence_Break`:

import ATermCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/ATerm/code-points.mjs';
import ATermSymbols from '@unicode/unicode-8.0.0/Sentence_Break/ATerm/symbols.mjs';
import ATermRegex from '@unicode/unicode-8.0.0/Sentence_Break/ATerm/regex.mjs';

import CRCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/CR/code-points.mjs';
import CRSymbols from '@unicode/unicode-8.0.0/Sentence_Break/CR/symbols.mjs';
import CRRegex from '@unicode/unicode-8.0.0/Sentence_Break/CR/regex.mjs';

import CloseCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Close/code-points.mjs';
import CloseSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Close/symbols.mjs';
import CloseRegex from '@unicode/unicode-8.0.0/Sentence_Break/Close/regex.mjs';

import ExtendCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Extend/code-points.mjs';
import ExtendSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Extend/symbols.mjs';
import ExtendRegex from '@unicode/unicode-8.0.0/Sentence_Break/Extend/regex.mjs';

import FormatCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Format/code-points.mjs';
import FormatSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Format/symbols.mjs';
import FormatRegex from '@unicode/unicode-8.0.0/Sentence_Break/Format/regex.mjs';

import LFCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/LF/code-points.mjs';
import LFSymbols from '@unicode/unicode-8.0.0/Sentence_Break/LF/symbols.mjs';
import LFRegex from '@unicode/unicode-8.0.0/Sentence_Break/LF/regex.mjs';

import LowerCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Lower/code-points.mjs';
import LowerSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Lower/symbols.mjs';
import LowerRegex from '@unicode/unicode-8.0.0/Sentence_Break/Lower/regex.mjs';

import NumericCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Numeric/code-points.mjs';
import NumericSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Numeric/symbols.mjs';
import NumericRegex from '@unicode/unicode-8.0.0/Sentence_Break/Numeric/regex.mjs';

import OLetterCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/OLetter/code-points.mjs';
import OLetterSymbols from '@unicode/unicode-8.0.0/Sentence_Break/OLetter/symbols.mjs';
import OLetterRegex from '@unicode/unicode-8.0.0/Sentence_Break/OLetter/regex.mjs';

import OtherCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Other/code-points.mjs';
import OtherSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Other/symbols.mjs';
import OtherRegex from '@unicode/unicode-8.0.0/Sentence_Break/Other/regex.mjs';

import SContinueCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/SContinue/code-points.mjs';
import SContinueSymbols from '@unicode/unicode-8.0.0/Sentence_Break/SContinue/symbols.mjs';
import SContinueRegex from '@unicode/unicode-8.0.0/Sentence_Break/SContinue/regex.mjs';

import STermCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/STerm/code-points.mjs';
import STermSymbols from '@unicode/unicode-8.0.0/Sentence_Break/STerm/symbols.mjs';
import STermRegex from '@unicode/unicode-8.0.0/Sentence_Break/STerm/regex.mjs';

import SepCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Sep/code-points.mjs';
import SepSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Sep/symbols.mjs';
import SepRegex from '@unicode/unicode-8.0.0/Sentence_Break/Sep/regex.mjs';

import SpCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Sp/code-points.mjs';
import SpSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Sp/symbols.mjs';
import SpRegex from '@unicode/unicode-8.0.0/Sentence_Break/Sp/regex.mjs';

import UpperCodePoints from '@unicode/unicode-8.0.0/Sentence_Break/Upper/code-points.mjs';
import UpperSymbols from '@unicode/unicode-8.0.0/Sentence_Break/Upper/symbols.mjs';
import UpperRegex from '@unicode/unicode-8.0.0/Sentence_Break/Upper/regex.mjs';

// `Joining_Type`:

import Dual_JoiningCodePoints from '@unicode/unicode-8.0.0/Joining_Type/Dual_Joining/code-points.mjs';
import Dual_JoiningSymbols from '@unicode/unicode-8.0.0/Joining_Type/Dual_Joining/symbols.mjs';
import Dual_JoiningRegex from '@unicode/unicode-8.0.0/Joining_Type/Dual_Joining/regex.mjs';

import Join_CausingCodePoints from '@unicode/unicode-8.0.0/Joining_Type/Join_Causing/code-points.mjs';
import Join_CausingSymbols from '@unicode/unicode-8.0.0/Joining_Type/Join_Causing/symbols.mjs';
import Join_CausingRegex from '@unicode/unicode-8.0.0/Joining_Type/Join_Causing/regex.mjs';

import Left_JoiningCodePoints from '@unicode/unicode-8.0.0/Joining_Type/Left_Joining/code-points.mjs';
import Left_JoiningSymbols from '@unicode/unicode-8.0.0/Joining_Type/Left_Joining/symbols.mjs';
import Left_JoiningRegex from '@unicode/unicode-8.0.0/Joining_Type/Left_Joining/regex.mjs';

import Non_JoiningCodePoints from '@unicode/unicode-8.0.0/Joining_Type/Non_Joining/code-points.mjs';
import Non_JoiningSymbols from '@unicode/unicode-8.0.0/Joining_Type/Non_Joining/symbols.mjs';
import Non_JoiningRegex from '@unicode/unicode-8.0.0/Joining_Type/Non_Joining/regex.mjs';

import Right_JoiningCodePoints from '@unicode/unicode-8.0.0/Joining_Type/Right_Joining/code-points.mjs';
import Right_JoiningSymbols from '@unicode/unicode-8.0.0/Joining_Type/Right_Joining/symbols.mjs';
import Right_JoiningRegex from '@unicode/unicode-8.0.0/Joining_Type/Right_Joining/regex.mjs';

// `Simple_Case_Mapping`:

import LowercaseCodePoints from '@unicode/unicode-8.0.0/Simple_Case_Mapping/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-8.0.0/Simple_Case_Mapping/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-8.0.0/Simple_Case_Mapping/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-8.0.0/Simple_Case_Mapping/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-8.0.0/Simple_Case_Mapping/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-8.0.0/Simple_Case_Mapping/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

// `Special_Casing`:

import LowercaseCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import LowercaseSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__Final_SigmaCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--Final_Sigma/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__Final_SigmaSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--Final_Sigma/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__azCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--az/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__azSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--az/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__az__After_ICodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--az--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__az__After_ISymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--az--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__az__Not_Before_DotCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--az--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__az__Not_Before_DotSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--az--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__ltCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--lt/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__ltSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--lt/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__lt__After_Soft_DottedCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--lt--After_Soft_Dotted/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__lt__After_Soft_DottedSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--lt--After_Soft_Dotted/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__lt__More_AboveCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--lt--More_Above/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__lt__More_AboveSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--lt--More_Above/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__trCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--tr/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__trSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--tr/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__tr__After_ICodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--tr--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__tr__After_ISymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--tr--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Lowercase__tr__Not_Before_DotCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--tr--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Lowercase__tr__Not_Before_DotSymbols from '@unicode/unicode-8.0.0/Special_Casing/Lowercase--tr--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import TitlecaseCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import TitlecaseSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__Final_SigmaCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--Final_Sigma/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__Final_SigmaSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--Final_Sigma/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__azCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--az/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__azSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--az/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__az__After_ICodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--az--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__az__After_ISymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--az--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__az__Not_Before_DotCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--az--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__az__Not_Before_DotSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--az--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__ltCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--lt/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__ltSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--lt/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__lt__After_Soft_DottedCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--lt--After_Soft_Dotted/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__lt__After_Soft_DottedSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--lt--After_Soft_Dotted/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__lt__More_AboveCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--lt--More_Above/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__lt__More_AboveSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--lt--More_Above/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__trCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--tr/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__trSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--tr/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__tr__After_ICodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--tr--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__tr__After_ISymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--tr--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Titlecase__tr__Not_Before_DotCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--tr--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Titlecase__tr__Not_Before_DotSymbols from '@unicode/unicode-8.0.0/Special_Casing/Titlecase--tr--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import UppercaseCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import UppercaseSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__Final_SigmaCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--Final_Sigma/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__Final_SigmaSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--Final_Sigma/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__azCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--az/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__azSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--az/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__az__After_ICodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--az--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__az__After_ISymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--az--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__az__Not_Before_DotCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--az--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__az__Not_Before_DotSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--az--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__ltCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--lt/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__ltSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--lt/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__lt__After_Soft_DottedCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--lt--After_Soft_Dotted/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__lt__After_Soft_DottedSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--lt--After_Soft_Dotted/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__lt__More_AboveCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--lt--More_Above/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__lt__More_AboveSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--lt--More_Above/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__trCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--tr/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__trSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--tr/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__tr__After_ICodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--tr--After_I/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__tr__After_ISymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--tr--After_I/symbols.mjs'; // Lookup map from symbol to symbol(s).

import Uppercase__tr__Not_Before_DotCodePoints from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--tr--Not_Before_Dot/code-points.mjs'; // Lookup map from code point to code point or array of code points.
import Uppercase__tr__Not_Before_DotSymbols from '@unicode/unicode-8.0.0/Special_Casing/Uppercase--tr--Not_Before_Dot/symbols.mjs'; // Lookup map from symbol to symbol(s).
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](https://mths.be/mit) license.
