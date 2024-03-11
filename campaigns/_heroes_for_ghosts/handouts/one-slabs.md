---
title: "One Slabs"
type: handout
number: 11
date: 2019-07-27
---

One Slabs: Cryptography of the Giants
by Master Maartel MaD MDI BAR

## Introduction 

Around forty thousand years ago a great war was fought between the giants of Xen'dirk and some unknown foe from Dal Quor (the plane of dreams).  While the precise nature of these beings has been lost to the long years that has passed over the ruins of the mighty Cul'Sir empire it is thought they had strong psionic abilities including mind reading, psychic manipulation and scrying capabilities.   The giants were forced to employ strong cryptography to obfuscate their messages, battle plans and locations of strategic importance.

The system they settled on made use of one time keys that would transpose their runes randomly each character.  Both the sender and recipient share a list of keys (known as a one slab) and know which one the message is sent with.  But without the key it is literally impossible to decode and so to this day the vast majority of these messages will forever be a mystery. 

This book will describe how to decode these message should you have the good fortune to have the correct key.

## Trust-Shift

The One Slab system is similar to the Gnomish Trust-Shift cypher, so that is a good place to start in learning One Slab.   With Trust-Shift each letter is shifted by a fixed number of letters and this shift remains the same throughout the message.  If the shift is 5 the alphabet is encoded as follows

A becomes F

B becomes G

C becomes H

…

Z becomes E

So the message
> "The Archmage only knows cantrips"

Becomes
> "Ymj Fwhmrflj tsqd pstbx hfsywnux"

## One-Slab

With One Slab each letter in the message has its own shift that is determined by the Slab.  The nature of this slab would typically be a book of ordered keys, held by a Cul'Sir agent.  The giant they are sending a message to had a copy of the Slab with the same keys and both would know which key to use for a given message.  The system for choosing the key might be simply start with the fist and then use the second and so on… or it might be us the third key if sending a message on the third day of the month.  Each key would be random, unique and only used once.

This is an example of a key translated from runic into the common alphabet:

> KTLVB DBJGV PIBSU ACCFD KSWRD ITRZA RNZFT OABNB KDPTC CQLYO

Cul'Sir One Slab keys seem to have always been  50 runes long, meaning each message was limited to a maximum of 50 runes, for the key must be at least as long as the message. They are usually written in blocks of 5 but this is just to make it easier to keep track of your position in the key and the spaces are not part of the encoding.  Punctuation and numerals are not encoded.  If numbers needed to be encoded they probably wrote them out as words rather than numerals.

In One-Slab each letter has a value that matches its place in the alphabet (A = 0 and Z = 25).

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-6dcx{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-1quo{text-align:center;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-6dcx"><span style="font-weight:bold">A</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">B</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">C</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">D</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">E</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">F</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">G</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">H</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">I</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">J</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">K</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">L</span></th>
    <th class="tg-6dcx"><span style="font-weight:bold">M</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1quo">0</td>
    <td class="tg-1quo">1</td>
    <td class="tg-1quo">2</td>
    <td class="tg-1quo">3</td>
    <td class="tg-1quo">4</td>
    <td class="tg-1quo">5</td>
    <td class="tg-1quo">6</td>
    <td class="tg-1quo">7</td>
    <td class="tg-1quo">8</td>
    <td class="tg-1quo">9</td>
    <td class="tg-1quo">10</td>
    <td class="tg-1quo">11</td>
    <td class="tg-1quo">12</td>
  </tr>
  <tr>
    <td class="tg-6dcx"><span style="font-weight:bold">N</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">O</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">P</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">Q</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">R</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">S</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">T</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">U</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">V</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">W</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">X</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">Y</span></td>
    <td class="tg-6dcx"><span style="font-weight:bold">Z</span></td>
  </tr>
  <tr>
    <td class="tg-1quo">13</td>
    <td class="tg-1quo">14</td>
    <td class="tg-1quo">15</td>
    <td class="tg-1quo">16</td>
    <td class="tg-1quo">17</td>
    <td class="tg-1quo">18</td>
    <td class="tg-1quo">19</td>
    <td class="tg-1quo">20</td>
    <td class="tg-1quo">21</td>
    <td class="tg-1quo">22</td>
    <td class="tg-1quo">23</td>
    <td class="tg-1quo">24</td>
    <td class="tg-1quo">25</td>
  </tr>
</tbody>
</table>

The letters in the our message "HELLO" are worth:

```
H= 7
E = 4
L = 11
O = 14
```

And the first five letters in the key (KTLVB) are worth:

```
K = 10
T = 19
L = 11
V = 21
B = 1
```

These values determine the shift for each letter in the message.  So with the key the first letter is the message is shifted by 10 (because the first key letter is a K), the second letter is shifted by 19 (because the second key letter is a T) and so on.  This may seem complicated (especially if you the sort of person who cuts research grants because the subject matter is too complex for port dulled brain that has become sluggish after years of indulging in faculty dinners) but if you just add the value of the letter from the message to the value of the letter in the key you get the encoded letter.

If encoding "Hello" we get the following:

```
H (7) + K (10) = R (17) 
E (4) + T (19) = X (23)
L (11) + L (11) = W (22)
L (11) + V (21) = ??? (32)
O (14) + B (1) = P (15)
```

The only tricky one was the L with a key of V which results in 32.  As the alphabet ends at Z we need to do something different.  If the value is higher than 25 we subtract 26 from it to get the encoded letter (32-26=6 which is a G).  Or if you prefer count forwards 32 letter from L on the table above and loop at Z (*though if you are like a certain mage I know, by 32 you will have long since run out of both fingers and toes so this counting may to prove troublesome*). 

HELLO encoded with the key KTLVB becomes RXWGP

## Decrypting

To decrypt simply take the value of the key letter from the encoded letter:

```
R (17) - K (10) = H (7)
X (23) - T (19) = E (4)
W (22) + L (11) = L (11)
G (6) - V (21) = ??? (-15)
P (15) + B (1) = P (15)
```

If the number is negative when decoding we need to do something different; simply subtract* it from 26 to get the decoded letter (26-15=11=L)

\* Technically adding the negative number

## Key Space and Perfect Encryption

With the Trust-Shift a five letter word can only be encoded with one of 26 possible keys; it would be trivial to check them all.  But with One-Slab the number of keys is 26^n, where n is the number of letters encoded. A five letter word has nearly 12 million keys.   Most of those 12 million keys will produce gibberish but some of them will produce words, every single possible five letter word in fact! And there is no way to know which of those words was the original.  Not without the key!

> S ATY UDMJTYGW ISN UPFJU CWWK G 25 JNK GE ZF STH GTVCJN WD WGEHJNH

## Try it Yourself!

<script>
    function transform(m, k, a) {
    var message = m.toUpperCase();
    var key = k.toUpperCase().replaceAll(" ", "");
    var action = a.toLowerCase();
    var result_message = "";
    var i = 0;
    var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var index = 0; index < message.length; index++) {
        var letter = message[index];
        if (ALPHABET.includes(letter)) {
            var letter_index = ALPHABET.indexOf(letter);
            var key_letter = key[i % key.length];
            i += 1;
            var key_index = ALPHABET.indexOf(key_letter);
            var result_letter = "";
            if (action === "encode") {
                var result_index = letter_index + key_index;
                if (result_index > 25) {
                    result_index = result_index - 26;
                }
                result_letter = Array.from(ALPHABET)[result_index];
            }
            else if (action === "decode") {
                var result_index = letter_index - key_index;
                if (result_index < 0) {
                    result_index = 26 + result_index;
                }
                result_letter = Array.from(ALPHABET)[result_index];
            }
            result_message += result_letter;
        }
        else {
            result_message += letter;
        }
    }
    return result_message;
}

document.getElementById("encodeButton").addEventListener("click", () => {
    let key = document.getElementById("key").value;
    let message = document.getElementById("message").value;
    let output = transform(message, key, "encode")
    document.getElementById("result").value = output;
});

document.getElementById("decodeButton").addEventListener("click", () => {
    let key = document.getElementById("key").value;
    let message = document.getElementById("message").value;
    let output = transform(message, key, "decode")
    document.getElementById("result").value = output;
});
</script>
<input id="key" type="text" placeholder="Key" style="width: 400px;"/><br/>
<input id="message" type="text" placeholder="Message" style="width: 400px;"/><br/>
<input id="encodeButton" type="button" value="Encode"/>
<input id="decodeButton" type="button" value="Decode"/><br/>
<textarea id="result" value="" style="width: 400px;"></textarea>