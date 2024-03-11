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

document.addEventListener('DOMContentLoaded', () => {
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
});
