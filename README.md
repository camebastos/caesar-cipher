# Cifra de César

Página web desenvolvida para codificação e decodificação de mensagem a partir do conceito da Cifra de César. 

A interface permite ao usuário inserir um texto com letras maiúsculas e minúsculas, eleger um `offset` indicando quantas posições de deslocamento de caracteres quer que a cifra utilize, e vizualizar o resultado da mensagem cifrada e decifrada.

### Resultado Final:

![Print da tela do projeto Cifra de César](https://github.com/camebastos/caesar-cipher/blob/master/src/assets/print-tela.png?raw=true)

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Fluxograma

![Fluxograma](https://github.com/camebastos/caesar-cipher/blob/master/src/assets/fluxograma-cipher.png?raw=true)